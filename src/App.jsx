import { useState } from 'react'
import Register from './pages/Register' 
import Login from './pages/Login'
import Home from './pages/Home'
import './style.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Register/>
    </>
  )
}

export default App
