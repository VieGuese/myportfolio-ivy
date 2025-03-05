/*
File name: About.jsx
Student Name: Maria Ivy Guese
StudentID: 301393014
Date: January 29, 2025
*/

// About Component
export default function About() {
    return (
    <>
      {/* Header Section */}
      <h1>About Me</h1>
      <p>Hello! I'm <b>Maria Ivy Guese</b>, a passionate educator turned aspiring software developer based in Canada. My journey in the tech world has been an exciting blend of teaching and learning, and I'm now eager to dive deeper into the world of software development. </p>
      
      {/* Profile Image and Resume Link */}
      <img src='../src/assets/Ivy_Image.jpeg' alt="Image of M.I.Guese" width="300" height="400"/>
      <h2><a href="../src/assets/Ivy_Guese_Resume.pdf" target="_blank" rel="noopener noreferrer">Click to View My Resume</a></h2>
      
      {/* Career Journey Section */}
      <h3><u>My Journey</u></h3>
      <p>I started my career as an AOL Technical Consultant, which ignited my passion for technology. This led me to a rewarding 13-year tenure as a College Professor in the Philippines, where I had the privilege of shaping young minds and nurturing the next generation of tech enthusiasts. </p>
      <div>During my time in academia, I:</div>
      <ul>
        <li>Advised students on thesis and capstone projects</li>
        <li>Coached teams for front-end and back-end development competitions</li>
        <li>Cultivated a deep understanding of both theoretical and practical aspects of computer science</li>
      </ul>
      
      {/* Future Goals Section */}
      <h3><u>The Next Chapter</u></h3>
      <p>Now, I'm embarking on an exciting new phase in my career. I've relocated to Canada, bringing with me a wealth of knowledge and a fresh perspective. While my hands-on software development experience may be limited, my background in tech consulting and education has equipped me with a unique set of skills:</p>
      <ul>
        <li>Strong problem-solving abilities</li>
        <li>Excellent communication and teamwork skills</li>
        <li>Adaptability and quick learning</li>
        <li>A solid foundation in computer science principles</li>
      </ul>
      <p>I'm actively seeking an entry-level software development position where I can apply my existing skills, gain practical industry experience, and contribute to innovative projects.</p>
      
      {/* Contact Section */}
      <h3><u>Let's Connect!</u></h3>
      <p>I'm always excited to connect with fellow developers, potential employers, or anyone passionate about technology. Feel free to reach out – I'd love to chat about potential opportunities or simply geek out over the latest tech trends!</p>
    </>
    );
}