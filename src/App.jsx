import { useState } from 'react',
import './App.css' // imports the default styling
import { Outlet } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

    </>
  )
}

export default App
