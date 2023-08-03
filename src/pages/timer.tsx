import { NextPage } from 'next'
import { useState, useEffect } from 'react'

const TimerPage: NextPage = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((currentCount) => currentCount + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])
  return <div>Timer: {count}</div>
}

export default TimerPage
