function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body { background: #07090d; }
      ::selection { background: #c9a22740; color: #fff; }
      @keyframes pulse { 0%,100%{opacity:.3} 50%{opacity:.8} }
      @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
      @keyframes gridMove { 0%{background-position:0 0} 100%{background-position:40px 40px} }
      @keyframes glowPulse { 0%,100%{box-shadow:0 0 20px #c9a22720} 50%{box-shadow:0 0 40px #c9a22740} }
      input:focus, textarea:focus, select:focus { outline: none; border-color: #c9a227 !important; box-shadow: 0 0 0 2px #c9a22720; }

      /* ---- Mobile Responsive ---- */
      @media (max-width: 768px) {
        .nav-links { display: none !important; }
        .nav-cta-desktop { display: none !important; }
        .hamburger { display: flex !important; }
        .mobile-menu { display: flex !important; }
        .services-grid { grid-template-columns: 1fr !important; }
        .projects-grid { grid-template-columns: 1fr !important; }
        .form-grid { grid-template-columns: 1fr !important; }
        .form-wrap { padding: 24px !important; }
        .hero-title { font-size: 36px !important; }
        .hero-sub { font-size: 15px !important; }
        .section { padding: 60px 16px !important; }
        .nav-inner { padding: 12px 16px !important; }
        .hero { padding: 100px 16px 60px !important; }
        .hero-ctas { flex-direction: column; align-items: center; }
        .footer-inner { flex-direction: column; text-align: center; gap: 12px !important; }
      }
 
      @media (max-width: 480px) {
        .hero-title { font-size: 28px !important; }
        .hero-badge { font-size: 11px !important; padding: 6px 14px !important; }
        .section-title { font-size: 28px !important; }
        .btn-primary, .btn-secondary { width: 100%; text-align: center; }
      }
        
    `}</style>
  );
}

export default GlobalStyles;