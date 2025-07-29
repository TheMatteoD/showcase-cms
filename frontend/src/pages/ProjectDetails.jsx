import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetails() {
    const { projectId } = useParams();
    const [project, setProject] = useState();

    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/api/get-project.php?id=${projectId}`)
            .then(res => res.json())
            .then(data => setProject(data))
            .catch(err => console.error(err));
    }, [projectId]);


    if (!project) return <p>Loading...</p>;

    return (
        <>
            <h1>{project.title}</h1>
            <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                {project.github_link}
            </a>
            <h3>{project.short_description}</h3>

            {project.tags && (
                <ul>
                    {project.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            )}

            <p>{project.description}</p>

        </>
    );
}