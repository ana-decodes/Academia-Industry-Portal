import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <div className="cta-box">
          <h2>Ready to bridge the skill gap?</h2>
          <p>Join the platform that connects learning to real careers.</p>
          <Link to="/login" className="btn btn-primary btn-lg">
            Get Started <Icon name="arrow" size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
