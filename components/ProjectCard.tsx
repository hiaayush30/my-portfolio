import { GithubIcon, ExternalLink } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Project } from '@/lib/generated/prisma/client'

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className='hover:shadow-lg dark:hover:shadow-[#0d0d24] transition-all cursor-pointer group flex flex-col h-full p-6 border border-slate-300 dark:border-slate-800 rounded-2xl bg-white dark:bg-background hover:bg-slate-50/50 duration-300'>

      <div className='flex items-start justify-between mb-3'>
        <h3 className='text-base font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-500 group-hover:dark:text-blue-500 transition-colors duration-300'>
          {project.title}
        </h3>

        <div className='flex gap-3'>
          {/* GitHub Link */}
        <Tooltip>
              <TooltipTrigger asChild>
                <a target='_blank' href={project.github} className='hover:scale-110 transition-all cursor-pointer'>
                  <GithubIcon size={18} strokeWidth={1.5} />
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
                <a target='_blank' href={project.live} className='hover:scale-110 transition-all cursor-pointer'>
                  <ExternalLink size={18} strokeWidth={1.5} />
                </a>
              </TooltipTrigger>
              <TooltipContent side='bottom'>
                <p>live link</p>
              </TooltipContent>
            </Tooltip>
          )}

        </div>
      </div>

      <p className='text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 flex-grow'>
        {project.description}
      </p>

      <div className='flex flex-wrap gap-x-4 gap-y-2 mt-auto'>
        {project.techstack.map(t => (
          <span
            key={t}
            className='text-[11px] uppercase tracking-widest font-medium text-muted-foreground p-1 px-2 bg-muted rounded-lg'
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard;