type RovanxLogoProps = {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  taglineClassName?: string;
  variant?: "full" | "wordmark" | "mark";
  tone?: "dark" | "light";
};

export function RovanxLogo({
  className = "",
  markClassName = "",
  textClassName = "",
  taglineClassName = "",
  variant = "full",
  tone = "dark"
}: RovanxLogoProps) {
  const isLight = tone === "light";
  const textColor = isLight ? "#ffffff" : "#171a21";
  const taglineColor = isLight ? "rgba(255,255,255,0.72)" : "#7a5125";

  if (variant === "mark") {
    return <RovanxMark className={markClassName || className} />;
  }

  return (
    <svg
      className={className}
      viewBox="0 0 284 72"
      role="img"
      aria-label="ROVANX Men's Vitality"
      xmlns="http://www.w3.org/2000/svg"
    >
      {variant === "full" ? <RovanxMark className={markClassName} x={0} y={4} size={64} /> : null}
      <g transform={variant === "full" ? "translate(76 0)" : "translate(0 0)"}>
        <text
          className={textClassName}
          x="0"
          y="39"
          fill={textColor}
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="34"
          fontWeight="900"
          letterSpacing="0"
        >
          ROVAN
        </text>
        <path
          d="M133 14h13l10 13 10-13h13l-16 21 17 23h-14l-11-15-11 15h-13l17-23-15-21Z"
          fill="#b9823c"
        />
        <text
          className={taglineClassName}
          x="1"
          y="60"
          fill={taglineColor}
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="10"
          fontWeight="800"
          letterSpacing="2"
        >
          MEN&apos;S VITALITY
        </text>
      </g>
    </svg>
  );
}

function RovanxMark({
  className = "",
  x = 0,
  y = 0,
  size = 64
}: {
  className?: string;
  x?: number;
  y?: number;
  size?: number;
}) {
  return (
    <svg
      className={className}
      x={x}
      y={y}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 4 53 14v18c0 13.8-8.7 23.2-21 28-12.3-4.8-21-14.2-21-28V14L32 4Z"
        fill="#171a21"
      />
      <path
        d="M32 8.2 49 16.2V32c0 11.1-6.8 18.8-17 23-10.2-4.2-17-11.9-17-23V16.2L32 8.2Z"
        fill="#b9823c"
      />
      <path
        d="M32 12.5 45.3 19v13c0 8-5 14.4-13.3 18-8.3-3.6-13.3-10-13.3-18V19L32 12.5Z"
        fill="#f4dfb4"
      />
      <path
        d="M26.2 24.1c4.6-6 11.3-6.4 16.8-3.2-3.4.5-5.8 2-7.2 4.7 4.3-.3 7.6 1.3 9.8 4.7-4.4-.7-8.2.2-11.2 2.8 2.6.8 4.4 2.4 5.5 4.8-3.3-1.6-6.5-1.5-9.7.1-1.9.9-4.2 1.2-6.9.7 2.6-1 4.2-2.5 4.8-4.7-3-.4-5.5-1.9-7.4-4.5 3.1.7 5.7.1 7.8-1.8-1.4-.6-2.2-1.8-2.3-3.6Z"
        fill="#171a21"
      />
      <path
        d="M36.8 16.1c-.9 6.4.9 11.3 5.3 14.4-4.4 1.4-7.2 4.3-8.5 8.8-.8-6.5.3-14.2 3.2-23.2Z"
        fill="#7b1f37"
      />
      <path
        d="M29.2 27.6c2.1-1.7 4.5-2.6 7.1-2.8-1.5 1.6-2.4 3.5-2.8 5.8-1-1.2-2.4-2.2-4.3-3Z"
        fill="#ffffff"
        opacity="0.9"
      />
    </svg>
  );
}
