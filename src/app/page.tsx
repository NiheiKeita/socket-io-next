'use client'
import ConnectionForm from '@/views/ConnectForm'
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <Suspense fallback="loading...">
        <ConnectionForm />
      </Suspense>
    </>
  )
}
