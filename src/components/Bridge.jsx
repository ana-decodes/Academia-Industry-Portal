import Icon from './Icon'

export default function Bridge() {
  return (
    <section className="section" id="bridge">
      <div className="container">
        <div className="bridge-panel">
          <span className="eyebrow eyebrow-light">Our mission</span>
          <h2>BRIDGING THE ACADEMIA–INDUSTRY GAP</h2>

          <div className="equation" aria-label="Skills plus Experience plus Employability">
            <span className="eq-item"><Icon name="book" size={22} /> Skills</span>
            <span className="eq-plus">+</span>
            <span className="eq-item"><Icon name="briefcase" size={22} /> Experience</span>
            <span className="eq-plus">+</span>
            <span className="eq-item"><Icon name="trending" size={22} /> Employability</span>
          </div>

          <p>
            SkillBridge AI connects what students know, what they need to
            learn, and what industry needs.
          </p>
        </div>
      </div>
    </section>
  )
}
