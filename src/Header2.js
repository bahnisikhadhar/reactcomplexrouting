import React from 'react';
import { Link } from 'react-router-dom';

export default function Header2() {
  return (
    <div>
      Header2
      <ul>
      <Link to="/about"> <li>About</li></Link>
       <Link to="/"><li>Home</li></Link>
      </ul>
    </div>
  )
}
