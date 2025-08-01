import React from 'react';
import Header from '../Header';
import'./index.css'
import Footer from '../Footer';

const Project = () =>{
    const myProjects = [
        {
            id: 1,
            name: "Movie Blogger",
            description: "This is a page where a user can share his Movie experiences",
            technologies: "React.js",
            image: "https://i.postimg.cc/Hs80WXhx/DALL-E-2025-02-02-12-35-39-A-modern-and-stylish-logo-for-a-Movie-Blogger-web-application-The-de.webp",
            link: "https://movie-blogger.vercel.app/"
        },
        {
            id: 2,
            name: "Jobby App",
            description: "This is a page where a user can find jobs and apply for them",
            technologies: ": React JS, JS, CSS, Bootstrap, Routing, REST API Calls, LocalStorage, JWT Token, Authorization, Authentication",
            image: "https://i.postimg.cc/fT7qqW0p/jobby-app-image.png",
            link: "https://jobbylee.ccbp.tech/login"
        },
         {
            id: 3,
            name: "Foodie Stop",
            description: "This is a fully responsive website that offers a comprehensive list of food items and detailed information about each item.",
            technologies: ":HTML, CSS, Bootstrap, React JS, React Router, React Icons, React Bootstrap",
            image: "https://i.postimg.cc/Zn5nwXTf/logo-transparent-png.png",
            link: "https://foodie-stop-xi.vercel.app/"
        },
        {
            id: 4,
            name: "Weather App",
            description: "A responsive React weather app showing real-time data with animated icons and search functionality using OpenWeatherMap API.",
            technologies: ":React, Axios, Bootstrap, Lottie, OpenWeatherMap API, HTML, CSS",
            image: "https://i.postimg.cc/6pptWgNY/weather.png",
            link: "https://weather-app-omega-eight-26.vercel.app/"
        }
    ]



    return(
        <div>
            <Header/>
            <div className="project-container">
                <h2 className='header-title'>Projects</h2>
                <p className='header-desc'>These are some of the projects I have worked on:</p>

                <div className="project-grid">
                    {myProjects.map((myProjects) =>
                    <div key={myProjects.id} className="project-card">
                        <img src={myProjects.image} alt={myProjects.name} className='project-image'/>
                        <div className="project-details">
                            <h3 className='project-title'>{myProjects.name}</h3>
                            <p className='project-desc'>{myProjects.description}</p>
                            <p className='technologies'><strong>Technologies:</strong> {myProjects.technologies}</p>
                            <a href={myProjects.link} target="_blank" rel="noreferrer" className='project-link'>View Project</a>
                            </div>
                    </div>
                    )}
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Project;