import React from 'react';
import Header from '../Header';
import'./index.css'
import Footer from '../Footer';

const Project = () =>{
    const myProjects = [
        {
            id: 1,
            name: "Project 1",
            description: "This is a project I worked on",
            technologies: "HTML, CSS, JavaScript, React.js",
            image: "https://via.placeholder.com/150",
            link: "https://www.google.com"
        },
        {
            id: 2,
            name: "Project 1",
            description: "This is a project I worked on",
            technologies: "HTML, CSS, JavaScript, React.js",
            image: "https://via.placeholder.com/150",
            link: "https://www.google.com"
        },
        {
            id: 3,
            name: "Project 1",
            description: "This is a project I worked on",
            technologies: "HTML, CSS, JavaScript, React.js",
            image: "https://via.placeholder.com/150",
            link: "https://www.google.com"
        },
        {
            id: 4,
            name: "Project 1",
            description: "This is a project I worked on",
            technologies: "HTML, CSS, JavaScript, React.js",
            image: "https://via.placeholder.com/150",
            link: "https://www.google.com"
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
                        <div className='project-image' style={{backgroundImage: `url(${myProjects.image})`}}></div>
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