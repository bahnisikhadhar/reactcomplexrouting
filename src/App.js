import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';
import Main from './Main';
import Home from './Home';
import About from './About';
import SideMain from './SideMain';
import Home2 from './Home2';
import Contact from './Contact';
import SidebarAbout from './SidebarAbout';
import SidebarDetails from './SidebarDetails';

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
      }
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
        path:"/sidemain/sidedetails",
        element: <SidebarDetails/>,
      }
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
