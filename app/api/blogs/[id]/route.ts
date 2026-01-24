import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
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
        const { id } = await params;
        if (!id) {
            return NextResponse.json({
                success: false,
                error: "id required"
            }, { status: 400 })
        }
        await prisma.blogPost.delete({
            where: {
                id
            }
        })
        return NextResponse.json({
            success: true,
            message: "blog deleted!"
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            error
        }, { status: 500 });
    }
}