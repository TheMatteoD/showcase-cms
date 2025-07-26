import { useEffect, useState } from "react";
import mockProjects from '../data/mockProjects';
import { Link } from 'react-router-dom'

export default function Archive() {
    const [projets, setProjects] = useState([]);

    useEffect(() => {
        setProjects(mockProjects);
    }, []);

    return (
      <>
        <h1>Archive Page</h1>
        {projets.length > 0 &&(
        <ul>
            {projets.map(project => <li key={project.id}><Link className="archive-list" to={`/archive/${project.id}`}>{project.title}</Link></li>)}
        </ul>
        )}
      </>  
    );
}