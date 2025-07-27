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