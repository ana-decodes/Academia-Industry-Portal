import Icon from './Icon'

const steps = [
  { icon: 'assess', title: 'Skill Assessment', text: 'Students take smart assessments to reveal their current skills.' },
  { icon: 'user', title: 'Skill Profile', text: 'A living profile captures strengths, projects and progress.' },
  { icon: 'chart', title: 'Skill Gap Analysis', text: 'Compare the profile with the skills industry needs.' },
  { icon: 'book', title: 'Personalized Learning', text: 'Follow a tailored learning path to close each gap.' },
  { icon: 'zap', title: 'AI Skill Matching', text: 'Profiles are matched with the right roles and recruiters.' },
  { icon: 'briefcase', title: 'Internships & Placement', text: 'Apply, intern and get placed with confidence.' },
]

export default function HowItWorks() {
  return (
    <section className="section section-soft" id="how-it-works">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The journey</span>
          <h2>HOW SKILLBRIDGE AI WORKS</h2>
          <p>Six simple steps from learning to landing the right opportunity.</p>
        </div>

        <ol className="steps">
          {steps.map((step, index) => (
            <li className="step" key={step.title}>
              <div className="step-icon">
                <Icon name={step.icon} size={26} />
              </div>
              <div className="step-body">
                <span className="step-num">Step {index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
