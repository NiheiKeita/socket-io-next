import { Question } from "@/types/Question"
import { useCallback, useState } from "react"
const apiURL: string | undefined = process.env.NEXT_PUBLIC_BACKEND_URL ?? ''

export const useGetQuestionListAPI = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [questions, setQuestions] = useState<Question[]>()
    const getQuestionList = useCallback(async () => {
        setIsLoading(true)
        await fetch(apiURL + '/api/questions', {
            mode: 'cors'
        })
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                data.questions.map((question: any) => {
                    const id = question.id
                    const title = question.title
                    const detail = question.detail
                    const exampleCode = question.exampleCode
                    return { id, title, detail, exampleCode }
                })
                setQuestions(data.questions)
            }).catch(() => {
                setIsLoading(false)
            })
    }, [])

    return { isLoading, getQuestionList, questions }
}
