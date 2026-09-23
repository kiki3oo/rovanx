import Image from "next/image";

const ROVANX_3D_LOGO_SRC =
  "data:image/webp;base64,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";

type RovanxLogoProps = {
  className?: string;
  variant?: "full" | "mark";
  tone?: "dark" | "light";
};

export function RovanxLogo({ className = "", variant = "full" }: RovanxLogoProps) {
  if (variant === "mark") {
    return <RovanxMark className={className} />;
  }

  return (
    <Image
      className={"object-contain " + className}
      src={ROVANX_3D_LOGO_SRC}
      alt="ROVANX Men's Vitality"
      width={140}
      height={122}
      priority
      unoptimized
    />
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
