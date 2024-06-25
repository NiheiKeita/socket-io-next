
import React from "react"

type Props = {
  className?: string,
  title: string,
  children: React.ReactNode,
}

export const SectionFrame = React.memo<Props>(function SectionFrame({
  className,
  title,
  children,
}) {
  return (
    <div className={`whitespace-break-spaces rounded-lg bg-gray-600 p-4 shadow-md ${className}`}>
      <h2 className="mb-2 whitespace-break-spaces text-xl font-semibold text-gray-200">{title}</h2>
      <div className="text-gray-200">{children}</div>
    </div>
  )
})
