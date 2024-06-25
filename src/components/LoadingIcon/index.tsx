"use client"

import React from "react"

type Props = {
  variant?: "black" | "blue" | "default"
}

export const LoadingIcon = React.memo<Props>(function LoadingIcon({
  variant = "default",
}) {

  const color = (() => {
    switch (variant) {
      case 'black':
        return 'border-gray-800';
      case 'blue':
        return 'border-blue-500';
      default:
        return 'border-gray-800';
    }
  })()
  return (
    <div
      className={color + ' w-6 h-6 animate-spin rounded-full border-4 '}
      style={{ borderTopColor: 'transparent' }}
    />
  )
})
