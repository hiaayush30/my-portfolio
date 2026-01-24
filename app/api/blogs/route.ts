import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import z from "zod";
import { auth } from "@/lib/auth";

const postSchema = z.object({
    title: z.string({ error: "title required" }),
    catchphrase: z.string({ error: "slug required" }),
    content: z.string({ error: "content required" })
})

export const POST = async (req: NextRequest) => {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        })
        if (!session?.user || session?.user.role != "ADMIN") {
            return NextResponse.json({
                success: false,
                error: "not authorized"
            }, { status: 403 })
        }
        const body = await req.json();
        const { success, data } = await postSchema.safeParse(body);
        if (!success) {
            return NextResponse.json({
                success: false,
                error: "Invalid request body"
            })
        }
        const { content, catchphrase, title } = data;
        const slug = title.replaceAll(" ", "-").toLowerCase();
        const existing = await prisma.blogPost.findFirst({
            where: {
                slug
            }
        });
        if (existing) {
            return NextResponse.json({
                success: false,
                error: "Title already exists"
            })
        }
        await prisma.blogPost.create({
            data: {
                title,
                slug,
                content,
                catchphrase
            }
        })
        return NextResponse.json({
            success: true,
            message: "Blog created"
        }, { status: 201 })

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            error
        }, { status: 500 });
    }
}

