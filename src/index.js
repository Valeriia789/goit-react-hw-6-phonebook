import ReactDOM from 'react-dom/client'
import React from 'react'
import { Provider } from 'react-redux'
import { App } from 'components/App'
import { store } from './redux/store'

import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
)