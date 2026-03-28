import { useState } from "react";

/* ─────────────────────────────────────────────
   M2M~Inc. — BRIDGE OS™ Lane Page
   Employer / SMB Workforce Transition
   Built to Design MD v1.0
───────────────────────────────────────────── */

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --navy:         #0A1628;
    --navy-mid:     #0D2045;
    --navy-light:   #1A3560;
    --gold:         #C9A84C;
    --gold-muted:   #9E7E38;
    --bridge:       #48BB78;
    --bridge-light: rgba(72,187,120,0.12);
    --bridge-border:rgba(72,187,120,0.25);
    --white:        #FFFFFF;
    --white-soft:   #E8EDF5;
    --white-dim:    #A0AEC0;
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

  /* NAV */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100; height: 72px;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 clamp(1.5rem, 5vw, 4rem);
    background: rgba(10,22,40,0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(72,187,120,0.15);
  }
  .nav-logo { font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; color: var(--white); text-decoration: none; }
  .nav-logo span { color: var(--gold); }
  .nav-back { font-size: 0.8rem; color: var(--white-dim); text-decoration: none; display: flex; align-items: center; gap: 0.4rem; font-family: var(--font-mono); letter-spacing: 0.05em; transition: color 0.2s; }
  .nav-back:hover { color: var(--bridge); }
  .nav-cta { background: var(--bridge); color: var(--navy); font-size: 0.8rem; font-weight: 700; padding: 0.5rem 1.25rem; border-radius: 9999px; text-decoration: none; letter-spacing: 0.03em; transition: filter 0.2s, transform 0.2s; }
  .nav-cta:hover { filter: brightness(1.1); transform: scale(1.02); }

  /* HERO */
  .hero {
    min-height: 100vh; display: flex; align-items: center;
    padding: 120px clamp(1.5rem, 5vw, 4rem) 80px;
    background: linear-gradient(135deg, #0A1628 0%, #0C1F35 60%, #0A1628 100%);
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse 55% 60% at 75% 40%, rgba(72,187,120,0.07), transparent);
    pointer-events: none;
  }
  .hero-inner {
    max-width: 1280px; margin: 0 auto; width: 100%;
    display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 5rem; align-items: center;
  }
  .lane-badge {
    display: inline-flex; align-items: center; gap: 0.5rem;
    background: var(--bridge-light); border: 1px solid var(--bridge-border);
    padding: 0.375rem 0.875rem; border-radius: 9999px;
    font-family: var(--font-mono); font-size: 0.65rem;
    letter-spacing: 0.12em; color: var(--bridge);
    text-transform: uppercase; margin-bottom: 1.25rem;
  }
  .lane-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--bridge); }
  .hero-headline { font-family: var(--font-display); font-size: clamp(2.75rem, 5vw, 4.75rem); font-weight: 900; line-height: 1.05; letter-spacing: -0.02em; color: var(--white); margin-bottom: 1.5rem; }
  .hero-headline em { color: var(--bridge); font-style: normal; }
  .hero-sub { font-size: 1.1rem; color: var(--white-soft); line-height: 1.75; max-width: 500px; margin-bottom: 2.5rem; }
  .btn-bridge { background: var(--bridge); color: var(--navy); font-size: 0.875rem; font-weight: 700; padding: 0.875rem 2rem; border-radius: 9999px; border: none; cursor: pointer; letter-spacing: 0.03em; transition: filter 0.2s, transform 0.2s; text-decoration: none; display: inline-block; }
  .btn-bridge:hover { filter: brightness(1.1); transform: scale(1.02); }
  .btn-outline { background: transparent; color: var(--bridge); font-size: 0.875rem; font-weight: 600; padding: 0.875rem 2rem; border-radius: 9999px; border: 1.5px solid var(--bridge); cursor: pointer; letter-spacing: 0.03em; text-decoration: none; display: inline-block; transition: background 0.2s; }
  .btn-outline:hover { background: var(--bridge-light); }
  .cta-row { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2.5rem; }

  /* METRICS PANEL */
  .metrics-panel {
    background: linear-gradient(145deg, #0D2045, #1A3560);
    border: 1px solid rgba(72,187,120,0.2);
    border-radius: 16px; padding: 2rem;
    box-shadow: 0 0 40px rgba(72,187,120,0.07);
  }
  .metrics-label { font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: 0.15em; color: var(--bridge); text-transform: uppercase; margin-bottom: 1.5rem; }
  .metrics-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; }
  .metric-item { text-align: center; padding: 1rem; background: rgba(72,187,120,0.06); border: 1px solid rgba(72,187,120,0.12); border-radius: 10px; }
  .metric-num { font-family: var(--font-display); font-size: 2rem; font-weight: 900; color: var(--bridge); line-height: 1; margin-bottom: 0.25rem; }
  .metric-desc { font-size: 0.72rem; color: var(--white-dim); letter-spacing: 0.04em; line-height: 1.4; }
  .metrics-divider { height: 1px; background: rgba(72,187,120,0.12); margin: 1rem 0; }
  .metrics-footnote { font-size: 0.75rem; color: var(--white-dim); line-height: 1.5; }

  /* SECTION SHARED */
  .section { padding: 6rem clamp(1.5rem, 5vw, 4rem); }
  .section-inner { max-width: 1280px; margin: 0 auto; }
  .eyebrow { font-family: var(--font-mono); font-size: 0.68rem; letter-spacing: 0.18em; color: var(--bridge); text-transform: uppercase; margin-bottom: 0.875rem; display: flex; align-items: center; gap: 0.75rem; }
  .eyebrow::before { content: ''; display: block; width: 3px; height: 36px; background: var(--bridge); border-radius: 2px; }
  .s-headline { font-family: var(--font-display); font-size: clamp(1.75rem, 3vw, 2.75rem); font-weight: 700; color: var(--white); line-height: 1.15; margin-bottom: 1rem; letter-spacing: -0.01em; }
  .s-sub { font-size: 1rem; color: var(--white-soft); max-width: 560px; line-height: 1.7; margin-bottom: 3rem; }
  .divider { width: 100%; height: 1px; background: linear-gradient(to right, transparent, rgba(72,187,120,0.2), transparent); }

  /* SERVICES GRID */
  .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
  .service-card {
    background: linear-gradient(145deg, #0D2045, #1A3560);
    border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 1.75rem;
    border-top: 3px solid var(--bridge);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .service-card:hover { transform: translateY(-5px); box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 32px rgba(72,187,120,0.08); }
  .service-icon { font-size: 1.5rem; margin-bottom: 1rem; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; background: var(--bridge-light); border-radius: 10px; }
  .service-title { font-family: var(--font-display); font-size: 1.2rem; font-weight: 700; color: var(--white); margin-bottom: 0.5rem; }
  .service-body { font-size: 0.85rem; color: var(--white-soft); line-height: 1.6; }

  /* PROBLEM / SOLUTION */
  .ps-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; }
  .ps-col-label { font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 1rem; }
  .ps-items { display: flex; flex-direction: column; gap: 0.625rem; }
  .ps-item { display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.875rem 1rem; border-radius: 10px; font-size: 0.875rem; line-height: 1.5; }
  .ps-item-problem { background: rgba(252,129,129,0.06); border: 1px solid rgba(252,129,129,0.15); color: var(--white-soft); }
  .ps-item-solution { background: var(--bridge-light); border: 1px solid var(--bridge-border); color: var(--white-soft); }
  .ps-icon { flex-shrink: 0; margin-top: 2px; }

  /* USE CASES */
  .cases-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
  .case-card { background: var(--bridge-light); border: 1px solid var(--bridge-border); border-radius: 12px; padding: 1.5rem; }
  .case-name { font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: 0.1em; color: var(--bridge); text-transform: uppercase; margin-bottom: 0.5rem; }
  .case-title { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; color: var(--white); margin-bottom: 0.5rem; }
  .case-body { font-size: 0.825rem; color: var(--white-soft); line-height: 1.6; }

  /* CTA */
  .cta-section { padding: 7rem clamp(1.5rem, 5vw, 4rem); text-align: center; background: linear-gradient(135deg, #0C1F35 0%, #0A1628 100%); position: relative; overflow: hidden; }
  .cta-section::before { content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 600px; height: 300px; background: radial-gradient(ellipse, rgba(72,187,120,0.06), transparent 70%); pointer-events: none; }
  .cta-inner { max-width: 700px; margin: 0 auto; position: relative; }
  .cta-headline { font-family: var(--font-display); font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; color: var(--white); line-height: 1.1; margin-bottom: 1.25rem; letter-spacing: -0.01em; }
  .cta-headline span { color: var(--bridge); }
  .cta-sub { font-size: 1rem; color: var(--white-soft); line-height: 1.7; margin-bottom: 2.5rem; }
  .cta-group { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

  /* FOOTER */
  .footer { background: #060F1E; padding: 2.5rem clamp(1.5rem, 5vw, 4rem); border-top: 1px solid rgba(201,168,76,0.1); }
  .footer-inner { max-width: 1280px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
  .footer-logo { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; color: var(--white); }
  .footer-logo span { color: var(--gold); }
  .footer-trust { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; font-family: var(--font-mono); font-size: 0.6rem; letter-spacing: 0.12em; color: var(--gold-muted); text-transform: uppercase; }
  .footer-copy { max-width: 1280px; margin: 1.5rem auto 0; padding-top: 1.25rem; border-top: 1px solid rgba(255,255,255,0.05); font-size: 0.72rem; color: var(--white-dim); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; }

  @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  .animate { animation: fadeInUp 0.6s ease forwards; }
  .d1 { animation-delay: 0.1s; opacity: 0; }
  .d2 { animation-delay: 0.25s; opacity: 0; }
  .d3 { animation-delay: 0.4s; opacity: 0; }

  @media (max-width: 900px) {
    .hero-inner { grid-template-columns: 1fr; }
    .services-grid { grid-template-columns: 1fr; }
    .ps-grid { grid-template-columns: 1fr; }
    .cases-grid { grid-template-columns: 1fr; }
  }
`;

const SERVICES = [
  { icon: "⬡", title: "Workforce Transition Planning", body: "Structured transition architecture for organizations managing downsizing, restructuring, reskilling, or post-merger workforce shifts. Built to protect retention and organizational culture simultaneously." },
  { icon: "◈", title: "Manager Readiness Training", body: "BRIDGE OS™ equips frontline managers with the behavioral intelligence to lead teams through change without losing performance. The human side of workforce transformation, systematized." },
  { icon: "✦", title: "Veteran Talent Integration", body: "Specialized onboarding infrastructure for employers hiring veterans. Translates military capability into civilian productivity from day one — reducing turnover, accelerating contribution." },
  { icon: "◎", title: "SMB Workforce Intelligence", body: "For small and mid-sized businesses navigating AI disruption, market shifts, or rapid growth. Human OS™ Lite — the right-sized version of enterprise workforce strategy." },
  { icon: "⬟", title: "Community Reintegration", body: "Workforce re-entry programs for municipalities and nonprofit partners working with returning citizens, justice-involved youth, and displaced workers. Proven with OJJDP-funded models." },
  { icon: "◆", title: "BRIDGE OS™ Licensing", body: "License the BRIDGE OS™ platform for internal HR, L&D, or workforce development departments. Practitioner certification available at three tiers. Deploy M2M methodology at scale." },
];

const PROBLEMS = [
  "Turnover spikes when workforce change isn't communicated with clarity",
  "Managers are promoted for performance but never trained for transition leadership",
  "Veterans are hired and then lost — because nobody built the bridge",
  "Reskilling programs fail because they address skills but not behavior",
  "HR teams manage the paperwork of transition but not the human cost",
];

const SOLUTIONS = [
  "BRIDGE OS™ installs a behavioral communication framework before change hits",
  "Manager Readiness Training converts high-performers into transition-ready leaders",
  "Veteran Integration Protocols reduce 90-day turnover by design, not accident",
  "M2M Composure Architecture™ addresses the behavioral layer reskilling misses",
  "Human OS™ gives HR teams a systematic model for measuring human-side ROI",
];

const CASES = [
  { name: "Project CHECK", title: "Youth Reintegration", body: "OJJDP Second Chance Act model in Forsyth County, NC. Workforce-ready transition infrastructure for justice-involved youth, ages 14–24." },
  { name: "CRIB Network", title: "Cumberland County", body: "Community workforce re-entry platform for displaced workers and returning citizens. HubSpot-tracked $325K pipeline in active development." },
  { name: "FUSE Network", title: "Robeson County", body: "Lumbee Tribe G2G Partnership model — workforce and economic sovereignty for underserved rural communities. Full asset library deployed." },
];

export default function BridgeOS() {
  return (
    <>
      <style>{styles}</style>

      <nav className="nav">
        <a href="/" className="nav-logo">M2M<span>~</span>Inc.</a>
        <a href="/" className="nav-back">← All Platforms</a>
        <a href="#contact" className="nav-cta">Request a Briefing</a>
      </nav>

      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="lane-badge animate d1">
              <span className="lane-dot" />
              BRIDGE OS™ · Employer / SMB Workforce
            </div>
            <h1 className="hero-headline animate d2">
              Your People Are<br />
              Ready to Move.<br />
              <em>Is Your System?</em>
            </h1>
            <p className="hero-sub animate d3">
              BRIDGE OS™ is M2M's workforce transition infrastructure for
              employers, municipalities, and SMBs managing the human side of
              organizational change. Built for retention and performance —
              not paperwork and compliance.
            </p>
            <div className="cta-row animate d3">
              <a href="#contact" className="btn-bridge">Request a Briefing</a>
              <a href="#services" className="btn-outline">See the Services</a>
            </div>
          </div>

          {/* Metrics Panel */}
          <div className="metrics-panel animate d2">
            <p className="metrics-label">Why Workforce Transition Fails</p>
            <div className="metrics-grid">
              <div className="metric-item">
                <div className="metric-num">70%</div>
                <div className="metric-desc">of organizational change initiatives fail to meet objectives</div>
              </div>
              <div className="metric-item">
                <div className="metric-num">$1.5T</div>
                <div className="metric-desc">lost annually to disengaged employees in the U.S. alone</div>
              </div>
              <div className="metric-item">
                <div className="metric-num">2×</div>
                <div className="metric-desc">veteran turnover rate vs. non-veteran hires in first year</div>
              </div>
              <div className="metric-item">
                <div className="metric-num">60%</div>
                <div className="metric-desc">of reskilling programs fail to change on-the-job behavior</div>
              </div>
            </div>
            <div className="metrics-divider" />
            <p className="metrics-footnote">
              BRIDGE OS™ addresses the behavioral layer that separates workforce
              transition from workforce transformation.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PROBLEM / SOLUTION */}
      <section className="section" style={{ background: "#060F1E" }}>
        <div className="section-inner">
          <p className="eyebrow">The Gap</p>
          <h2 className="s-headline">What's Failing and<br />What BRIDGE OS™ Fixes</h2>
          <div className="ps-grid">
            <div>
              <p className="ps-col-label" style={{ color: "#FC8181" }}>The Problem</p>
              <div className="ps-items">
                {PROBLEMS.map((p) => (
                  <div key={p} className="ps-item ps-item-problem">
                    <span className="ps-icon" style={{ color: "#FC8181" }}>✕</span>
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="ps-col-label" style={{ color: "var(--bridge)" }}>BRIDGE OS™ Response</p>
              <div className="ps-items">
                {SOLUTIONS.map((s) => (
                  <div key={s} className="ps-item ps-item-solution">
                    <span className="ps-icon" style={{ color: "var(--bridge)" }}>◆</span>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="section-inner">
          <p className="eyebrow">What We Deliver</p>
          <h2 className="s-headline">Six BRIDGE OS™<br />Service Lanes</h2>
          <p className="s-sub">
            From SMB workforce planning to large-scale community reintegration —
            BRIDGE OS™ is modular by design. Deploy the piece you need or
            activate the full architecture.
          </p>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <div key={s.title} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* COMMUNITY USE CASES */}
      <section className="section" style={{ background: "#060F1E" }}>
        <div className="section-inner">
          <p className="eyebrow">In the Field</p>
          <h2 className="s-headline">BRIDGE OS™ at Work<br />in North Carolina</h2>
          <p className="s-sub">
            Three active community workforce initiatives — each applying BRIDGE OS™
            methodology to underserved populations and underfunded systems.
          </p>
          <div className="cases-grid">
            {CASES.map((c) => (
              <div key={c.name} className="case-card">
                <p className="case-name">{c.name}</p>
                <h3 className="case-title">{c.title}</h3>
                <p className="case-body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="cta-inner">
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.18em", color: "var(--bridge)", textTransform: "uppercase", marginBottom: "1rem" }}>
            Build the Bridge
          </p>
          <h2 className="cta-headline">
            Your Workforce Is Going<br />
            <span>Through Change Either Way.</span>
          </h2>
          <p className="cta-sub">
            The only question is whether it's managed or absorbed.
            Schedule a BRIDGE OS™ briefing and get a no-cost workforce
            transition gap assessment for your organization.
          </p>
          <div className="cta-group">
            <a href="mailto:info@model2message.net?subject=BRIDGE OS Briefing Request" className="btn-bridge">
              Request Workforce Briefing
            </a>
            <a href="tel:9804749377" className="btn-outline">
              Call 980.474.9377
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">M2M<span>~</span>Inc. · <span style={{ color: "#48BB78", fontSize: "0.9em" }}>BRIDGE OS™</span></div>
          <div className="footer-trust">
            {["SDVOSB", "·", "VBE", "·", "SAFe 6", "·", "USPTO", "·", "Tuck"].map((t, i) => <span key={i}>{t}</span>)}
          </div>
        </div>
        <div className="footer-copy">
          <span>© 2026 M2M~Inc. BRIDGE OS™ and Human OS™ are pending trademarks of M2M~Inc. SDVOSB · VBE Certified.</span>
          <a href="/" style={{ color: "#C9A84C", textDecoration: "none" }}>model2message.net</a>
        </div>
      </footer>
    </>
  );
}
