import { useState, useEffect } from 'react'
import { Box, ColorSchemeProvider } from 'gestalt'
import ProfileUpdateForm from './form/ProfileUpdateForm'

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
    <ColorSchemeProvider colorScheme={theme}>
      <Box color="default" padding={4}>
        <ProfileUpdateForm />
      </Box>
    </ColorSchemeProvider>
  )
}

export default App
