import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'

function page() {
  const posts = [{
    id: 1,
    slug: "learn-next.js-basics",
    title: "Learn Next.js Basics",
    createdAt: new Date(),
    content: `# Learn Next.js Basics
    Next.js is a popular React framework that helps you build fast and seo friendly websites
    ## Why use Next,js?
    - Build-in-routing system
    - Server Side Rendering and static generation
    - great dev experience`
  }] 
  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Aayush Jha</h1>
        <p className="text-muted-foreground text-lg max-w-md mb-6">
          A full-stack developer passionate about building great web
          experiences.
        </p>
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

      {/* About Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-muted-foreground">
          I specialize in React, Next.js, and Express.js. With years of
          experience building scalable applications, I love turning ideas into
          reality.
        </p>
      </section>

      {/* Recent Posts */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
        {posts.length > 0 ? (
          <>
            <div className="flex flex-col gap-4">
              {posts.map((post) => (
                <Card key={post.id} className="hover:bg-accent transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    <CardContent className="p-4">
                      <h3 className="font-semibold">{post.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </p>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
            <Button variant="link" asChild className="mt-4 px-0">
              <Link href="/blog">
                View all posts <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </>
        ) : (
          <p className="text-muted-foreground">No posts yet.</p>
        )}
      </section>
    </main>
  )
}

export default page
