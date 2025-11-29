import { useState, useEffect } from 'react'
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming'

import FormComponent from './form/PrivacyConsentForm'

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

  const customTheme = {
    ...DEFAULT_THEME,
    colors: {
      ...DEFAULT_THEME.colors,
      base: theme,
    },
  }

  return (
    <ThemeProvider theme={customTheme}>
      <div
        style={{
          padding: '16px',
          background: theme === 'dark' ? '#1f1f1f' : '#fff',
          minHeight: '100vh',
        }}
      >
        <FormComponent />
      </div>
    </ThemeProvider>
  )
}

export default App
