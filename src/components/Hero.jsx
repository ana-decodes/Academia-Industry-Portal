import { Link } from 'react-router-dom'
import Icon from './Icon'
import HeroVisual from './HeroVisual'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-text fade-up">
          <span className="badge">
            <span className="badge-dot" />
            Smart India Hackathon 2026
          </span>

          <h1>
            Connect Skills. Learn. Intern.{' '}
            <span className="gradient-text">Get Hired.</span>
          </h1>

          <p className="hero-sub">
            An AI-powered platform connecting students, academia and industry
            through skill mapping, personalized learning, internships and
            placement opportunities.
          </p>

          <div className="hero-actions">
            <Link to="/login" className="btn btn-primary btn-lg">
              Get Started <Icon name="arrow" size={18} />
            </Link>
            <a href="#how-it-works" className="btn btn-ghost btn-lg">
              Explore Platform
            </a>
          </div>

          <ul className="hero-tags">
            <li className="tag">AI Skill Mapping</li>
            <li className="tag">Personalized Learning</li>
            <li className="tag">Smart Matching</li>
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}
