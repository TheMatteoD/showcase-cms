import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import mockProjects from '../data/mockProjects';

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
        setProjects(mockProjects); 
    }, []);


    return (
      <>
        <h1>Showcase Page</h1>

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