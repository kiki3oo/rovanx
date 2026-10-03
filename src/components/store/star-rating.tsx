import { Star } from "lucide-react";

type StarRatingProps = {
  rating?: number;
  maxStars?: number;
  size?: number;
  showScore?: boolean;
  count?: number;
  className?: string;
};

export function StarRating({
  rating = 5,
  maxStars = 5,
  size = 16,
  showScore = false,
  count,
  className = ""
}: StarRatingProps) {
  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <div className="flex items-center gap-0.5 text-amber-400">
        {Array.from({ length: maxStars }).map((_, index) => {
          const isFilled = index < Math.floor(rating);
          return (
            <Star
              key={index}
              size={size}
              className={`${
                isFilled
                  ? "fill-amber-400 text-amber-400"
                  : "fill-transparent text-white/20"
              }`}
            />
          );
        })}
      </div>
      {showScore ? (
        <span className="text-sm font-black text-white">{rating.toFixed(1)}</span>
      ) : null}
      {count ? (
        <span className="text-xs text-white/60">({count})</span>
      ) : null}
    </div>
  );
}
