import { useState } from 'react'
import Logo from './Logo'
import Icon from './Icon'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
]

export default function Header() {
  // Controls the mobile menu (open / closed)
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  // Temporary: later you will replace this with real navigation to a Login page
  const handleLogin = () => {
    closeMenu()
    alert('Login page coming soon! This is only the landing page for now.')
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#home" className="brand-link" onClick={closeMenu}>
          <Logo />
        </a>

        <div className={`header-menu ${open ? 'open' : ''}`}>
          <nav className="nav">
            {links.map((link) => (
              
                key={link.label}
                href={link.href}
                className="nav-link"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button className="btn btn-ghost" onClick={handleLogin}>
              Login
            </button>
            <a href="#ecosystems" className="btn btn-primary" onClick={closeMenu}>
              Get Started
            </a>
          </div>
        </div>

        <button
          className="menu-btn"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </div>
    </header>
  )
}
