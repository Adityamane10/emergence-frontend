import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Portfolio',
      description: 'Interactive portfolio website with AI chat functionality using OpenRouter API, React TypeScript, Python FastAPI, and MongoDB',
      tech: ['React', 'TypeScript', 'Python', 'FastAPI', 'MongoDB', 'OpenRouter']
    },
    {
      title: 'Full Stack Web Applications',
      description: 'Developed multiple web applications with modern tech stack and responsive design',
      tech: ['React', 'Node.js', 'Express', 'MongoDB']
    },
    {
      title: 'Database Management Systems',
      description: 'Built and optimized database solutions for various applications',
      tech: ['MongoDB', 'PostgreSQL', 'MySQL', 'REST APIs']
    }
  ]

  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
