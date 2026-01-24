import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function NotFound() {
    return (
        <main className='min-h-screen flex items-center justify-center'>
            <div className='flex flex-col items-center gap-5'>
                <h1 className='text-3xl font-semibold'>Page Not Found!</h1>
                <Link href={"/"}><Button className='cursor-pointer'>Go Back</Button></Link>
            </div>
        </main>
    )
}

export default NotFound
