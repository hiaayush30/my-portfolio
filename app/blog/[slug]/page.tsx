import MarkdownRenderer from '@/components/MarkdownRenderer';
import { Button } from '@/components/ui/button';
import prisma from '@/lib/db';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'

async function page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await prisma.blogPost.findFirst({ where: { slug } });
    if (!post) {
        notFound();
    }
    return (
        <main className='min-h-screen py-16 px-4'>
            <div className='max-w-3xl mx-auto'>
                <Button variant={"ghost"} asChild className='mb-8'>
                    <Link href={"/blog"}>
                        <ArrowLeft />
                        Back to Blog
                    </Link>
                </Button>
                {
                    <article className='border-2 p-4 rounded-lg'>
                        <h1 className='text-3xl font-bold mb-2'>
                            {post?.title}
                        </h1>
                        <p className='text-muted-foreground mb-6'>{new Date(post.createdAt).toLocaleDateString()}</p>
                        <hr/>
                        <div className='prose prose-neutral dark:prose-invert max-w-none my-8'>
                            <MarkdownRenderer content={post.content} />
                        </div>
                    </article>
                }
            </div>
        </main>
    )
}

export default page
