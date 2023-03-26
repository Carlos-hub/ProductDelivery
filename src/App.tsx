import { useState } from 'react'
import './tailwind.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './pages/Client/Login';
import { Router } from './Router';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
  )
}

export default App
