"use client"
import { FormEvent, useState } from 'react'
import MDEditor from '@uiw/react-md-editor';
import { ArrowLeft, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Link from 'next/link';

function CreateBlog() {
    const [title, setTitle] = useState("");
    const [catchphrase, setCatchphrase] = useState("");
    const [content, setContent] = useState<string | undefined>("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await fetch("/api/blogs", {
                body: JSON.stringify({ title, catchphrase, content }),
                method: "POST"
            });
            const response = await res.json();
            if (!res.ok) {
                toast(response.error);
            }
            else {
                toast(response.message);
                setTitle("");
                setCatchphrase("");
                setContent("");
            }
        } catch (error) {
            console.log(error);
            toast("Something went wrong, Please try again later")
        } finally {
            setLoading(false);
        }
    }
    return (
        <main className='py-24 max-w-3xl mx-auto w-full'>
            <Link href={"/admin"}>
                <Button className='cursor-pointer my-4' variant={"ghost"}>
                    <ArrowLeft /> Go Back
                </Button>
            </Link>
            <form onSubmit={handleSubmit}>
                <div className='flex items-center justify-between'>
                    <h1 className='text-3xl font-semibold'>Create Blog</h1>
                    <div className='flex items-center gap-3'>
                        <Trash
                            onClick={() => {
                                if (loading) return;
                                setTitle("")
                                setCatchphrase("")
                                setContent("")
                            }}

                            className='hover:scale-125 hover:text-red-500 transition-all hover:cursor-pointer' />
                        <Button disabled={loading} type='submit' className='cursor-pointer' variant={"outline"}>
                            {loading ? "Creating..." : "Create"}
                        </Button>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='p-1 outline-1 my-2 rounded-lg px-2'
                        type='text'
                        placeholder='title'
                    />
                    <input
                        value={catchphrase}
                        onChange={(e) => setCatchphrase(e.target.value)}
                        className='p-1 outline-1 my-2 mb-4 rounded-lg px-2'
                        type='text'
                        placeholder='catchphrase'
                    />
                </div>
                <MDEditor
                    value={content}
                    onChange={setContent}
                    className='mx-1'
                />
                <MDEditor.Markdown className='my-6 mx-1 rounded-lg p-2' source={content} style={{ whiteSpace: 'normal' }} />
            </form>
        </main>
    )
}

export default CreateBlog
