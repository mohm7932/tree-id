import './App.css'
import {LeafIdentificationKey} from './components/LeafIdentificationKey'
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
      <LeafIdentificationKey />
    </ChakraProvider>
    
  )
}

export default App
