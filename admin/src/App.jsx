import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Admin from './pages/admin/Admin.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Admin/>

    </BrowserRouter>

    </>
  )
}

export default App
