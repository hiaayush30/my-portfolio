import prisma from "@/lib/db";

const seed = async () => {
  const blogPosts = [{
    slug: "learn-react",
    title: "Learn React basics",
    catchphrase: "Learn what is React and how to use it",
    createdAt: new Date(),
    content: `# Main title
### Sub title

- a list
- another list
- another list

console.log(a)
---

### Why your React code isn't at fault
Your MarkdownRenderer component is actually written very well. Here is why the issue is in the **Data (the string)** rather than the **Logic (the code)**:

* **Header Parsing**: Without a newline after Main title, the parser doesn't know where the title ends and the next block begins.
* **List Nesting**: If -  items are on the same line, remark - gfm won't recognize them as an unordered list(ul). It just sees them as dashes in a paragraph.
* **The "Pre" and "Code" Logic**: Your component is correctly set up to distinguish between inline code (single backticks) and block code (triple backticks). However, if the triple backticks aren't on a fresh line, the parser treats them as inline text.



### Quick Tip for your Portfolio
If you are typing this into a text area or a CMS to save it to your database, always **double-enter** between different sections. This ensures the string stored in the database has the \n\n characters that react - markdown needs to identify different nodes.

Would you like me to show you a **RegEx** helper to automatically clean up and "fix" spacing in raw strings before you pass them to the renderer? `
  }]
  for (const post of blogPosts) {
    await prisma.blogPost.create({
      data: post
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