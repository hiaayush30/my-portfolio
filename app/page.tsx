import Navbar from '@/components/Navbar'
import ToolTip from '@/components/ToolTip'
import Typewriter from '@/components/Typewriter'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

async function page() {
  // const posts = await prisma.blogPost.findMany({ orderBy: { createdAt: "desc" }, take: 3 })
  return (
    <main className='min-h-screen max-w-3xl mx-auto flex flex-col justify-center'>
      <Navbar/>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4"><Typewriter/> i&apos;m Aayush</h1>
        <p className="text-muted-foreground text-lg max-w-md mb-6">
          A full-stack developer passionate about designing and building scalabale backends from scratch
        </p>
        {/* Tech Stack */}
        <div className='flex items-center justify-center gap-3 pb-10'>
          <ToolTip text='springboot'/>
          <ToolTip text='node.js'/>
          <ToolTip text='next.js'/>
        </div>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/blog">Read Blog</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/comments">
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Me
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

export default page
