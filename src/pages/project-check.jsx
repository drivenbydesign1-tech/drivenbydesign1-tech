/* ─────────────────────────────────────────────
   M2M~Inc. — Project CHECK Microsite
   OJJDP Second Chance Act · Forsyth County, NC
   Built to Design MD v1.0
───────────────────────────────────────────── */

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0A1628;--navy-mid:#0D2045;--check:#7C6FCD;--check-light:rgba(124,111,205,0.12);--check-border:rgba(124,111,205,0.25);--gold:#C9A84C;--gold-muted:#9E7E38;--bridge:#48BB78;--white:#FFFFFF;--white-soft:#E8EDF5;--white-dim:#A0AEC0;--font-display:'Cormorant Garamond',Georgia,serif;--font-body:'DM Sans',system-ui,sans-serif;--font-mono:'JetBrains Mono',monospace;}
  html{scroll-behavior:smooth;}body{background:var(--navy);color:var(--white);font-family:var(--font-body);line-height:1.6;overflow-x:hidden;}
  .nav{position:fixed;top:0;left:0;right:0;z-index:100;height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(1.5rem,5vw,4rem);background:rgba(10,22,40,0.92);backdrop-filter:blur(12px);border-bottom:1px solid rgba(124,111,205,0.2);}
  .nav-logo{font-family:var(--font-display);font-size:1.4rem;font-weight:700;color:var(--white);text-decoration:none;}.nav-logo span{color:var(--check);}
  .nav-back{font-size:0.78rem;color:var(--white-dim);text-decoration:none;font-family:var(--font-mono);letter-spacing:0.05em;transition:color 0.2s;}.nav-back:hover{color:var(--check);}
  .nav-cta{background:var(--check);color:var(--white);font-size:0.78rem;font-weight:700;padding:0.45rem 1.1rem;border-radius:9999px;text-decoration:none;letter-spacing:0.03em;}
  .hero{min-height:80vh;display:flex;align-items:center;padding:120px clamp(1.5rem,5vw,4rem) 5rem;background:linear-gradient(135deg,#0A1628 0%,#0E1D3A 60%,#0A1628 100%);position:relative;overflow:hidden;}
  .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 55% at 70% 45%,rgba(124,111,205,0.1),transparent);pointer-events:none;}
  .hero-inner{max-width:1280px;margin:0 auto;width:100%;display:grid;grid-template-columns:1.1fr 0.9fr;gap:5rem;align-items:center;}
  .badge-row{display:flex;gap:0.625rem;flex-wrap:wrap;margin-bottom:1.25rem;}
  .badge{display:inline-flex;align-items:center;gap:0.375rem;padding:0.3rem 0.75rem;border-radius:9999px;font-family:var(--font-mono);font-size:0.6rem;letter-spacing:0.1em;text-transform:uppercase;font-weight:600;}
  .badge-check{background:var(--check-light);border:1px solid var(--check-border);color:var(--check);}
  .badge-ojjdp{background:rgba(201,168,76,0.1);border:1px solid rgba(201,168,76,0.25);color:var(--gold);}
  .badge-forsyth{background:rgba(72,187,120,0.1);border:1px solid rgba(72,187,120,0.2);color:var(--bridge);}
  .hero-headline{font-family:var(--font-display);font-size:clamp(2.75rem,5vw,4.5rem);font-weight:900;line-height:1.05;letter-spacing:-0.02em;color:var(--white);margin-bottom:1.25rem;}
  .hero-headline em{color:var(--check);font-style:normal;}
  .hero-sub{font-size:1rem;color:var(--white-soft);line-height:1.75;max-width:500px;margin-bottom:2rem;}
  .btn-check{background:var(--check);color:var(--white);font-size:0.875rem;font-weight:700;padding:0.875rem 2rem;border-radius:9999px;border:none;cursor:pointer;letter-spacing:0.03em;transition:filter 0.2s,transform 0.2s;text-decoration:none;display:inline-block;}
  .btn-check:hover{filter:brightness(1.1);transform:scale(1.02);}
  .btn-outline{background:transparent;color:var(--check);font-size:0.875rem;font-weight:600;padding:0.875rem 2rem;border-radius:9999px;border:1.5px solid var(--check);cursor:pointer;text-decoration:none;display:inline-block;transition:background 0.2s;}
  .btn-outline:hover{background:var(--check-light);}
  .cta-row{display:flex;gap:1rem;flex-wrap:wrap;}
  .grant-card{background:linear-gradient(145deg,#0D2045,#1A3560);border:1px solid rgba(124,111,205,0.3);border-radius:14px;padding:2rem;box-shadow:0 0 32px rgba(124,111,205,0.08);}
  .grant-label{font-family:var(--font-mono);font-size:0.62rem;letter-spacing:0.15em;color:var(--check);text-transform:uppercase;margin-bottom:1rem;}
  .grant-amount{font-family:var(--font-display);font-size:3rem;font-weight:900;color:var(--gold);line-height:1;margin-bottom:0.375rem;}
  .grant-name{font-size:0.9rem;color:var(--white);font-weight:600;margin-bottom:0.25rem;}
  .grant-sub{font-size:0.8rem;color:var(--white-dim);margin-bottom:1.25rem;line-height:1.5;}
  .grant-divider{height:1px;background:rgba(124,111,205,0.15);margin:1rem 0;}
  .grant-detail{font-size:0.8rem;color:var(--white-dim);line-height:1.6;}
  .section{padding:5.5rem clamp(1.5rem,5vw,4rem);}.section-inner{max-width:1280px;margin:0 auto;}
  .eyebrow{font-family:var(--font-mono);font-size:0.65rem;letter-spacing:0.18em;color:var(--check);text-transform:uppercase;margin-bottom:0.875rem;display:flex;align-items:center;gap:0.75rem;}
  .eyebrow::before{content:'';display:block;width:3px;height:36px;background:var(--check);border-radius:2px;}
  .s-headline{font-family:var(--font-display);font-size:clamp(1.75rem,3vw,2.75rem);font-weight:700;color:var(--white);line-height:1.15;margin-bottom:1rem;letter-spacing:-0.01em;}
  .s-sub{font-size:1rem;color:var(--white-soft);max-width:560px;line-height:1.7;margin-bottom:2.5rem;}
  .divider{width:100%;height:1px;background:linear-gradient(to right,transparent,rgba(124,111,205,0.2),transparent);}
  .pillars-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;}
  .pillar-card{background:linear-gradient(145deg,#0D2045,#1A3560);border:1px solid rgba(255,255,255,0.06);border-radius:14px;padding:1.75rem;border-top:3px solid var(--check);transition:transform 0.3s,box-shadow 0.3s;}
  .pillar-card:hover{transform:translateY(-4px);box-shadow:0 8px 32px rgba(0,0,0,0.3),0 0 24px rgba(124,111,205,0.1);}
  .pillar-num{font-family:var(--font-mono);font-size:0.65rem;letter-spacing:0.1em;color:var(--check);margin-bottom:0.625rem;}
  .pillar-title{font-family:var(--font-display);font-size:1.2rem;font-weight:700;color:var(--white);margin-bottom:0.5rem;}
  .pillar-body{font-size:0.85rem;color:var(--white-soft);line-height:1.65;}
  .stakeholders-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;}
  .stakeholder-card{background:var(--check-light);border:1px solid var(--check-border);border-radius:12px;padding:1.25rem;}
  .stakeholder-role{font-family:var(--font-mono);font-size:0.62rem;letter-spacing:0.1em;color:var(--check);text-transform:uppercase;margin-bottom:0.375rem;}
  .stakeholder-name{font-size:0.9rem;font-weight:600;color:var(--white);margin-bottom:0.25rem;}
  .stakeholder-org{font-size:0.78rem;color:var(--white-dim);}
  .m2m-footer-badge{text-align:center;padding:3rem clamp(1.5rem,5vw,4rem);background:#060F1E;border-top:1px solid rgba(124,111,205,0.15);}
  .m2m-footer-badge p{font-family:var(--font-mono);font-size:0.65rem;letter-spacing:0.12em;color:var(--gold-muted);text-transform:uppercase;margin-bottom:0.5rem;}
  .m2m-footer-badge a{color:var(--gold);text-decoration:none;font-weight:600;font-size:0.875rem;}
  .footer{background:#060F1E;padding:2rem clamp(1.5rem,5vw,4rem);border-top:1px solid rgba(255,255,255,0.05);}
  .footer-inner{max-width:1280px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;}
  .footer-copy{font-size:0.72rem;color:var(--white-dim);}
  @media(max-width:900px){.hero-inner{grid-template-columns:1fr;}.pillars-grid,.stakeholders-grid{grid-template-columns:1fr;}}
`;

const PILLARS = [
  { num: "01", title: "Crisis Intervention", body: "Immediate behavioral stabilization for youth ages 14–24 with active justice involvement. Trained interveners using M2M Composure Architecture™ protocols." },
  { num: "02", title: "Human Capital Development", body: "Workforce readiness pipeline — credentials, soft skills, and the PIVOT OS™ framework adapted for youth transition contexts." },
  { num: "03", title: "Education & Credentialing", body: "Partnerships with Forsyth County Schools and WSSU to build alternative education pathways with tangible certification outcomes." },
  { num: "04", title: "Knowledge Transfer", body: "Community knowledge systems — mentorship networks, oral history documentation, and intergenerational wisdom transfer protocols." },
  { num: "05", title: "Reintegration Support", body: "90-day structured re-entry support with case management, family systems work, and community accountability partnerships." },
  { num: "06", title: "Systems Alignment", body: "Cross-agency coordination between law enforcement, courts, schools, and nonprofit service providers. One shared language, one coordinated system." },
];

const STAKEHOLDERS = [
  { role: "Law Enforcement Partner", name: "Chief Catrina Thompson", org: "Winston-Salem Police Department" },
  { role: "County Partnership", name: "Sheriff Bobby Kimbrough", org: "Forsyth County Sheriff's Office" },
  { role: "Academic Partner", name: "VP Turman", org: "Winston-Salem State University" },
  { role: "Platform Architect", name: "Dr. Kevin A. Smith", org: "M2M~Inc. · BRIDGE OS™" },
  { role: "Lead Applicant", name: "KGM SSM / M2M~Inc.", org: "EIN: 84-3527960 · SDVOSB" },
  { role: "Funding Body", name: "OJJDP — Second Chance Act", org: "FY25 · Up to $750,000" },
];

export default function ProjectCheck() {
  return (
    <>
      <style>{styles}</style>
      <nav className="nav">
        <a href="/" className="nav-logo">Project <span>CHECK</span></a>
        <a href="/bridge-os" className="nav-back">← BRIDGE OS™</a>
        <a href="/contact" className="nav-cta">Partner With Us</a>
      </nav>

      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="badge-row">
              <span className="badge badge-check">Project CHECK</span>
              <span className="badge badge-ojjdp">OJJDP Second Chance Act</span>
              <span className="badge badge-forsyth">Forsyth County, NC</span>
            </div>
            <h1 className="hero-headline">
              <em>C.H.E.C.K.</em><br />
              Youth. Community.<br />Reintegration.
            </h1>
            <p className="hero-sub">
              Crisis intervention. Human capital development. Education. Knowledge transfer. A coordinated workforce-ready reintegration platform for justice-involved youth in Forsyth County — powered by BRIDGE OS™ and M2M~Inc.
            </p>
            <div className="cta-row">
              <a href="/contact" className="btn-check">Partner With Project CHECK</a>
              <a href="#pillars" className="btn-outline">See the Model</a>
            </div>
          </div>
          <div className="grant-card">
            <p className="grant-label">Funding Application</p>
            <div className="grant-amount">$750K</div>
            <div className="grant-name">OJJDP FY25 Second Chance Act</div>
            <div className="grant-sub">Community-Based Reentry Program for Youth<br />Grants.gov Submission · March 30, 2026</div>
            <div className="grant-divider" />
            <div className="grant-detail">
              Target population: Justice-involved youth, ages 14–24<br />
              Geography: Forsyth County, NC · Winston-Salem metro<br />
              Lead applicant: KGM SSM / M2M~Inc.<br />
              Platform: BRIDGE OS™ · Human OS™ Initiative
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* WHAT CHECK MEANS */}
      <section className="section" style={{ background: "#060F1E" }}>
        <div className="section-inner" style={{ maxWidth: 860 }}>
          <p className="eyebrow">The Acronym</p>
          <h2 className="s-headline">What CHECK Stands For</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
            {[
              { letter: "C", word: "Crisis Intervention", color: "#7C6FCD" },
              { letter: "H", word: "Human Capital Development", color: "#4A90D9" },
              { letter: "E", word: "Education & Credentialing", color: "#48BB78" },
              { letter: "C", word: "Community Knowledge Transfer", color: "#C9A84C" },
              { letter: "K", word: "Knowledge Systems & Reintegration", color: "#FC8181" },
            ].map((item) => (
              <div key={item.word} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.875rem 1rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: `${item.color}1A`, border: `1px solid ${item.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 900, color: item.color, flexShrink: 0 }}>{item.letter}</div>
                <span style={{ fontSize: "0.875rem", color: "var(--white-soft)", fontWeight: 500 }}>{item.word}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SIX PILLARS */}
      <section className="section" id="pillars">
        <div className="section-inner">
          <p className="eyebrow">Program Model</p>
          <h2 className="s-headline">Six-Pillar<br />Reintegration Architecture</h2>
          <p className="s-sub">Project CHECK deploys a coordinated six-pillar model — each pillar aligned to a measurable outcome, each outcome connected to workforce readiness and community stability.</p>
          <div className="pillars-grid">
            {PILLARS.map((p) => (
              <div key={p.num} className="pillar-card">
                <p className="pillar-num">Pillar {p.num}</p>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* STAKEHOLDERS */}
      <section className="section" style={{ background: "#060F1E" }}>
        <div className="section-inner">
          <p className="eyebrow">Stakeholder Network</p>
          <h2 className="s-headline">The Partnership<br />Behind the Platform</h2>
          <p className="s-sub">Project CHECK is a coordinated stakeholder model — law enforcement, academia, and the M2M platform architecture aligned around one shared outcome: reintegration that sticks.</p>
          <div className="stakeholders-grid">
            {STAKEHOLDERS.map((s) => (
              <div key={s.name} className="stakeholder-card">
                <p className="stakeholder-role">{s.role}</p>
                <p className="stakeholder-name">{s.name}</p>
                <p className="stakeholder-org">{s.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M2M FOOTER BADGE */}
      <div className="m2m-footer-badge">
        <p>A Human OS™ Initiative</p>
        <a href="/">model2message.net</a>
        <p style={{ marginTop: "0.5rem", fontSize: "0.7rem" }}>M2M~Inc. · SDVOSB · VBE · Winston-Salem, NC</p>
      </div>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-copy">© 2026 M2M~Inc. Project CHECK is a BRIDGE OS™ initiative. OJJDP Second Chance Act application pending.</div>
          <a href="/" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "0.75rem" }}>model2message.net</a>
        </div>
      </footer>
    </>
  );
}
