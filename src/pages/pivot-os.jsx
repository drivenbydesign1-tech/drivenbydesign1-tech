import { useState } from "react";

/* ─────────────────────────────────────────────
   M2M~Inc. — PIVOT OS™ Lane Page
   Individual Career Reinvention
   Built to Design MD v1.0
───────────────────────────────────────────── */

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --navy:        #0A1628;
    --navy-mid:    #0D2045;
    --navy-light:  #1A3560;
    --gold:        #C9A84C;
    --gold-muted:  #9E7E38;
    --pivot:       #4A90D9;
    --pivot-light: rgba(74,144,217,0.15);
    --pivot-border:rgba(74,144,217,0.25);
    --white:       #FFFFFF;
    --white-soft:  #E8EDF5;
    --white-dim:   #A0AEC0;
    --font-display:'Cormorant Garamond', Georgia, serif;
    --font-body:   'DM Sans', system-ui, sans-serif;
    --font-mono:   'JetBrains Mono', monospace;
  }

  html { scroll-behavior: smooth; }
  body {
    background: var(--navy);
    color: var(--white);
    font-family: var(--font-body);
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* NAV */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    height: 72px;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 clamp(1.5rem, 5vw, 4rem);
    background: rgba(10,22,40,0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(74,144,217,0.15);
  }
  .nav-logo {
    font-family: var(--font-display);
    font-size: 1.5rem; font-weight: 700;
    color: var(--white); text-decoration: none;
  }
  .nav-logo span { color: var(--gold); }
  .nav-back {
    font-size: 0.8rem; color: var(--white-dim);
    text-decoration: none; display: flex; align-items: center; gap: 0.4rem;
    font-family: var(--font-mono); letter-spacing: 0.05em;
    transition: color 0.2s;
  }
  .nav-back:hover { color: var(--pivot); }
  .nav-cta {
    background: var(--pivot);
    color: var(--white);
    font-size: 0.8rem; font-weight: 700;
    padding: 0.5rem 1.25rem; border-radius: 9999px;
    text-decoration: none; letter-spacing: 0.03em;
    transition: filter 0.2s, transform 0.2s;
  }
  .nav-cta:hover { filter: brightness(1.15); transform: scale(1.02); }

  /* HERO */
  .hero {
    min-height: 100vh;
    display: flex; align-items: center;
    padding: 120px clamp(1.5rem, 5vw, 4rem) 80px;
    background: linear-gradient(135deg, #0A1628 0%, #0B1E3A 60%, #0A1628 100%);
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 55% 60% at 75% 40%, rgba(74,144,217,0.08), transparent);
    pointer-events: none;
  }
  .hero-inner {
    max-width: 1280px; margin: 0 auto; width: 100%;
    display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 5rem; align-items: center;
  }
  .lane-badge {
    display: inline-flex; align-items: center; gap: 0.5rem;
    background: var(--pivot-light); border: 1px solid var(--pivot-border);
    padding: 0.375rem 0.875rem; border-radius: 9999px;
    font-family: var(--font-mono); font-size: 0.65rem;
    letter-spacing: 0.12em; color: var(--pivot);
    text-transform: uppercase; margin-bottom: 1.25rem;
  }
  .lane-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--pivot); }
  .hero-headline {
    font-family: var(--font-display);
    font-size: clamp(2.75rem, 5vw, 4.75rem);
    font-weight: 900; line-height: 1.05;
    letter-spacing: -0.02em; color: var(--white);
    margin-bottom: 1.5rem;
  }
  .hero-headline em { color: var(--pivot); font-style: normal; }
  .hero-sub {
    font-size: 1.1rem; color: var(--white-soft);
    line-height: 1.75; max-width: 500px; margin-bottom: 2.5rem;
  }
  .btn-pivot {
    background: var(--pivot); color: var(--white);
    font-size: 0.875rem; font-weight: 700;
    padding: 0.875rem 2rem; border-radius: 9999px;
    border: none; cursor: pointer; letter-spacing: 0.03em;
    transition: filter 0.2s, transform 0.2s;
    text-decoration: none; display: inline-block;
  }
  .btn-pivot:hover { filter: brightness(1.1); transform: scale(1.02); }
  .btn-outline {
    background: transparent; color: var(--pivot);
    font-size: 0.875rem; font-weight: 600;
    padding: 0.875rem 2rem; border-radius: 9999px;
    border: 1.5px solid var(--pivot);
    cursor: pointer; letter-spacing: 0.03em;
    text-decoration: none; display: inline-block;
    transition: background 0.2s;
  }
  .btn-outline:hover { background: var(--pivot-light); }
  .cta-row { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2.5rem; }

  /* WHO THIS IS FOR */
  .for-grid {
    display: flex; flex-direction: column; gap: 0.625rem;
  }
  .for-item {
    display: flex; align-items: flex-start; gap: 0.75rem;
    background: rgba(74,144,217,0.06);
    border: 1px solid rgba(74,144,217,0.15);
    border-radius: 10px; padding: 0.875rem 1rem;
  }
  .for-check { color: var(--pivot); font-size: 0.9rem; margin-top: 1px; flex-shrink: 0; }
  .for-text { font-size: 0.875rem; color: var(--white-soft); line-height: 1.5; }

  /* SECTION SHARED */
  .section { padding: 6rem clamp(1.5rem, 5vw, 4rem); }
  .section-inner { max-width: 1280px; margin: 0 auto; }
  .eyebrow {
    font-family: var(--font-mono); font-size: 0.68rem;
    letter-spacing: 0.18em; color: var(--pivot);
    text-transform: uppercase; margin-bottom: 0.875rem;
    display: flex; align-items: center; gap: 0.75rem;
  }
  .eyebrow::before {
    content: ''; display: block; width: 3px; height: 36px;
    background: var(--pivot); border-radius: 2px;
  }
  .s-headline {
    font-family: var(--font-display);
    font-size: clamp(1.75rem, 3vw, 2.75rem);
    font-weight: 700; color: var(--white);
    line-height: 1.15; margin-bottom: 1rem;
    letter-spacing: -0.01em;
  }
  .s-sub {
    font-size: 1rem; color: var(--white-soft);
    max-width: 560px; line-height: 1.7; margin-bottom: 3rem;
  }
  .divider {
    width: 100%; height: 1px;
    background: linear-gradient(to right, transparent, rgba(74,144,217,0.2), transparent);
  }

  /* PROCESS STEPS */
  .steps-grid {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem;
  }
  .step-card {
    background: linear-gradient(145deg, #0D2045, #1A3560);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 14px; padding: 1.75rem;
    position: relative; overflow: hidden;
    transition: transform 0.3s, border-color 0.3s;
  }
  .step-card:hover {
    transform: translateY(-4px);
    border-color: rgba(74,144,217,0.3);
  }
  .step-number {
    font-family: var(--font-display);
    font-size: 3.5rem; font-weight: 900;
    color: rgba(74,144,217,0.12);
    position: absolute; top: 0.75rem; right: 1rem;
    line-height: 1; pointer-events: none;
  }
  .step-icon {
    font-size: 1.5rem; margin-bottom: 1rem;
    width: 44px; height: 44px;
    display: flex; align-items: center; justify-content: center;
    background: var(--pivot-light); border-radius: 10px;
  }
  .step-title {
    font-family: var(--font-display); font-size: 1.2rem; font-weight: 700;
    color: var(--white); margin-bottom: 0.5rem;
  }
  .step-body { font-size: 0.85rem; color: var(--white-soft); line-height: 1.6; }

  /* TOOLS / IP */
  .tools-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem;
  }
  .tool-card {
    background: rgba(74,144,217,0.05);
    border: 1px solid rgba(74,144,217,0.15);
    border-radius: 12px; padding: 1.5rem;
    transition: background 0.3s, border-color 0.3s;
  }
  .tool-card:hover {
    background: rgba(74,144,217,0.1);
    border-color: rgba(74,144,217,0.3);
  }
  .tool-tm {
    font-family: var(--font-mono); font-size: 0.65rem;
    letter-spacing: 0.1em; color: var(--pivot);
    text-transform: uppercase; margin-bottom: 0.5rem;
  }
  .tool-name {
    font-family: var(--font-display); font-size: 1.25rem; font-weight: 700;
    color: var(--white); margin-bottom: 0.625rem;
  }
  .tool-desc { font-size: 0.85rem; color: var(--white-soft); line-height: 1.6; }

  /* TESTIMONIAL */
  .testimonial-block {
    background: linear-gradient(145deg, #0D2045, #1A3560);
    border: 1px solid rgba(74,144,217,0.2);
    border-radius: 16px; padding: 3rem;
    position: relative;
    box-shadow: 0 0 40px rgba(74,144,217,0.07);
  }
  .testimonial-quote-mark {
    font-family: var(--font-display); font-size: 6rem;
    color: var(--pivot); opacity: 0.15;
    line-height: 0.5; margin-bottom: 1rem;
    display: block;
  }
  .testimonial-text {
    font-family: var(--font-display); font-size: clamp(1.2rem, 2vw, 1.6rem);
    font-weight: 600; color: var(--white); line-height: 1.4;
    margin-bottom: 1.5rem;
  }
  .testimonial-attr {
    font-size: 0.85rem; color: var(--white-dim);
  }
  .testimonial-attr strong { color: var(--pivot); }

  /* CTA SECTION */
  .cta-section {
    padding: 7rem clamp(1.5rem, 5vw, 4rem);
    text-align: center;
    background: linear-gradient(135deg, #0B1E3A 0%, #0A1628 100%);
    position: relative; overflow: hidden;
  }
  .cta-section::before {
    content: '';
    position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
    width: 600px; height: 300px;
    background: radial-gradient(ellipse, rgba(74,144,217,0.07), transparent 70%);
    pointer-events: none;
  }
  .cta-inner { max-width: 680px; margin: 0 auto; position: relative; }
  .cta-headline {
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 900; color: var(--white);
    line-height: 1.1; margin-bottom: 1.25rem;
    letter-spacing: -0.01em;
  }
  .cta-headline span { color: var(--pivot); }
  .cta-sub { font-size: 1rem; color: var(--white-soft); line-height: 1.7; margin-bottom: 2.5rem; }
  .cta-group { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

  /* FOOTER */
  .footer {
    background: #060F1E;
    padding: 2.5rem clamp(1.5rem, 5vw, 4rem);
    border-top: 1px solid rgba(201,168,76,0.1);
  }
  .footer-inner {
    max-width: 1280px; margin: 0 auto;
    display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;
  }
  .footer-logo { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; color: var(--white); }
  .footer-logo span { color: var(--gold); }
  .footer-trust {
    display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;
    font-family: var(--font-mono); font-size: 0.6rem;
    letter-spacing: 0.12em; color: var(--gold-muted); text-transform: uppercase;
  }
  .footer-copy {
    max-width: 1280px; margin: 1.5rem auto 0;
    padding-top: 1.25rem;
    border-top: 1px solid rgba(255,255,255,0.05);
    font-size: 0.72rem; color: var(--white-dim);
    display: flex; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .animate { animation: fadeInUp 0.6s ease forwards; }
  .d1 { animation-delay: 0.1s; opacity: 0; }
  .d2 { animation-delay: 0.25s; opacity: 0; }
  .d3 { animation-delay: 0.4s; opacity: 0; }

  @media (max-width: 900px) {
    .hero-inner { grid-template-columns: 1fr; }
    .steps-grid { grid-template-columns: 1fr 1fr; }
    .tools-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 600px) {
    .steps-grid { grid-template-columns: 1fr; }
  }
`;

const STEPS = [
  {
    num: "01", icon: "◎",
    title: "Reactivity Profile",
    body: "Complete the RPA™ — Reactivity Profile Assessment. Understand how you respond under pressure before you plan any next move.",
  },
  {
    num: "02", icon: "◈",
    title: "Composure Map",
    body: "Apply M2M Composure Architecture™ to identify your Proficiency Prison — the expertise that's caging your next level.",
  },
  {
    num: "03", icon: "⬡",
    title: "Pivot Blueprint",
    body: "Build your structured transition plan using the Three Spaces Framework™ — from where you are to where you're going.",
  },
  {
    num: "04", icon: "✦",
    title: "Activation",
    body: "Execute with the Sully Sequence™ — a proven launch protocol for professionals who are done waiting for permission.",
  },
];

const TOOLS = [
  {
    tm: "Assessment Tool", name: "RPA™",
    desc: "Reactivity Profile Assessment — maps your behavioral patterns under transition stress. The diagnostic that starts everything.",
  },
  {
    tm: "Framework", name: "C.A.L.M.™",
    desc: "Composure Architecture for Lasting Movement. The four-quadrant operating model that replaces reactive decision-making with sovereign execution.",
  },
  {
    tm: "Framework", name: "Three Spaces™",
    desc: "Professional Space → Transitional Space → Emerging Space. Know exactly where you are and what's required to move.",
  },
  {
    tm: "Launch Protocol", name: "Sully Sequence™",
    desc: "The structured activation protocol for career pivots. Named for the discipline of landing under pressure, not panic.",
  },
  {
    tm: "Navigation System", name: "PIVOT OS™",
    desc: "The full individual reinvention operating system — from first assessment to active career transition execution.",
  },
  {
    tm: "Shift Model", name: "Evangelist Shift™",
    desc: "Converts professional expertise into a platform of influence. For the practitioner ready to become the message.",
  },
];

export default function PivotOS() {
  return (
    <>
      <style>{styles}</style>

      {/* NAV */}
      <nav className="nav">
        <a href="/" className="nav-logo">M2M<span>~</span>Inc.</a>
        <a href="/" className="nav-back">← All Platforms</a>
        <a href="#contact" className="nav-cta">Start Your Pivot</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="lane-badge animate d1">
              <span className="lane-dot" />
              PIVOT OS™ · Individual Reinvention
            </div>
            <h1 className="hero-headline animate d2">
              You Didn't Come<br />
              This Far to<br />
              <em>Stay Here.</em>
            </h1>
            <p className="hero-sub animate d3">
              PIVOT OS™ is M2M's structured reinvention system for veterans,
              transitioning professionals, and high-performers who've outgrown
              their current lane. This is not career coaching. This is a
              behavioral operating system built for the pivot.
            </p>
            <div className="cta-row animate d3">
              <a href="#contact" className="btn-pivot">Start Your Pivot</a>
              <a href="#process" className="btn-outline">See the Process</a>
            </div>
          </div>

          {/* Who It's For */}
          <div className="animate d2">
            <p style={{
              fontFamily: "var(--font-mono)", fontSize: "0.65rem",
              letterSpacing: "0.15em", color: "var(--pivot)",
              textTransform: "uppercase", marginBottom: "1rem"
            }}>
              PIVOT OS™ is built for you if —
            </p>
            <div className="for-grid">
              {[
                "You're a veteran re-entering civilian workforce and the transition feels like translation",
                "You're a high-performer who has mastered your lane but knows it's no longer the right lane",
                "You've tried the standard career advice and it doesn't account for who you actually are",
                "You're between roles and the silence is louder than the noise",
                "You need a system — not a pep talk, not a resume refresh, not a LinkedIn audit",
              ].map((item) => (
                <div key={item} className="for-item">
                  <span className="for-check">◆</span>
                  <span className="for-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PROCESS */}
      <section className="section" id="process">
        <div className="section-inner">
          <p className="eyebrow">The Process</p>
          <h2 className="s-headline">Four Phases. One System.<br />No Shortcuts.</h2>
          <p className="s-sub">
            PIVOT OS™ runs on M2M Composure Architecture™ — a structured behavioral
            system built from real transition data, not motivational frameworks.
          </p>
          <div className="steps-grid">
            {STEPS.map((s) => (
              <div key={s.num} className="step-card">
                <div className="step-number">{s.num}</div>
                <div className="step-icon">{s.icon}</div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* IP TOOLS */}
      <section className="section" style={{ background: "#060F1E" }}>
        <div className="section-inner">
          <p className="eyebrow">Proprietary IP</p>
          <h2 className="s-headline">The Tools Inside<br />PIVOT OS™</h2>
          <p className="s-sub">
            Every framework in PIVOT OS™ is a pending trademark — built, tested,
            and refined through real practitioner engagements.
          </p>
          <div className="tools-grid">
            {TOOLS.map((t) => (
              <div key={t.name} className="tool-card">
                <p className="tool-tm">{t.tm}</p>
                <h3 className="tool-name">{t.name}</h3>
                <p className="tool-desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* TESTIMONIAL */}
      <section className="section">
        <div className="section-inner" style={{ maxWidth: 860 }}>
          <p className="eyebrow">From the Field</p>
          <div className="testimonial-block">
            <span className="testimonial-quote-mark">"</span>
            <p className="testimonial-text">
              PIVOT OS™ gave me language for something I'd been living but
              couldn't articulate. I knew my military career had given me more
              than a resume could hold. The Composure Architecture showed me
              exactly where I'd been caging myself — and how to stop.
            </p>
            <p className="testimonial-attr">
              — <strong>PIVOT OS™ Client</strong> · Navy Veteran, 12 Years Service<br />
              <span>Now: Senior Operations Director, Financial Services</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="cta-inner">
          <p style={{
            fontFamily: "var(--font-mono)", fontSize: "0.68rem",
            letterSpacing: "0.18em", color: "var(--pivot)",
            textTransform: "uppercase", marginBottom: "1rem"
          }}>
            Begin Here
          </p>
          <h2 className="cta-headline">
            The Pivot Isn't<br />
            <span>the Risk.</span><br />
            Staying Is.
          </h2>
          <p className="cta-sub">
            Schedule a PIVOT OS™ intake consultation. Forty-five minutes.
            Structured. No pitch. Just clarity on where you are and what
            the system recommends next.
          </p>
          <div className="cta-group">
            <a href="mailto:info@model2message.net?subject=PIVOT OS Consultation" className="btn-pivot">
              Schedule Intake Consultation
            </a>
            <a href="tel:9804749377" className="btn-outline">
              Call 980.474.9377
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">M2M<span>~</span>Inc. · <span style={{ color: "#4A90D9", fontSize: "0.9em" }}>PIVOT OS™</span></div>
          <div className="footer-trust">
            {["SDVOSB", "·", "VBE", "·", "SAFe 6", "·", "USPTO", "·", "Tuck"].map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </div>
        <div className="footer-copy" style={{ maxWidth: 1280, margin: "1.5rem auto 0", paddingTop: "1.25rem", borderTop: "1px solid rgba(255,255,255,0.05)", fontSize: "0.72rem", color: "#A0AEC0", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
          <span>© 2026 M2M~Inc. PIVOT OS™, RPA™, C.A.L.M.™, Three Spaces Framework™, Sully Sequence™, Evangelist Shift™ are pending trademarks.</span>
          <a href="/" style={{ color: "#C9A84C", textDecoration: "none" }}>model2message.net</a>
        </div>
      </footer>
    </>
  );
}
