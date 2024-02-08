import React from 'react';
import Layout from './layout.jsx';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// Import missing components
import Header from "./component/header/header";
import Home from './component/home/home.jsx';
import Footer from "./component/footer/footer";
import About from './component/about/about.jsx';
import Contact from './component/Contact/Contact.jsx';
import User from './component/user/user.jsx';
import Github from './component/Github/Github.jsx';



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "Contact",
//         element: <Contact />
//       },
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="Contact" element={<Contact />}/>
      <Route path="github" element={<Github />}/>
      <Route path="user/:userId" element={<User />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
