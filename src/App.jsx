import { useState } from 'react'
import Counter from './Counter'
import './App.css'

function App() {
  const [counts, setCounts] = useState([1, 4, 3])


  const updateCount = (index, delta) => {
    setCounts(prevCounts =>
      prevCounts.map((count, i) => (i === index ? count + delta : count))
    )
  }

  const totalCount = counts.reduce((sum, count) => sum + count, 0);

  return (
    <div className="App">
      <h2>Total Count: {totalCount}</h2>
      {counts.map((value, index) => (
        <Counter 
        key={index} 
        label={`Counter ${index + 1}`} 
        value={value}
        increment={() => updateCount(index, 1)}
        decrement={() => updateCount(index, -1)} 
        />
      ))}
    </div>
  )
}

export default App
