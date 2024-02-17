import React from 'react'
import { Outlet } from 'react-router-dom';
import Header2 from './Header2';
import Sidebar from './Sidebar';
import Footer2 from './Footer2';


export default function SideMain() {
  return (
    <div>
    <div className='flex w-full'>
      <Sidebar />
      <div className='w-full'>
        <Header2 />
        <Outlet />
      </div>
    </div>
    <Footer2/>
    </div>
  )
}
