export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="strongGlow">
          <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Left shield half */}
      <path
        d="M120 15 L40 45 L35 60 L35 115 C35 142 42 163 57 183 L120 225 L120 15 Z"
        fill="#0A1F44"
      />

      {/* Right shield half */}
      <path
        d="M120 15 L200 45 L205 60 L205 115 C205 142 198 163 183 183 L120 225 L120 15 Z"
        fill="#0A1F44"
      />

      {/* Jagged crack path down the middle */}
      <path
        d="M120 15 L122 40 L118 70 L123 95 L117 120 L121 145 L118 170 L122 195 L120 225"
        stroke="#00BFFF"
        strokeWidth="2.5"
        fill="none"
        filter="url(#strongGlow)"
        opacity="0.95"
      />

      {/* Additional glow layers for intensity */}
      <path
        d="M120 15 L122 40 L118 70 L123 95 L117 120 L121 145 L118 170 L122 195 L120 225"
        stroke="#00BFFF"
        strokeWidth="1"
        fill="none"
        filter="url(#glow)"
        opacity="0.7"
      />

      {/* Light burst at top */}
      <circle cx="120" cy="15" r="8" fill="#00BFFF" opacity="0.3" filter="url(#strongGlow)" />
      <circle cx="120" cy="15" r="4" fill="#ffffff" opacity="0.8" filter="url(#glow)" />

      {/* Light burst at center */}
      <circle cx="120" cy="120" r="12" fill="#00BFFF" opacity="0.25" filter="url(#strongGlow)" />
      <circle cx="120" cy="120" r="6" fill="#ffffff" opacity="0.6" filter="url(#glow)" />

      {/* Light burst at bottom */}
      <circle cx="120" cy="225" r="8" fill="#00BFFF" opacity="0.3" filter="url(#strongGlow)" />
      <circle cx="120" cy="225" r="4" fill="#ffffff" opacity="0.8" filter="url(#glow)" />

      {/* Q - white with thin cyan outline */}
      <text
        x="75"
        y="100"
        textAnchor="middle"
        fill="white"
        stroke="#00BFFF"
        strokeWidth="0.8"
        fontSize="48"
        fontWeight="700"
        fontFamily="Inter, system-ui, sans-serif"
      >
        Q
      </text>

      {/* W - white with thin cyan outline, positioned across crack */}
      <text
        x="120"
        y="145"
        textAnchor="middle"
        fill="white"
        stroke="#00BFFF"
        strokeWidth="0.8"
        fontSize="48"
        fontWeight="700"
        fontFamily="Inter, system-ui, sans-serif"
      >
        W
      </text>

      {/* B - white with thin cyan outline */}
      <text
        x="165"
        y="100"
        textAnchor="middle"
        fill="white"
        stroke="#00BFFF"
        strokeWidth="0.8"
        fontSize="48"
        fontWeight="700"
        fontFamily="Inter, system-ui, sans-serif"
      >
        B
      </text>

      {/* Text below */}
      <text
        x="120"
        y="252"
        textAnchor="middle"
        fill="white"
        fontSize="16"
        fontWeight="600"
        fontFamily="Inter, system-ui, sans-serif"
        letterSpacing="1"
      >
        Quantum Web Builders
      </text>
    </svg>
  );
}

export function LogoWithText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Logo className="w-24 h-28" />
    </div>
  );
}
