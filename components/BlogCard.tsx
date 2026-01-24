import React from 'react'
import { Card, CardContent } from './ui/card'
import Link from 'next/link'
import { BlogPost } from '@/lib/generated/prisma/client'

function BlogCard({ post }: { post: BlogPost }) {
    return (
        <div className='relative group hover:scale-101 transition-all'>
            <div className="absolute inset-0 bg-[url('/blogbg.jpg')] bg-cover rounded-xl transition-all duration-10000">
                <div className="absolute inset-0 dark:bg-black/20 rounded-xl"></div>
            </div>
            <Card className="relative bg-transparent my-5 rounded-xl border-none shadow-none">
                <Link href={`/blogs/${post.slug}`}>
                    <CardContent className="p-4">
                        <h3 className="font-semibold text-white transition-colors text-xl style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}">
                            {post.title}
                        </h3>
                        <h3 className="my-1 text-sm text-zinc-50 style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}">
                            {post.catchphrase}
                        </h3>
                        <p className="text-sm text-zinc-200 style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}">
                            {new Date(post.createdAt).toLocaleDateString()}
                        </p>
                    </CardContent>
                </Link>
            </Card>
        </div>
    )
}
export default BlogCard
