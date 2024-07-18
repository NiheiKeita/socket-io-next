'use client'

import { ChangeEventHandler, FormEventHandler } from 'react'
import { useRouter } from 'next/navigation'
import { useAtom } from 'jotai'
import { io } from 'socket.io-client'
import Message from '@/models/message'
import { messageBoardAtom, socketAtom, translateAtom, userNameAtom } from '@/globalStates/Atoms'
import Translate from '@/models/translate'

export default function ConnectionForm() {
  const [userName, setUserName] = useAtom(userNameAtom)
  const [, setMessageBoard] = useAtom(messageBoardAtom)
  const [, setSocket] = useAtom(socketAtom)
  const [transition, setTranslate] = useAtom(translateAtom)
  const router = useRouter()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    await fetch('http://localhost:3000/api/sockets', { method: 'POST' })
    const socket = io({ autoConnect: false })
    socket.connect()
    socketInitializer(socket)
    setSocket(socket)
    router.push('/rooms')
  }
  const socketInitializer = (socket: any) => {
    socket.on('connect', () => {
      console.log('Connected to the server')
    })
    socket.on('disconnect', () => {
      console.log('Disconnected from the server')
    })
    socket.on('message', (newMessage: Message) => {
      setMessageBoard((messageBoard) => {
        const newMessageBoard = Array.from(new Map(messageBoard.map((message) => [message.id, message])).values())
        newMessageBoard.push(newMessage)

        return newMessageBoard
      })
    })
    socket.on('translate', (newTranslate: Translate) => {
      if (newTranslate.author == userName) return
      let newTran = transition
      const select = newTran?.find((data) => data.author == newTranslate.author)
      if (select) {
        newTran = newTran?.map((data) => {
          if (data.author == newTranslate.author) {
            return newTranslate
          } else {
            return data
          }
        })
      } else {
        newTran.push(newTranslate)
      }
      setTranslate(newTran)
    })
  }
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault()
    setUserName(event.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="border border-gray-400 p-2"
          name="name"
          placeholder="enter your name"
          value={userName}
          onChange={handleChange}
          autoComplete={'off'}
        />
        <button className="rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700">Connect</button>
      </form>
    </>
  )
}
