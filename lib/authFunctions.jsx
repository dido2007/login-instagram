"use server"

import { auth } from "@/auth"

export const getSession = async () => {
    const session = await auth()
    if (!session) {
        throw new Error("You need to be logged in ");
      }
    return session
}

export const getLocalUser = async () => {
    const session = await getSession()
    return session.user
}


