import { useState, useEffect } from 'react';

export default function Showcase() {
    const [projects, setProjects] = useState([]);

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
        <div>
            <h2>{projects[0].title}</h2>
            <p>{projects[0].description}</p>
            <ul>
            {projects[0].tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        </div>
        )}

      </>  
    );
}