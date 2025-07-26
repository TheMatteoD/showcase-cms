import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetails() {
    const { projectId } = useParams();
    const [project, setProject] = useState();

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
        setProject(mockProjects.find(p => p.id === projectId));
    }, []);


    if (!project) return <p>Loading...</p>;

    return (
        <>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            {project.tags && (
                <ul>
                    {project.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            )}
        </>
    );
}