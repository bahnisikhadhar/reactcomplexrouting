import React from 'react';
import { Link } from 'react-router-dom';

export default function Header2() {
  return (
    // <div>
    //   Header2
    //   <ul>
    //   <Link to="/about"> <li>About</li></Link>
    //    <Link to="/"><li>Home</li></Link>
    //   </ul>
    // </div>
    <div className='flex w-full bg-black text-white justify-between items-center pl-7 pr-7 pt-3 pb-3'>
    <p className="text-2xl font-bold ">Header2</p> 
      <ul className='flex gap-10'>
       <Link to="/about"> <li className='text-xl'>About</li></Link>
       <Link to="/"><li className='text-xl'>Home</li></Link>
      </ul>
    </div>
  )
}
