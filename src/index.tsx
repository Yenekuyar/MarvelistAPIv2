import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPageController from './components/Templates/LoginPage/login-page.controller';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LoginPageController />
      },
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
