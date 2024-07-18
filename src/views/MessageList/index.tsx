'use client'

import React, { FormEventHandler, useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import Message from '@/models/message'
import { messageBoardAtom, socketAtom, translateAtom, userNameAtom } from '@/globalStates/Atoms'
import { Pointer } from './components/Pointer'
import Translate from '@/models/translate'

export default function MessageList() {
  const [message, setMessage] = useState<string>('')
  const [messageBoard] = useAtom(messageBoardAtom)
  const [userName] = useAtom(userNameAtom)
  const [socket] = useAtom(socketAtom)
  const [translate] = useAtom(translateAtom)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const sendMessage: Message = {
      id: crypto.randomUUID(),
      room: 1,
      author: userName,
      body: message,
    }
    socket.emit('message', sendMessage)
    setMessage('')
  }

  useEffect(() => {
    const mouseMoveListener = (e: any) => {
      const sendTransition: Translate = {
        id: crypto.randomUUID(),
        room: 1,
        author: userName,
        x: e.clientX,
        y: e.clientY,
      }
      setMousePosition({ x: e.clientX, y: e.clientY })
      socket.emit('translate', sendTransition)
    }
    window.addEventListener("mousemove", mouseMoveListener)

    return () => {
      window.removeEventListener("mousemove", mouseMoveListener)
    }
  }, [])

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <input
            className="border border-gray-400 p-2"
            name="message"
            placeholder="enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            autoComplete={'off'}
          />
          <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">Send</button>
        </form>
      </section>
      <section>
        <ul>
          {messageBoard.map((message: Message) => (
            <li key={message.id}>{message.author}:{message.body}</li>
          ))}
        </ul>
      </section>
      <Pointer variant='default' position={mousePosition} />
      {translate?.map((trans) => {
        return <Pointer key={trans.author} variant='ss' position={trans} />
      })}
    </>
  )
}
