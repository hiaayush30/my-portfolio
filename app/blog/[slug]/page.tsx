import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

async function page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return (
        <main className='min-h-screen py-16 px-4'>
            <div className='max-w-3xl mx-auto'>
                <Button variant={"ghost"} asChild className='mb-8'>
                    <Link href={"/blog"}>
                        <ArrowLeft />
                        Back to Blog
                    </Link>
                </Button>
                <h1>
                    Welcome to the blog : {slug}
                </h1>
            </div>
        </main>
    )
}

export default page
