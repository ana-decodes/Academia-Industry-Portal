import AuthLayout from '../components/AuthLayout'
import RoleCard from '../components/RoleCard'
import { roles } from '../data/roles'

export default function RoleSelect() {
  return (
    <AuthLayout>
      <div className="auth-head fade-up">
        <h1>
          Welcome to <span className="gradient-text">SkillBridge AI</span>
        </h1>
        <p>Choose your role to continue</p>
      </div>

      <div className="role-grid">
        {roles.map((role) => (
          <RoleCard key={role.id} role={role} />
        ))}
      </div>
    </AuthLayout>
  )
}
