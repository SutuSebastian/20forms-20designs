import { useState, useEffect } from 'react'
import { TamaguiProvider, Theme } from 'tamagui'
import config from './tamagui.config'
import FormComponent from './form/PasswordChangeForm'

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
    <TamaguiProvider config={config}>
      <Theme name={theme}>
        <div
          style={{
            padding: '16px',
            backgroundColor: theme === 'dark' ? '#000' : '#fff',
            minHeight: '100vh',
          }}
        >
          <FormComponent />
        </div>
      </Theme>
    </TamaguiProvider>
  )
}

export default App
