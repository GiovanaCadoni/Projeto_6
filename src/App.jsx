import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'
import AppRoutes from './routes'
import CartDrawer from './components/CartDrawer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
      <CartDrawer />
    </ThemeProvider>
  )
}

export default App