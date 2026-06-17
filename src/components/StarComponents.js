import { useState } from "react";

const GOLD = "#c9a227";
const DIM = "#2a2518";

export function StarIcon({ filled, size = 20, onClick, hoverable }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      onClick={onClick}
      style={{
        cursor: onClick ? "pointer" : "default",
        transition: "transform 0.15s ease",
      }}
      onMouseEnter={(e) =>
        hoverable && (e.currentTarget.style.transform = "scale(1.2)")
      }
      onMouseLeave={(e) =>
        hoverable && (e.currentTarget.style.transform = "scale(1)")
      }
    >
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill={filled ? GOLD : DIM}
        stroke={filled ? GOLD : "#1e1e1e"}
        strokeWidth="0.5"
      />
    </svg>
  );
}

export function StarRating({ value, size = 18 }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon key={i} filled={i <= value} size={size} />
      ))}
    </div>
  );
}

export function StarInput({ value, onChange }) {
  const [hover, setHover] = useState(0);
  return (
    <div style={{ display: "flex", gap: 4 }} onMouseLeave={() => setHover(0)}>
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} onMouseEnter={() => setHover(i)} onClick={() => onChange(i)}>
          <StarIcon
            filled={i <= (hover || value)}
            size={28}
            hoverable
            onClick={() => {}}
          />
        </div>
      ))}
    </div>
  );
}