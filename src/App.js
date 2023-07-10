import React from 'react'
import Navbar from './components/navbar'

function App() {
  const a = 10;
  const b = 10;
  return (
    <div>
      {
        a
      }
      < Navbar a = {a} b={b} />
    </div>
  )
}

export default App;
