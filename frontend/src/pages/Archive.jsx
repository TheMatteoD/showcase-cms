import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

export default function Archive() {
    const [projets, setProjects] = useState([]);

    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_BASE_URL}/api/get-projects.php`)
        .then(res => res.json())
        .then(data => setProjects(data))
        .catch(err => console.error(err));
    }, []);

    return (
      <div className="page-container">
        <h1>Archive Page</h1>
        {projets.length > 0 &&(
        <ul>
            {projets.map(project => <li key={project.id}><Link className="archive-list" to={`/archive/${project.id}`}>{project.title}</Link></li>)}
        </ul>
        )}
      </ div>  
    );
}