import { useState, useEffect } from 'react'
import { GeistProvider, CssBaseline } from '@geist-ui/core'
import FormComponent from './form/JobApplicationForm'

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
    <GeistProvider themeType={theme}>
      <CssBaseline />
      <div style={{ padding: '16px' }}>
        <FormComponent />
      </div>
    </GeistProvider>
  )
}

export default App
