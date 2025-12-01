import { useState, useEffect } from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
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

  useEffect(() => {
    document.documentElement.dataset.coreuiTheme = theme
  }, [theme])

  return (
    <div
      style={{
        padding: '16px',
        background: theme === 'dark' ? '#212631' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
        minHeight: '100vh',
      }}
    >
      <FormComponent />
    </div>
  )
}

export default App
