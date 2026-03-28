import { useState } from "react";

/* ─────────────────────────────────────────────
   M2M~Inc. — Human OS™ Lane Page
   Enterprise / Government Workforce Intelligence
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
    --gold-bright: #F0C040;
    --gold-muted:  #9E7E38;
    --gold-glow:   rgba(201,168,76,0.15);
    --white:       #FFFFFF;
    --white-soft:  #E8EDF5;
    --white-dim:   #A0AEC0;
    --font-display:'Cormorant Garamond', Georgia, serif;
    --font-body:   'DM Sans', system-ui, sans-serif;
    --font-mono:   'JetBrains Mono', monospace;
  }

  html { scroll-behavior: smooth; }
  body { background: var(--navy); color: var(--white); font-family: var(--font-body); line-height: 1.6; overflow-x: hidden; }

  /* NAV */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100; height: 72px;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 clamp(1.5rem, 5vw, 4rem);
    background: rgba(10,22,40,0.95); backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(201,168,76,0.15);
  }
  .nav-logo { font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; color: var(--white); text-decoration: none; }
  .nav-logo span { color: var(--gold); }
  .nav-back { font-size: 0.8rem; color: var(--white-dim); text-decoration: none; display: flex; align-items: center; gap: 0.4rem; font-family: var(--font-mono); letter-spacing: 0.05em; transition: color 0.2s; }
  .nav-back:hover { color: var(--gold); }
  .nav-cta { background: var(--gold); color: var(--navy); font-size: 0.8rem; font-weight: 700; padding: 0.5rem 1.25rem; border-radius: 9999px; text-decoration: none; letter-spacing: 0.03em; transition: filter 0.2s, transform 0.2s; }
  .nav-cta:hover { filter: brightness(1.1); transform: scale(1.02); }

  /* HERO */
  .hero {
    min-height: 100vh; display: flex; align-items: center;
    padding: 120px clamp(1.5rem, 5vw, 4rem) 80px;
    background: linear-gradient(135deg, #0A1628 0%, #0D2045 55%, #0A1628 100%);
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse 60% 50% at 70% 50%, rgba(201,168,76,0.08), transparent);
    pointer-events: none;
  }
  .hero::after {
    content: ''; position: absolute; top: -150px; right: -150px;
    width: 500px; height: 500px; border-radius: 50%;
    background: radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-inner {
    max-width: 1280px; margin: 0 auto; width: 100%;
    display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 5rem; align-items: center;
  }
  .lane-badge {
    display: inline-flex; align-items: center; gap: 0.5rem;
    background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.3);
    padding: 0.375rem 0.875rem; border-radius: 9999px;
    font-family: var(--font-mono); font-size: 0.65rem;
    letter-spacing: 0.12em; color: var(--gold);
    text-transform: uppercase; margin-bottom: 1.25rem;
  }
  .lane-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold); }
  .hero-headline { font-family: var(--font-display); font-size: clamp(2.75rem, 5vw, 4.75rem); font-weight: 900; line-height: 1.05; letter-spacing: -0.02em; color: var(--white); margin-bottom: 1.5rem; }
  .hero-headline em { color: var(--gold); font-style: normal; }
  .hero-sub { font-size: 1.1rem; color: var(--white-soft); line-height: 1.75; max-width: 520px; margin-bottom: 2.5rem; }
  .btn-gold { background: var(--gold); color: var(--navy); font-size: 0.875rem; font-weight: 700; padding: 0.875rem 2rem; border-radius: 9999px; border: none; cursor: pointer; letter-spacing: 0.03em; transition: filter 0.2s, transform 0.2s; text-decoration: none; display: inline-block; }
  .btn-gold:hover { filter: brightness(1.1); transform: scale(1.02); }
  .btn-outline { background: transparent; color: var(--gold); font-size: 0.875rem; font-weight: 600; padding: 0.875rem 2rem; border-radius: 9999px; border: 1.5px solid var(--gold); cursor: pointer; letter-spacing: 0.03em; text-decoration: none; display: inline-block; transition: background 0.2s; }
  .btn-outline:hover { background: rgba(201,168,76,0.08); }
  .cta-row { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2.5rem; }

  /* CREDENTIALS TRUST PANEL */
  .trust-panel {
    display: flex; flex-direction: column; gap: 0.75rem;
  }
  .trust-panel-header { font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: 0.15em; color: var(--gold-muted); text-transform: uppercase; margin-bottom: 0.5rem; }
  .cert-card {
    background: linear-gradient(145deg, #0D2045, #1A3560);
    border: 1px solid rgba(201,168,76,0.2); border-radius: 12px; padding: 1rem 1.25rem;
    display: flex; align-items: center; gap: 0.875rem;
    transition: border-color 0.3s;
  }
  .cert-card:hover { border-color: rgba(201,168,76,0.4); }
  .cert-icon { font-size: 1.1rem; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; background: rgba(201,168,76,0.1); border-radius: 8px; flex-shrink: 0; }
  .cert-label { font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: 0.08em; color: var(--gold); text-transform: uppercase; }
  .cert-name { font-size: 0.875rem; color: var(--white-soft); margin-top: 0.125rem; }

  /* SECTION SHARED */
  .section { padding: 6rem clamp(1.5rem, 5vw, 4rem); }
  .section-inner { max-width: 1280px; margin: 0 auto; }
  .eyebrow { font-family: var(--font-mono); font-size: 0.68rem; letter-spacing: 0.18em; color: var(--gold); text-transform: uppercase; margin-bottom: 0.875rem; display: flex; align-items: center; gap: 0.75rem; }
  .eyebrow::before { content: ''; display: block; width: 3px; height: 36px; background: var(--gold); border-radius: 2px; }
  .s-headline { font-family: var(--font-display); font-size: clamp(1.75rem, 3vw, 2.75rem); font-weight: 700; color: var(--white); line-height: 1.15; margin-bottom: 1rem; letter-spacing: -0.01em; }
  .s-sub { font-size: 1rem; color: var(--white-soft); max-width: 560px; line-height: 1.7; margin-bottom: 3rem; }
  .divider { width: 100%; height: 1px; background: linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent); }

  /* ARCHITECTURE DIAGRAM */
  .arch-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; position: relative; }
  .arch-grid::before { content: ''; position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent); }
  .arch-col { display: flex; flex-direction: column; gap: 1rem; align-items: center; padding: 0 1rem; }
  .arch-lane-label { font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: 0.12em; text-transform: uppercase; padding: 0.3rem 0.75rem; border-radius: 9999px; }
  .arch-card { width: 100%; background: linear-gradient(145deg, #0D2045, #1A3560); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 1.25rem; }
  .arch-card-title { font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--white); margin-bottom: 0.375rem; }
  .arch-card-body { font-size: 0.78rem; color: var(--white-dim); line-height: 1.5; }
  .arch-connector { width: 2px; height: 24px; background: rgba(201,168,76,0.25); }

  /* ENTERPRISE GRID */
  .enterprise-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
  .ent-card {
    background: linear-gradient(145deg, #0D2045, #1A3560);
    border: 1px solid rgba(201,168,76,0.12); border-radius: 14px; padding: 2rem;
    border-left: 3px solid var(--gold);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .ent-card:hover { transform: translateY(-4px); box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 32px rgba(201,168,76,0.08); }
  .ent-icon { font-size: 1.5rem; margin-bottom: 1rem; }
  .ent-title { font-family: var(--font-display); font-size: 1.25rem; font-weight: 700; color: var(--white); margin-bottom: 0.5rem; }
  .ent-body { font-size: 0.875rem; color: var(--white-soft); line-height: 1.65; }

  /* CERTIFIER TIERS */
  .tiers-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
  .tier-card {
    background: linear-gradient(145deg, #0D2045, #1A3560);
    border: 1px solid rgba(201,168,76,0.12); border-radius: 14px;
    padding: 2rem; text-align: center;
    position: relative; overflow: hidden;
    transition: transform 0.3s, border-color 0.3s;
  }
  .tier-card:hover { transform: translateY(-5px); border-color: rgba(201,168,76,0.3); }
  .tier-card.featured { border-color: rgba(201,168,76,0.4); box-shadow: 0 0 40px rgba(201,168,76,0.1); }
  .tier-badge { position: absolute; top: 1rem; right: 1rem; font-family: var(--font-mono); font-size: 0.58rem; letter-spacing: 0.1em; padding: 0.2rem 0.5rem; border-radius: 9999px; background: rgba(201,168,76,0.15); color: var(--gold); border: 1px solid rgba(201,168,76,0.3); }
  .tier-name { font-family: var(--font-mono); font-size: 0.7rem; letter-spacing: 0.12em; color: var(--gold-muted); text-transform: uppercase; margin-bottom: 0.5rem; }
  .tier-title { font-family: var(--font-display); font-size: 1.4rem; font-weight: 700; color: var(--white); margin-bottom: 0.75rem; }
  .tier-price { font-family: var(--font-display); font-size: 2rem; font-weight: 900; color: var(--gold); margin-bottom: 0.25rem; }
  .tier-price-sub { font-size: 0.75rem; color: var(--white-dim); margin-bottom: 1.5rem; }
  .tier-features { list-style: none; text-align: left; display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem; }
  .tier-feature { font-size: 0.82rem; color: var(--white-soft); display: flex; align-items: flex-start; gap: 0.5rem; }
  .tier-feature-icon { color: var(--gold); flex-shrink: 0; margin-top: 1px; }

  /* GOVCON STRIP */
  .govcon-strip { background: #060F1E; padding: 3rem clamp(1.5rem, 5vw, 4rem); border-top: 1px solid rgba(201,168,76,0.1); border-bottom: 1px solid rgba(201,168,76,0.1); }
  .govcon-inner { max-width: 1280px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 2rem; }
  .govcon-text h3 { font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; color: var(--white); margin-bottom: 0.5rem; }
  .govcon-text p { font-size: 0.9rem; color: var(--white-soft); max-width: 480px; line-height: 1.6; }
  .govcon-codes { display: flex; flex-direction: column; gap: 0.5rem; }
  .govcon-code { display: flex; align-items: center; gap: 0.75rem; font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: 0.1em; color: var(--gold-muted); }
  .govcon-code span { font-size: 0.75rem; color: var(--white-dim); font-family: var(--font-body); }

  /* CTA */
  .cta-section { padding: 7rem clamp(1.5rem, 5vw, 4rem); text-align: center; background: linear-gradient(135deg, #0D2045 0%, #0A1628 100%); position: relative; overflow: hidden; }
  .cta-section::before { content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 700px; height: 350px; background: radial-gradient(ellipse, rgba(201,168,76,0.07), transparent 70%); pointer-events: none; }
  .cta-inner { max-width: 720px; margin: 0 auto; position: relative; }
  .cta-headline { font-family: var(--font-display); font-size: clamp(2rem, 4vw, 3.25rem); font-weight: 900; color: var(--white); line-height: 1.1; margin-bottom: 1.25rem; letter-spacing: -0.01em; }
  .cta-headline span { color: var(--gold); }
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

  @media (max-width: 960px) {
    .hero-inner { grid-template-columns: 1fr; }
    .enterprise-grid { grid-template-columns: 1fr; }
    .tiers-grid { grid-template-columns: 1fr; }
    .arch-grid { grid-template-columns: 1fr; }
    .arch-grid::before { display: none; }
    .govcon-inner { flex-direction: column; }
  }
`;

const CERTS = [
  { icon: "✦", label: "Certification", name: "SDVOSB — Service-Disabled Veteran-Owned Small Business" },
  { icon: "◆", label: "Certification", name: "VBE — Veteran Business Enterprise" },
  { icon: "⬟", label: "Framework", name: "SAFe 6 Agilist · CSM · CSPO" },
  { icon: "◈", label: "Academic", name: "Tuck Executive Education — Wells Fargo Cohort" },
  { icon: "⬡", label: "IP Portfolio", name: "USPTO — 9 Proprietary Marks Pending" },
];

const ENT_SERVICES = [
  { icon: "⬟", title: "Workforce Intelligence Audit", body: "A structured organizational assessment using M2M Composure Architecture™ to surface behavioral gaps, transition risk, and human performance leverage points across departments." },
  { icon: "◈", title: "Human OS™ Enterprise Deployment", body: "Full-scale rollout of the Human OS™ platform across enterprise teams — including practitioner certification, manager training, and change management infrastructure." },
  { icon: "✦", title: "Government Workforce Strategy", body: "Tailored workforce transition and re-entry programs for federal, state, and local government agencies. SDVOSB-certified, SAM.gov current, NAICS-aligned delivery." },
  { icon: "◆", title: "Executive Leadership Development", body: "Behavioral intelligence programming for C-suite and senior leadership teams navigating AI disruption, organizational change, and human capital strategy." },
];

const TIERS = [
  {
    name: "Associate Practitioner", title: "M2M-AP™",
    price: "$2,800", priceSub: "+ $200/mo platform access",
    featured: false,
    features: [
      "RPA™ Assessment Certification",
      "C.A.L.M.™ Framework Delivery",
      "PIVOT OS™ Client Facilitation",
      "M2M Digital Practitioner Portal",
      "Monthly Cohort Supervision",
    ],
  },
  {
    name: "Professional Practitioner", title: "M2M-PP™",
    price: "$4,800", priceSub: "+ $300/mo platform access",
    featured: true,
    features: [
      "Full PIVOT + BRIDGE OS™ Certification",
      "Three Spaces Framework™ License",
      "Sully Sequence™ Deployment Rights",
      "Client Assessment Dashboard",
      "Quarterly M2M Cohort Access",
      "Co-facilitation Opportunities",
    ],
  },
  {
    name: "Executive Practitioner", title: "M2M-EP™",
    price: "$9,500", priceSub: "+ $400/mo platform access",
    featured: false,
    features: [
      "Full Human OS™ Enterprise License",
      "All IP Frameworks — Full Rights",
      "White-Label Delivery Option",
      "Direct Access to Dr. Kevin A. Smith",
      "Enterprise Client Co-Delivery",
      "Annual M2M Summit Seat",
    ],
  },
];

const NAICS = [
  { code: "611430", desc: "Professional and Management Development Training" },
  { code: "541611", desc: "Administrative Management and General Management Consulting" },
  { code: "541512", desc: "Computer Systems Design Services" },
  { code: "611710", desc: "Educational Support Services" },
];

export default function HumanOS() {
  return (
    <>
      <style>{styles}</style>

      <nav className="nav">
        <a href="/" className="nav-logo">M2M<span>~</span>Inc.</a>
        <a href="/" className="nav-back">← All Platforms</a>
        <a href="#contact" className="nav-cta">Request Enterprise Briefing</a>
      </nav>

      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="lane-badge animate d1">
              <span className="lane-dot" />
              Human OS™ · Enterprise / Government
            </div>
            <h1 className="hero-headline animate d2">
              The Operating System<br />
              Your Organization<br />
              <em>Was Missing.</em>
            </h1>
            <p className="hero-sub animate d3">
              Human OS™ is M2M's enterprise and government workforce intelligence
              platform — the full M2M Composure Architecture™ deployed at scale
              across teams, agencies, and institutions navigating disruption and
              demanding measurable human performance outcomes.
            </p>
            <div className="cta-row animate d3">
              <a href="#contact" className="btn-gold">Request Enterprise Briefing</a>
              <a href="#platform" className="btn-outline">Explore the Architecture</a>
            </div>
          </div>

          {/* Trust / Credentials Panel */}
          <div className="animate d2">
            <p className="trust-panel-header">Certifications & Credentials</p>
            <div className="trust-panel">
              {CERTS.map((c) => (
                <div key={c.name} className="cert-card">
                  <div className="cert-icon">{c.icon}</div>
                  <div>
                    <div className="cert-label">{c.label}</div>
                    <div className="cert-name">{c.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PLATFORM ARCHITECTURE */}
      <section className="section" id="platform">
        <div className="section-inner">
          <p className="eyebrow">The Architecture</p>
          <h2 className="s-headline">Human OS™ Is the Roof.<br />PIVOT and BRIDGE Are the Floors.</h2>
          <p className="s-sub">
            The Human OS™ platform integrates all three operating lanes into a single
            coherent workforce intelligence system. Enterprise clients access the
            full architecture — individual, team, and organizational levels simultaneously.
          </p>
          <div className="arch-grid">
            {[
              {
                label: "PIVOT OS™", labelColor: "#4A90D9",
                cards: [
                  { title: "Individual Assessment", body: "RPA™ + C.A.L.M.™ at the employee level" },
                  { title: "Career Reinvention", body: "Three Spaces Framework™ for individual contributors" },
                ],
              },
              {
                label: "Human OS™", labelColor: "#C9A84C",
                cards: [
                  { title: "Composure Architecture™", body: "Organizational behavioral intelligence baseline" },
                  { title: "Enterprise Deployment", body: "Full Human OS™ platform rollout + practitioner network" },
                ],
              },
              {
                label: "BRIDGE OS™", labelColor: "#48BB78",
                cards: [
                  { title: "Team Transition", body: "Manager readiness + workforce change infrastructure" },
                  { title: "Community Workforce", body: "Government + nonprofit re-entry systems" },
                ],
              },
            ].map((col) => (
              <div key={col.label} className="arch-col">
                <div
                  className="arch-lane-label"
                  style={{ background: `${col.labelColor}1A`, color: col.labelColor, border: `1px solid ${col.labelColor}40` }}
                >
                  {col.label}
                </div>
                <div className="arch-connector" />
                {col.cards.map((card, i) => (
                  <>
                    <div key={card.title} className="arch-card">
                      <div className="arch-card-title">{card.title}</div>
                      <div className="arch-card-body">{card.body}</div>
                    </div>
                    {i === 0 && <div className="arch-connector" />}
                  </>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ENTERPRISE SERVICES */}
      <section className="section" style={{ background: "#060F1E" }}>
        <div className="section-inner">
          <p className="eyebrow">Enterprise Services</p>
          <h2 className="s-headline">What Human OS™<br />Delivers at Scale</h2>
          <p className="s-sub">
            Four core enterprise engagements — each deployable independently
            or as part of a full Human OS™ organizational implementation.
          </p>
          <div className="enterprise-grid">
            {ENT_SERVICES.map((s) => (
              <div key={s.title} className="ent-card">
                <div className="ent-icon">{s.icon}</div>
                <h3 className="ent-title">{s.title}</h3>
                <p className="ent-body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PRACTITIONER CERTIFICATION */}
      <section className="section">
        <div className="section-inner">
          <p className="eyebrow">Practitioner Certification</p>
          <h2 className="s-headline">License the Platform.<br />Build a Practice.</h2>
          <p className="s-sub">
            Three certification tiers for HR leaders, coaches, consultants, and
            workforce professionals ready to deploy Human OS™ methodology inside
            their organizations or with their own clients.
          </p>
          <div className="tiers-grid">
            {TIERS.map((t) => (
              <div key={t.title} className={`tier-card${t.featured ? " featured" : ""}`}>
                {t.featured && <div className="tier-badge">Most Popular</div>}
                <p className="tier-name">{t.name}</p>
                <h3 className="tier-title">{t.title}</h3>
                <div className="tier-price">{t.price}</div>
                <div className="tier-price-sub">{t.priceSub}</div>
                <ul className="tier-features">
                  {t.features.map((f) => (
                    <li key={f} className="tier-feature">
                      <span className="tier-feature-icon">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={t.featured ? "btn-gold" : "btn-outline"} style={{ display: "block", textAlign: "center", fontSize: "0.8rem" }}>
                  Apply for Certification
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVCON STRIP */}
      <div className="govcon-strip">
        <div className="govcon-inner">
          <div className="govcon-text">
            <h3>Government & Procurement</h3>
            <p>
              M2M~Inc. is SDVOSB and VBE certified. SAM.gov registration current.
              Available for federal, state, and local government contracting across
              four NAICS codes. Contact for capability statement and past performance package.
            </p>
          </div>
          <div className="govcon-codes">
            {NAICS.map((n) => (
              <div key={n.code} className="govcon-code">
                {n.code} <span>— {n.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="cta-inner">
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.18em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "1rem" }}>
            Enterprise Engagement
          </p>
          <h2 className="cta-headline">
            Your Organization Has<br />
            <span>More Capacity Than It Knows.</span>
          </h2>
          <p className="cta-sub">
            Request an enterprise briefing. We'll assess your workforce transition
            readiness, identify the highest-leverage entry point in the Human OS™
            architecture, and build a scoped engagement proposal within 48 hours.
          </p>
          <div className="cta-group">
            <a href="mailto:info@model2message.net?subject=Human OS Enterprise Briefing" className="btn-gold">
              Request Enterprise Briefing
            </a>
            <a href="tel:9804749377" className="btn-outline">
              Call 980.474.9377
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">M2M<span>~</span>Inc. · <span style={{ color: "var(--gold)", fontSize: "0.9em" }}>Human OS™</span></div>
          <div className="footer-trust">
            {["SDVOSB", "·", "VBE", "·", "SAFe 6", "·", "USPTO — 9 Marks", "·", "Tuck Executive Ed."].map((t, i) => <span key={i}>{t}</span>)}
          </div>
        </div>
        <div className="footer-copy">
          <span>© 2026 M2M~Inc. Human OS™, PIVOT OS™, BRIDGE OS™, M2M Composure Architecture™, C.A.L.M.™, M2M-AP™, M2M-PP™, M2M-EP™ are pending trademarks.</span>
          <a href="/" style={{ color: "var(--gold)", textDecoration: "none" }}>model2message.net</a>
        </div>
      </footer>
    </>
  );
}
