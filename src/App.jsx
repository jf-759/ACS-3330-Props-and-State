import { useState } from 'react'
import Counter from './Counter'
import './App.css'

function App() {
  const [counts, setCounts] = useState([1, 4, 3])


  const updateCount = (index, delta) => {
    const newCounts = [...counts]
    if (newCounts[index] + delta >= 0 && newCounts[index] + delta <= 10) {
      newCounts[index] += delta
    }
    setCounts(newCounts)
  }

  const totalCount = counts.reduce((sum, count) => sum + count, 0)
  const resetCounts = () => {
    setCounts(counts.map(() => 0))
  }

  const addCounter = () => {
    setCounts([...counts, 0])
  }

  const removeCounter = (index) => {
    const newCounts = counts.filter((_, i) => i !== index)
    setCounts(newCounts)
  }

  return (
    <div className="App">
      <h2 className='total'>Total Count: {totalCount}</h2>
      {counts.map((value, index) => (
        <Counter 
        key={index} 
        label={`Counter ${index + 1}`} 
        value={value}
        increment={() => updateCount(index, 1)}
        decrement={() => updateCount(index, -1)}
        remove={() => removeCounter(index)} 
        />
      ))}
      <div className="button">
        <button onClick={resetCounts} className="reset-button">Reset</button>
        <button onClick={addCounter} className="add-button">➕ Add Counter</button>
      </div>
    </div>
  )
}

export default App
