
import React from "react"

type Props = {
  placeholder?: string,
  // eslint-disable-next-line no-unused-vars
  handleChange: (value: string) => void,
  value: string,
}

export const TextArea = React.memo<Props>(function TextArea({
  value = '',
  placeholder,
  handleChange,
}) {
  const doChange = (event: any) => {
    handleChange(event.target.value);
  }
  const calculateHeight = (value: string) => {
    const lines = value.split('\n').length
    return Math.max(lines * 1.5 + 1, 6) + 'rem'
  }
  return (
    <textarea
      className="h-auto min-h-24 w-full rounded-md border-2 border-gray-500 bg-gray-600 px-4 py-2 text-gray-200 placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
      value={value}
      placeholder={placeholder}
      onChange={doChange}
      style={{ minHeight: calculateHeight(value) }}
    />
  )
})
