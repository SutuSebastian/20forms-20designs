import { useState, useEffect } from 'react'
import FormComponent from './form/CheckoutPaymentForm'

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
    <div
      style={{
        padding: '16px',
        minHeight: '100vh',
        background: theme === 'dark' ? '#1b1b1b' : '#fff',
        color: theme === 'dark' ? '#f0f0f0' : '#1b1b1b',
      }}
    >
      <FormComponent theme={theme} />
    </div>
  )
}

export default App
