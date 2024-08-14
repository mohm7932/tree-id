import './App.css'

import {TreeIdPage} from './components/TreeIdPage'

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <TreeIdPage />
    </ChakraProvider>
  )
}

export default App
