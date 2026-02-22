import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <p className="contact-intro">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="contact-methods">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <a href="mailto:adityamane4650@gmail.com">adityamane4650@gmail.com</a>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <h3>Phone</h3>
              <a href="tel:+919673594650">+91 9673594650</a>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">💬</div>
              <h3>AI Chat</h3>
              <p>Use the chat button to ask me anything!</p>
            </div>
          </div>  
        </div>
      </div>
    </section>
  )
}

export default Contact
