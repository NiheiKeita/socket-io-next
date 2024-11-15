import { io } from 'socket.io-client'

const URL = process.env.NODE_ENV === 'production' ? 'http://localhost:3000' : 'http://localhost:3000'

export const socket = io(URL, {
    path: '/api/socket.io'
})
// export const socket = io(URL)