import { useState } from "react";
import { StarInput } from "./StarComponents";

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 8,
  border: "1px solid #1a1d25",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 14,
  fontWeight: 300,
  outline: "none",
  boxSizing: "border-box",
  background: "#07090d",
  color: "#fff",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const handleFocus = (e) => {
  e.target.style.borderColor = "#c9a227";
  e.target.style.boxShadow = "0 0 0 2px #c9a22720";
};
const handleBlur = (e) => {
  e.target.style.borderColor = "#1a1d25";
  e.target.style.boxShadow = "none";
};

export default function ReviewForm({ onSubmit, onCancel }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");

  const canSubmit = name.trim() && text.trim() && rating > 0;

  const handleSubmitClick = () => {
    if (!canSubmit) return;
    onSubmit({ author: name.trim(), rating, text: text.trim() });
    setName("");
    setRating(0);
    setText("");
  };

  return (
    <div style={{
      background: "#0d0f14", borderRadius: 12, padding: 28, marginBottom: 24,
      border: "1px solid #1a1d25", animation: "popIn 0.35s ease both",
    }}>
      <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 600, color: "#fff", margin: "0 0 20px" }}>
        Share your experience
      </h3>

      <div style={{ marginBottom: 18 }}>
        <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: "#666", display: "block", marginBottom: 6 }}>
          Your name
        </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane D."
          style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
      </div>

      <div style={{ marginBottom: 18 }}>
        <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: "#666", display: "block", marginBottom: 8 }}>
          Rating
        </label>
        <StarInput value={rating} onChange={setRating} />
      </div>

      <div style={{ marginBottom: 22 }}>
        <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: "#666", display: "block", marginBottom: 6 }}>
          Your review
        </label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Tell us about your experience..."
          rows={4} style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }} onFocus={handleFocus} onBlur={handleBlur} />
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={handleSubmitClick} disabled={!canSubmit}
          style={{
            flex: 1, padding: "14px", background: canSubmit ? "#c9a227" : "#1a1d25",
            color: canSubmit ? "#07090d" : "#555", border: "none", borderRadius: 8,
            fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 600,
            cursor: canSubmit ? "pointer" : "not-allowed", transition: "all 0.3s",
            boxShadow: canSubmit ? "0 0 20px #c9a22720" : "none",
          }}
          onMouseEnter={(e) => canSubmit && (e.currentTarget.style.boxShadow = "0 0 30px #c9a22740")}
          onMouseLeave={(e) => canSubmit && (e.currentTarget.style.boxShadow = "0 0 20px #c9a22720")}
        >
          Submit Review
        </button>
        <button onClick={onCancel}
          style={{
            padding: "14px 24px", background: "transparent", color: "#666",
            border: "1px solid #1a1d25", borderRadius: 8,
            fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 400,
            cursor: "pointer", transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#333"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1a1d25"; e.currentTarget.style.color = "#666"; }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}