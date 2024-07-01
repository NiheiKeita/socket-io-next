import React from 'react'
import { socket } from '@/socket'

export const ConnectionManager = React.memo(function ConnectionManager() {
  function connect() {
    socket.connect()
  }

  function disconnect() {
    socket.disconnect()
  }

  return (
    <>
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
    </>
  )
})
