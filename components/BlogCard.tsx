import React from 'react'
import { Card, CardContent } from './ui/card'
import Link from 'next/link'
import { BlogPost } from '@/lib/generated/prisma/client'

function BlogCard({ post }: { post: BlogPost }) {
    return (
        <Card className="hover:bg-accent transition-colors my-5">
            <Link href={`/blog/${post.slug}`}>
                <CardContent className="p-4">
                    <h3 className="font-semibold">{post.title}</h3>
                    <p className="text-sm text-muted-foreground">
                        {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                </CardContent>
            </Link>
        </Card>
    )
}

export default BlogCard
