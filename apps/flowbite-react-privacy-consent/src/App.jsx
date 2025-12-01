import { useState, useEffect } from 'react'
import { Flowbite } from 'flowbite-react'
import FormComponent from './form/PrivacyConsentForm'

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
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <Flowbite>
      <div className={`p-4 min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <FormComponent />
      </div>
    </Flowbite>
  )
}

export default App
