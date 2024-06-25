"use client"

import React from "react"
import Image from 'next/image'

type Props = {
  rank: number,
}

export const RankingIcon = React.memo<Props>(function RankingIcon({
  rank,
}) {
  const iconURL = () => {
    switch (rank) {
      case 1:
        return "/first_crown.svg"
      case 2:
        return "/second_crown.svg"
      case 3:
        return "/third_crown.svg"
      default:
        return ''
    }
  }
  if (!iconURL()) {
    return <></>
  }

  return (
    <Image src={iconURL()} alt="crown"
      layout="fill"
      objectFit="contain"
      className="block" />
  )
})
