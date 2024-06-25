import { CodeCheckResult } from "@/types/CodeCheckResult"
import { useCallback, useState } from "react"
const apiURL: string | undefined = process.env.NEXT_PUBLIC_BACKEND_URL ?? ''

type PostData = {
    id: string,
    code: string,
    question_id: string,
}
export const usePostCodeCheckAPI = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [resultData, setResultData] = useState<CodeCheckResult>()

    const postCodeCheck = useCallback(async (postData: PostData) => {
        setIsLoading(true)
        await fetch(apiURL + '/api/code-check', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            mode: 'cors',
            body: JSON.stringify(postData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsLoading(false)
                setResultData(data)
            })
            .catch(() => {
                setIsLoading(false)
            })
    }, [])

    return { isLoading, postCodeCheck, resultData }
}
