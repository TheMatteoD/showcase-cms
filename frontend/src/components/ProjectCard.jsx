export default function ProjectCard({ project }) {
    if (!project) return null;

    return (
        <div className="project-card">
            <div className="project-card-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <ul>
                    {project.tags?.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </div>
        </div>
    );
}