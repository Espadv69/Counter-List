import { useState } from 'react'

import '../css/Counter.css'

const Counter = ({ id, onReset, onIncrement, onDelete }) => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount((count) => count + 1)
    onIncrement(id)
  }

  const handleReset = () => {
    setCount(0)
    onReset(id)
  }

  const handleDelete = () => {
    onDelete(id)
  }

  return (
    <div className="counter">
      <h3 className="h3-counter">Counter {id}</h3>
      <p className="p-counter">{count}</p>
      <div className="buttons-container">
        <button className="button-counter" onClick={handleIncrement}>
          Increment
        </button>
        <button className="button-counter" onClick={handleReset}>
          Reset
        </button>
        <button className="button-counter" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default Counter
