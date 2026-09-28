import { Link } from 'react-router-dom'
import Logo from './Logo'
import Icon from './Icon'

// Shared frame for all login-related pages: logo on the left, "Back to Home" on the right.
export default function AuthLayout({ children }) {
  return (
    <div className="auth-page">
      <header className="auth-top">
        <div className="container auth-top-inner">
          <Link to="/" className="brand-link">
            <Logo />
          </Link>
          <Link to="/" className="back-link">
            <Icon name="back" size={18} />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="auth-main">
        <div className="container">{children}</div>
      </main>
    </div>
  )
}
