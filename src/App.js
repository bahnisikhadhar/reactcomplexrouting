import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';
import Main from './Main';
import Home from './Home';
import About from './About';
import SideMain from './SideMain';
import Home2 from './Home2';
import SidebarAbout from './SidebarAbout';
import SidebarDetails from './SidebarDetails';
import Stepper from './stepper/Stepper';
import AuditProjectSetup1 from './stepper/AuditProjectSetup1';
import AuditProjectSetup2 from './stepper/AuditProjectSetup2';
import AuditProjectSetup3 from './stepper/AuditProjectSetup3';
import AuditProjectSetup4 from './stepper/AuditProjectSetup4';
import Contact from './Contact';

const router = createBrowserRouter(
  // createRoutesFromElements(
  //   <>
  //     <Route path='/' element={<Main />}>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //     </Route>
  //     <Route path='/sidemain' element={<SideMain />}>
  //       <Route path="/sidemain" element={<Home2 />} />
  //       <Route path="/sidemain/contact" element={<Contact />} />
  //       <Route path="/sidemain/sideabout" element={<SidebarAbout />} />
  //       <Route path="/sidemain/sidedetails" element={<SidebarDetails/>} />
  //     </Route>
  //   </>
  // )

  //--------------------THE ABOVE IS SIMILAR TO THE BELOW ONLY---------------------------------
  [
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element : <Home/>,
      },
      {
        path:"/about",
        element: <About/>,
      },
      {
        path:"/stepper",
        element: <Stepper/>,
        children: [
          {
            path:"/stepper",
            element: <AuditProjectSetup1/>,
          },
          {
            path:"/stepper/projectsetup2",
            element: <AuditProjectSetup2/>,
          },
          {
            path:"/stepper/projectsetup3",
            element: <AuditProjectSetup3/>,
          },
          {
            path:"/stepper/projectsetup4",
            element: <AuditProjectSetup4/>,
          },
        ]
      },
     
    ]
  },

  {
    path: "/sidemain",
    element: <SideMain/>,
    children: [
      {
        path:"/sidemain",
        element: <Home2/>
      },
      {
        path:"/sidemain/sideabout",
        element: <SidebarAbout/>,
      },
      {
        path:"/sidemain/about",
        element: <About/>,
      },
      {
        path:"/sidemain/sidedetails",
        element: <SidebarDetails/>,
      },
      {
        path:"/sidemain/stepper",
        element: <Stepper/>,
        children: [
          {
            path:"/sidemain/stepper",
            element: <AuditProjectSetup1/>,
          },
          {
            path:"/sidemain/stepper/projectsetup2",
            element: <AuditProjectSetup2/>,
          },
          {
            path:"/sidemain/stepper/projectsetup3",
            element: <AuditProjectSetup3/>,
          },
          {
            path:"/sidemain/stepper/projectsetup4",
            element: <AuditProjectSetup4/>,
          },
        ]
      },
    ]
  }
]
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
