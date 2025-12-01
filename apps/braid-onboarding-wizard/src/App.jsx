import { useEffect } from 'react'
import 'braid-design-system/reset'
import { BraidProvider, Box } from 'braid-design-system'
import apacTheme from 'braid-design-system/themes/apac'
import { colorModeQueryParamCheck } from 'braid-design-system/color-mode/query-param'
import OnboardingWizardForm from './form/OnboardingWizardForm'

// Extract the darkMode class name from Braid's internal script
const getDarkModeClass = () => {
  const match = colorModeQueryParamCheck.match(/classList\.add\('([^']+)'\)/)
  return match ? match[1] : null
}

const darkModeClass = getDarkModeClass()

function App() {
  useEffect(() => {
    // Check URL for theme parameter
    const params = new URLSearchParams(window.location.search)
    const theme = params.get('theme')

    if (theme === 'dark' && darkModeClass) {
      document.documentElement.classList.add(darkModeClass)
    } else if (darkModeClass) {
      document.documentElement.classList.remove(darkModeClass)
    }
  }, [])

  // Listen for theme changes from parent
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME' && darkModeClass) {
        if (event.data.theme === 'dark') {
          document.documentElement.classList.add(darkModeClass)
        } else {
          document.documentElement.classList.remove(darkModeClass)
        }
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <BraidProvider theme={apacTheme}>
      <Box padding="large">
        <OnboardingWizardForm />
      </Box>
    </BraidProvider>
  )
}

export default App
