import React from 'react'
import ReactDOM from 'react-dom/client'
import '@atlaskit/css-reset'
import AppProvider from '@atlaskit/app-provider'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
)
