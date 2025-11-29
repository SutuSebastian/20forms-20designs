import { useState, useEffect } from 'react'
import { EuiProvider } from '@elastic/eui'

import FormComponent from './form/CustomerFeedbackForm'

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
    <EuiProvider colorMode={theme}>
      <div
        style={{
          padding: '16px',
          background: theme === 'dark' ? '#1D1E24' : '#fff',
          minHeight: '100vh',
        }}
      >
        <FormComponent />
      </div>
    </EuiProvider>
  )
}

export default App
