import { StarRating } from "./StarComponents";

export default function ReviewCard({ review, index }) {
  return (
    <div
      style={{
        background: "#0d0f14",
        borderRadius: 12,
        padding: "24px",
        border: "1px solid #1a1d25",
        animation: `fadeSlideIn 0.4s ease ${index * 0.08}s both`,
        transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#c9a22730";
        e.currentTarget.style.boxShadow = "0 0 20px #c9a22710";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#1a1d25";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
        <div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 15, color: "#fff", marginBottom: 6 }}>
            {review.author}
          </div>
          <StarRating value={review.rating} />
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#555", fontWeight: 400 }}>
          {new Date(review.date).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })}
        </div>
      </div>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: "#8a8a8a", margin: 0, fontWeight: 300 }}>
        {review.text}
      </p>
    </div>
  );
}