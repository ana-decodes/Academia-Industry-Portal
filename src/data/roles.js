// All role content lives here. Edit text here and the pages update.
export const roles = [
  {
    id: 'student',
    title: 'Student',
    icon: 'graduation',
    theme: 'theme-blue',
    description:
      'Assess your skills, discover skill gaps, learn what matters and find relevant internships and jobs.',
    features: [
      'Skill Assessment',
      'Skill Gap Analysis',
      'Personalized Learning',
      'Internships & Placements',
    ],
    button: 'Continue as Student',
    loginTitle: 'Student Login',
    loginPath: '/student-login',
    dashboardPath: '/student-dashboard',
  },
  {
    id: 'academia',
    title: 'Academia',
    icon: 'building',
    theme: 'theme-purple',
    description:
      'Monitor student skills, analyze skill gaps, collaborate with industry and track placements.',
    features: [
      'Skill Monitoring',
      'Analytics',
      'Industry Collaboration',
      'Placement Tracking',
    ],
    button: 'Continue as Academia',
    loginTitle: 'Academia Login',
    loginPath: '/academia-login',
    dashboardPath: '/academia-dashboard',
  },
  {
    id: 'industry',
    title: 'Industry',
    icon: 'industry',
    theme: 'theme-indigo',
    description:
      'Find skill-based candidates, post internships and jobs, and provide mentorship opportunities.',
    features: [
      'Skill-based Candidates',
      'Internships & Jobs',
      'Mentorship',
      'Skill Requirements',
    ],
    button: 'Continue as Industry',
    loginTitle: 'Industry Login',
    loginPath: '/industry-login',
    dashboardPath: '/industry-dashboard',
  },
]
