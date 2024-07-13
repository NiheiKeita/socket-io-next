import React from 'react'

type Props = {
  events: string[]
}

export const Events = React.memo<Props>(function Events({
  events
}) {
  return (
    <ul>
      {
        events.map((event: string, index: number) =>
          <li key={index}>{event}</li>
        )
      }
    </ul>
  )
})
