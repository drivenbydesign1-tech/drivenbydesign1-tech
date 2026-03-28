import { useState, useEffect } from "react";

/* ─────────────────────────────────────────────
   M2M~Inc. — model2message.net
   Homepage · Built to Design MD v1.0
   Navy / Gold · Sovereign Architect Platform
───────────────────────────────────────────── */

const TOKENS = {
  navy:        "#0A1628",
  navyMid:     "#0D2045",
  navyLight:   "#1A3560",
  gold:        "#C9A84C",
  goldBright:  "#F0C040",
  goldMuted:   "#9E7E38",
  white:       "#FFFFFF",
  whiteSoft:   "#E8EDF5",
  whiteDim:    "#A0AEC0",
  pivotBlue:   "#4A90D9",
  bridgeGreen: "#48BB78",
};

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --navy:         #0A1628;
    --navy-mid:     #0D2045;
    --navy-light:   #1A3560;
    --gold:         #C9A84C;
    --gold-bright:  #F0C040;
    --gold-muted:   #9E7E38;
    --gold-glow:    rgba(201,168,76,0.15);
    --white:        #FFFFFF;
    --white-soft:   #E8EDF5;
    --white-dim:    #A0AEC0;
    --pivot:        #4A90D9;
    --bridge:       #48BB78;
    --font-display: 'Cormorant Garamond', Georgia, serif;
    --font-body:    'DM Sans', system-ui, sans-serif;
    --font-mono:    'JetBrains Mono', monospace;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--navy);
    color: var(--white);
    font-family: var(--font-body);
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* ── NAV ── */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    height: 72px;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 clamp(1.5rem, 5vw, 4rem);
    background: rgba(10,22,40,0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(201,168,76,0.12);
  }
  .nav-logo {
    font-family: var(--font-display);
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--white);
    letter-spacing: -0.01em;
    text-decoration: none;
  }
  .nav-logo span { color: var(--gold); }
  .nav-links {
    display: flex; align-items: center; gap: 2.5rem;
    list-style: none;
  }
  .nav-links a {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--white-soft);
    text-decoration: none;
    transition: color 0.2s;
    letter-spacing: 0.02em;
  }
  .nav-links a:hover { color: var(--gold); }
  .nav-cta {
    background: var(--gold);
    color: var(--navy) !important;
    padding: 0.5rem 1.25rem;
    border-radius: 9999px;
    font-weight: 700 !important;
    font-size: 0.8rem !important;
    letter-spacing: 0.04em !important;
    transition: filter 0.2s, transform 0.2s !important;
  }
  .nav-cta:hover { filter: brightness(1.1); transform: scale(1.02); }

  /* ── HERO ── */
  .hero {
    min-height: 100vh;
    display: flex; align-items: center;
    padding: 120px clamp(1.5rem, 5vw, 4rem) 80px;
    background: linear-gradient(135deg, #0A1628 0%, #0D2045 55%, #0A1628 100%);
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 60% 50% at 70% 50%, rgba(201,168,76,0.07), transparent);
    pointer-events: none;
  }
  .hero::after {
    content: '';
    position: absolute;
    top: -200px; right: -200px;
    width: 600px; height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-inner {
    max-width: 1280px; margin: 0 auto; width: 100%;
    display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
  }
  .hero-eyebrow {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    color: var(--gold);
    text-transform: uppercase;
    margin-bottom: 1.25rem;
    display: flex; align-items: center; gap: 0.75rem;
  }
  .hero-eyebrow::before {
    content: '';
    display: block; width: 32px; height: 1.5px;
    background: var(--gold);
  }
  .hero-headline {
    font-family: var(--font-display);
    font-size: clamp(2.75rem, 5.5vw, 5rem);
    font-weight: 900;
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: var(--white);
    margin-bottom: 1.5rem;
  }
  .hero-headline .rotating-word {
    color: var(--gold);
    display: inline-block;
    min-width: 280px;
  }
  .hero-subhead {
    font-size: 1.1rem;
    color: var(--white-soft);
    line-height: 1.7;
    max-width: 480px;
    margin-bottom: 2.5rem;
  }
  .hero-cta-group {
    display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;
    margin-bottom: 3rem;
  }
  .btn-primary {
    background: var(--gold);
    color: var(--navy);
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 700;
    padding: 0.875rem 2rem;
    border-radius: 9999px;
    border: none; cursor: pointer;
    letter-spacing: 0.03em;
    transition: filter 0.2s, transform 0.2s;
    text-decoration: none; display: inline-block;
  }
  .btn-primary:hover { filter: brightness(1.1); transform: scale(1.02); }
  .btn-secondary {
    background: transparent;
    color: var(--gold);
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 600;
    padding: 0.875rem 2rem;
    border-radius: 9999px;
    border: 1.5px solid var(--gold);
    cursor: pointer;
    letter-spacing: 0.03em;
    transition: background 0.2s, color 0.2s;
    text-decoration: none; display: inline-block;
  }
  .btn-secondary:hover { background: rgba(201,168,76,0.1); }

  /* ── TRUST BAR ── */
  .trust-bar {
    display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;
  }
  .trust-item {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    color: var(--gold-muted);
    text-transform: uppercase;
  }
  .trust-dot {
    width: 3px; height: 3px; border-radius: 50%;
    background: rgba(201,168,76,0.3);
  }

  /* ── HERO VISUAL SIDE ── */
  .hero-visual {
    display: flex; justify-content: center; align-items: center;
    position: relative;
  }
  .hero-card-stack {
    position: relative; width: 100%; max-width: 420px;
  }
  .hero-platform-card {
    background: linear-gradient(145deg, #0D2045, #1A3560);
    border: 1px solid rgba(201,168,76,0.2);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 24px rgba(0,0,0,0.3), 0 0 32px rgba(201,168,76,0.08);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .hero-platform-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 40px rgba(0,0,0,0.4), 0 0 48px rgba(201,168,76,0.15);
  }
  .platform-card-label {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    color: var(--gold);
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  .platform-card-title {
    font-family: var(--font-display);
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 0.5rem;
  }
  .platform-card-sub {
    font-size: 0.875rem;
    color: var(--white-dim);
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }
  .platform-lanes {
    display: flex; flex-direction: column; gap: 0.5rem;
  }
  .lane-chip {
    display: flex; align-items: center; gap: 0.625rem;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.07);
  }
  .lane-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
  .lane-text { font-size: 0.8rem; color: var(--white-soft); font-weight: 500; }
  .lane-badge {
    margin-left: auto;
    font-family: var(--font-mono);
    font-size: 0.6rem;
    padding: 0.15rem 0.5rem;
    border-radius: 9999px;
    font-weight: 600;
    letter-spacing: 0.05em;
  }

  /* ── SECTION SHARED ── */
  .section {
    padding: 6rem clamp(1.5rem, 5vw, 4rem);
  }
  .section-inner { max-width: 1280px; margin: 0 auto; }
  .section-eyebrow {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    letter-spacing: 0.18em;
    color: var(--gold);
    text-transform: uppercase;
    margin-bottom: 0.875rem;
    display: flex; align-items: center; gap: 0.75rem;
  }
  .section-eyebrow::before {
    content: '';
    display: block; width: 3px; height: 36px;
    background: var(--gold); border-radius: 2px;
  }
  .section-headline {
    font-family: var(--font-display);
    font-size: clamp(2rem, 3.5vw, 3rem);
    font-weight: 700;
    color: var(--white);
    line-height: 1.15;
    margin-bottom: 1rem;
    letter-spacing: -0.01em;
  }
  .section-sub {
    font-size: 1.05rem;
    color: var(--white-soft);
    max-width: 560px;
    line-height: 1.7;
    margin-bottom: 3.5rem;
  }
  .divider {
    width: 100%; height: 1px;
    background: linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent);
    margin: 0;
  }

  /* ── OS LANE CARDS ── */
  .os-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  .os-card {
    background: linear-gradient(145deg, #0D2045, #1A3560);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 16px;
    padding: 2rem;
    position: relative; overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
    cursor: default;
  }
  .os-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0;
    height: 3px;
    border-radius: 16px 16px 0 0;
  }
  .os-card:hover {
    transform: translateY(-6px);
    border-color: rgba(201,168,76,0.25);
    box-shadow: 0 8px 40px rgba(0,0,0,0.35), 0 0 40px rgba(201,168,76,0.1);
  }
  .os-card-icon {
    width: 44px; height: 44px; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.25rem; margin-bottom: 1.25rem;
  }
  .os-card-title {
    font-family: var(--font-display);
    font-size: 1.5rem; font-weight: 700;
    color: var(--white);
    margin-bottom: 0.5rem;
  }
  .os-card-tm {
    font-size: 0.7rem; vertical-align: super; opacity: 0.7;
  }
  .os-card-tag {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: 0.6rem;
    letter-spacing: 0.1em;
    padding: 0.2rem 0.6rem;
    border-radius: 9999px;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  .os-card-body {
    font-size: 0.9rem; color: var(--white-soft);
    line-height: 1.65; margin-bottom: 1.5rem;
  }
  .os-card-link {
    font-size: 0.8rem; font-weight: 600;
    color: var(--gold); text-decoration: none;
    display: flex; align-items: center; gap: 0.4rem;
    letter-spacing: 0.02em;
    transition: gap 0.2s;
  }
  .os-card-link:hover { gap: 0.7rem; }

  /* ── ABOUT / SOVEREIGN ── */
  .sovereign-section {
    background: linear-gradient(180deg, var(--navy) 0%, #0B1A30 100%);
  }
  .sovereign-inner {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 5rem; align-items: center;
    max-width: 1280px; margin: 0 auto;
  }
  .credential-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 0.875rem;
    margin-top: 2rem;
  }
  .credential-chip {
    display: flex; align-items: center; gap: 0.625rem;
    padding: 0.625rem 0.875rem;
    background: rgba(201,168,76,0.06);
    border: 1px solid rgba(201,168,76,0.15);
    border-radius: 8px;
  }
  .credential-mark {
    font-size: 0.65rem; color: var(--gold);
    font-family: var(--font-mono);
    letter-spacing: 0.08em; font-weight: 600;
  }
  .sovereign-quote {
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 2.5vw, 2.25rem);
    font-weight: 600;
    color: var(--white);
    line-height: 1.3;
    position: relative;
    padding-left: 1.5rem;
    border-left: 3px solid var(--gold);
  }
  .sovereign-quote-attr {
    margin-top: 1.5rem;
    font-size: 0.875rem; color: var(--white-dim);
    padding-left: 1.5rem;
  }
  .sovereign-quote-attr strong { color: var(--gold); }

  /* ── SOCIAL PROOF ── */
  .proof-strip {
    background: #060F1E;
    padding: 3rem clamp(1.5rem, 5vw, 4rem);
    border-top: 1px solid rgba(201,168,76,0.1);
    border-bottom: 1px solid rgba(201,168,76,0.1);
  }
  .proof-inner {
    max-width: 1280px; margin: 0 auto;
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 1.5rem;
  }
  .proof-stat { text-align: center; }
  .proof-number {
    font-family: var(--font-display);
    font-size: 2.5rem; font-weight: 900;
    color: var(--gold); line-height: 1;
    margin-bottom: 0.25rem;
  }
  .proof-label {
    font-size: 0.75rem; color: var(--white-dim);
    letter-spacing: 0.05em; text-transform: uppercase;
    font-family: var(--font-mono);
  }
  .proof-divider {
    width: 1px; height: 48px;
    background: rgba(201,168,76,0.15);
  }

  /* ── CTA SECTION ── */
  .cta-section {
    padding: 7rem clamp(1.5rem, 5vw, 4rem);
    text-align: center;
    background: linear-gradient(135deg, #0D2045 0%, #0A1628 100%);
    position: relative; overflow: hidden;
  }
  .cta-section::before {
    content: '';
    position: absolute;
    top: 50%; left: 50%; transform: translate(-50%,-50%);
    width: 600px; height: 300px;
    background: radial-gradient(ellipse, rgba(201,168,76,0.06), transparent 70%);
    pointer-events: none;
  }
  .cta-inner { max-width: 720px; margin: 0 auto; position: relative; }
  .cta-headline {
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 3.25rem);
    font-weight: 900;
    color: var(--white);
    line-height: 1.1; margin-bottom: 1.25rem;
    letter-spacing: -0.01em;
  }
  .cta-headline span { color: var(--gold); }
  .cta-sub {
    font-size: 1.05rem; color: var(--white-soft);
    line-height: 1.7; margin-bottom: 2.5rem;
  }
  .cta-group { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

  /* ── FOOTER ── */
  .footer {
    background: #060F1E;
    padding: 3rem clamp(1.5rem, 5vw, 4rem);
    border-top: 1px solid rgba(201,168,76,0.1);
  }
  .footer-inner {
    max-width: 1280px; margin: 0 auto;
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 1.5rem;
  }
  .footer-logo {
    font-family: var(--font-display);
    font-size: 1.25rem; font-weight: 700;
    color: var(--white);
  }
  .footer-logo span { color: var(--gold); }
  .footer-trust {
    display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;
  }
  .footer-trust-item {
    font-family: var(--font-mono);
    font-size: 0.6rem; letter-spacing: 0.15em;
    color: var(--gold-muted); text-transform: uppercase;
  }
  .footer-copy {
    font-size: 0.75rem; color: var(--white-dim);
    width: 100%; margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255,255,255,0.05);
    display: flex; justify-content: space-between;
    flex-wrap: wrap; gap: 0.5rem;
  }

  /* ── ANIMATIONS ── */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes wordFade {
    0%,100% { opacity: 0; transform: translateY(8px); }
    15%,85% { opacity: 1; transform: translateY(0); }
  }
  .animate-in { animation: fadeInUp 0.7s ease forwards; }
  .delay-1 { animation-delay: 0.15s; opacity: 0; }
  .delay-2 { animation-delay: 0.3s;  opacity: 0; }
  .delay-3 { animation-delay: 0.45s; opacity: 0; }
  .delay-4 { animation-delay: 0.6s;  opacity: 0; }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .hero-inner { grid-template-columns: 1fr; }
    .hero-visual { display: none; }
    .os-grid { grid-template-columns: 1fr; }
    .sovereign-inner { grid-template-columns: 1fr; gap: 3rem; }
    .nav-links { display: none; }
    .proof-inner { justify-content: center; }
    .proof-divider { display: none; }
  }
