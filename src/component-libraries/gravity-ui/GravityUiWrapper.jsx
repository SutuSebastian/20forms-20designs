import React from 'react'
import { ThemeProvider } from '@gravity-ui/uikit'
import '@gravity-ui/uikit/styles/fonts.css'
import '@gravity-ui/uikit/styles/styles.css'

export const GravityUiWrapper = ({ children, themeMode = 'light' }) => {
  const selectedTheme = themeMode === 'dark' ? 'dark' : 'light'
  return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
}
