import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div>
      <div className='w-full h-screen border-r-2 border-black mr-10'>
      <h1 className='text-2xl font-bold pt-3 pb-3 underline bg-red-400 pl-3'>Sidebar</h1>
      <ul className='flex flex-col gap-3 pl-3 pt-5 text-xl underline cursor-pointer'>
      <Link to="/sidemain"> <li>SidebarDashboard</li></Link>
      <Link to="/sidemain/sidedetails"> <li>SidebarDetails</li></Link>
       <Link to="/sidemain/sideabout"><li>SidebarAbout</li></Link> 
       <Link to="/sidemain/about"><li>About</li></Link> 
       <Link to="/sidemain/stepper"><li>Stepper</li></Link> 
      </ul>
      </div>
    </div>
  )
}
