'use client'
import React from 'react'
import { Button } from './ui/button'
import { GithubIcon } from 'lucide-react'

function AuthButton() {
    const handleSignIn = async () => {

    }
    return (
        <Button
            className='cursor-pointer'
            onClick={handleSignIn}
        >
            <GithubIcon className='w-4 h-4 mr-2' />    Sign in with Github
        </Button>
    )
}

export default AuthButton
