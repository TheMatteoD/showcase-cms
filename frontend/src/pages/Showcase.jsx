import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Showcase() {
    const [projects, setProjects] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);


    function goToPrevious() {
        setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    }

    function goToNext() {
        setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/api/get-projects.php`)
        .then(res => res.json())
        .then(data => setProjects(data))
        .catch(err => console.error(err));
    }, []);


    return (
      <>

        <div className='carousel'>

            <button className='arrow-button' onClick={goToPrevious}>{"<<"}</button>
            
            {projects.length > 0 && (
                <ProjectCard project={projects[currentIndex]} />
            )}
            
            <button className='arrow-button' onClick={goToNext}>{">>"}</button>
            
        </div>

      </>  
    );
}