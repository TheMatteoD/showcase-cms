import { useEffect, useState } from "react";

export default function Archive() {
    const [projets, setProjects] = useState([]);

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
        },
        {
            id: "3",
            title: "Project 3",
            description: "Project 3's description",
            image: null,
            tags: undefined
        },
        {
            id: "4",
            title: "Project 4",
            description: "Project 4's description",
            image: null,
            tags: undefined
        },
        {
            id: "5",
            title: "Project 5",
            description: "Project 5's description",
            image: null,
            tags: undefined
        }
    ];

    useEffect(() => {
        setProjects(mockProjects);
    }, []);

    return (
      <>
        <h1>Archive Page</h1>
        {projets.length > 0 &&(
        <ul>
            {projets.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>
        )}
      </>  
    );
}