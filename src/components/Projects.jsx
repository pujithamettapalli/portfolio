import React from "react";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>

      <div className="project-card">
        <h3>Lost and Found Management System</h3>
        <p>A web-based platform that allows users to report and search for lost or found items, helping people reconnect with their belongings efficiently.
        Technologies: HTML, CSS, JavaScript, Database.</p>
      </div>

      <div className="project-card">
        <h3>Blood Bank Locator System</h3>
        <p>A web application that helps users locate nearby blood banks and available donors during emergencies,
           with features like donor registration and search by location and blood group.</p>
      </div>
      <div className="project-card">
        <h3>Password Generator System</h3>
        <p>A Python-based application that generates strong random passwords using 
          letters, numbers, and special characters, allowing users to choose password length for better security.</p>
      </div>
    </section>
  );
}

export default Projects;