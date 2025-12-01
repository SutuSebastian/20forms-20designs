import { useState, useEffect } from 'react'
import {
  FluentProvider,
  webLightTheme,
  webDarkTheme,
} from '@fluentui/react-components'
import FormComponent from './form/OrderTrackingForm'

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
    <FluentProvider theme={theme === 'dark' ? webDarkTheme : webLightTheme}>
      <div style={{ padding: '16px' }}>
        <FormComponent />
      </div>
    </FluentProvider>
  )
}

export default App
