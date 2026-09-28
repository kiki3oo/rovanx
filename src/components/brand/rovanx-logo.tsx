import Image from "next/image";

type RovanxLogoProps = {
  className?: string;
  variant?: "full" | "mark";
  tone?: "dark" | "light";
  priority?: boolean;
};

export function RovanxLogo({
  className = "",
  variant = "full",
  tone = "dark",
  priority = true
}: RovanxLogoProps) {
  if (variant === "mark") {
    return (
      <Image
        className={`object-contain transition-transform duration-200 drop-shadow-[0_4px_12px_rgba(0,0,0,0.2)] ${className}`}
        src="/brand/rovanx-mark.webp"
        alt="ROVANX Lion Emblem"
        width={360}
        height={320}
        priority={priority}
      />
    );
  }

  return (
    <Image
      className={`object-contain transition-transform duration-200 ${
        tone === "light"
          ? "drop-shadow-[0_12px_32px_rgba(0,0,0,0.45)]"
          : "drop-shadow-[0_4px_14px_rgba(0,0,0,0.14)]"
      } ${className}`}
      src="/brand/rovanx-logo.webp"
      alt="ROVANX Men's Vitality"
      width={422}
      height={512}
      priority={priority}
    />
  );
}
