// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "./component/pages/Home";
// import About from "./component/pages/About";
// import Projects from "./component/pages/Projects";
// import Contact from "./component/pages/Contact";
// import NavBar from "./component/NavBar";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// // ✅ Corrected Layout
// const Layout = () => (
//   <>
//     <NavBar />
//     <Outlet />
//   </>
// );

// // ✅ Updated routes to include layout
// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />, // wrap with NavBar
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/about", element: <About /> },
//       { path: "/projects", element: <Projects /> },
//       { path: "/contact", element: <Contact /> }, // fixed casing
//     ],
//   },
// ]);

// const App = () => {
//   return <RouterProvider router={routes} />;
// };

// export default App;

import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
  <>
  <Navbar/>
  <Home/>
  <About/>
 <Projects/>
 <Contact/>
  </>
  )
}

export default App