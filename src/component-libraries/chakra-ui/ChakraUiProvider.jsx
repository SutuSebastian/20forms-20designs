import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

function ChakraUiProvider({ children }) {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
}

export default ChakraUiProvider
