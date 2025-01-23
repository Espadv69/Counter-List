import { useState } from 'react'

const Counter = ({ id, onReset, onIncrement }) => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount((count) => count + 1)
    onIncrement(id)
  }

  const handleReset = () => {
    setCount(0)
    onReset(id)
  }
}
