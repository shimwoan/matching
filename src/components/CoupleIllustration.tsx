export function CoupleIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Man */}
      <g transform="translate(100, 30)">
        {/* Hair */}
        <ellipse cx="50" cy="35" rx="38" ry="40" fill="#5a3e2b" />
        {/* Face */}
        <ellipse cx="50" cy="50" rx="30" ry="32" fill="#fdd9b5" />
        {/* Hair top */}
        <path
          d="M20 38 Q30 10 55 15 Q80 10 82 38"
          fill="#5a3e2b"
        />
        {/* Eyes */}
        <ellipse cx="38" cy="48" rx="3" ry="3.5" fill="#2d2d2d" />
        <ellipse cx="62" cy="48" rx="3" ry="3.5" fill="#2d2d2d" />
        {/* Eyebrows */}
        <path d="M32 40 Q38 36 44 40" stroke="#5a3e2b" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M56 40 Q62 36 68 40" stroke="#5a3e2b" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Smile */}
        <path
          d="M40 60 Q50 70 60 60"
          stroke="#d94458"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Blush */}
        <ellipse cx="30" cy="58" rx="6" ry="4" fill="#ffb4b4" opacity="0.5" />
        <ellipse cx="70" cy="58" rx="6" ry="4" fill="#ffb4b4" opacity="0.5" />
        {/* Neck */}
        <rect x="42" y="78" width="16" height="14" rx="4" fill="#fdd9b5" />
        {/* Body - Shirt */}
        <path
          d="M15 92 Q20 85 50 88 Q80 85 85 92 L90 160 Q50 165 10 160 Z"
          fill="#7eb8c9"
        />
        {/* Collar */}
        <path d="M35 90 L50 102 L65 90" stroke="#6aa3b5" strokeWidth="2" fill="none" />
        {/* Arms */}
        <path
          d="M15 95 Q-5 120 10 150"
          stroke="#7eb8c9"
          strokeWidth="16"
          fill="none"
          strokeLinecap="round"
        />
        {/* Hand left */}
        <circle cx="10" cy="152" r="8" fill="#fdd9b5" />
        {/* Right arm reaching toward woman */}
        <path
          d="M85 95 Q105 115 108 140"
          stroke="#7eb8c9"
          strokeWidth="16"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="108" cy="142" r="8" fill="#fdd9b5" />
      </g>

      {/* Woman */}
      <g transform="translate(220, 40)">
        {/* Hair */}
        <ellipse cx="50" cy="30" rx="42" ry="42" fill="#8b5e3c" />
        {/* Hair sides long */}
        <path d="M10 30 Q5 80 15 120" stroke="#8b5e3c" strokeWidth="20" fill="none" strokeLinecap="round" />
        <path d="M90 30 Q95 80 85 120" stroke="#8b5e3c" strokeWidth="20" fill="none" strokeLinecap="round" />
        {/* Face */}
        <ellipse cx="50" cy="48" rx="28" ry="30" fill="#fdd9b5" />
        {/* Bangs */}
        <path
          d="M22 30 Q30 15 50 12 Q70 15 78 30"
          fill="#8b5e3c"
        />
        <path d="M25 32 Q35 22 45 30" fill="#8b5e3c" />
        <path d="M40 28 Q50 18 60 28" fill="#8b5e3c" />
        {/* Eyes */}
        <ellipse cx="38" cy="46" rx="3" ry="3.5" fill="#2d2d2d" />
        <ellipse cx="62" cy="46" rx="3" ry="3.5" fill="#2d2d2d" />
        {/* Eye sparkle */}
        <circle cx="39.5" cy="44.5" r="1" fill="white" />
        <circle cx="63.5" cy="44.5" r="1" fill="white" />
        {/* Eyebrows */}
        <path d="M32 38 Q38 34 44 38" stroke="#8b5e3c" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M56 38 Q62 34 68 38" stroke="#8b5e3c" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Smile */}
        <path
          d="M40 58 Q50 66 60 58"
          stroke="#d94458"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Blush */}
        <ellipse cx="30" cy="56" rx="6" ry="4" fill="#ffb4b4" opacity="0.6" />
        <ellipse cx="70" cy="56" rx="6" ry="4" fill="#ffb4b4" opacity="0.6" />
        {/* Neck */}
        <rect x="42" y="74" width="16" height="14" rx="4" fill="#fdd9b5" />
        {/* Body - Blouse */}
        <path
          d="M15 88 Q20 82 50 85 Q80 82 85 88 L88 155 Q50 160 12 155 Z"
          fill="#f2a0a0"
        />
        {/* Collar detail */}
        <path d="M38 86 Q50 95 62 86" stroke="#e88e8e" strokeWidth="1.5" fill="none" />
        {/* Arms */}
        <path
          d="M15 92 Q-10 115 -5 145"
          stroke="#f2a0a0"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="-5" cy="147" r="7" fill="#fdd9b5" />
        <path
          d="M85 92 Q105 110 95 145"
          stroke="#f2a0a0"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="95" cy="147" r="7" fill="#fdd9b5" />
      </g>

      {/* Heart between them */}
      <g transform="translate(190, 80)">
        <path
          d="M10 8 Q10 0 16 0 Q22 0 22 8 Q22 0 28 0 Q34 0 34 8 Q34 20 22 28 Q10 20 10 8 Z"
          fill="#f25c6e"
          opacity="0.9"
        >
          <animate attributeName="opacity" values="0.9;0.5;0.9" dur="2s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Small hearts floating */}
      <g opacity="0.6">
        <path transform="translate(140, 20) scale(0.5)" d="M10 8 Q10 0 16 0 Q22 0 22 8 Q22 0 28 0 Q34 0 34 8 Q34 20 22 28 Q10 20 10 8 Z" fill="#ffa0ae">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" />
        </path>
        <path transform="translate(280, 15) scale(0.4)" d="M10 8 Q10 0 16 0 Q22 0 22 8 Q22 0 28 0 Q34 0 34 8 Q34 20 22 28 Q10 20 10 8 Z" fill="#ffc2cc">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.5s" repeatCount="indefinite" />
        </path>
        <path transform="translate(330, 60) scale(0.35)" d="M10 8 Q10 0 16 0 Q22 0 22 8 Q22 0 28 0 Q34 0 34 8 Q34 20 22 28 Q10 20 10 8 Z" fill="#f25c6e">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.8s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Speech bubble - Man */}
      <g transform="translate(30, 200)">
        <rect x="0" y="0" width="140" height="44" rx="22" fill="white" stroke="#e0e0e0" strokeWidth="1.5" />
        <polygon points="80,44 90,58 100,44" fill="white" stroke="#e0e0e0" strokeWidth="1.5" />
        <rect x="78" y="42" width="24" height="4" fill="white" />
        <text x="70" y="28" textAnchor="middle" fontSize="14" fill="#2d2d2d" fontWeight="500">
          설레는데요? 😊
        </text>
      </g>

      {/* Speech bubble - Woman */}
      <g transform="translate(230, 210)">
        <rect x="0" y="0" width="150" height="44" rx="22" fill="white" stroke="#e0e0e0" strokeWidth="1.5" />
        <polygon points="40,44 50,58 60,44" fill="white" stroke="#e0e0e0" strokeWidth="1.5" />
        <rect x="38" y="42" width="24" height="4" fill="white" />
        <text x="75" y="28" textAnchor="middle" fontSize="14" fill="#2d2d2d" fontWeight="500">
          드디어 솔로탈출! 🎉
        </text>
      </g>
    </svg>
  )
}
