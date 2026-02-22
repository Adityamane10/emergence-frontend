import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React',"Nextjs", 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind']
    },
    {
      title: 'Backend',
      skills: ['Python',"nestjs",'expressjs', 'FastAPI', 'Node.js', 'REST APIs']
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'Mysql']
    },
    {
      title: 'AI & Tools',
      skills: ['OpenAI', 'OpenRouter', 'Git', 'Docker']
    }
  ]

  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
