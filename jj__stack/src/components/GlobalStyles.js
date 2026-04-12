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
    `}</style>
  );
}

export default GlobalStyles;