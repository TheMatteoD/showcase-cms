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
        <div className="page-container">
            <h1>{project.title}</h1>

            {project.github_link && (
                <p>
                    <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                        {project.github_link}
                    </a>
                </p>
            )}

            <div className="project-info-row">
                <div className="project-short-desc">
                    <h3>Overview</h3>
                    <p>{project.short_description}</p>
                </div>

                <div className="project-tags-section">
                    <h3>Tags</h3>
                    {project.tags && (
                        <ul className="project-tags">
                            {project.tags.map(tag => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div className="project-description">
                <h3>Description</h3>
                <p>{project.description}</p>
            </div>
        </div>
    );
}
