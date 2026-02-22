import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ChatBot from './components/ChatBot'
import './App.css'

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div className="app">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <button 
        className="chat-toggle"
        onClick={() => setIsChatOpen(!isChatOpen)}
        aria-label="Toggle chat"
      >
        {isChatOpen ? '✕' : '💬'}
      </button>

      {isChatOpen && <ChatBot onClose={() => setIsChatOpen(false)} />}
    </div>
  )
}

export default App
