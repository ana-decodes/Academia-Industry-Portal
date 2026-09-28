import Icon from './Icon'

// The illustration: Students, Academia and Industry connected by an AI hub.
export default function HeroVisual() {
  return (
    <div className="visual fade-up">
      <div className="visual-glow" />

      <svg
        className="visual-svg"
        viewBox="0 0 520 480"
        role="img"
        aria-label="Students, academia and industry connected through SkillBridge AI"
      >
        <defs>
          {/* Gradient used for the connecting lines */}
          <linearGradient
            id="sbGradLine"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="520"
            y2="480"
          >
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          {/* Gradient used for shapes and icons */}
          <linearGradient id="sbGradBox" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>

        {/* Pulsing background rings */}
        <circle className="ring" cx="260" cy="240" r="104" fill="none" stroke="#c7d2fe" strokeWidth="1.5" strokeDasharray="4 8" />
        <circle className="ring ring-2" cx="260" cy="240" r="160" fill="none" stroke="#e0e7ff" strokeWidth="1.5" strokeDasharray="4 8" />

        {/* Animated connection lines */}
        <g className="links" stroke="url(#sbGradLine)" strokeWidth="2.5" strokeLinecap="round" fill="none">
          <line x1="260" y1="240" x2="95" y2="105" />
          <line x1="260" y1="240" x2="425" y2="105" />
          <line x1="260" y1="240" x2="260" y2="400" />
        </g>

        {/* Node 1: Students */}
        <g transform="translate(95 105)">
          <circle r="46" fill="#fff" stroke="url(#sbGradBox)" strokeWidth="2.5" />
          <g fill="none" stroke="url(#sbGradBox)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M-20 -6 L0 -16 L20 -6 L0 4 Z" />
            <path d="M-11 0 V10 C-5 16 5 16 11 10 V0" />
          </g>
          <text y="76" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a" fontFamily="Plus Jakarta Sans, sans-serif">
            Students
          </text>
        </g>

        {/* Node 2: Academia */}
        <g transform="translate(425 105)">
          <circle r="46" fill="#fff" stroke="url(#sbGradBox)" strokeWidth="2.5" />
          <g fill="none" stroke="url(#sbGradBox)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M-18 14 H18 M-14 14 V-2 M0 14 V-2 M14 14 V-2 M-20 -4 L0 -16 L20 -4 Z" />
          </g>
          <text y="76" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a" fontFamily="Plus Jakarta Sans, sans-serif">
            Academia
          </text>
        </g>

        {/* Node 3: Industry */}
        <g transform="translate(260 400)">
          <circle r="46" fill="#fff" stroke="url(#sbGradBox)" strokeWidth="2.5" />
          <g fill="none" stroke="url(#sbGradBox)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="-18" y="-8" width="36" height="24" rx="5" />
            <path d="M-7 -8 V-13 H7 V-8 M-18 3 H18" />
          </g>
          <text y="76" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a" fontFamily="Plus Jakarta Sans, sans-serif">
            Industry
          </text>
        </g>

        {/* Centre hub: the AI */}
        <circle cx="260" cy="240" r="58" fill="url(#sbGradBox)" />
        <text x="260" y="246" textAnchor="middle" fontSize="30" fontWeight="800" fill="#fff" fontFamily="Sora, sans-serif">
          AI
        </text>
        <text x="260" y="266" textAnchor="middle" fontSize="10" fill="#e0e7ff" letterSpacing="1.5" fontFamily="Plus Jakarta Sans, sans-serif">
          SKILL ENGINE
        </text>
      </svg>

      {/* Floating info chips (illustrative) */}
      <div className="chip chip-1">
        <span className="chip-icon"><Icon name="chart" size={16} /></span>
        <span><small>Skill Gap</small><strong>3 areas found</strong></span>
      </div>
      <div className="chip chip-2">
        <span className="chip-icon"><Icon name="zap" size={16} /></span>
        <span><small>AI Match</small><strong>92% compatible</strong></span>
      </div>
      <div className="chip chip-3">
        <span className="chip-icon"><Icon name="briefcase" size={16} /></span>
        <span><small>Internship</small><strong>Offer received</strong></span>
      </div>
    </div>
  )
}
