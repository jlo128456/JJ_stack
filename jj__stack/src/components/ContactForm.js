import { useState, forwardRef } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { services } from "../data";


const EMAILJS_SERVICE_ID = "service_opet21e";
const EMAILJS_TEMPLATE_ID = "template_w74oapb";
const EMAILJS_PUBLIC_KEY = "mzj0s4YZofWBWrjVm";

const ContactForm = forwardRef(({ sectionAnim }, ref) => {
  const [formData, setFormData] = useState({
    name: "", email: "", service: "", budget: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.service) return;

    setSending(true);
    setError("");

    try {
      const serviceName = services.find(
        (s) => s.id === formData.service
      )?.title || formData.service;

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          service: serviceName,
          budget: formData.budget || "Not specified",
          message: formData.message || "No details provided",
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
    } catch (err) {
      setError("Failed to send. Please try again or email us directly.");
      console.error("EmailJS error:", err);
    } finally {
      setSending(false);
    }
  };

  const reset = () => {
    setSubmitted(false);
    setError("");
    setFormData({ name: "", email: "", service: "", budget: "", message: "" });
  };

  const set = (key) => (e) => setFormData({ ...formData, [key]: e.target.value });

  return (
    <section id="contact" ref={ref} className="section" style={{
      ...styles.section, ...sectionAnim("contact"),
      transition: "all .8s cubic-bezier(.16,1,.3,1)",
    }}>
      <div style={styles.container}>
        <div style={styles.sectionLabel}>✦ LET'S TALK</div>
        <h2 className="section-title" style={styles.sectionTitle}>
          Request a Service
        </h2>
        {submitted ? (
          <div style={styles.successMsg}>
            <span style={{ fontSize: 48 }}>✓</span>
            <h3 style={{
              fontFamily: "Syne, sans-serif", fontSize: 24,
              color: "#fff", marginTop: 16,
            }}>
              Request Received!
            </h3>
            <p style={{
              color: "#8a9ab5", marginTop: 8,
              fontFamily: "DM Sans, sans-serif",
            }}>
              Thanks {formData.name}! We'll review your project
              details and get back within 48 hours.
            </p>
            <button onClick={reset} style={{
              ...styles.btnSecondary, marginTop: 24,
              cursor: "pointer", border: "1px solid #c9a22740",
            }}>
              Submit Another
            </button>
          </div>
        ) : (
          <div className="form-wrap" style={styles.formWrap}>
            <div className="form-grid" style={styles.formGrid}>
              <div style={styles.fieldGroup}>
                <label style={styles.label}>Name *</label>
                <input style={styles.input} placeholder="Your name"
                  value={formData.name} onChange={set("name")} />
              </div>
              <div style={styles.fieldGroup}>
                <label style={styles.label}>Email *</label>
                <input style={styles.input} type="email"
                  placeholder="you@company.com"
                  value={formData.email} onChange={set("email")} />
              </div>
              <div style={styles.fieldGroup}>
                <label style={styles.label}>Service *</label>
                <select style={styles.input} value={formData.service}
                  onChange={set("service")}>
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div style={styles.fieldGroup}>
                <label style={styles.label}>Budget Range</label>
                <select style={styles.input} value={formData.budget}
                  onChange={set("budget")}>
                  <option value="">Select range</option>
                  <option value="1k-5k">$1k – $5k</option>
                  <option value="5k-15k">$5k – $15k</option>
                  <option value="15k-50k">$15k – $50k</option>
                  <option value="50k+">$50k+</option>
                </select>
              </div>
            </div>
            <div style={{ ...styles.fieldGroup, marginTop: 20 }}>
              <label style={styles.label}>Project Details</label>
              <textarea style={{ ...styles.input, minHeight: 120, resize: "vertical" }}
                placeholder="Tell us about your project, timeline, and goals…"
                value={formData.message} onChange={set("message")} />
            </div>

            {error && (
              <p style={{ color: "#ff6b6b", fontSize: 14, marginTop: 12 }}>
                {error}
              </p>
            )}

            <button
              className="btn-primary"
              onClick={handleSubmit}
              disabled={!formData.name || !formData.email || !formData.service || sending}
              style={{
                ...styles.btnPrimary,
                width: "100%",
                marginTop: 24,
                cursor: sending ? "wait" : "pointer",
                border: "none",
                fontSize: 16,
                opacity: sending ? 0.7 : 1,
              }}
            >
              {sending ? "Sending..." : "Send Request →"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
});

export default ContactForm;