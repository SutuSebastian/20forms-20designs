import React from 'react'
import { ThemeProvider } from '@gravity-ui/uikit'
import '@gravity-ui/uikit/styles/fonts.css'
import '@gravity-ui/uikit/styles/styles.css'

export const GravityUiWrapper = ({ children }) => {
  return <ThemeProvider theme="light">{children}</ThemeProvider>
}
