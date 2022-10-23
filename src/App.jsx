import NavBar from './components/NavBar.jsx'
import React from 'react'
import { Stack, VStack } from '@chakra-ui/react'
import Intro from './pages/Intro.jsx'

function App() {

  return (
    <div className="App">
      <VStack>
     <NavBar/>
     <Intro/>
     </VStack>
    </div>
  )
}

export default App
