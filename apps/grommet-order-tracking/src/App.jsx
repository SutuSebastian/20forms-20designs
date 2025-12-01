import { useState, useEffect } from 'react'
import { Grommet, Box } from 'grommet'
import { grommet } from 'grommet/themes'
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
    <Grommet theme={grommet} themeMode={theme} full={false}>
      <Box pad="medium">
        <FormComponent />
      </Box>
    </Grommet>
  )
}

export default App
