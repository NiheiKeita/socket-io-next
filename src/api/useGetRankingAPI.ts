
import { useCallback, useState } from "react"
const apiURL: string | undefined = process.env.NEXT_PUBLIC_BACKEND_URL ?? ''

type RankingLine = {
    created_at: string,
    user_name: string,
    code_byte: string,
}

export const useGetRankingAPI = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [ranking, setRanking] = useState<RankingLine[]>()

    const getQuestionRanking = useCallback(async (questionID: string) => {
        setIsLoading(true)
        await fetch(apiURL + '/api/questions/' + questionID + '/ranking', {
            method: "Get",
            headers: {
                "Content-Type": "application/json",
            },
            mode: 'cors',
        })
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                setRanking(data?.codes)
            })
            .catch(() => {
                setIsLoading(false)
            })
    }, [])

    return { isLoading, getQuestionRanking, ranking }
}
