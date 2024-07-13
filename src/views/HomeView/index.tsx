"use client"

import React, { useState, useEffect } from 'react'
import { socket } from '@/socket'
import { ConnectionState } from '@/components/oldSocket/ConnectionState'
import { Events } from "@/components/oldSocket/Events"
import { MyForm } from '@/components/oldSocket/MyForm'
import { ConnectionManager } from '@/components/oldSocket/ConnectionManager'

export const HomeView = React.memo(function HomeView() {
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [fooEvents, setFooEvents] = useState<any>([])

  useEffect(() => {
    function onConnect() {
      setIsConnected(true)
    }

    function onDisconnect() {
      setIsConnected(false)
    }

    function onFooEvent(value: any) {
      setFooEvents((previous: any) => [...previous, value])
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('foo', onFooEvent)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('foo', onFooEvent)
    }
  }, [])

  return (
    <div>
      < ConnectionState isConnected={isConnected} />
      <Events events={fooEvents} />
      <ConnectionManager />
      <MyForm />
    </div >
  )
})
