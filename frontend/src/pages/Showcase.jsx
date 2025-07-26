import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Showcase() {
    const [projects, setProjects] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const mockProjects = [
        {
            id: "1",
            title: "Project 1",
            description: "Project 1's description.",
            image: null,
            tags: ["Python", "Flask", "React"]
        },
        {
            id: "2",
            title: "Project 2",
            description: "Project 2's description",
            image: null,
            tags: ["C#", ".Net", "Angular"]
        }
    ];

    useEffect(() => {
        setProjects(mockProjects); 
    }, []);


    return (
      <>
        <h1>Showcase Page</h1>


        {projects.length > 0 && (
            <ProjectCard project={projects[currentIndex]} />
        )}

      </>  
    );
}