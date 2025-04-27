import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div id='app'>
     <Routes>
      <Route path="/" element={<HomePage/>} />
     </Routes>
  </div>
    </>
  )
}

export default App
