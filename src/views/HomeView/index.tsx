"use client"

import Link from "next/link";
import React from "react"

export const HomeView = React.memo(function HomeView() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="max-w-3xl rounded-lg bg-gray-700 p-10 text-center shadow-lg backdrop-blur-md">
        <h1 className="mb-6 text-4xl font-bold">コードゴルフへようこそ</h1>
        <p className="mb-8 text-lg">
          コードゴルフとは、可能な限り短いコードで与えられた問題を解決することを目指すプログラミング競技です。<br />
          アルゴリズムと最適化技術を駆使して、コードの長さを最小限にしましょう。
        </p>
        <Link href="/questions">
          <p className="inline-block rounded-lg bg-blue-600 px-8 py-4 font-semibold  shadow-md transition duration-300 hover:scale-105 hover:bg-blue-700">
            ゴルフコース一覧に行く
          </p>
        </Link>
      </div>
    </div>
  );
})
