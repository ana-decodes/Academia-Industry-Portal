import Icon from './Icon'

// All card content lives in this array. Edit text here, and the cards update.
const ecosystems = [
  {
    title: 'STUDENT',
    icon: 'graduation',
    theme: 'theme-blue',
    tagline: 'Discover your skills, close the gaps, get discovered.',
    features: [
      { icon: 'assess', text: 'Skill Assessment' },
      { icon: 'chart', text: 'Skill Gap Analysis' },
      { icon: 'book', text: 'Personalized Learning' },
      { icon: 'briefcase', text: 'Internships & Jobs' },
    ],
  },
  {
    title: 'ACADEMIA',
    icon: 'building',
    theme: 'theme-purple',
    tagline: 'Understand student readiness and align with industry.',
    features: [
      { icon: 'activity', text: 'Skill Monitoring' },
      { icon: 'pie', text: 'Analytics' },
      { icon: 'link', text: 'Industry Collaboration' },
      { icon: 'trending', text: 'Placement Tracking' },
    ],
  },
  {
    title: 'INDUSTRY',
    icon: 'industry',
    theme: 'theme-indigo',
    tagline: 'Find job-ready talent and shape future skills.',
    features: [
      { icon: 'usercheck', text: 'Skill-based Candidates' },
      { icon: 'send', text: 'Internships' },
      { icon: 'award', text: 'Mentorship' },
      { icon: 'file', text: 'Industry Skill Requirements' },
    ],
  },
]

export default function Ecosystems() {
  return (
    <section className="section" id="about">
      <div className="container" id="ecosystems">
        <div className="section-head">
          <span className="eyebrow">About the platform</span>
          <h2>ONE PLATFORM. THREE CONNECTED ECOSYSTEMS.</h2>
          <p>
            Students, colleges and companies work together on a single
            AI-powered platform.
          </p>
        </div>

        <div className="cards">
          {ecosystems.map((item) => (
            <article className={`card ${item.theme}`} key={item.title}>
              <div className="card-icon">
                <Icon name={item.icon} size={28} />
              </div>
              <h3>{item.title}</h3>
              <p className="card-tag">{item.tagline}</p>

              <ul className="feature-list">
                {item.features.map((f) => (
                  <li className="feature" key={f.text}>
                    <span className="feature-icon">
                      <Icon name={f.icon} size={18} />
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
