/*
File name: Project.jsx
Student Name: Maria Ivy Guese
StudentID: 301393014
Date: January 29, 2025
*/

export default function Project() {
    return (
      <>
        {/* Page Header */}
        <h1>My Projects</h1>

        {/* C++ Learning Platform Project */}
        <div className="project">
          <h3><u>C++ Learning Platform</u></h3>
          <img src='../src/assets/cppIMG1.jpg' alt="C++ Learning Platform" width="400" height="400"/>
          <p>Developed an interactive web application for teaching C++ programming concepts. Created comprehensive curriculum and coding exercises, implemented a user-friendly interface, and integrated progress tracking features.</p>
          <p><strong>Outcome:</strong> Successfully used by over 500 students, with a 95% course completion rate.</p>
        </div>

        {/* Thesis Advisory Tool Project */}
        <div className="project">
          <h3><u>Thesis Advisory Tool</u></h3>
          <img src='../src/assets/cppIMG2.jpg' alt="Thesis Advisory Tool" width="400" height="400"/>
          <p>Designed and implemented a project management system for guiding students through their thesis projects. Features include milestone tracking, feedback mechanisms, and resource management.</p>
          <p><strong>Outcome:</strong> Improved thesis completion rates by 30% and increased average thesis grades by 15%.</p>
        </div>

        {/* Coding Competition Simulator Project */}
        <div className="project">
          <h3><u>Coding Competition Simulator</u></h3>
          <img src='../src/assets/cppIMG3.jpg'  alt="Coding Competition Simulator" width="400" height="400"/>
          <p>Created a web-based platform that simulates front-end and back-end development competitions. Developed problem sets, implemented a real-time scoring system, and designed a collaborative coding environment.</p>
          <p><strong>Outcome:</strong> Used to prepare over 200 students for national coding competitions, resulting in a 40% increase in top-10 finishes.</p>
        </div>
      </>
    );
}
