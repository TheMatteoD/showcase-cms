export default function ProjectCard({ project }) {
    if (!project) return null;

    return (
        <div className="project-card">
            <div className="project-card-info">
                <h1>{project.title}</h1>

                {project.tags && (
                    <ul className="project-tags">
                        {project.tags.map(tag => (
                        <li key={tag}>{tag}</li>
                        ))}
                    </ul>
                    )}

                <p>{project.description}</p>
            </div>
        </div>
    );
}