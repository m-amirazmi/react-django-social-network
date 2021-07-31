import { BrowserRouter, Redirect } from 'react-router-dom'
import { PublicRoute } from './components/routes/PublicRoute'
import { PrivateRoute } from './components/routes/PrivateRoute'
import { routes } from './utils/routes'
import { AuthProvider } from './contexts/AuthContext'

export const App = () => {

  const renderRoutes = routes.map((route) => {
    if (!route.isProtected) return <PublicRoute restricted={route.restricted} component={route.component} path={route.path} exact />
    if (route.isProtected) return <PrivateRoute component={route.component} path={route.path} exact />
  })

  return (
    <AuthProvider>
      <BrowserRouter>
        {renderRoutes}
      </BrowserRouter>
    </AuthProvider>
  )
}
