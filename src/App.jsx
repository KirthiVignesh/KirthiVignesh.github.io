import NavBar from './components/NavBar.jsx'
import React from 'react'
import { Stack } from '@chakra-ui/react'
import Intro from './pages/Intro.jsx'

function App() {

  return (
    <div className="App">
     <NavBar/>
     <Intro/>
    </div>
  )
}

export default App
