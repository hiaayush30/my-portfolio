'use client'
import React from 'react'
import { Button } from './ui/button'
import { GithubIcon, Loader2, LogOut } from 'lucide-react'
import { signIn, signOut, useSession } from '@/lib/auth-client'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

function AuthButton({ callbackURL }: { callbackURL: string }) {
    const { data, isPending } = useSession();
    const handleSignIn = async () => {
        await signIn.social({
            provider: "github",
            callbackURL
        })
    }
    if (isPending) {
        return (
            <div className='flex items-center gap-2 text-muted-foreground'>
                <Loader2 className='w-4 h-4 animate-spin' />
                Loading...
            </div>
        )
    }

    if (data?.user) {
        return (
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-2'>
                    <Avatar className='size-8'>
                        <AvatarImage
                            src={data.user.image || ""}
                            alt={data.user.name || "user"}
                        />
                        <AvatarFallback>{data.user.name[0] || "U"}</AvatarFallback>
                    </Avatar>
                    <span className='text-sm'>
                        {data.user.name || data.user.email}
                    </span>
                </div>
                <Button variant={"outline"} size={"sm"} onClick={() => signOut()}>
                    <LogOut className='size-4 mr2' /> Sign Out
                </Button>
            </div>
        )
    }

    return (
        <Button
            className='cursor-pointer'
            onClick={handleSignIn}
        >
            <GithubIcon className='w-4 h-4 mr-2' /> Sign in with Github
        </Button >
    )
}

export default AuthButton
