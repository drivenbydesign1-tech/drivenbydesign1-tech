import { useState } from "react";

/* ─────────────────────────────────────────────
   M2M~Inc. — Contact / Intake Page
   Built to Design MD v1.0
───────────────────────────────────────────── */

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0A1628;--navy-mid:#0D2045;--navy-light:#1A3560;--gold:#C9A84C;--gold-muted:#9E7E38;--pivot:#4A90D9;--bridge:#48BB78;--white:#FFFFFF;--white-soft:#E8EDF5;--white-dim:#A0AEC0;--font-display:'Cormorant Garamond',Georgia,serif;--font-body:'DM Sans',system-ui,sans-serif;--font-mono:'JetBrains Mono',monospace;}
  html{scroll-behavior:smooth;}body{background:var(--navy);color:var(--white);font-family:var(--font-body);line-height:1.6;overflow-x:hidden;}
  .nav{position:fixed;top:0;left:0;right:0;z-index:100;height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(1.5rem,5vw,4rem);background:rgba(10,22,40,0.92);backdrop-filter:blur(12px);border-bottom:1px solid rgba(201,168,76,0.12);}
  .nav-logo{font-family:var(--font-display);font-size:1.5rem;font-weight:700;color:var(--white);text-decoration:none;}.nav-logo span{color:var(--gold);}
  .nav-links{display:flex;align-items:center;gap:2rem;list-style:none;}.nav-links a{font-size:0.875rem;font-weight:500;color:var(--white-soft);text-decoration:none;transition:color 0.2s;}.nav-links a:hover{color:var(--gold);}
  .nav-cta{background:var(--gold)!important;color:var(--navy)!important;padding:0.5rem 1.25rem;border-radius:9999px;font-weight:700!important;font-size:0.8rem!important;}

  .hero{padding:140px clamp(1.5rem,5vw,4rem) 4rem;background:linear-gradient(135deg,#0A1628 0%,#0D2045 60%,#0A1628 100%);text-align:center;position:relative;overflow:hidden;}
  .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 40% at 50% 60%,rgba(201,168,76,0.06),transparent);pointer-events:none;}
  .hero-inner{max-width:720px;margin:0 auto;position:relative;}
  .eyebrow-line{font-family:var(--font-mono);font-size:0.68rem;letter-spacing:0.18em;color:var(--gold);text-transform:uppercase;margin-bottom:1rem;display:flex;align-items:center;justify-content:center;gap:0.75rem;}
  .eyebrow-line::before,.eyebrow-line::after{content:'';display:block;flex:1;max-width:48px;height:1.5px;background:var(--gold);}
  .hero-headline{font-family:var(--font-display);font-size:clamp(2.5rem,5vw,4.25rem);font-weight:900;line-height:1.05;letter-spacing:-0.02em;color:var(--white);margin-bottom:1.25rem;}
  .hero-headline span{color:var(--gold);}
  .hero-sub{font-size:1.05rem;color:var(--white-soft);line-height:1.75;margin-bottom:2rem;}

  .section{padding:5rem clamp(1.5rem,5vw,4rem);}.section-inner{max-width:1280px;margin:0 auto;}
  .divider{width:100%;height:1px;background:linear-gradient(to right,transparent,rgba(201,168,76,0.2),transparent);}

  /* LANE SELECTOR */
  .lane-selector{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;max-width:860px;margin:0 auto 3rem;}
  .lane-btn{background:rgba(255,255,255,0.03);border:1.5px solid rgba(255,255,255,0.08);border-radius:12px;padding:1.25rem;cursor:pointer;transition:all 0.2s;text-align:left;}
  .lane-btn.active{border-color:var(--active-color,var(--gold));background:rgba(var(--active-rgb,201,168,76),0.08);box-shadow:0 0 24px rgba(var(--active-rgb,201,168,76),0.08);}
  .lane-btn-dot{width:8px;height:8px;border-radius:50%;margin-bottom:0.75rem;}
  .lane-btn-name{font-size:0.875rem;font-weight:600;color:var(--white);margin-bottom:0.25rem;}
  .lane-btn-sub{font-size:0.75rem;color:var(--white-dim);}

  /* FORM */
  .form-wrap{max-width:680px;margin:0 auto;}
  .form-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;}
  .form-full{grid-column:1/-1;}
  .form-group{display:flex;flex-direction:column;gap:0.375rem;}
  .form-label{font-family:var(--font-mono);font-size:0.62rem;letter-spacing:0.12em;color:var(--gold-muted);text-transform:uppercase;}
  .form-input,.form-select,.form-textarea{background:rgba(255,255,255,0.04);border:1.5px solid rgba(255,255,255,0.1);border-radius:8px;padding:0.75rem 1rem;font-family:var(--font-body);font-size:0.9rem;color:var(--white);outline:none;transition:border-color 0.2s,box-shadow 0.2s;width:100%;}
  .form-input:focus,.form-select:focus,.form-textarea:focus{border-color:rgba(201,168,76,0.5);box-shadow:0 0 0 3px rgba(201,168,76,0.07);}
  .form-input::placeholder,.form-textarea::placeholder{color:var(--white-dim);}
  .form-select{appearance:none;cursor:pointer;}
  .form-select option{background:#0D2045;color:var(--white);}
  .form-textarea{resize:vertical;min-height:120px;}
  .form-submit{width:100%;background:var(--gold);color:var(--navy);font-size:0.95rem;font-weight:700;padding:1rem 2rem;border-radius:9999px;border:none;cursor:pointer;letter-spacing:0.03em;transition:filter 0.2s,transform 0.2s;margin-top:0.5rem;}
  .form-submit:hover{filter:brightness(1.1);transform:scale(1.01);}
  .form-note{font-size:0.75rem;color:var(--white-dim);text-align:center;margin-top:0.75rem;}

  /* SUCCESS */
  .success-state{text-align:center;padding:4rem 2rem;}
  .success-icon{font-size:3rem;margin-bottom:1rem;}
  .success-title{font-family:var(--font-display);font-size:2rem;font-weight:700;color:var(--white);margin-bottom:0.75rem;}
  .success-body{font-size:1rem;color:var(--white-soft);line-height:1.7;max-width:480px;margin:0 auto;}

  /* DIRECT CONTACT */
  .direct-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;margin-top:3rem;}
  .direct-card{background:rgba(201,168,76,0.05);border:1px solid rgba(201,168,76,0.15);border-radius:12px;padding:1.5rem;text-align:center;}
  .direct-icon{font-size:1.5rem;margin-bottom:0.625rem;}
  .direct-label{font-family:var(--font-mono);font-size:0.62rem;letter-spacing:0.12em;color:var(--gold-muted);text-transform:uppercase;margin-bottom:0.375rem;}
  .direct-value{font-size:0.9rem;color:var(--white);font-weight:500;}
  .direct-value a{color:var(--gold);text-decoration:none;}.direct-value a:hover{text-decoration:underline;}

  .footer{background:#060F1E;padding:2.5rem clamp(1.5rem,5vw,4rem);border-top:1px solid rgba(201,168,76,0.1);}
  .footer-inner{max-width:1280px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;}
  .footer-logo{font-family:var(--font-display);font-size:1.1rem;font-weight:700;color:var(--white);}.footer-logo span{color:var(--gold);}
  .footer-trust{display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;font-family:var(--font-mono);font-size:0.6rem;letter-spacing:0.12em;color:var(--gold-muted);text-transform:uppercase;}
  .footer-copy{max-width:1280px;margin:1.5rem auto 0;padding-top:1.25rem;border-top:1px solid rgba(255,255,255,0.05);font-size:0.72rem;color:var(--white-dim);display:flex;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;}
  @media(max-width:700px){.form-grid{grid-template-columns:1fr;}.lane-selector{grid-template-columns:1fr;}.direct-grid{grid-template-columns:1fr;}.nav-links li:not(:last-child){display:none;}}
`;

const LANES = [
  { id: "pivot", label: "PIVOT OS™", sub: "Individual reinvention", color: "#4A90D9", rgb: "74,144,217" },
  { id: "bridge", label: "BRIDGE OS™", sub: "Employer / workforce", color: "#48BB78", rgb: "72,187,120" },
  { id: "human", label: "Human OS™", sub: "Enterprise / government", color: "#C9A84C", rgb: "201,168,76" },
];

export default function Contact() {
  const [lane, setLane] = useState("human");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", org: "", email: "", phone: "", type: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email) return;
    const subject = `M2M~Inc. Inquiry — ${LANES.find(l => l.id === lane)?.label} — ${form.name}`;
    const body = `Name: ${form.name}\nOrganization: ${form.org}\nEmail: ${form.email}\nPhone: ${form.phone}\nInquiry Type: ${form.type}\nLane: ${lane}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:info@model2message.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const activeLane = LANES.find(l => l.id === lane);

  return (
    <>
      <style>{styles}</style>
      <nav className="nav">
        <a href="/" className="nav-logo">M2M<span>~</span>Inc.</a>
        <ul className="nav-links">
          <li><a href="/about">About</a></li>
          <li><a href="/pivot-os">PIVOT OS™</a></li>
          <li><a href="/bridge-os">BRIDGE OS™</a></li>
          <li><a href="/human-os">Human OS™</a></li>
          <li><a href="/speaking">Speaking</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-inner">
          <p className="eyebrow-line">Start Here</p>
          <h1 className="hero-headline">The Conversation<br /><span>Starts Here.</span></h1>
          <p className="hero-sub">Select the platform lane that fits where you are. Every intake routes to Dr. Smith directly — no intake coordinators, no holding queues.</p>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="section-inner">
          {/* Lane Selector */}
          <div className="lane-selector">
            {LANES.map((l) => (
              <div
                key={l.id}
                className={`lane-btn${lane === l.id ? " active" : ""}`}
                style={lane === l.id ? { "--active-color": l.color, "--active-rgb": l.rgb } : {}}
                onClick={() => setLane(l.id)}
              >
                <div className="lane-btn-dot" style={{ background: l.color }} />
                <div className="lane-btn-name">{l.label}</div>
                <div className="lane-btn-sub">{l.sub}</div>
              </div>
            ))}
          </div>

          {/* Form */}
          {!submitted ? (
            <div className="form-wrap">
              <div style={{ background: "linear-gradient(145deg,#0D2045,#1A3560)", border: `1px solid ${activeLane?.color}30`, borderRadius: 16, padding: "2.5rem", boxShadow: `0 0 40px ${activeLane?.color}0D` }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.15em", color: activeLane?.color, textTransform: "uppercase", marginBottom: "1.5rem" }}>
                  {activeLane?.label} Intake · model2message.net
                </p>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input className="form-input" name="name" value={form.name} onChange={handleChange} placeholder="Dr. Jane Smith" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Organization</label>
                    <input className="form-input" name="org" value={form.org} onChange={handleChange} placeholder="Company / Agency / Church" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input className="form-input" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@organization.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone (Optional)</label>
                    <input className="form-input" name="phone" value={form.phone} onChange={handleChange} placeholder="555.000.0000" />
                  </div>
                  <div className="form-group form-full">
                    <label className="form-label">Inquiry Type</label>
                    <select className="form-select" name="type" value={form.type} onChange={handleChange}>
                      <option value="">Select inquiry type...</option>
                      <option value="consultation">Individual Consultation</option>
                      <option value="workforce">Workforce Engagement</option>
                      <option value="enterprise">Enterprise / Government</option>
                      <option value="speaking">Speaking Engagement</option>
                      <option value="certification">Practitioner Certification</option>
                      <option value="partnership">Partnership / Licensing</option>
                      <option value="media">Media / Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group form-full">
                    <label className="form-label">Tell Us Where You Are</label>
                    <textarea className="form-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Describe your situation, challenge, or what you're looking to accomplish. The more specific, the better the first conversation." />
                  </div>
                </div>
                <button className="form-submit" onClick={handleSubmit} style={{ background: activeLane?.color }}>
                  Submit Intake — {activeLane?.label}
                </button>
                <p className="form-note">Responses within 24–48 business hours. Direct to Dr. Smith.</p>
              </div>
            </div>
          ) : (
            <div className="form-wrap">
              <div className="success-state">
                <div className="success-icon">✦</div>
                <h2 className="success-title">Intake Received.</h2>
                <p className="success-body">Your message has been routed to Dr. Smith. Expect a direct response within 24–48 business hours. In the meantime, explore the platform.</p>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
                  <a href="/" style={{ background: "var(--gold)", color: "var(--navy)", padding: "0.75rem 1.75rem", borderRadius: "9999px", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none" }}>Back to Home</a>
                </div>
              </div>
            </div>
          )}

          {/* Direct Contact */}
          <div className="direct-grid">
            <div className="direct-card">
              <div className="direct-icon">📧</div>
              <div className="direct-label">Email</div>
              <div className="direct-value"><a href="mailto:info@model2message.net">info@model2message.net</a></div>
            </div>
            <div className="direct-card">
              <div className="direct-icon">📞</div>
              <div className="direct-label">Phone</div>
              <div className="direct-value"><a href="tel:9804749377">980.474.9377</a></div>
            </div>
            <div className="direct-card">
              <div className="direct-icon">📍</div>
              <div className="direct-label">Location</div>
              <div className="direct-value">Winston-Salem, NC<br /><span style={{ fontSize: "0.8rem", color: "var(--white-dim)" }}>Available Nationally</span></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">M2M<span>~</span>Inc.</div>
          <div className="footer-trust">{["SDVOSB","·","VBE","·","SAFe 6","·","USPTO","·","Tuck"].map((t,i)=><span key={i}>{t}</span>)}</div>
        </div>
        <div className="footer-copy">
          <span>© 2026 M2M~Inc. PIVOT OS™ · BRIDGE OS™ · Human OS™ are pending trademarks.</span>
          <a href="/" style={{ color: "var(--gold)", textDecoration: "none" }}>model2message.net</a>
        </div>
      </footer>
    </>
  );
}
