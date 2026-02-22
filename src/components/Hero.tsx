import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Aditya Avinash Mane</span>
        </h1>
        <p className="hero-subtitle">Full Stack Developer</p>
        <p className="hero-description">
          Building innovative web applications with modern technologies and AI integration
        </p>
        <div className="hero-cta">
          <a href="#about" className="btn btn-primary">Learn More</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
