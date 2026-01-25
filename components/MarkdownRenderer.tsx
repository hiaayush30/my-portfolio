"use client"
import MDEditor from "@uiw/react-md-editor";



function MarkdownRenderer({ content }: { content: string }) {
    return (
        <MDEditor.Markdown className="p-4 rounded-lg" source={content} style={{ whiteSpace: 'normal' }} />
    )
}

export default MarkdownRenderer
