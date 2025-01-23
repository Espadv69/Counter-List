import { useState } from 'react'
import Counter from './Counter'

import '../css/CounterList.css'

const CounterList = () => {
  const [counters, setCounters] = useState([])
  const [nextId, setNextId] = useState(1)

  const addCounter = () => {
    setCounters([...counters, { id: nextId, value: 0 }])
    setNextId((nextId) => nextId + 1)
  }

  const incrementCounter = (id) => {
    setCounters(
      counters.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value + 1 } : counter
      )
    )
  }

  const resetCounter = (id) => {
    setCounters(
      counters.map((counter) =>
        counter.id === id ? { ...counter, value: 0 } : counter
      )
    )
  }

  const deleteCounter = (id) => {
    const filteredCounter = counters.filter((counter) => counter.id !== id)
    setCounters(filteredCounter)
  }

  return (
    <div>
      <h2>Counter List</h2>
      <button onClick={addCounter}>Add Counter</button>

      <div className="grid-container">
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            onReset={resetCounter}
            onIncrement={incrementCounter}
            onDelete={deleteCounter}
          />
        ))}
      </div>
    </div>
  )
}

export default CounterList
