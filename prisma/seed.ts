import prisma from "@/lib/db";

const seed = async () => {
    const blogPosts = [{
    slug: "learn-react",
    title: "Learn React basics",
    catchphrase:"Learn what is React and how to use it",
    createdAt: new Date(),
    content: `# Learn React basics
    - React is a library that helps you dynamic client side rendered webpages`
  }]
  for(const post of blogPosts){
    await prisma.blogPost.create({
        data:post
    })
  }
}

seed()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect()
    })