"use client"

import React from "react"

type Props = {
  children: React.ReactNode,
}

export const Title = React.memo<Props>(function Title({
  children,
}) {
  return (
    <p className="mb-6 text-3xl font-bold">{children}</p>
  )
})
