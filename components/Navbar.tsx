import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'

function Navbar() {
    return (
        <nav className='z-10 text-muted-foreground border-b fixed top-0 p-5 w-full max-w-3xl mx-auto bg-background/95'>
            <div className='flex items-center justify-center gap-5'>
                <Link href={"/"} className='hover:text-foreground hover:underline underline-offset-6 text-xl'>about</Link>
                <Link href={"/projects"} className='hover:text-foreground hover:underline underline-offset-6 text-xl'>projects</Link>
                <Link href={"/blogs"} className='hover:text-foreground hover:underline underline-offset-6 text-xl'>blogs</Link>
                <div className='absolute right-0'><ModeToggle /></div>
            </div>
        </nav>
    )
}

export default Navbar
