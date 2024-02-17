import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className='flex flex-col items-center justify-center h-screen pl-7 pr-7'>
    <p className='text-2xl font-bold'>About</p>
      <p className='text-xl mb-3'> <Link to="/sidemain" className='font-bold underline'>Navigate to a different Header and Design</Link></p>
      <p className='text-xl'>This About's path is defined as child in both Main and SideMain. in Main it's link is '/about' & for Sidemain it is "/sidemain/about" <b>I have done "/sidemain/about" so that I can use the same component in Sidebar's space</b> </p>
    </div>
  )
}
