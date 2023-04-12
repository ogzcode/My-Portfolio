import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from "./components/main/Main";
import Projects from './components/project/Projects';
import Design from './components/desing/Design';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Main/>
      },
      {
        path: "/project",
        element: <Projects/>
      },
      {
        path: "/design",
        element: <Design/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
