import React from "react";
import project1Img from '../assets/project1Img.png';
import project2Img from '../assets/project2Img.png';
import project3Img from '../assets/project3Img.jpg';
import project4Img from '../assets/project4Img.png';

export default function Projects() {
    const projects = [
        {
            title: "My first portfolio",
            image: project1Img,
            // link: "",
        },
        {
            title: "Sasquest",
            image: project2Img,
            // link: "",
        },
        {
            title: "Upstream Travel App",
            image: project3Img,
            // link: "",
        },
        {
            title: "Culinary Connections App",
            subtitle: "React Hooks",
            image: project4Img,
            // link: "",
        },
    ];

    return (
        <section>
            <div className="project-container">
                <div className="flex flex col w-full">
                    {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
                    <h2 className="section-title">Apps I've Built</h2>
                    <p className='project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div className="project-grid">
                    {projects.map((project) => (
                            <div key={project.title} className="project-item">
                                <div>
                                    <h1 className="">
                                        {project.title}
                                    </h1>
                                <img
                                    alt="gallery"
                                    className="w-full h-full"
                                    src={project.image}
                                />
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