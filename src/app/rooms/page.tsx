'use client'
import MessageList from '@/components/socket/MessageList'
import { Suspense } from 'react'

// メッセージの入力と一覧を行うページコンポーネント
export default function Rooms() {
  return (
    <Suspense fallback="loading...">
      <MessageList />
    </Suspense>
  )
}
