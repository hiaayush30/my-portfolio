import ToolTip from '@/components/ToolTip'
import Typewriter from '@/components/Typewriter'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { FileText, GithubIcon, LinkedinIcon } from 'lucide-react'

async function page() {
  // const posts = await prisma.blogPost.findMany({ orderBy: { createdAt: "desc" }, take: 3 })
  return (
    <main className='min-h-screen max-w-3xl mx-auto flex flex-col justify-center'>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4"><Typewriter /> i&apos;m Aayush</h1>
        <p className="text-muted-foreground text-lg max-w-md mb-6">
          A full-stack developer passionate about designing and building scalabale backends from scratch
        </p>
        {/* Tech Stack */}
        <section className='flex items-center justify-center gap-3 pb-10'>
          <ToolTip text='springboot' />
          <ToolTip text='node.js' />
          <ToolTip text='next.js' />
        </section>
        <section className="flex gap-4">

          <Tooltip>
            <TooltipTrigger asChild>
              <a target='_blank' href="https://github.com/hiaayush30" className='p-1 border-2 rounded-full border-muted-foreground hover:scale-110 transition-all cursor-pointer'>
                <GithubIcon className='text-muted-foreground' />
              </a>
            </TooltipTrigger>
            <TooltipContent side='bottom'>
              <p>Github</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a target='_blank' href='https://www.linkedin.com/in/hiaayush30/' className='p-1 border-2 rounded-full border-muted-foreground hover:scale-110 transition-all cursor-pointer'>
                <FileText className='text-muted-foreground' />
              </a>
            </TooltipTrigger>
            <TooltipContent side='bottom'>
              <p>My Resume</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a target='_blank' href='https://www.linkedin.com/in/hiaayush30/' className='p-1 border-2 rounded-full border-muted-foreground hover:scale-110 transition-all cursor-pointer'>
                <LinkedinIcon className='text-muted-foreground' />
              </a>
            </TooltipTrigger>
            <TooltipContent side='bottom'>
              <p>Linkedin</p>
            </TooltipContent>
          </Tooltip>

        </section>
      </section>
    </main>
  )
}

export default page
