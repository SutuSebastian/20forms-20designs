import { useState, useEffect } from 'react'
import ContactInquiryForm from './form/ContactInquiryForm'
import './styles.css'

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
    <div className={`app-container ${theme}`}>
      <ContactInquiryForm />
    </div>
  )
}

export default App
