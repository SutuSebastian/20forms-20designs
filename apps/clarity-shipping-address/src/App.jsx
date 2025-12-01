import { useState, useEffect } from 'react'
import '@cds/core/input/register.js'
import '@cds/core/select/register.js'
import '@cds/core/checkbox/register.js'
import '@cds/core/button/register.js'
import '@cds/core/forms/register.js'
import FormComponent from './form/ShippingAddressForm'

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

  useEffect(() => {
    document.body.setAttribute('cds-theme', theme)
  }, [theme])

  return (
    <div
      style={{
        padding: '16px',
        background: theme === 'dark' ? '#1b2a32' : '#ffffff',
        color: theme === 'dark' ? '#adbbc4' : '#313131',
        minHeight: '100vh',
      }}
    >
      <FormComponent />
    </div>
  )
}

export default App
