import React from 'react'
import { Outlet } from 'react-router-dom';
import Header2 from './Header2';
import Sidebar from './Sidebar';


export default function SideMain() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div>
        <Header2 />
        <Outlet />
      </div>
    </div>
  )
}
