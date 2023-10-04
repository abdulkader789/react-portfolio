import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './styles.css'; // Import the Tailwind CSS file
import Main from "./components/Layout/Main"

import Home from './components/Home/Home'
import About from './components/About/About'
import Project from './components/Project/Project'
import Skill from './components/Skill/Skill'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />

    ,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "home",
        element: <Home></Home>
      },

      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'project',
        element: <Project></Project>
      },
      {
        path: 'skill',
        element: <Skill></Skill>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
