import React from "react";
import project1Img from '../assets/project1Img.png';
import project2Img from '../assets/project2Img.png';
import project3Img from '../assets/project3Img.jpg';
import project4Img from '../assets/project4Img.png';
import '../styles/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'; 

export default function Projects() {
    const projects = [
        {
            title: "My first portfolio",
            image: project1Img,
            link: "",
        },
        {
            title: "Sasquest",
            image: project2Img,
            link: "https://sasquest-52c8b076a68a.herokuapp.com/",
        },
        {
            title: "Upstream Travel App",
            image: project3Img,
            link: "https://elenagurchinskaia.github.io/upstream-travel/",
        },
        {
            title: "Culinary Connections App",
            subtitle: "React Hooks",
            image: project4Img,
            link: "https://culinary-connections-2a73fa545141.herokuapp.com/",
        },
    ];

    return (
        <section>
            <div className="project-container">
                <div>
                <i className="fa-solid fa-code mx-auto inline-block w-10 mb-4">
                <FontAwesomeIcon icon={faCode} />
                </i>
                    <h2 className="section-title">Apps I've Built</h2>
                    <p className='project-description'>Here are a few of the most recent projects I've built and contributed to. </p>
                </div>
                <div className="project-grid">
                    {projects.map((project) => (
                            <div key={project.title}>
                                <div>
                                    <h5>
                                        {project.title}
                                    </h5>
                                <img
                                    alt="gallery"
                                    className="project-item"
                                    src={project.image}
                                />
                                <div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">Visit the project</a>
                                </div>
                                </div>
                                <br />
                                <br />
                            </div>
                    ))}
                </div>
            </div>
        </section>
    );
}