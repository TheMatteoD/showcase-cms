import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mockProjects from '../data/mockProjects';

export default function ProjectDetails() {
    const { projectId } = useParams();
    const [project, setProject] = useState();

    
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