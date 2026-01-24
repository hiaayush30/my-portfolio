"use client"
import { Card, CardContent } from './ui/card'
import Link from 'next/link'
import { BlogPost } from '@/lib/generated/prisma/client'
import { Trash } from 'lucide-react';
import { useSession } from '@/lib/auth-client';
import { toast } from 'sonner';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function BlogCard({ post }: { post: BlogPost }) {
    const { data } = useSession();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const handleDelete = async (id: string) => {
        try {
            if (loading) return;
            setLoading(true);
            const res = await fetch("/api/blogs/" + id, {
                method: "DELETE"
            })
            const response = await res.json();
            if (!res.ok) {
                toast(response.error)
            } else {
                toast(response.message)
                router.refresh();
            }
        } catch (error) {
            toast("could not delete blog")
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='relative group hover:scale-101 transition-all'>
            <div className="absolute inset-0 bg-[url('/blogbg.jpg')] bg-cover rounded-xl transition-all duration-10000">
                <div className="absolute inset-0 dark:bg-black/20 rounded-xl"></div>
            </div>
            <Card className="relative bg-transparent my-5 py-2 rounded-xl border-none shadow-none">
                <Link href={`/blogs/${post.slug}`}>
                    <CardContent className="p-4">
                        <h3 className="font-semibold text-white transition-colors text-2xl style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}">
                            {post.title}
                        </h3>
                        <h3 className="my-1 text-lg text-zinc-50 style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}">
                            {post.catchphrase}
                        </h3>
                        <p className="text-sm text-gray-300 style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}">
                            {new Date(post.createdAt).toLocaleDateString()}
                        </p>
                    </CardContent>
                </Link>
                {
                    data?.user.email == "hiaayush30@gmail.com" && (

                        <Trash
                            onClick={() => handleDelete(post.id)}
                            className='cursor-pointer bg-muted p-1 rounded-full hover:scale-115 transition-all text-red-500 absolute top-1 right-1' />
                    )
                }
            </Card>
        </div>
    )
}
export default BlogCard
