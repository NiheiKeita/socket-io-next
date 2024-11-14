import type { NextApiRequest, NextApiResponse } from 'next'
import cors from 'cors'
import type { Socket as NetSocket } from 'net'
import type { Server as HttpServer } from 'http'
import { Server as SocketServer } from 'socket.io'

type ReseponseWebSocket = NextApiResponse & {
  socket: NetSocket & { server: HttpServer & { io?: SocketServer } };
};

const corsMiddleware = cors()

export default function SocketHandler(req: NextApiRequest, res: ReseponseWebSocket) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }
  if (res.socket.server.io) {
    return res.send('already-set-up')
  }
  const io = new SocketServer(res.socket.server, {
    addTrailingSlash: false,
  })
  io.on('connection', (socket) => {
    const clientId = socket.id
    console.log(`A client connected. ID: ${clientId}`)
    // シグナリング用のメッセージを受信
    socket.on('offer', (offer) => {
      console.log('user offer')
      socket.broadcast.emit('offer', offer)
    })
    socket.on('answer', (answer) => {
      console.log('user answer')
      socket.broadcast.emit('answer', answer)
    })

    socket.on('candidate', (candidate) => {
      console.log('user candidate')
      socket.broadcast.emit('candidate', candidate)
    })
    socket.on('test', () => {
      console.log('user test')
    })
    // 切断時の処理
    socket.on('disconnect', () => {
      console.log('user disconnected')
    })
  })

  corsMiddleware(req, res, () => {
    res.socket.server.io = io
    res.end()
  })
}
