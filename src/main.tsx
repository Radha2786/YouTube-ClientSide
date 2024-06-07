import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from '@/store/store'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AuthPageLayout from './components/Layout/auth-pages-layout.tsx'
import Signup from './pages/Signup.tsx'
import Login from './pages/Login.tsx'
import Home from './pages/Home.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
      {
        path : "/",
        element:(
          <AuthPageLayout authentication={false}>
            <Home />
          </AuthPageLayout>
        ),
      },
      {
        path : "/login",
        element:(
          <AuthPageLayout authentication={false}>
            <Login />
          </AuthPageLayout>
        ),
        
      },
      {
        path : "/signup",
        element:(
          <AuthPageLayout authentication={false}>
            <Signup />
          </AuthPageLayout>
        ),
      }
    ]
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
