import React from 'react'

function ToolTip({ text }: { text: string }) {
    return (
        <div className='p-1 pr-2 bg-muted rounded-full flex gap-2 items-center border-2 border-foreground'>
            <div className='size-2 border-2 border-foreground rounded-full '></div>
            {text}
        </div>
    )
}

export default ToolTip
