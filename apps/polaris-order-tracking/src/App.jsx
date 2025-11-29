import { useState, useEffect } from 'react'
import { AppProvider } from '@shopify/polaris'
import '@shopify/polaris/build/esm/styles.css'
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
    <AppProvider>
      <div
        style={{
          padding: '16px',
          background: theme === 'dark' ? '#1a1a1a' : '#fff',
          color: theme === 'dark' ? '#fff' : '#000',
          minHeight: '100vh',
        }}
      >
        <FormComponent />
      </div>
    </AppProvider>
  )
}

export default App
