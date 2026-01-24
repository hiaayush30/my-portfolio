import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const postSchema = z.object({
    title: z.string({ error: "title required" }),
    catchphrase: z.string({ error: "slug required" }),
    content: z.string({ error: "content required" })
})

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        const { success, data } = await postSchema.safeParse(body);
        if (!success) {
            return NextResponse.json({
                success: false,
                error: "Invalid request body"
            })
        }
        const { content, catchphrase, title } = data;
        const slug = title.replace(" ", "-");
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