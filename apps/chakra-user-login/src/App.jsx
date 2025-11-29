import { useState, useEffect } from 'react'
import { ChakraProvider, Box, defaultSystem } from '@chakra-ui/react'
import FormComponent from './form/UserLoginForm'

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  // Listen for theme changes from parent
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <ChakraProvider value={defaultSystem}>
      <Box
        p={4}
        bg={theme === 'dark' ? 'gray.900' : 'white'}
        color={theme === 'dark' ? 'white' : 'gray.800'}
        colorPalette={theme === 'dark' ? 'dark' : 'light'}
        minH="100vh"
      >
        <FormComponent />
      </Box>
    </ChakraProvider>
  )
}

export default App
