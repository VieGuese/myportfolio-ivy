/*
File name: Services.jsx
Student Name: Maria Ivy Guese
StudentID: 301393014
Date: January 29, 2025
*/

export default function Services() {
    return (
      <>
        {/* Page Header */}
        <h1>My Services</h1>
        
        {/* Web Development Service */}
        <div className="service">
          <h3>Web Development</h3>
          <img src='../src/assets/imgWebDev.jpg' alt="Web Development" width="200" height="150" />
          <p>Custom website design and development using modern frameworks like React.</p>
        </div>
  
        {/* Mobile App Development Service */}
        <div className="service">
          <h3>Mobile App Development</h3>
          <img src='../src/assets/imgMobDev.jpg' alt="Mobile App Development" width="200" height="150" />
          <p>Creating responsive and user-friendly mobile applications for iOS and Android.</p>
        </div>
  
        {/* C++ Programming Service */}
        <div className="service">
          <h3>C++ Programming</h3>
          <img src='../src/assets/imgCPP.jpg' alt="C++ Programming" width="200" height="150" />
          <p>Efficient and robust software solutions using C++ for various applications.</p>
        </div>
  
        {/* Programming Education Service */}
        <div className="service">
          <h3>Programming Education</h3>
          <img src='../src/assets/imgProgEd.jpg' alt="Programming Education" width="200" height="150" />
          <p>Personalized tutoring and curriculum development for aspiring programmers.</p>
        </div>
      </>
    );
}
