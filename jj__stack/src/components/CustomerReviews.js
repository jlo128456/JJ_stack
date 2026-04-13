import { useState, useEffect, useMemo } from "react";
import { db } from "./firebase";
import { collection, addDoc, getDocs, orderBy, query } from "firebase/firestore";
import { StarIcon, StarRating } from "./StarComponents";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

const font = "'DM Sans', sans-serif";

export default function CustomerReviews() {
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      const q = query(collection(db, "reviews"), orderBy("date", "desc"));
      const snap = await getDocs(q);
      setReviews(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    };
    fetchReviews();
  }, []);

  const avgRating = useMemo(() => {
    if (!reviews.length) return 0;
    return (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);
  }, [reviews]);

  const ratingCounts = useMemo(() => {
    const c = [0, 0, 0, 0, 0];
    reviews.forEach((r) => c[r.rating - 1]++);
    return c;
  }, [reviews]);

  const handleSubmit = async ({ author, rating, text }) => {
    const reviewData = { author, rating, text, date: new Date().toISOString().split("T")[0] };
    const docRef = await addDoc(collection(db, "reviews"), reviewData);
    setReviews((prev) => [{ id: docRef.id, ...reviewData }, ...prev]);
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setShowForm(false); }, 2200);
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(165deg, #FAFAFA 0%, #F3F0FF 50%, #FFF7ED 100%)", padding: "40px 20px" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes fadeSlideIn { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes popIn { 0% { opacity:0; transform:scale(0.92); } 60% { transform:scale(1.02); } 100% { opacity:1; transform:scale(1); } }
        @keyframes checkPop { 0% { transform:scale(0); } 60% { transform:scale(1.3); } 100% { transform:scale(1); } }
      `}</style>

      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40, animation: "fadeSlideIn 0.5s ease both" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>Customer Reviews</h2>
          <p style={{ fontFamily: font, fontSize: 15, color: "#6B7280", margin: 0 }}>Hear what our customers have to say</p>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", alignItems: "center", gap: 32, background: "white", borderRadius: 20, padding: "28px 32px", marginBottom: 28, boxShadow: "0 1px 3px rgba(0,0,0,0.04)", border: "1px solid #F3F4F6", animation: "fadeSlideIn 0.5s ease 0.1s both", flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ textAlign: "center", minWidth: 100 }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700, color: "#111827", lineHeight: 1 }}>{avgRating}</div>
            <StarRating value={Math.round(parseFloat(avgRating))} size={16} />
            <div style={{ fontFamily: font, fontSize: 13, color: "#9CA3AF", marginTop: 4 }}>{reviews.length} review{reviews.length !== 1 ? "s" : ""}</div>
          </div>
          <div style={{ width: 1, height: 70, background: "#E5E7EB", flexShrink: 0 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 5, flex: 1, minWidth: 200 }}>
            {[5, 4, 3, 2, 1].map((star) => {
              const pct = reviews.length ? (ratingCounts[star - 1] / reviews.length) * 100 : 0;
              return (
                <div key={star} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontFamily: font, fontSize: 13, color: "#6B7280", width: 14, textAlign: "right" }}>{star}</span>
                  <StarIcon filled size={14} />
                  <div style={{ flex: 1, height: 8, background: "#F3F4F6", borderRadius: 4, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${pct}%`, background: "linear-gradient(90deg, #F59E0B, #FBBF24)", borderRadius: 4, transition: "width 0.6s ease" }} />
                  </div>
                  <span style={{ fontFamily: font, fontSize: 12, color: "#9CA3AF", width: 20 }}>{ratingCounts[star - 1]}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form toggle */}
        {!showForm && !submitted && (
          <button onClick={() => setShowForm(true)} style={{ display: "block", width: "100%", padding: 16, background: "#111827", color: "white", border: "none", borderRadius: 14, fontFamily: font, fontSize: 15, fontWeight: 600, cursor: "pointer", marginBottom: 28, animation: "fadeSlideIn 0.4s ease 0.2s both" }}>
            Write a Review
          </button>
        )}

        {showForm && !submitted && <ReviewForm onSubmit={handleSubmit} onCancel={() => setShowForm(false)} />}

        {submitted && (
          <div style={{ background: "white", borderRadius: 20, padding: "36px 28px", marginBottom: 28, textAlign: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.06)", border: "1px solid #E5E7EB", animation: "popIn 0.35s ease both" }}>
            <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#ECFDF5", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", animation: "checkPop 0.4s ease 0.15s both" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
            <div style={{ fontFamily: font, fontSize: 16, fontWeight: 600, color: "#111827" }}>Thank you for your review!</div>
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {reviews.map((review, i) => <ReviewCard key={review.id} review={review} index={i} />)}
        </div>
      </div>
    </div>
  );
}