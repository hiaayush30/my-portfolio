import Label from '@/components/Label'
import Typewriter from '@/components/Typewriter'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { FileText, GithubIcon, LinkedinIcon, Mail } from 'lucide-react'

async function page() {
  // const posts = await prisma.blogPost.findMany({ orderBy: { createdAt: "desc" }, take: 3 })
  return (
    <main className='min-h-screen max-w-3xl mx-auto flex flex-col justify-center'>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4"><Typewriter /> i&apos;m Aayush</h1>
        <p className="text-muted-foreground text-lg max-w-md mb-6">
          a full-stack developer passionate about designing and building scalable backends from scratch
        </p>
        {/* Tech Stack */}
        <section className='flex items-center justify-center gap-3 pb-6'>
          <Label text='springboot' />
          <Label text='node.js' />
          <Label text='next.js' />
          <Label text='DevOps' />
        </section>
        <div className='border-b-2 w-full max-w-sm mx-auto mb-6'></div>
        <section className="flex gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <a target='_blank' href="https://github.com/hiaayush30" className='p-1 border-2 rounded-full border-muted-foreground hover:scale-110 transition-all cursor-pointer'>
                <GithubIcon className='text-muted-foreground' />
              </a>
            </TooltipTrigger>
            <TooltipContent side='bottom'>
              <p>github</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a target='_blank' href='https://drive.google.com/file/d/1H3wdaBGV8zDgqSCYmyl6bToVl8zgIYyJ/view' className='p-1 border-2 rounded-full border-muted-foreground hover:scale-110 transition-all cursor-pointer'>
                <FileText className='text-muted-foreground' />
              </a>
            </TooltipTrigger>
            <TooltipContent side='bottom'>
              <p>my resume</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a target='_blank' href='https://www.linkedin.com/in/hiaayush30/' className='p-1 border-2 rounded-full border-muted-foreground hover:scale-110 transition-all cursor-pointer'>
                <LinkedinIcon className='text-muted-foreground' />
              </a>
            </TooltipTrigger>
            <TooltipContent side='bottom'>
              <p>linkedin</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a target='_blank' href='mailto:hiaayush30@gmail.com' className='p-1 border-2 rounded-full border-muted-foreground hover:scale-110 transition-all cursor-pointer'>
                <Mail className='text-muted-foreground' />
              </a>
            </TooltipTrigger>
            <TooltipContent side='bottom'>
              <p>email</p>
            </TooltipContent>
          </Tooltip>
        </section>
      </section>
    </main>
  )
}

export default page
