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
        <div className='relative group hover:scale-[1.01] transition-all border-2 dark:border-stone-700 hover:dark:border-stone-300 border-stone-300 hover:border-stone-600 rounded-xl overflow-hidden my-5'>
            <Card className="relative group bg-transparent py-2 border-none shadow-none">
                <Link href={`/blogs/${post.slug}`}>
                    <CardContent className="p-4">
                        <h3 
                            className="font-semibold dark:text-white transition-colors text-2xl"
                        >
                            {post.title}
                        </h3>
                        <h3 
                            className="my-1 text-md dark:text-zinc-50"
                        >
                            {post.catchphrase}
                        </h3>
                        <p 
                            className="text-sm dark:text-gray-300"
                        >
                            {new Date(post.createdAt).toLocaleDateString()}
                        </p>
                        <div className='bg-[url("/blogbg.png")] transition-all bg-center bg-cover absolute right-0 max-md:hidden md:w-[30%] inset-y-0'></div>
                    </CardContent>
                </Link>
                
                {data?.user.email === "hiaayush30@gmail.com" && (
                    <Trash
                        onClick={() => handleDelete(post.id)}
                        className='cursor-pointer bg-slate-800/50 p-1.5 rounded-full hover:scale-110 transition-all text-red-400 absolute top-4 right-4' 
                        size={28}
                    />
                )}
            </Card>
        </div>
    )
}

export default BlogCard;