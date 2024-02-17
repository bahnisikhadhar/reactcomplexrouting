import React from 'react'
import Header1 from './Header1'
import { Outlet } from 'react-router-dom'
import Footer1 from './Footer1'

export default function Main() {
  return (
    <div>
     <Header1/>
     <Outlet/>
     <Footer1/>
    </div>
  )
}
