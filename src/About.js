import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      About
      <Link to="/sidemain">Sidemain</Link>
      <p>This About's path is defined as child in both Main and SideMain. in Main it's link is '/about' & for Sidemain it is "/sidemain/about" <b>I have done "/sidemain/about" so that I can use the same component in Sidebar's space</b> </p>
    </div>
  )
}
