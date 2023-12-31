'use client'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import Button from '../ui/button'

const GoogleLoginButton = () => {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl')

    return (
        <Button
            className='w-full'
            onClick={() => signIn('google', { callbackUrl })}
        >
            Continue with Google
        </Button>
    )
}

export default GoogleLoginButton