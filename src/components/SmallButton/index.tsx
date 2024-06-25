

import React from "react"
import { LoadingIcon } from "../LoadingIcon"

type Props = {
  variant?: "black" | "blue"
  text: string,
  handleClick: () => void,
  disable?: boolean,
}

export const SmallButton = React.memo<Props>(function SmallButton({
  text,
  variant,
  handleClick,
  disable = false,
}) {
  const color = (() => {
    switch (variant) {
      case 'black':
        return 'bg-gray-800 hover:bg-gray-600 disabled:bg-gray-500';
      case 'blue':
        return 'bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300';
      default:
        return 'bg-gray-800 hover:bg-gray-600 disabled:bg-gray-600';
    }
  })()
  return (
    <div className="flex items-center">
      <button
        disabled={disable}
        onClick={handleClick}
        className={`${color} inline-block rounded-lg px-8 py-2 font-semibold text-gray-200 shadow-md transition duration-300 hover:scale-105`}
      >
        {text}
      </button>
      {disable && (
        <div className="ml-2 flex items-center justify-center">
          <LoadingIcon variant={variant} />
        </div>
      )}
    </div>
  )
})
