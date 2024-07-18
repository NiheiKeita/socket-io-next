'use client'

import React from 'react'

type Props = {
  position: any,
  variant: string,
}

export const Pointer = React.memo<Props>(function Pointer({
  position,
  variant,
}) {
  return (
    <div className='fixed'
      style={{
        top: `${position?.y + 10 ?? 10}px`,
        left: `${position?.x + 10 ?? 10}px`,
      }}>
      {variant == "default" && "自分"}
      {variant != "default" && position.author}
    </div>
  )
})
