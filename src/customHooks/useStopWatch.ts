import { useState, useEffect } from 'react'

export const useStopWatch = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useStopWatch useEffect')
    const interval = setInterval(() => {
      setCount((prev) => {
        console.log(`Count: ${prev}`)
        return prev + 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return count
}
