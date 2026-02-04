import { Loader2 } from "lucide-react"

function Loading() {
    return (
        <main className='min-h-screen py-24 px-4'>
            <div className='max-w-3xl mx-auto'>
                <h1 className='text-3xl font-semibold mb-5'>Blogs</h1>
                    <Loader2 className="animate-spin mx-auto"/>
            </div>
        </main>
    )
}

export default Loading