`;

const AUDIENCES = ["VETERANS", "WORKFORCE", "ENTERPRISE", "LEADERS", "BUILDERS"];

const OS_LANES = [
  {
    name: "PIVOT OS™",
    tag: "Individual",
    tagColor: TOKENS.pivotBlue,
    icon: "◈",
    iconBg: "rgba(74,144,217,0.15)",
    accentColor: TOKENS.pivotBlue,
    body: "Career reinvention for veterans and professionals navigating the space between what they were and who they're becoming. A structured system, not a motivational speech.",
  },
  {
    name: "BRIDGE OS™",
    tag: "Employer / SMB",
    tagColor: TOKENS.bridgeGreen,
    icon: "⬡",
    iconBg: "rgba(72,187,120,0.15)",
    accentColor: TOKENS.bridgeGreen,
    body: "Workforce transition infrastructure for employers, municipalities, and SMBs managing the human side of organizational change. Built for retention, not replacement.",
  },
  {
    name: "Human OS™",
    tag: "Enterprise / Gov",
    tagColor: TOKENS.gold,
    icon: "⬟",
    iconBg: "rgba(201,168,76,0.15)",
    accentColor: TOKENS.gold,
    body: "Enterprise and government workforce intelligence at scale. The full M2M Composure Architecture™ deployed across teams, agencies, and institutions ready to lead through disruption.",
  },
];

const CREDENTIALS = [
  "SDVOSB Certified",
  "VBE Certified",
  "SAFe 6 Agilist",
  "CSM · CSPO",
  "USPTO — 9 Marks",
  "Tuck Executive Ed.",
  "Hon. D.H.L.",
  "U.S. Navy Veteran",
];

export default function M2MHomepage() {
  const [wordIdx, setWordIdx] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % AUDIENCES.length);
        setWordVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{styles}</style>

      {/* ── NAV ── */}
      <nav className="nav">
        <a href="/" className="nav-logo">M2M<span>~</span>Inc.</a>
        <ul className="nav-links">
          <li><a href="#platform">Platform</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#speaking">Speaking</a></li>
          <li><a href="#contact" className="nav-cta">Schedule a Call</a></li>
        </ul>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow animate-in">The Sovereign Architect Platform</p>
            <h1 className="hero-headline animate-in delay-1">
              Built for{" "}
              <span
                className="rotating-word"
                style={{
                  opacity: wordVisible ? 1 : 0,
                  transform: wordVisible ? "translateY(0)" : "translateY(8px)",
                  transition: "opacity 0.4s ease, transform 0.4s ease",
                  display: "inline-block",
                }}
              >
                {AUDIENCES[wordIdx]}
              </span>
              <br />Who Refuse to<br />
              <span style={{ color: TOKENS.gold }}>Stay Stuck.</span>
            </h1>
            <p className="hero-subhead animate-in delay-2">
              M2M~Inc. is a veteran-owned workforce intelligence firm delivering
              the Human OS™ platform — a proven system that converts human
              potential into measurable organizational performance.
            </p>
            <div className="hero-cta-group animate-in delay-3">
              <a href="#platform" className="btn-primary">Explore the Platform</a>
              <a href="#contact" className="btn-secondary">Schedule a Consult</a>
            </div>
            <div className="trust-bar animate-in delay-4">
              {["SDVOSB", "VBE", "SAFe 6", "Tuck", "USPTO"].map((item, i) => (
                <span key={item} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span className="trust-item">{item}</span>
                  {i < 4 && <span className="trust-dot" />}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="hero-visual">
            <div className="hero-card-stack">
              <div className="hero-platform-card">
                <p className="platform-card-label">Human OS™ Platform</p>
                <h2 className="platform-card-title">Three Lanes.<br />One System.</h2>
                <p className="platform-card-sub">
                  Every human carries more capacity than they've been given credit for.
                </p>
                <div className="platform-lanes">
                  {[
                    { color: TOKENS.pivotBlue, label: "PIVOT OS™", badge: "Individual" },
                    { color: TOKENS.bridgeGreen, label: "BRIDGE OS™", badge: "Employer" },
                    { color: TOKENS.gold, label: "Human OS™", badge: "Enterprise" },
                  ].map((lane) => (
                    <div key={lane.label} className="lane-chip">
                      <div className="lane-dot" style={{ background: lane.color }} />
                      <span className="lane-text">{lane.label}</span>
                      <span
                        className="lane-badge"
                        style={{
                          background: `${lane.color}1A`,
                          color: lane.color,
                          border: `1px solid ${lane.color}40`,
                        }}
                      >
                        {lane.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── PROOF STRIP ── */}
      <div className="proof-strip">
        <div className="proof-inner">
          {[
            { num: "9", label: "Proprietary Marks" },
            { num: "3", label: "Platform Lanes" },
            { num: "SDVOSB", label: "Veteran Certified" },
            { num: "12+", label: "Sectors Served" },
            { num: "Tuck", label: "Executive Network" },
          ].map((stat, i) => (
            <span key={stat.label} style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <div className="proof-stat">
                <div className="proof-number">{stat.num}</div>
                <div className="proof-label">{stat.label}</div>
              </div>
              {i < 4 && <div className="proof-divider" />}
            </span>
          ))}
        </div>
      </div>

      {/* ── OS PLATFORM ── */}
      <section className="section" id="platform">
        <div className="section-inner">
          <p className="section-eyebrow">The Platform</p>
          <h2 className="section-headline">Three Operating Systems.<br />One Human Architecture.</h2>
          <p className="section-sub">
            Whether you're an individual rebuilding after transition, an employer
            managing workforce change, or an enterprise scaling human intelligence —
            there's a lane built for where you are.
          </p>
          <div className="os-grid">
            {OS_LANES.map((lane) => (
              <div key={lane.name} className="os-card">
                <div
                  className="os-card"
                  style={{
                    background: "linear-gradient(145deg, #0D2045, #1A3560)",
                    borderColor: "rgba(255,255,255,0.07)",
                    padding: 0, border: "none",
                    boxShadow: "none", borderRadius: 0,
                  }}
                >
                  <div
                    style={{
                      position: "absolute", top: 0, left: 0, right: 0, height: 3,
                      background: lane.accentColor, borderRadius: "16px 16px 0 0",
                    }}
                  />
                  <div
                    className="os-card-icon"
                    style={{ background: lane.iconBg, color: lane.accentColor }}
                  >
                    {lane.icon}
                  </div>
                  <h3 className="os-card-title">{lane.name}</h3>
                  <div
                    className="os-card-tag"
                    style={{
                      background: `${lane.accentColor}1A`,
                      color: lane.accentColor,
                      border: `1px solid ${lane.accentColor}40`,
                    }}
                  >
                    {lane.tag}
                  </div>
                  <p className="os-card-body">{lane.body}</p>
                  <a href="#contact" className="os-card-link">
                    Learn more <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── SOVEREIGN ARCHITECT ── */}
      <section className="section sovereign-section" id="about">
        <div className="sovereign-inner">
          <div>
            <p className="section-eyebrow">The Architect</p>
            <h2 className="section-headline">Dr. Kevin A. Smith</h2>
            <p style={{ fontSize: "1rem", color: TOKENS.whiteSoft, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Founder & Chief Opportunity Officer of M2M~Inc. Navy veteran.
              Behavioral systems architect. Keynote speaker. The platform is
              built from lived experience — military discipline, workforce
              reinvention, and a decade of organizational transformation work
              across private, public, and nonprofit sectors.
            </p>
            <div className="credential-grid">
              {CREDENTIALS.map((c) => (
                <div key={c} className="credential-chip">
                  <span style={{ color: TOKENS.gold, fontSize: "0.7rem" }}>✦</span>
                  <span className="credential-mark">{c}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <blockquote className="sovereign-quote">
              "Every person carries more capacity than they've been given
              credit for. The Human OS™ doesn't create potential —
              it reveals what was already there."
            </blockquote>
            <p className="sovereign-quote-attr">
              — <strong>Dr. Kevin A. Smith</strong>, Founder · M2M~Inc.<br />
              <span style={{ color: TOKENS.whiteDim }}>Sovereign Architect · Navy Veteran · Hon. D.H.L.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" id="contact">
        <div className="cta-inner">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              letterSpacing: "0.18em",
              color: TOKENS.gold,
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Ready to Build
          </p>
          <h2 className="cta-headline">
            The Ground Is Moving.<br />
            <span>Are You Pivoting With It?</span>
          </h2>
          <p className="cta-sub">
            Schedule a strategic consultation and find out which lane of the
            Human OS™ platform is built for where you are right now.
          </p>
          <div className="cta-group">
            <a href="mailto:info@model2message.net" className="btn-primary">
              Schedule a Consultation
            </a>
            <a href="tel:9804749377" className="btn-secondary">
              Call 980.474.9377
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">M2M<span>~</span>Inc.</div>
            <p style={{ fontSize: "0.75rem", color: TOKENS.whiteDim, marginTop: "0.4rem" }}>
              model2message.net · Winston-Salem, NC
            </p>
          </div>
          <div className="footer-trust">
            {["SDVOSB", "VBE", "SAFe 6 Agilist", "USPTO — 9 Marks Pending", "Tuck Executive Education"].map(
              (item, i) => (
                <span key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span className="footer-trust-item">{item}</span>
                  {i < 4 && (
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "rgba(201,168,76,0.3)",
                        fontSize: "0.7rem",
                      }}
                    >
                      ·
                    </span>
                  )}
                </span>
              )
            )}
          </div>
        </div>
        <div className="footer-inner">
          <div className="footer-copy">
            <span>© 2026 M2M~Inc. All rights reserved. PIVOT OS™ · BRIDGE OS™ · Human OS™ · M2M Composure Architecture™ are pending trademarks.</span>
            <span style={{ color: TOKENS.gold }}>info@model2message.net</span>
          </div>
        </div>
      </footer>
    </>
  );
}
