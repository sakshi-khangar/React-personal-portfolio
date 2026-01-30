import React from 'react'

function Projects(){
  return (
    <section className='section'>
        <h2>Projects</h2>
        <div className='project-card'>
            <h3>Recipe Book App</h3>
            <p>React app to add, view and delete recipes.</p>
        </div>

        <div className="project-card">
            <h3>Movie Search App</h3>
            <p>API based app to search movies with details.</p>
        </div>

        <div className="project-card">
            <h3>Form Validation App</h3>
            <p>User registration form using React Hooks.</p>
        </div>

    </section>
  );
}

export default Projects
