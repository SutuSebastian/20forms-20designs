import { useState, useEffect } from 'react'
import { GluestackUIProvider, Box } from '@gluestack-ui/themed'
import FormComponent from './form/SupportTicketForm'

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

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
    <GluestackUIProvider colorMode={theme}>
      <Box
        p="$4"
        bg={theme === 'dark' ? '$backgroundDark900' : '$backgroundLight0'}
        sx={{ minHeight: '100vh' }}
      >
        <FormComponent theme={theme} />
      </Box>
    </GluestackUIProvider>
  )
}

export default App
