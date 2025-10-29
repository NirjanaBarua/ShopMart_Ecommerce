import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router.js';
import { CartProvider } from './Context/CartContext.js';
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-0e2lazykna02jyan.uk.auth0.com"
      clientId="FBqIwAdCKnqdYXEnZ7eVu5rG5KOcOpTk"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </Auth0Provider>



  </StrictMode>,
)
