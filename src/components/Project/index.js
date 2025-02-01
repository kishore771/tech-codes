import React from 'react';
import Header from '../Header';

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
                <h2>Projects</h2>
                <p>These are some of the projects I have worked on:</p>

                <div className="row">
                    {myProjects.map((myProjects) =>
                    <div key={myProjects.id} className="project-card">
                        <div className='project-image' style={{backgroundImage: `url(${myProjects.image})`}}></div>
                        <div className="project-details">
                            <h3>{myProjects.name}</h3>
                            <p>{myProjects.description}</p>
                            <p><strong>Technologies:</strong> {myProjects.technologies}</p>
                            <a href={myProjects.link} target="_blank" rel="noreferrer">View Project</a>
                            </div>
                    </div>
                    )}
                    </div>
                </div>

        </div>
    )
}

export default Project;