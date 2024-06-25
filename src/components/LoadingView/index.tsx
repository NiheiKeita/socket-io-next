"use client"

import React from "react"
import { LoadingIcon } from "../LoadingIcon"

type Props = {
  variant?: "black" | "blue" | "default"
}

export const LoadingView = React.memo<Props>(function LoadingView({
  variant = "default",
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-800 px-10 text-gray-200">
      <div className='flex h-svh w-full items-center justify-center text-black'>
        <LoadingIcon variant={variant} />
      </div>
    </div>
  )
})
