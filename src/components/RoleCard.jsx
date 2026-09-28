import { Link } from 'react-router-dom'
import Icon from './Icon'

// One big clickable card. The whole card is a link to that role's login page.
export default function RoleCard({ role }) {
  return (
    <Link to={role.loginPath} className={`role-card ${role.theme}`}>
      <div className="role-icon">
        <Icon name={role.icon} size={32} />
      </div>

      <h2>{role.title}</h2>
      <p className="role-desc">{role.description}</p>

      <ul className="role-features">
        {role.features.map((feature) => (
          <li key={feature}>
            <span className="check">
              <Icon name="check" size={14} />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <span className="role-btn">
        {role.button} <Icon name="arrow" size={18} />
      </span>
    </Link>
  )
}
