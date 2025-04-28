import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import LandingPage from './components/Home/LandingPage.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div id='app'>
     <Routes>
      <Route path="/" element={<LandingPage/>} />
     </Routes>
  </div>
    </>
  )
}

export default App
