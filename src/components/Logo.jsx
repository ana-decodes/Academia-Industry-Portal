export default function Logo() {
  return (
    <span className="brand">
      <span className="brand-mark">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 18h18" />
          <path d="M5 18v-6 M19 18v-6 M12 18v-4" />
          <path d="M5 12c3-7 11-7 14 0" />
        </svg>
      </span>
      <span className="brand-name">
        SkillBridge <span>AI</span>
      </span>
    </span>
  )
}
