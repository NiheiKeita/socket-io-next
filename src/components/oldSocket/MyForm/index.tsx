import React, { useState } from 'react'
import { socket } from '@/socket'

export const MyForm = React.memo(function MyForm() {
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function onSubmit(event: any) {
    event.preventDefault()
    setIsLoading(true)

    socket.timeout(5000).emit('create-something', value, () => {
      setIsLoading(false)
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <input className='text-black' onChange={e => setValue(e.target.value)} />

      <button type="submit" disabled={isLoading}>Submit</button>
      {isLoading && <>loading</>}
    </form>
  )
})
