import { useState, useEffect } from 'react'
import { Client as Styletron } from 'styletron-engine-monolithic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, DarkTheme, BaseProvider } from 'baseui'
import FormComponent from './form/UserLoginForm'

const engine = new Styletron()

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
    <StyletronProvider value={engine}>
      <BaseProvider theme={theme === 'dark' ? DarkTheme : LightTheme}>
        <div style={{ padding: '16px' }}>
          <FormComponent />
        </div>
      </BaseProvider>
    </StyletronProvider>
  )
}

export default App
