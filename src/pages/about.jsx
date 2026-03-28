/* ─────────────────────────────────────────────
   M2M~Inc. — About / Sovereign Architect
   Built to Design MD v1.0
───────────────────────────────────────────── */

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --navy:#0A1628;--navy-mid:#0D2045;--navy-light:#1A3560;
    --gold:#C9A84C;--gold-muted:#9E7E38;
    --white:#FFFFFF;--white-soft:#E8EDF5;--white-dim:#A0AEC0;
    --font-display:'Cormorant Garamond',Georgia,serif;
    --font-body:'DM Sans',system-ui,sans-serif;
    --font-mono:'JetBrains Mono',monospace;
  }
  html{scroll-behavior:smooth;}
  body{background:var(--navy);color:var(--white);font-family:var(--font-body);line-height:1.6;overflow-x:hidden;}
  .nav{position:fixed;top:0;left:0;right:0;z-index:100;height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(1.5rem,5vw,4rem);background:rgba(10,22,40,0.92);backdrop-filter:blur(12px);border-bottom:1px solid rgba(201,168,76,0.12);}
  .nav-logo{font-family:var(--font-display);font-size:1.5rem;font-weight:700;color:var(--white);text-decoration:none;}
  .nav-logo span{color:var(--gold);}
  .nav-links{display:flex;align-items:center;gap:2rem;list-style:none;}
  .nav-links a{font-size:0.875rem;font-weight:500;color:var(--white-soft);text-decoration:none;transition:color 0.2s;}
  .nav-links a:hover,.nav-links a.active{color:var(--gold);}
  .nav-cta{background:var(--gold)!important;color:var(--navy)!important;padding:0.5rem 1.25rem;border-radius:9999px;font-weight:700!important;font-size:0.8rem!important;}
  .hero{min-height:75vh;display:flex;align-items:flex-end;padding:120px clamp(1.5rem,5vw,4rem) 5rem;background:linear-gradient(135deg,#0A1628 0%,#0D2045 60%,#0A1628 100%);position:relative;overflow:hidden;}
  .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 50% 60% at 80% 40%,rgba(201,168,76,0.07),transparent);pointer-events:none;}
  .hero-inner{max-width:1280px;margin:0 auto;width:100%;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:end;}
  .eyebrow-line{font-family:var(--font-mono);font-size:0.68rem;letter-spacing:0.18em;color:var(--gold);text-transform:uppercase;margin-bottom:1rem;display:flex;align-items:center;gap:0.75rem;}
  .eyebrow-line::before{content:'';display:block;width:32px;height:1.5px;background:var(--gold);}
  .hero-name{font-family:var(--font-display);font-size:clamp(3rem,6vw,5.5rem);font-weight:900;line-height:1.0;letter-spacing:-0.02em;color:var(--white);margin-bottom:0.75rem;}
  .hero-title{font-family:var(--font-mono);font-size:0.75rem;letter-spacing:0.15em;color:var(--gold-muted);text-transform:uppercase;margin-bottom:1.5rem;}
  .hero-sub{font-size:1.05rem;color:var(--white-soft);line-height:1.75;max-width:480px;}
  .cred-strip{display:flex;flex-direction:column;gap:0.625rem;}
  .cred-row{display:flex;align-items:center;gap:0.75rem;padding:0.625rem 1rem;background:rgba(201,168,76,0.06);border:1px solid rgba(201,168,76,0.15);border-radius:8px;}
  .cred-mark{color:var(--gold);font-size:0.6rem;}
  .cred-text{font-family:var(--font-mono);font-size:0.65rem;letter-spacing:0.08em;color:var(--white-soft);text-transform:uppercase;}
  .section{padding:6rem clamp(1.5rem,5vw,4rem);}
  .section-inner{max-width:1280px;margin:0 auto;}
  .eyebrow{font-family:var(--font-mono);font-size:0.68rem;letter-spacing:0.18em;color:var(--gold);text-transform:uppercase;margin-bottom:0.875rem;display:flex;align-items:center;gap:0.75rem;}
  .eyebrow::before{content:'';display:block;width:3px;height:36px;background:var(--gold);border-radius:2px;}
  .s-headline{font-family:var(--font-display);font-size:clamp(1.75rem,3vw,2.75rem);font-weight:700;color:var(--white);line-height:1.15;margin-bottom:1rem;letter-spacing:-0.01em;}
  .divider{width:100%;height:1px;background:linear-gradient(to right,transparent,rgba(201,168,76,0.2),transparent);}
  .two-col{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:start;}
  .bio-body{font-size:1rem;color:var(--white-soft);line-height:1.8;}
  .bio-body p+p{margin-top:1.25rem;}
  .bio-body strong{color:var(--white);}
  .timeline{display:flex;flex-direction:column;position:relative;}
  .timeline::before{content:'';position:absolute;left:11px;top:4px;bottom:4px;width:1.5px;background:linear-gradient(to bottom,var(--gold),rgba(201,168,76,0.1));}
  .tl-item{display:flex;gap:1.25rem;padding-bottom:2rem;}
  .tl-dot{width:24px;height:24px;border-radius:50%;background:var(--gold);border:3px solid var(--navy);flex-shrink:0;margin-top:2px;position:relative;z-index:1;}
  .tl-dot-dim{background:var(--navy-light)!important;border-color:var(--navy-light)!important;}
  .tl-year{font-family:var(--font-mono);font-size:0.62rem;letter-spacing:0.1em;color:var(--gold);text-transform:uppercase;margin-bottom:0.2rem;}
  .tl-title{font-size:0.95rem;font-weight:600;color:var(--white);margin-bottom:0.2rem;}
  .tl-body{font-size:0.82rem;color:var(--white-dim);line-height:1.55;}
  .cred-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;}
  .cred-card{background:linear-gradient(145deg,#0D2045,#1A3560);border:1px solid rgba(201,168,76,0.15);border-radius:12px;padding:1.25rem;text-align:center;}
  .cred-card-icon{font-size:1.3rem;margin-bottom:0.625rem;}
  .cred-card-name{font-size:0.82rem;font-weight:600;color:var(--white);margin-bottom:0.25rem;}
  .cred-card-sub{font-size:0.7rem;color:var(--white-dim);line-height:1.4;}
  .quote-block{background:linear-gradient(145deg,#0D2045,#1A3560);border:1px solid rgba(201,168,76,0.2);border-radius:16px;padding:3.5rem;max-width:860px;margin:0 auto;box-shadow:0 0 48px rgba(201,168,76,0.06);}
  .quote-mark{font-family:var(--font-display);font-size:7rem;color:var(--gold);opacity:0.12;line-height:0.4;display:block;margin-bottom:1.25rem;}
  .quote-text{font-family:var(--font-display);font-size:clamp(1.3rem,2.2vw,1.9rem);font-weight:600;color:var(--white);line-height:1.35;margin-bottom:1.75rem;}
  .quote-attr{font-size:0.875rem;color:var(--white-dim);}
  .quote-attr strong{color:var(--gold);}
  .cta-section{padding:6rem clamp(1.5rem,5vw,4rem);text-align:center;background:linear-gradient(135deg,#0D2045 0%,#0A1628 100%);}
  .cta-inner{max-width:640px;margin:0 auto;}
  .cta-headline{font-family:var(--font-display);font-size:clamp(1.75rem,3.5vw,2.75rem);font-weight:900;color:var(--white);line-height:1.1;margin-bottom:1rem;}
  .cta-headline span{color:var(--gold);}
  .cta-sub{font-size:1rem;color:var(--white-soft);line-height:1.7;margin-bottom:2.25rem;}
  .cta-group{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;}
  .btn-gold{background:var(--gold);color:var(--navy);font-size:0.875rem;font-weight:700;padding:0.875rem 2rem;border-radius:9999px;border:none;cursor:pointer;letter-spacing:0.03em;transition:filter 0.2s,transform 0.2s;text-decoration:none;display:inline-block;}
  .btn-gold:hover{filter:brightness(1.1);transform:scale(1.02);}
  .btn-outline{background:transparent;color:var(--gold);font-size:0.875rem;font-weight:600;padding:0.875rem 2rem;border-radius:9999px;border:1.5px solid var(--gold);cursor:pointer;letter-spacing:0.03em;text-decoration:none;display:inline-block;transition:background 0.2s;}
  .btn-outline:hover{background:rgba(201,168,76,0.08);}
  .footer{background:#060F1E;padding:2.5rem clamp(1.5rem,5vw,4rem);border-top:1px solid rgba(201,168,76,0.1);}
  .footer-inner{max-width:1280px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;}
  .footer-logo{font-family:var(--font-display);font-size:1.1rem;font-weight:700;color:var(--white);}
  .footer-logo span{color:var(--gold);}
  .footer-trust{display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;font-family:var(--font-mono);font-size:0.6rem;letter-spacing:0.12em;color:var(--gold-muted);text-transform:uppercase;}
  .footer-copy{max-width:1280px;margin:1.5rem auto 0;padding-top:1.25rem;border-top:1px solid rgba(255,255,255,0.05);font-size:0.72rem;color:var(--white-dim);display:flex;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;}
  @keyframes fadeInUp{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}
  .anim{animation:fadeInUp 0.6s ease forwards;}
  .d1{animation-delay:0.1s;opacity:0;}.d2{animation-delay:0.25s;opacity:0;}.d3{animation-delay:0.4s;opacity:0;}
  @media(max-width:900px){.hero-inner,.two-col{grid-template-columns:1fr;}.cred-grid{grid-template-columns:1fr 1fr;}.nav-links li:not(:last-child){display:none;}}
`;

const TIMELINE = [
  { year: "U.S. Navy", title: "Service & Discipline Foundation", body: "Military service instills the operational clarity, mission orientation, and composure under pressure that anchors every M2M framework.", dim: false },
  { year: "Post-Service", title: "Workforce Reinvention", body: "Navigated the civilian transition gap firsthand — the experience that became the blueprint for PIVOT OS™.", dim: false },
  { year: "2020–Present", title: "M2M~Inc. Founded", body: "Model 2 Message launched as a workforce intelligence firm. Nine proprietary marks now in the USPTO pipeline.", dim: false },
  { year: "2024", title: "Human OS™ Architecture Complete", body: "Full three-lane platform — PIVOT OS™, BRIDGE OS™, Human OS™ — built, tested, and deployed.", dim: false },
  { year: "2025–2026", title: "SDVOSB/VBE + Tuck Network", body: "Veteran certifications secured. Wells Fargo Tuck Executive Education cohort confirmed. Enterprise market entry active.", dim: false },
  { year: "Jun 2026", title: "Jupiter Return Window", body: "12-year expansion cycle begins. The platform is built. The sprint is now.", dim: true },
];

const CREDS = [
  { icon: "⚓", name: "U.S. Navy Veteran", sub: "Service · Discipline · Mission" },
  { icon: "🎓", name: "Hon. D.H.L.", sub: "Doctor of Humane Letters" },
  { icon: "◆", name: "SAFe 6 Agilist", sub: "CSM · CSPO" },
  { icon: "✦", name: "SDVOSB", sub: "Service-Disabled Veteran-Owned" },
  { icon: "⬟", name: "VBE Certified", sub: "Veteran Business Enterprise" },
  { icon: "◈", name: "Tuck Exec. Ed.", sub: "Wells Fargo Cohort · Apr 2026" },
  { icon: "⬡", name: "USPTO — 9 Marks", sub: "Pending Trademark Portfolio" },
  { icon: "✶", name: "Kamelot Global", sub: "Executive Director · KGM SSM" },
];

export default function About() {
  return (
    <>
      <style>{styles}</style>
      <nav className="nav">
        <a href="/" className="nav-logo">M2M<span>~</span>Inc.</a>
        <ul className="nav-links">
          <li><a href="/pivot-os">PIVOT OS™</a></li>
          <li><a href="/bridge-os">BRIDGE OS™</a></li>
          <li><a href="/human-os">Human OS™</a></li>
          <li><a href="/speaking">Speaking</a></li>
          <li><a href="/contact" className="nav-cta">Schedule a Call</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-inner">
          <div>
            <p className="eyebrow-line anim d1">The Sovereign Architect</p>
            <h1 className="hero-name anim d2">Dr. Kevin<br />A. Smith</h1>
            <p className="hero-title anim d3">Founder & Chief Opportunity Officer · M2M~Inc.</p>
            <p className="hero-sub anim d3">Navy veteran. Behavioral systems architect. Workforce intelligence practitioner. Built the Human OS™ platform from lived experience — not theory.</p>
          </div>
          <div className="cred-strip anim d2">
            {["SDVOSB Certified","VBE Certified","SAFe 6 Agilist · CSM · CSPO","Hon. D.H.L.","Tuck Executive Education · Wells Fargo Cohort","USPTO — 9 Proprietary Marks Pending"].map((c) => (
              <div key={c} className="cred-row"><span className="cred-mark">✦</span><span className="cred-text">{c}</span></div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="section-inner">
          <div className="two-col">
            <div>
              <p className="eyebrow">The Story</p>
              <h2 className="s-headline">Built From the<br />Inside of the Problem</h2>
              <div className="bio-body">
                <p>Dr. Kevin A. Smith didn't design the Human OS™ platform from a conference room. He built it from the gap — the space between military service and civilian identity, between professional mastery and personal reinvention, between what an organization says it values and how it actually treats people in transition.</p>
                <p>A <strong>U.S. Navy veteran</strong> with roots in South Boston, Virginia and an operational base in Winston-Salem, NC, Kev has spent the last decade at the intersection of behavioral science, workforce development, and organizational transformation. His platform sits on nine proprietary marks because the frameworks he built didn't exist anywhere else.</p>
                <p>As <strong>Founder and Chief Opportunity Officer of M2M~Inc.</strong>, he leads a three-lane workforce intelligence platform — PIVOT OS™ for individuals, BRIDGE OS™ for employers, and Human OS™ for enterprise and government. He also serves as Part-Time COO of CenterMarq LLC and Executive Director of Kamelot Global Ministries.</p>
                <p>The throughline across every role: <strong>every person carries more capacity than they've been given credit for.</strong> The system exists to prove it.</p>
              </div>
            </div>
            <div>
              <p className="eyebrow">The Path</p>
              <h2 className="s-headline">Timeline</h2>
              <div className="timeline">
                {TIMELINE.map((t) => (
                  <div key={t.title} className="tl-item">
                    <div className={`tl-dot${t.dim ? " tl-dot-dim" : ""}`} />
                    <div>
                      <p className="tl-year">{t.year}</p>
                      <p className="tl-title">{t.title}</p>
                      <p className="tl-body">{t.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section" style={{ background: "#060F1E" }}>
        <div className="section-inner">
          <p className="eyebrow">Credentials</p>
          <h2 className="s-headline" style={{ marginBottom: "2.5rem" }}>The Full Portfolio</h2>
          <div className="cred-grid">
            {CREDS.map((c) => (
              <div key={c.name} className="cred-card">
                <div className="cred-card-icon">{c.icon}</div>
                <div className="cred-card-name">{c.name}</div>
                <div className="cred-card-sub">{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="section-inner">
          <div className="quote-block">
            <span className="quote-mark">"</span>
            <p className="quote-text">The Sovereign Architect doesn't wait for permission to build. He assesses the terrain, designs the structure, and executes with the composure of someone who has already decided the outcome — because the system is sound.</p>
            <p className="quote-attr">— <strong>Dr. Kevin A. Smith</strong> · Founder, M2M~Inc.<br /><span>Navy Veteran · Hon. D.H.L. · Sovereign Architect</span></p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-inner">
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.18em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "1rem" }}>Work With Kev</p>
          <h2 className="cta-headline">Ready to Build<br /><span>Something That Lasts?</span></h2>
          <p className="cta-sub">Whether you're an individual ready to pivot, an organization navigating change, or a partner looking to license the platform — the conversation starts here.</p>
          <div className="cta-group">
            <a href="/contact" className="btn-gold">Schedule a Consultation</a>
            <a href="/speaking" className="btn-outline">Invite Kev to Speak</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">M2M<span>~</span>Inc.</div>
          <div className="footer-trust">{["SDVOSB","·","VBE","·","SAFe 6","·","USPTO","·","Tuck"].map((t,i)=><span key={i}>{t}</span>)}</div>
        </div>
        <div className="footer-copy">
          <span>© 2026 M2M~Inc. All rights reserved.</span>
          <a href="/" style={{ color: "var(--gold)", textDecoration: "none" }}>model2message.net</a>
        </div>
      </footer>
    </>
  );
}
