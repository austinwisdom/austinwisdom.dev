import { useState } from 'react'
import awLogoLarge from "./assets/images/logo/logoLarge.png"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      </div>
      <img src={awLogoLarge} />
      <h1>Coming Soon</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      
    </>
  )
}

export default App
