import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marque from './components/Marque'
import About from './components/About'
import Eyes from './components/Eyes'
function App() {
  return (
    <>
      <div className='w-full  text-white min-h-screen bg-zinc-900'>
        <Navbar/>
        <Landing/>
        <Marque/>
        <About/>
        <Eyes />
      </div>
    </>
  )
}

export default App
