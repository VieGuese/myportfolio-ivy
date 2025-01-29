/*
File name: Home.jsx
Student Name: Maria Ivy Guese
StudentID: 301393014
Date: January 29, 2025
*/

import { Link } from 'react-router-dom';

export default function Home() {
    return ( 
        <>
            {/* Welcome Section */}
            <h1>Welcome to My Portfolio</h1>
            
            {/* Mission Statement Section */}
            <h2>Mission Statement:</h2>
            <h3>Empowering Learners Through C++ Education</h3>
            <p>My mission is to demystify C++ programming and transform it from a complex language into an accessible and enjoyable learning journey. I aim to create a welcoming, supportive environment where aspiring programmers can build confidence, develop practical skills, and discover the joy of coding through clear, engaging, and personalized C++ instruction.</p>
            
            {/* Key Focus Areas Section */}
            <h3>Key Focus Areas:</h3>
            <ul>
                <li>Breaking down complex programming concepts into digestible lessons</li>
                <li>Providing hands-on, practical learning experiences</li>
                <li>Cultivating a fun and encouraging learning atmosphere</li>
                <li>Helping students build a strong foundation in C++ programming</li>
                <li>Bridging the gap between theoretical knowledge and real-world application</li>
            </ul>
            
            {/* Closing Statement */}
            <p>Whether you're a beginner taking your first steps into programming or looking to enhance your coding skills, my goal is to make your C++ learning experience both enlightening and enjoyable.</p>
            
            {/* Link to About Me Page */}
            <h2><Link to="/about" className="cta-button">Learn More About Me</Link></h2>
        </>
    );
}
