import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'
import '@fontsource/dm-sans/700.css'
import App from './App.jsx'

const theme = createTheme({
  typography: {
    fontFamily: '"DM Sans", system-ui, sans-serif',
    h5: { fontWeight: 700, letterSpacing: '-0.01em' },
    subtitle1: { fontWeight: 500 },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)