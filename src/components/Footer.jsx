import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <Logo />
          <nav className="footer-links">
            <a href="#ecosystems">Students</a>
            <a href="#ecosystems">Academia</a>
            <a href="#ecosystems">Industry</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="footer-bottom">© 2026 SkillBridge AI</div>
      </div>
    </footer>
  )
}
