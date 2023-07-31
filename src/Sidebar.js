import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div>
      <div style={{width:"100%",height:"90vh",border:"1px solid black"}}>Sidebar
      <ul>
       <Link to="/sidemain/sidedetails"> <li>SidebarDetails</li></Link>
       <Link to="/sidemain/sideabout"><li>SidebarAbout</li></Link> 
       <Link to="/sidemain/about"><li>About</li></Link> 
       <Link to="/sidemain/stepper"><li>Stepper</li></Link> 
      </ul>
      </div>
    </div>
  )
}
