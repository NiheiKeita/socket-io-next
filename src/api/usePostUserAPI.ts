
import { LocalStorageUser } from "@/localStorage/types"
import { useLocalStorageUser } from "@/localStorage/useUser"
import { useCallback, useState } from "react"
const apiURL: string | undefined = process.env.NEXT_PUBLIC_BACKEND_URL ?? ''

type User = {
    name: string,
    id: string,
}

export const usePostUserAPI = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState<User>()
    const { getLocalStorageUser, setLocalStorageUser } = useLocalStorageUser()

    const postUser = useCallback(async (name?: string) => {
        const user = getLocalStorageUser()
        if (user) {
            setUser({
                name: user.userName,
                id: user.userId,
            })
            return
        }
        if (!name) return

        setIsLoading(true)
        await fetch(apiURL + '/api/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            mode: 'cors',
            body: JSON.stringify({ "name": name }),
        })
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                setLocalStorageUser({
                    userId: data.id,
                    userName: data.name,
                } as LocalStorageUser)
                setUser({
                    name: data.name,
                    id: data.id,
                })
            })
            .catch(() => {
                setIsLoading(false)
            })
    }, [getLocalStorageUser, setLocalStorageUser])

    return { isLoading, postUser, user }
}
