import React from 'react'

type Props = {
  isConnected: boolean
}

export const ConnectionState = React.memo<Props>(function ConnectionState({
  isConnected
}) {
  return (
    <p>State: {'' + isConnected}</p>
  )
})
