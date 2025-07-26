import { useEffect, useState } from "react";
import mockProjects from '../data/mockProjects';

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
            {projets.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>
        )}
      </>  
    );
}