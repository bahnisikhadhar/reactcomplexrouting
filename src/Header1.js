import React from 'react';
import { Link } from 'react-router-dom';

export default function Header1() {
  return (
    <div>
      Header1
      <ul>
       <Link to="/about"> <li>About</li></Link>
       <Link to="/"><li>Home</li></Link>
      </ul>
    </div>
  )
}
