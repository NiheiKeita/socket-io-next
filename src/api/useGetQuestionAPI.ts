
import { Question } from "@/types/Question"
import { useCallback, useState } from "react"
const apiURL: string | undefined = process.env.NEXT_PUBLIC_BACKEND_URL ?? ''

export const useGetQuestionAPI = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [question, setQuestion] = useState<Question>()

    const getQuestion = useCallback(async (questionID: string) => {
        setIsLoading(true)
        await fetch(apiURL + '/api/questions/' + questionID, {
            method: "Get",
            headers: {
                "Content-Type": "application/json",
            },
            mode: 'cors',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                data.question.example_code = data?.question.example_code.replace(/\\n/g, '\n')
                setIsLoading(false)
                setQuestion(data.question)
            })
            .catch((e) => {
                console.log(e)
                setIsLoading(false)
            })
    }, [])

    return { isLoading, getQuestion, question }
}
