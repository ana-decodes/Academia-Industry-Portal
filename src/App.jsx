import { Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import RoleSelect from './pages/RoleSelect'
import RoleLogin from './pages/RoleLogin'
import DashboardPlaceholder from './pages/DashboardPlaceholder'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Home />} />

        {/* Role selection */}
        <Route path="/login" element={<RoleSelect />} />

        {/* One login form per role */}
        <Route path="/student-login" element={<RoleLogin roleId="student" />} />
        <Route path="/academia-login" element={<RoleLogin roleId="academia" />} />
        <Route path="/industry-login" element={<RoleLogin roleId="industry" />} />

        {/* Temporary placeholders (real dashboards come in the next steps) */}
        <Route path="/student-dashboard" element={<DashboardPlaceholder roleId="student" />} />
        <Route path="/academia-dashboard" element={<DashboardPlaceholder roleId="academia" />} />
        <Route path="/industry-dashboard" element={<DashboardPlaceholder roleId="industry" />} />

        {/* Any unknown address goes back to the landing page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
