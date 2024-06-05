import React from 'react'
import { signIn } from '@/auth'
import { Button } from '../ui/button'

const SigninButton = async () => {
  return (

    <div>
      <form action={async () => {
        "use server"
        await signIn("instagram",)
      }}>

        <Button type="submit">Sign in with Instagram</Button>
      </form>
    </div>
  )
}

export default SigninButton