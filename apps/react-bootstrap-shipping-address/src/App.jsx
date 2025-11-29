import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormComponent from './form/ShippingAddressForm'

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
    <div
      data-bs-theme={theme}
      className="bg-body"
      style={{ padding: '16px', minHeight: '100vh' }}
    >
      <FormComponent />
    </div>
  )
}

export default App
