import { useState, useEffect } from 'react'
import { MantineProvider } from '@mantine/core'
import FormComponent from './form/OnboardingWizardForm'

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
    <MantineProvider defaultColorScheme={theme} forceColorScheme={theme}>
      <div style={{ padding: '16px' }}>
        <FormComponent />
      </div>
    </MantineProvider>
  )
}

export default App
