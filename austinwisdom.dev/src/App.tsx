import { useState } from 'react'

import awLogoLarge from "./assets/images/logo/aw.svg"
import awLogo from "./assets/images/logo/logoSmall.png"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-neutral-900 w-full'>
    <nav className='justify-center flex flex-row'>
      {/* <img className='h-16' src={awLogo} /> */}
      <ul className='bg-neutral-950 rounded-2xl w-2/3 h-10 px-4 flex flex-row content-center'>
        <li className='list-none text-red-100 mx-4 self-center'><a>home</a></li>
        <li className='list-none text-red-100 mx-4 self-center'><a>about</a></li>
        <li className='list-none text-red-100 mx-4 self-center'><a>projects</a></li>
      </ul>
    </nav>
      <section className='flex flex-col content-center'>
        <img className='h-1/2 w-1/2' src={awLogoLarge} />
        <h1 className='rounded shadow bg-slate-100 text-red-600'>Coming Soon</h1>
      </section>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      
    </div>
  )
}

export default App
