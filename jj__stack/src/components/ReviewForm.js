import { useState } from "react";
import { StarInput } from "./StarComponents";

const font = "'DM Sans', sans-serif";

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 10,
  border: "1.5px solid #E5E7EB",
  fontFamily: font,
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
  background: "#FAFAFA",
  transition: "border-color 0.2s",
};

const handleFocus = (e) => { e.target.style.borderColor = "#6366F1"; e.target.style.background = "#fff"; };
const handleBlur = (e) => { e.target.style.borderColor = "#E5E7EB"; e.target.style.background = "#FAFAFA"; };

export default function ReviewForm({ onSubmit, onCancel }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");

  const canSubmit = name.trim() && text.trim() && rating > 0;

  const handleSubmit = () => {
    if (!canSubmit) return;
    onSubmit({ author: name.trim(), rating, text: text.trim() });
    setName("");
    setRating(0);
    setText("");
  };

  return (
    <div style={{
      background: "white", borderRadius: 20, padding: 28, marginBottom: 28,
      boxShadow: "0 4px 16px rgba(0,0,0,0.06)", border: "1px solid #E5E7EB",
      animation: "popIn 0.35s ease both",
    }}>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600, color: "#111827", margin: "0 0 20px" }}>
        Share your experience
      </h3>

      <div style={{ marginBottom: 18 }}>
        <label style={{ fontFamily: font, fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Your name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane D."
          style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
      </div>

      <div style={{ marginBottom: 18 }}>
        <label style={{ fontFamily: font, fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 8 }}>Rating</label>
        <StarInput value={rating} onChange={setRating} />
      </div>

      <div style={{ marginBottom: 22 }}>
        <label style={{ fontFamily: font, fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Your review</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Tell us about your experience..."
          rows={4} style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }} onFocus={handleFocus} onBlur={handleBlur} />
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={handleSubmit} disabled={!canSubmit}
          style={{
            flex: 1, padding: "14px", background: canSubmit ? "#111827" : "#D1D5DB", color: "white",
            border: "none", borderRadius: 12, fontFamily: font, fontSize: 14, fontWeight: 600,
            cursor: canSubmit ? "pointer" : "not-allowed", transition: "all 0.2s",
          }}
          onMouseEnter={(e) => canSubmit && (e.currentTarget.style.background = "#1F2937")}
          onMouseLeave={(e) => canSubmit && (e.currentTarget.style.background = "#111827")}
        >
          Submit Review
        </button>
        <button onClick={onCancel}
          style={{
            padding: "14px 24px", background: "transparent", color: "#6B7280",
            border: "1.5px solid #E5E7EB", borderRadius: 12, fontFamily: font,
            fontSize: 14, fontWeight: 500, cursor: "pointer", transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#9CA3AF"; e.currentTarget.style.color = "#374151"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.color = "#6B7280"; }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}