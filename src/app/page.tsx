'use client'
import ConnectionForm from '@/components/socket/ConnectForm'
import { Suspense } from 'react'

// 最初に表示されるページコンポーネント
export default function Home() {
  return (
    <>
      <Suspense fallback="loading...">
        <ConnectionForm />
      </Suspense>
    </>
  )
}
