import BlogCard from '@/components/BlogCard';
import { Button } from '@/components/ui/button';
import prisma from '@/lib/db'
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

async function page() {
    const posts = await prisma.blogPost.findMany({ orderBy: { createdAt: "desc" } });
    return (
        <main className='min-h-screen py-16 px-4'>
            <div className='max-w-3xl mx-auto'>
                <Button variant={"ghost"} asChild className='mb-8'>
                    <Link href={"/"}>
                        <ArrowLeft className='size-4 mr-2' />
                        Back to Home
                    </Link>
                </Button>
                <h1 className='text-3xl font-semibold mb-5'>Blog</h1>
                {
                    posts.map(post => {
                        return (
                            <BlogCard key={post.id} post={post} />
                        )
                    })
                }
            </div>
        </main>
    )
}

export default page