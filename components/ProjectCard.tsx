import { GithubIcon, Link } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Project } from '@/lib/generated/prisma/client'

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className='group/card flex flex-col h-full border-2 border-stone-400 rounded-xl overflow-hidden bg-white dark:bg-[#05070a] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/10'>
      
      <div className='relative aspect-video w-full overflow-hidden'>
        <div className='absolute inset-0 bg-[url("/blogbg1.jpg")] bg-center bg-cover transition-transform duration-500 group-hover/card:scale-110' />
        <div className='absolute inset-0 bg-black/30 group-hover/card:bg-transparent transition-colors' />
      </div>

      <div className='flex flex-col flex-grow p-5'>
        <div className='flex items-center justify-between'>
          <h1 className='text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-1'>
            {project.title}
          </h1>
          <div className='flex gap-2 my-2'>
            {/* GitHub Link */}
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  target='_blank' 
                  href={project.github} 
                  className='p-1.5 border-2 rounded-full border-muted-foreground text-muted-foreground hover:border-foreground hover:text-foreground hover:scale-110 transition-all duration-200 cursor-pointer'
                >
                  <GithubIcon size={18} />
                </a>
              </TooltipTrigger>
              <TooltipContent side='bottom'>
                <p>source code</p>
              </TooltipContent>
            </Tooltip>

            {/* Live Link */}
            {project.live && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    target='_blank' 
                    href={project.live} 
                    className='p-1.5 border-2 rounded-full border-muted-foreground text-muted-foreground hover:border-foreground hover:text-foreground hover:scale-110 transition-all duration-200 cursor-pointer'
                  >
                    <Link size={18} />
                  </a>
                </TooltipTrigger>
                <TooltipContent side='bottom'>
                  <p>live link</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
        
        <div className='w-full border-b border-stone-200 dark:border-slate-700 mb-3'></div>

        <p className='text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-grow'>
          {project.description}
        </p>

        <div className='flex flex-wrap gap-2 mt-auto'>
          {project.techstack.map(t => (
            <span
              key={t}
              className='text-[12px] lowercase tracking-wider font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700'
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;