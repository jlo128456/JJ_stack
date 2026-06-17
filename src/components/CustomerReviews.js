import { useState, useEffect, useMemo } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs, orderBy, query } from "firebase/firestore";
import { StarIcon, StarRating } from "./StarComponents";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

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
    <section className="section" style={{ background: "transparent", padding: "100px 20px" }}>
      <style>{`
        @keyframes fadeSlideIn { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes popIn { 0% { opacity:0; transform:scale(0.92); } 60% { transform:scale(1.02); } 100% { opacity:1; transform:scale(1); } }
        @keyframes checkPop { 0% { transform:scale(0); } 60% { transform:scale(1.3); } 100% { transform:scale(1); } }
      `}</style>

      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48, animation: "fadeSlideIn 0.5s ease both" }}>
          <h2 className="section-title" style={{
            fontFamily: "'Syne', sans-serif", fontSize: 36, fontWeight: 700,
            color: "#fff", margin: "0 0 10px", letterSpacing: "-0.02em",
          }}>
            Customer Reviews
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#666", margin: 0, fontWeight: 300 }}>
            Hear what our customers have to say
          </p>
        </div>

        {/* Stats */}
        <div style={{
          display: "flex", alignItems: "center", gap: 32, background: "#0d0f14",
          borderRadius: 12, padding: "28px 32px", marginBottom: 24,
          border: "1px solid #1a1d25", animation: "fadeSlideIn 0.5s ease 0.1s both",
          flexWrap: "wrap", justifyContent: "center",
        }}>
          <div style={{ textAlign: "center", minWidth: 100 }}>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 48, fontWeight: 700, color: "#c9a227", lineHeight: 1 }}>
              {avgRating}
            </div>
            <StarRating value={Math.round(parseFloat(avgRating))} size={16} />
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#555", marginTop: 6, fontWeight: 300 }}>
              {reviews.length} review{reviews.length !== 1 ? "s" : ""}
            </div>
          </div>
          <div style={{ width: 1, height: 70, background: "#1a1d25", flexShrink: 0 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1, minWidth: 200 }}>
            {[5, 4, 3, 2, 1].map((star) => {
              const pct = reviews.length ? (ratingCounts[star - 1] / reviews.length) * 100 : 0;
              return (
                <div key={star} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#555", width: 14, textAlign: "right" }}>{star}</span>
                  <StarIcon filled size={14} />
                  <div style={{ flex: 1, height: 6, background: "#1a1d25", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${pct}%`, background: "linear-gradient(90deg, #c9a227, #d4b84a)", borderRadius: 3, transition: "width 0.6s ease" }} />
                  </div>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#444", width: 20 }}>{ratingCounts[star - 1]}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Write review button */}
        {!showForm && !submitted && (
          <button onClick={() => setShowForm(true)} style={{
            display: "block", width: "100%", padding: 16, background: "#c9a227", color: "#07090d",
            border: "none", borderRadius: 8, fontFamily: "'Syne', sans-serif", fontSize: 15,
            fontWeight: 600, cursor: "pointer", marginBottom: 24, transition: "all 0.3s",
            animation: "fadeSlideIn 0.4s ease 0.2s both", boxShadow: "0 0 20px #c9a22720",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 40px #c9a22740"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 20px #c9a22720"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Write a Review
          </button>
        )}

        {showForm && !submitted && <ReviewForm onSubmit={handleSubmit} onCancel={() => setShowForm(false)} />}

        {submitted && (
          <div style={{
            background: "#0d0f14", borderRadius: 12, padding: "36px 28px", marginBottom: 24,
            textAlign: "center", border: "1px solid #1a1d25", animation: "popIn 0.35s ease both",
          }}>
            <div style={{
              width: 52, height: 52, borderRadius: "50%", background: "#c9a22715",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 14px", animation: "checkPop 0.4s ease 0.15s both",
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#c9a227" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 600, color: "#fff" }}>
              Thank you for your review!
            </div>
          </div>
        )}

        {/* Reviews list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {reviews.map((review, i) => <ReviewCard key={review.id} review={review} index={i} />)}
        </div>
      </div>
    </section>
  );
}