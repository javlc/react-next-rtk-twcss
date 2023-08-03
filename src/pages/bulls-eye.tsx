import type { NextPage } from 'next'
import Head from 'next/head'

const BullsEyePage: NextPage = () => {
  return (
    <div className="radial-blue grid min-h-screen place-content-center">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="author"
          content="Javier Lopez"
        />
        <meta
          name="description"
          content="Implementation of Dave Gray's Tailwindcss beginner tutorial (youtube video code lCxcTsOHrjo)"
        />
        <title>Dave Gray&apos;s Bulls Eye Page</title>
      </Head>
      <div className="grid h-52 w-52 place-content-center rounded-full bg-emerald-500 shadow-2xl">
        <div className="grid h-32 w-32 place-content-center rounded-full bg-teal-200">
          <div className="h-16 w-16 rounded-full bg-red-500"></div>
        </div>
      </div>
    </div>
  )
}

export default BullsEyePage
