
import Content from "@/components/Content"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "シンプルなsocket.io",
    description: "Next.jsでのシンプルなsocket.ioの接続例",
}

export default function Page() {
    return (
        <Content />
    )
}
