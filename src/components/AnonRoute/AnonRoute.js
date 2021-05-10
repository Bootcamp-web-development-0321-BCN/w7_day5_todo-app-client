import React from 'react'
import { Redirect, Route } from 'react-router'
import { withAuth } from '../../context/auth.context';

// Ruta solo disponible si el usuario no ha iniciado sesión
function AnonRoute(routeProps) {
  // Value viene del AuthProvider
  const { isLoggedIn, isLoading } = routeProps;

  // props provienen del componente AnonRoute
  const { exact, path, redirectPath = "/todo-list" } = routeProps;
  const ComponentToShow = routeProps.component;

  // AuthProvider todavía esta cargando la infirmación de la API para comprobar si hay usuario en sesión
  if(isLoading) return <p>Loading...</p>;
  return (
    <Route 
      exact={exact}
      path={path}
      render={
        function(props) {
          if(isLoggedIn) return <Redirect to={redirectPath} />
          else if(!isLoggedIn) return <ComponentToShow {...props} />
        }
      }
    />
  )
}

export default withAuth(AnonRoute);