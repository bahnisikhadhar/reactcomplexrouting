import React from 'react'
import Header1 from './Header1'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <div>
     <Header1/>
     <Outlet/>
    </div>
  )
}
