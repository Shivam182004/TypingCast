import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TypingTest from './pages/typing/TypingTest.jsx';
import Home from './pages/home/Home.jsx'
import { store } from '../src/redux/store.js'
import { Provider } from 'react-redux'
import Contact from './pages/Contact.jsx';
import AboutPage from './pages/AboutPage.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path:"/typing-test",
        element: <TypingTest/>,
      },
      {
        path:"/contact-us",
        element: <Contact/>,
      },
      {
        path:"/about-us",
        element: <AboutPage/>,
      }
    ],
  },
  
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <RouterProvider router={router} />
  </Provider>,
)
