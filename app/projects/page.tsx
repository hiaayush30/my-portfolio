import ProjectCard from '@/components/ProjectCard'
import prisma from '@/lib/db'

async function page() {
    const projects = await prisma.project.findMany();
    return (
        <main className='min-h-screen py-24 px-4'>
            <div className='max-w-3xl mx-auto'>
                <h1 className='text-3xl font-semibold mb-5'>Projects</h1>
                <div className='grid sm:grid-cols-2 gap-5 mx-1'>
                    {
                        projects.map(project=>{
                            return <ProjectCard project={project} key={project.id}/>
                        })
                    }
                </div>
            </div>
        </main>
    )
}

export default page
