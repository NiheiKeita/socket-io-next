import { NextApiRequest, NextApiResponse } from "next"
import { Server, Socket } from "socket.io"
import { Server as IOServer } from 'socket.io'
import { Server as HTTPServer } from 'http'
import { Socket as NetSocket } from 'net'

type NextApiResponseWithSocket = NextApiResponse & {
    socket: NetSocket & {
        server: HTTPServer & {
            io: IOServer;
        };
    };
}


export default function handler(
    req: NextApiRequest,
    res: NextApiResponseWithSocket,
) {
    if (res.socket?.server.io) {
        return res.send("server is already running")
    }

    const io = new Server(res.socket.server, { addTrailingSlash: false })
    // 各イベントを設定
    io.on("connection", (socket: Socket) => {
        console.log('user connected')
        socket.on("disconnect", () => console.log("disconnected"))
        socket.emit("msg", "hello, from server!")
        socket.on('sendMessage', (message) => {
            console.log('Message has been sent: ', message)
            socket.emit("receiveMessage", "hello, from server!")
        })
    })

    // io.on('connection', (socket) => {
    //     console.log('user connected')

    //     // 'sendMessage' というイベント名で受信できる
    //     // 第一引数には受信したメッセージが入り、ログに出力する
    //     socket.on('sendMessage', (message) => {
    //         console.log('Message has been sent: ', message)
    //     })
    // })
    res.socket.server.io = io

    // return res.end()
}