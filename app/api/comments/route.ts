import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { StatusCodes } from "http-status-codes";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        const session = await auth.api.getSession({ headers: await headers() });
        if (!session?.user) {
            return NextResponse.json({
                success: false,
                error: "user not found",
                data: {}
            }, { status: StatusCodes.UNAUTHORIZED })
        }
        const { content } = await req.json();
        if (!content || typeof content !== "string" || content.trim().length === 0) {
            NextResponse.json({
                success: false,
                data: {},
                error: { error: "Invalid  request body | content required" }
            }, { status: StatusCodes.FORBIDDEN })
        }
        const comment = await prisma.comment.create({
            data: {
                content,
                createdBy: session.user.id
            }
        })
        return NextResponse.json({
            success: true,
            data: {
                comment
            },
            error: {}
        })
    } catch (error) {
        console.error(error)
        NextResponse.json({
            success: false,
            data: {},
            error: { error }
        }, { status: StatusCodes.INTERNAL_SERVER_ERROR })
    }
}