'use client'
import VideoConnectForm from '@/views/Video/VideoConnectForm'
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <Suspense fallback="loading...">
        <VideoConnectForm />
      </Suspense>
    </>
  )
}
