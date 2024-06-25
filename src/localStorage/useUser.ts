import { useCallback } from "react";
import { LocalStorageUser } from "./types";

export const useLocalStorageUser = () => {
    const getLocalStorageUser = useCallback((): LocalStorageUser | null => {
        const user = localStorage.getItem("user")
        if (!user) return null

        return JSON.parse(localStorage.getItem("user") ?? '')
    }, [])

    const setLocalStorageUser = useCallback((user: LocalStorageUser) => {
        localStorage.setItem("user", JSON.stringify(user))

        return getLocalStorageUser()
    }, [getLocalStorageUser])

    return { getLocalStorageUser, setLocalStorageUser }
}
