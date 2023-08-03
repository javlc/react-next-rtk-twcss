import type { NextPage } from 'next'
import { useFetch } from '../customHooks/useFetch'
import { useStopWatch } from '../customHooks/useStopWatch'
import { useState } from 'react'

const PruebaPage: NextPage = () => {
  const [url, setUrl] = useState(null)
  const count = useStopWatch()
  const { data } = useFetch({ url, onSuccess: () => console.log('Success') })
  return (
    <div className="container lg:container lg:mx-auto">
      <div className="text-center text-2xl font-bold">Página de prueba</div>
      <div className="">Count: {count}</div>
      <div>{JSON.stringify(data)}</div>
      <div>
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={() => setUrl('/jack.json')}
        >
          Jack
        </button>
        <button
          className="ml-3 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
          onClick={() => setUrl('/sally.json')}
        >
          Sally
        </button>
      </div>
    </div>
  )
}

export default PruebaPage
