import React from 'react'
import Link from 'next/link'

function Navbar() {
  return ( 
    <nav className='border-b w-full fixed top-0 p-5 max-w-3xl bg-background'>
      <div className='flex items-center justify-center gap-5'>
        <Link href={"/"} className='hover:underline underline-offset-6 text-xl'>about</Link>
        <Link href={"/"} className='hover:underline underline-offset-6 text-xl'>projects</Link>
        <Link href={"/blog"} className='hover:underline underline-offset-6 text-xl'>blogs</Link>
      </div>
    </nav>
  )
}

export default Navbar
