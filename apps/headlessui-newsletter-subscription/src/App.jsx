import { useState, useEffect } from 'react'
import NewsletterSubscriptionForm from './form/NewsletterSubscriptionForm'
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
      <NewsletterSubscriptionForm />
    </div>
  )
}

export default App
