import React from 'react';
import './index.css';
import Header from '../Header';
import Footer from '../Footer';

const About = () => { 
    return (
        < >
         <Header/>
        <div className="aboutme-container">   
            <h1 className="aboutme-header">About Me</h1>
            <dsection className="aboutme-intro">
            <p className="intro-text">
               Hi! I'm Kishore, I am a B.com graduate in computer applications from Dr.Br.Ambedkar degree college, baghlingampally, Chikkadpally. 
               I have a solid understanding of HTML, CSS, JavaScript, and React.js, and I am eager to apply my skills to build beautiful and functional websites.
            </p>
        </dsection>
        <section className="aboutme-section">
            <h2 className='section-title'>Education</h2>
            <ul>
                <li>Bachelor of Commerce (Computer Applications) | Dr.Br.Ambedkar degree college | CGPA : <strong>8.16</strong> | (2020 - 2023) </li>
                <li>XII (Board of Intermediate) | Tapasya Junior College | <strong>65.9</strong>% | (2018- 2020)</li>
                <li>X (SSC) | Sri Vivekananda High School | CGPA : <strong>7.8</strong></li>
            </ul>
        </section>

        <section className="aboutme-section">
            <h2 className='section-title'>Skills</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
            </ul>
        </section>
        <section className="aboutme-outro">
        <p className="outro-text">
          I am passionate about leveraging technology to solve real-world problems and am excited to contribute meaningfully to the tech field. Let’s <span className="highlight">connect and innovate together!</span>
        </p>
      </section>
        </div>
        <Footer/>
        </>
    );
}

export default About;