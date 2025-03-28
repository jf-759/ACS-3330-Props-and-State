import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './Counter'
import './App.css'

function App() {
  const [counts, setCounts] = useState([1, 4, 3])

  return (
    <div className="App">
      {counts.map((value, index) => (
        <Counter key={index} label={`Counter ${index + 1}`} value={value} />
      ))}
    </div>
  )
}

export default App
