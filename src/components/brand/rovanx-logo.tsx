type RovanxLogoProps = {
  className?: string;
  variant?: "full" | "mark";
  tone?: "dark" | "light";
};

export function RovanxLogo({ className = "", variant = "full", tone = "dark" }: RovanxLogoProps) {
  if (variant === "mark") {
    return <RovanxMark className={className} />;
  }

  const textFill = tone === "light" ? "#f4efe4" : "#e9e2d2";
  const textStroke = tone === "light" ? "#171a21" : "#4a321c";

  return (
    <svg
      className={className}
      viewBox="0 0 360 252"
      role="img"
      aria-label="ROVANX Men's Vitality"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="rovanx-gold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#f4dda5" />
          <stop offset="0.45" stopColor="#b9823c" />
          <stop offset="1" stopColor="#6d441d" />
        </linearGradient>
        <linearGradient id="rovanx-silver" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.48" stopColor="#d8d8d8" />
          <stop offset="1" stopColor="#7b7d7f" />
        </linearGradient>
        <linearGradient id="rovanx-burgundy" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#cf4962" />
          <stop offset="0.5" stopColor="#7b1f37" />
          <stop offset="1" stopColor="#351120" />
        </linearGradient>
      </defs>

      <g transform="translate(70 4)">
        <path d="M110 3 205 43v70c0 61-37 103-95 126-58-23-95-65-95-126V43L110 3Z" fill="#171a21" />
        <path
          d="M110 12 194 48v64c0 54-32 91-84 112-52-21-84-58-84-112V48l84-36Z"
          fill="url(#rovanx-gold)"
        />
        <path
          d="M110 26 181 56v57c0 45-27 78-71 96-44-18-71-51-71-96V56l71-30Z"
          fill="#d9b06a"
          opacity="0.72"
        />
        <path d="M110 24 177 53v12l-67-27-67 27V53l67-29Z" fill="#f8e7ba" opacity="0.86" />
      </g>

      <g transform="translate(96 33)">
        <path
          d="M107 2c-9 34 0 58 27 75-25 8-42 25-51 51-5-39 3-81 24-126Z"
          fill="url(#rovanx-burgundy)"
          stroke="#2a0e18"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M119 29c23 6 40 20 51 42-21-8-40-6-58 5 18 4 31 16 40 34-24-10-46-8-65 7 3-32 14-61 32-88Z"
          fill="url(#rovanx-burgundy)"
          stroke="#2a0e18"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M114 102c26-1 45 9 58 31-25-7-47-3-66 12 0-16 3-30 8-43Z"
          fill="#7b1f37"
          stroke="#2a0e18"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M31 70c16-40 52-58 90-43-23 4-37 16-42 36 19-4 35 0 49 12-29 1-50 12-63 32 15 2 27 10 36 23-23-8-43-5-60 8-11 9-25 12-41 9 18-7 28-18 30-33-17-1-31-9-42-25 17 3 31-3 43-19Z"
          fill="url(#rovanx-silver)"
          stroke="#24262a"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          d="M53 74c9-16 24-24 45-24-11 8-18 18-22 31 10-2 19 0 27 6-17 3-30 11-38 25 8 2 15 7 20 15-16-6-30-4-43 6-7 5-16 8-27 7 13-5 21-13 23-24-10-2-18-8-24-18 12 2 23-6 39-24Z"
          fill="#f8f8f4"
        />
        <path d="M36 84c11-3 22-2 32 4-9 6-19 8-30 5l-13 11 3-14 8-6Z" fill="#171a21" />
        <path
          d="M66 70c8 2 15 6 20 13-8-1-16 2-23 9 0-8 1-15 3-22Z"
          fill="#171a21"
          opacity="0.82"
        />
        <path d="M82 45c8-13 22-20 41-20-15 10-25 21-30 35-3-6-7-11-11-15Z" fill="#f1f0eb" />
        <path
          d="M43 119c10 3 19 3 28 0-7 8-16 13-29 16 3-6 3-11 1-16Z"
          fill="#171a21"
          opacity="0.72"
        />
      </g>

      <g transform="translate(42 156)">
        <path d="M14 0h272l14 14v52H0V14L14 0Z" fill="#171a21" />
        <path d="M23 11h254l9 9v34H14V20l9-9Z" fill="url(#rovanx-gold)" />
        <text
          x="150"
          y="48"
          textAnchor="middle"
          fill={textFill}
          stroke={textStroke}
          strokeWidth="1.4"
          paintOrder="stroke"
          fontFamily="Arial Black, Arial, Helvetica, sans-serif"
          fontSize="47"
          fontWeight="900"
          letterSpacing="2"
        >
          ROVANX
        </text>
      </g>

      <g transform="translate(79 218)">
        <path d="M0 0h202l-12 20H12L0 0Z" fill="#171a21" />
        <text
          x="101"
          y="15"
          textAnchor="middle"
          fill="#d7c8ad"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="15"
          fontWeight="800"
          letterSpacing="4"
        >
          MEN&apos;S VITALITY
        </text>
      </g>
    </svg>
  );
}

function RovanxMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 180 180"
      role="img"
      aria-label="ROVANX"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M90 5 162 35v53c0 46-28 78-72 96-44-18-72-50-72-96V35L90 5Z" fill="#171a21" />
      <path d="M90 15 151 41v47c0 39-23 66-61 82-38-16-61-43-61-82V41l61-26Z" fill="#b9823c" />
      <path d="M90 26 141 48v40c0 32-19 56-51 70-32-14-51-38-51-70V48l51-22Z" fill="#d9b06a" />
      <path d="M96 30c-7 29 0 50 23 64-21 6-35 20-43 42-4-34 3-69 20-106Z" fill="#7b1f37" />
      <path
        d="M106 54c20 5 34 17 43 36-18-6-34-5-49 5 15 4 27 14 35 30-22-8-41-6-58 7 4-28 13-54 29-78Z"
        fill="#8c263d"
      />
      <path
        d="M39 80c14-34 44-50 77-37-20 4-32 14-36 31 16-3 30 0 42 10-25 1-43 10-54 28 13 2 23 9 31 20-20-7-37-4-52 7-10 8-22 11-36 8 16-6 24-16 26-29-15-1-27-8-36-22 15 3 27-2 38-16Z"
        fill="#efefea"
      />
      <path d="M43 88c9-3 19-2 27 3-8 5-16 7-25 4l-11 10 2-12 7-5Z" fill="#171a21" />
    </svg>
  );
}
