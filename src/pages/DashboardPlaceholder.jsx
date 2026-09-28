import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import Icon from '../components/Icon'
import { roles } from '../data/roles'

// Temporary page shown after login. The real dashboards come in later steps.
export default function DashboardPlaceholder({ roleId }) {
  const role = roles.find((r) => r.id === roleId)

  return (
    <AuthLayout>
      <div className={`placeholder-card fade-up ${role.theme}`}>
        <div className="placeholder-icon">
          <Icon name={role.icon} size={34} />
        </div>
        <h1>{role.title} Dashboard coming next.</h1>
        <p>
          Login worked. This is a placeholder page. The real dashboard will be built in
          the next step.
        </p>
        <div className="placeholder-actions">
          <Link to="/login" className="btn btn-primary">
            Back to Role Selection
          </Link>
          <Link to="/" className="btn btn-ghost">
            Back to Home
          </Link>
        </div>
      </div>
    </AuthLayout>
  )
}
