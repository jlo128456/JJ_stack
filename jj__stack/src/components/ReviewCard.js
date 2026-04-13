import { StarRating } from "./StarComponents";

export default function ReviewCard({ review, index }) {
  const baseStyle = {
    background: "white",
    borderRadius: 16,
    padding: "28px 28px 24px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)",
    border: "1px solid #F3F4F6",
    animation: `fadeSlideIn 0.4s ease ${index * 0.08}s both`,
    transition: "box-shadow 0.25s ease, transform 0.25s ease",
  };

  const font = "'DM Sans', sans-serif";

  return (
    <div
      style={baseStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.06)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = baseStyle.boxShadow;
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <div>
          <div style={{ fontFamily: font, fontWeight: 700, fontSize: 15, color: "#111827", marginBottom: 6 }}>
            {review.author}
          </div>
          <StarRating value={review.rating} />
        </div>
        <div style={{ fontFamily: font, fontSize: 13, color: "#9CA3AF", fontWeight: 500 }}>
          {new Date(review.date).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })}
        </div>
      </div>
      <p style={{ fontFamily: font, fontSize: 14.5, lineHeight: 1.65, color: "#4B5563", margin: 0 }}>
        {review.text}
      </p>
    </div>
  );
}