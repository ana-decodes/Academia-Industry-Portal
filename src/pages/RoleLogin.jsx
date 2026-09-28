import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import Icon from '../components/Icon'
import { roles } from '../data/roles'

// One login page that works for all three roles.
// The "roleId" prop ("student", "academia" or "industry") decides what it shows.
export default function RoleLogin({ roleId }) {
  const role = roles.find((r) => r.id === roleId)
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [notice, setNotice] = useState('')

  // Demo only: no real authentication. Any valid-looking email + password works.
  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(role.dashboardPath)
  }

  return (
    <AuthLayout>
      <div className={`login-card fade-up ${role.theme}`}>
        {/* Left side: role summary */}
        <aside className="login-aside">
          <div className="aside-icon">
            <Icon name={role.icon} size={30} />
          </div>
          <h2>{role.title}</h2>
          <p>{role.description}</p>
          <ul className="aside-list">
            {role.features.map((feature) => (
              <li key={feature}>
                <span className="check">
                  <Icon name="check" size={14} />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </aside>

        {/* Right side: the form */}
        <section className="login-form-side">
          <div className="role-tabs">
            {roles.map((r) => (
              <Link
                key={r.id}
                to={r.loginPath}
                className={`role-tab ${r.id === role.id ? 'active' : ''}`}
              >
                {r.title}
              </Link>
            ))}
          </div>

          <h2>{role.loginTitle}</h2>
          <p className="form-sub">Enter your details to continue to SkillBridge AI.</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label className="field">
              <span>Email</span>
              <div className="input-wrap">
                <Icon name="mail" size={18} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>
            </label>

            <label className="field">
              <span>Password</span>
              <div className="input-wrap">
                <Icon name="lock" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="eye-btn"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <Icon name={showPassword ? 'eyeoff' : 'eye'} size={18} />
                </button>
              </div>
            </label>

            <div className="form-row">
              <button
                type="button"
                className="link-btn"
                onClick={() =>
                  setNotice('Password reset will be available once the backend is added.')
                }
              >
                Forgot Password?
              </button>
            </div>

            <button type="submit" className="btn btn-primary btn-block btn-lg">
              Login
            </button>

            <div className="divider">
              <span>or</span>
            </div>

            <button
              type="button"
              className="btn btn-ghost btn-block"
              onClick={() =>
                setNotice('Account creation will be available in a later step.')
              }
            >
              Create Account
            </button>
          </form>

          {notice && (
            <p className="notice" role="status">
              {notice}
            </p>
          )}
        </section>
      </div>
    </AuthLayout>
  )
}
