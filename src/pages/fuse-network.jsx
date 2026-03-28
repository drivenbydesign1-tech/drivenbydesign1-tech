/* FUSE Network — Robeson County / Lumbee Tribe */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0A1628;--navy-mid:#0D2045;--gold:#C9A84C;--gold-muted:#9E7E38;--fuse:#D4845A;--fuse-light:rgba(212,132,90,0.12);--fuse-border:rgba(212,132,90,0.25);--white:#FFFFFF;--white-soft:#E8EDF5;--white-dim:#A0AEC0;--font-display:'Cormorant Garamond',Georgia,serif;--font-body:'DM Sans',system-ui,sans-serif;--font-mono:'JetBrains Mono',monospace;}
  html{scroll-behavior:smooth;}body{background:var(--navy);color:var(--white);font-family:var(--font-body);line-height:1.6;overflow-x:hidden;}
  .nav{position:fixed;top:0;left:0;right:0;z-index:100;height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(1.5rem,5vw,4rem);background:rgba(10,22,40,0.92);backdrop-filter:blur(12px);border-bottom:1px solid rgba(212,132,90,0.2);}
  .nav-logo{font-family:var(--font-display);font-size:1.4rem;font-weight:700;color:var(--white);text-decoration:none;}.nav-logo span{color:var(--fuse);}
  .nav-back{font-size:0.78rem;color:var(--white-dim);text-decoration:none;font-family:var(--font-mono);letter-spacing:0.05em;transition:color 0.2s;}.nav-back:hover{color:var(--fuse);}
  .nav-cta{background:var(--fuse);color:var(--white);font-size:0.78rem;font-weight:700;padding:0.45rem 1.1rem;border-radius:9999px;text-decoration:none;}
  .hero{min-height:80vh;display:flex;align-items:center;padding:120px clamp(1.5rem,5vw,4rem) 5rem;background:linear-gradient(135deg,#0A1628 0%,#0E1D30 60%,#0A1628 100%);position:relative;overflow:hidden;}
  .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 55% at 65% 45%,rgba(212,132,90,0.08),transparent);pointer-events:none;}
  .hero-inner{max-width:1280px;margin:0 auto;width:100%;display:grid;grid-template-columns:1.2fr 0.8fr;gap:5rem;align-items:center;}
  .badge-row{display:flex;gap:0.625rem;flex-wrap:wrap;margin-bottom:1.25rem;}
  .badge{display:inline-flex;align-items:center;padding:0.3rem 0.75rem;border-radius:9999px;font-family:var(--font-mono);font-size:0.6rem;letter-spacing:0.1em;text-transform:uppercase;font-weight:600;}
  .badge-fuse{background:var(--fuse-light);border:1px solid var(--fuse-border);color:var(--fuse);}
  .badge-lumbee{background:rgba(201,168,76,0.1);border:1px solid rgba(201,168,76,0.25);color:var(--gold);}
  .hero-headline{font-family:var(--font-display);font-size:clamp(2.75rem,5vw,4.5rem);font-weight:900;line-height:1.05;letter-spacing:-0.02em;color:var(--white);margin-bottom:1.25rem;}
  .hero-headline em{color:var(--fuse);font-style:normal;}
  .hero-sub{font-size:1rem;color:var(--white-soft);line-height:1.75;max-width:500px;margin-bottom:2rem;}
  .cta-row{display:flex;gap:1rem;flex-wrap:wrap;}
  .btn-fuse{background:var(--fuse);color:var(--white);font-size:0.875rem;font-weight:700;padding:0.875rem 2rem;border-radius:9999px;border:none;cursor:pointer;letter-spacing:0.03em;transition:filter 0.2s,transform 0.2s;text-decoration:none;display:inline-block;}
  .btn-fuse:hover{filter:brightness(1.1);transform:scale(1.02);}
  .btn-outline{background:transparent;color:var(--fuse);font-size:0.875rem;font-weight:600;padding:0.875rem 2rem;border-radius:9999px;border:1.5px solid var(--fuse);cursor:pointer;text-decoration:none;display:inline-block;}
  .partnership-card{background:linear-gradient(145deg,#0D2045,#1A3560);border:1px solid rgba(212,132,90,0.25);border-radius:14px;padding:2rem;box-shadow:0 0 32px rgba(212,132,90,0.06);}
  .card-label{font-family:var(--font-mono);font-size:0.62rem;letter-spacing:0.15em;color:var(--fuse);text-transform:uppercase;margin-bottom:1rem;}
  .card-title{font-family:var(--font-display);font-size:1.5rem;font-weight:700;color:var(--white);margin-bottom:0.5rem;line-height:1.2;}
  .card-body{font-size:0.875rem;color:var(--white-soft);line-height:1.65;margin-bottom:1.25rem;}
  .card-divider{height:1px;background:rgba(212,132,90,0.15);margin:1rem 0;}
  .card-detail{font-size:0.8rem;color:var(--white-dim);line-height:1.6;}
  .section{padding:5.5rem clamp(1.5rem,5vw,4rem);}.section-inner{max-width:1280px;margin:0 auto;}
  .eyebrow{font-family:var(--font-mono);font-size:0.65rem;letter-spacing:0.18em;color:var(--fuse);text-transform:uppercase;margin-bottom:0.875rem;display:flex;align-items:center;gap:0.75rem;}
  .eyebrow::before{content:'';display:block;width:3px;height:36px;background:var(--fuse);border-radius:2px;}
  .s-headline{font-family:var(--font-display);font-size:clamp(1.75rem,3vw,2.75rem);font-weight:700;color:var(--white);line-height:1.15;margin-bottom:1rem;}
  .s-sub{font-size:1rem;color:var(--white-soft);max-width:560px;line-height:1.7;margin-bottom:2.5rem;}
  .pillars-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;}
  .pillar{background:var(--fuse-light);border:1px solid var(--fuse-border);border-radius:12px;padding:1.5rem;}
  .pillar-num{font-family:var(--font-mono);font-size:0.62rem;letter-spacing:0.1em;color:var(--fuse);margin-bottom:0.5rem;}
  .pillar-title{font-family:var(--font-display);font-size:1.1rem;font-weight:700;color:var(--white);margin-bottom:0.375rem;}
  .pillar-body{font-size:0.83rem;color:var(--white-soft);line-height:1.6;}
  .divider{width:100%;height:1px;background:linear-gradient(to right,transparent,rgba(212,132,90,0.2),transparent);}
  .m2m-badge{text-align:center;padding:2.5rem;background:#060F1E;border-top:1px solid rgba(212,132,90,0.12);}
  .m2m-badge p{font-family:var(--font-mono);font-size:0.62rem;letter-spacing:0.12em;color:var(--gold-muted);text-transform:uppercase;margin-bottom:0.375rem;}
  .m2m-badge a{color:var(--gold);text-decoration:none;font-weight:600;}
  .footer{background:#060F1E;padding:1.75rem clamp(1.5rem,5vw,4rem);border-top:1px solid rgba(255,255,255,0.05);}
  .footer-inner{max-width:1280px;margin:0 auto;display:flex;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;font-size:0.72rem;color:var(--white-dim);}
  @media(max-width:900px){.hero-inner{grid-template-columns:1fr;}.pillars-grid{grid-template-columns:1fr;}}
`;

const PILLARS = [
  { num: "01", title: "Sovereign Workforce Development", body: "Workforce readiness programming built on Lumbee cultural sovereignty — not external dependency frameworks. Skills + identity, together." },
  { num: "02", title: "G2G Economic Infrastructure", body: "Government-to-government partnership model connecting Lumbee Tribe to federal and state workforce funding channels through M2M's SDVOSB-certified capacity." },
  { num: "03", title: "Rural Business Incubation", body: "SMB and entrepreneurship support for Robeson County residents — connecting local business formation to the BRIDGE OS™ platform and regional employer networks." },
  { num: "04", title: "Education & Credentialing", body: "Alternative credential pathways for rural youth and adults — aligned to real employer demand in the Robeson County and southeastern NC labor market." },
  { num: "05", title: "Cultural Knowledge Systems", body: "Integrating Lumbee oral history, traditional knowledge, and community wisdom into workforce and leadership development programming." },
  { num: "06", title: "Community Health & Stability", body: "Behavioral health and stability support tied to workforce participation — addressing the upstream factors that determine whether re-entry and workforce programs succeed." },
];

export default function FuseNetwork() {
  return (
    <>
      <style>{styles}</style>
      <nav className="nav">
        <a href="/" className="nav-logo">FUSE <span>Network</span></a>
        <a href="/bridge-os" className="nav-back">← BRIDGE OS™</a>
        <a href="/contact" className="nav-cta">Partner With FUSE</a>
      </nav>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="badge-row">
              <span className="badge badge-fuse">FUSE Network</span>
              <span className="badge badge-lumbee">Lumbee Tribe · Robeson County, NC</span>
            </div>
            <h1 className="hero-headline">
              Workforce.<br /><em>Sovereignty.</em><br />Robeson County.
            </h1>
            <p className="hero-sub">The FUSE Network is a government-to-government workforce and economic sovereignty platform for Robeson County — built with the Lumbee Tribe and anchored in M2M's BRIDGE OS™ infrastructure.</p>
            <div className="cta-row">
              <a href="/contact" className="btn-fuse">Partner With FUSE</a>
              <a href="/bridge-os" className="btn-outline">BRIDGE OS™ Platform</a>
            </div>
          </div>
          <div className="partnership-card">
            <p className="card-label">G2G Partnership Model</p>
            <div className="card-title">Lumbee Tribe<br />of North Carolina</div>
            <p className="card-body">A government-to-government workforce partnership connecting Lumbee tribal sovereignty with M2M's SDVOSB-certified platform and federal funding access.</p>
            <div className="card-divider" />
            <div className="card-detail">
              County: Robeson, NC<br />
              Tribal Partner: Lumbee Tribe of NC<br />
              Model: G2G Partnership Agreement<br />
              Platform: BRIDGE OS™ · Human OS™<br />
              Lead: M2M~Inc. · SDVOSB Certified
            </div>
          </div>
        </div>
      </section>
      <div className="divider" />
      <section className="section">
        <div className="section-inner">
          <p className="eyebrow">Program Architecture</p>
          <h2 className="s-headline">Six Pillars of Sovereign<br />Workforce Development</h2>
          <p className="s-sub">FUSE doesn't impose an outside model on Robeson County. It builds from community sovereignty outward — using M2M infrastructure to amplify what's already there.</p>
          <div className="pillars-grid">
            {PILLARS.map(p => (
              <div key={p.num} className="pillar">
                <p className="pillar-num">Pillar {p.num}</p>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="m2m-badge">
        <p>A Human OS™ Initiative</p>
        <a href="/">model2message.net</a>
        <p style={{ marginTop: "0.5rem", fontSize: "0.7rem" }}>M2M~Inc. · SDVOSB · VBE · Winston-Salem, NC</p>
      </div>
      <footer className="footer">
        <div className="footer-inner">
          <span>© 2026 M2M~Inc. FUSE Network is a BRIDGE OS™ community initiative in partnership with the Lumbee Tribe of North Carolina.</span>
          <a href="/" style={{ color: "var(--gold)", textDecoration: "none" }}>model2message.net</a>
        </div>
      </footer>
    </>
  );
}
