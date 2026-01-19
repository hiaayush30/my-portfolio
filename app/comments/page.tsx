import AuthButton from '@/components/AuthButton';
import CommentForm from '@/components/CommentForm';
import CommentList from '@/components/CommentList';
import { Button } from '@/components/ui/button';
import prisma from '@/lib/db'
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

async function page() {
    const comments = await prisma.comment.findMany({ orderBy: { createdAt: "desc" }, include: { "user": true } });
    return (
        <main className='min-h-screen py-16 px-4'>
            <div className='max-w-3xl mx-auto'>
                <Button variant={"ghost"} asChild className='mb-8'>
                    <Link href={"/"}>
                        <ArrowLeft className='size-4 mr-2' />
                        Back to Home
                    </Link>
                </Button>
                <h1 className='text-3xl font-semibold mb-2'>Comments</h1>
                <p className='text-muted-foreground mb-8'>
                    Sign in with Github to leave a comment or a message
                </p>
                <div className='mb-8'>
                    <AuthButton callbackURL='/comments' />
                </div>
                <CommentForm />
                <div className='mt-12'>
                    <h2 className='text-xl font-semibold mb-4'>
                        All Comments ({comments.length})
                    </h2>
                    <CommentList comments = {comments}/>
                </div>
            </div>
        </main>
    )
}

export default page
