import Icon from './Icon'

export default function CTA() {
  // Temporary: later this can navigate to a Sign Up page
  const handleGetStarted = () => {
    alert('Sign-up is coming soon! This is only the landing page for now.')
  }

  return (
    <section className="cta" id="cta">
      <div className="container">
        <div className="cta-box">
          <h2>Ready to bridge the skill gap?</h2>
          <p>Join the platform that connects learning to real careers.</p>
          <button className="btn btn-primary btn-lg" onClick={handleGetStarted}>
            Get Started <Icon name="arrow" size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
