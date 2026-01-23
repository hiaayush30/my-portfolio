import BlogCard from '@/components/BlogCard';
import { Button } from '@/components/ui/button';
import prisma from '@/lib/db'
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

async function page() {
    const posts = await prisma.blogPost.findMany({ orderBy: { createdAt: "desc" } });
    return (
        <main className='min-h-screen py-24 px-4'>
            <div className='max-w-3xl mx-auto'>
                <h1 className='text-3xl font-semibold mb-5'>Blogs</h1>
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