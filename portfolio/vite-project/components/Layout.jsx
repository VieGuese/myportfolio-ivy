import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Layout() {
return (
 <>
 <img src='../src/assets/logo.JPG' alt="My Portfolio Logo" className="logo" />
 <nav> 
    <Link to="/">Home</Link> | 
    <Link to="/about">About Me</Link> | 
    <Link to="/project">Project</Link>| 
    <Link to="/services">Services</Link>|
    <Link to="/contact">Contact</Link>
 </nav>
 <br/>
 <hr /> 
 </> 
 );
 }