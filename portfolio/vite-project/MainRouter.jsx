/*
File name: MainRouter.jsx
Student Name: Maria Ivy Guese
StudentID: 301393014
Date: January 29, 2025
*/

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Services from './src/services'
import Project from './src/project'
import Layout from './components/Layout'

// Main Router component
const MainRouter = () => {
 return (
   <div>
     {/* Layout component (includes navigation) */}
     <Layout/>
     
     {/* Route definitions */}
     <Routes>
       {/* Home page route */}
       <Route exact path="/" element={<Home />} />
       
       {/* About page route */}
       <Route exact path="/about" element={<About />} />
       
       {/* Services page route */}
       <Route exact path="/services" element={<Services />} />
       
       {/* Project page route */}
       <Route exact path="/project" element={<Project />} />
       
       {/* Contact page route */}
       <Route exact path="/contact" element={<Contact />} />
     </Routes>
   </div>
 )
}

export default MainRouter
