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
      width={96}
      height={83}
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
