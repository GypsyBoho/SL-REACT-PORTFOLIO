import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import Portfolio from './components/pages/Portfolio.jsx'
import Resume from './components/pages/Resume.jsx'
import Error from './components/pages/Error.jsx'

// import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
