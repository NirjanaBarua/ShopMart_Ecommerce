import React, { ReactNode } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';


type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  

  const onRedirectCallback = (appState) => {
    window.location.replace(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain="dev-0e2lazykna02jyan.uk.auth0.com"              
      clientId="FBqIwAdCKnqdYXEnZ7eVu5rG5KOcOpTk"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
