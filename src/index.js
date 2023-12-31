import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Auth0Provider
    domain="dev-aigfioj4xc46qcwx.us.auth0.com"
    clientId="uWfuoG7EhdAokAPMMCRcRs7kuWrHy7eN"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Router>
    <App/>
    </Router>
  </Auth0Provider>

);

