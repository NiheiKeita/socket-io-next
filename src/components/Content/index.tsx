"use client"
import { useCallback, useEffect } from "react"
import { io } from "socket.io-client"

const socket = io({ autoConnect: false })

export default function Content() {
    useEffect(() => {
        fetch("/api/socket.io", { method: "POST" })
            .then(() => {
                if (socket.connected) {
                    return
                }
                socket.connect()
                socket.on("connect", () => { console.log("connected!") })
                socket.on("msg", (msg) => { console.log(msg) })
                socket.on('receiveMessage', (message) => {
                    // 受信したメッセージをulタグに挿入
                    console.log("receiveMessage")
                    console.log(message)
                })
            })

        // return () => {
        //     socket.off("connect")
        //     socket.off("msg")
        // }
    }, [])

    const handleClick = useCallback(() => {
        console.log("送信")
        socket.emit('sendMessage', "送信した")
    }, [])

    return (
        <>
            <h1>socket.io シンプルな接続例</h1>
            <button onClick={handleClick}>送信</button>
        </>
    )
}