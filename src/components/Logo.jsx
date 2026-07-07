export default function Logo({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="logoGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c9a227" />
          <stop offset="1" stopColor="#e8d48a" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="#0b1b2b" stroke="rgba(255,255,255,0.08)" />
      <path
        d="M16 44V20l16 14 16-14v24"
        fill="none"
        stroke="url(#logoGold)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
