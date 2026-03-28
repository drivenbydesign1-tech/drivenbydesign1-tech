/* ─────────────────────────────────────────────
   M2M~Inc. — Speaking Page
   Built to Design MD v1.0
───────────────────────────────────────────── */

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{--navy:#0A1628;--navy-mid:#0D2045;--navy-light:#1A3560;--gold:#C9A84C;--gold-muted:#9E7E38;--white:#FFFFFF;--white-soft:#E8EDF5;--white-dim:#A0AEC0;--font-display:'Cormorant Garamond',Georgia,serif;--font-body:'DM Sans',system-ui,sans-serif;--font-mono:'JetBrains Mono',monospace;}
  html{scroll-behavior:smooth;}body{background:var(--navy);color:var(--white);font-family:var(--font-body);line-height:1.6;overflow-x:hidden;}
  .nav{position:fixed;top:0;left:0;right:0;z-index:100;height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(1.5rem,5vw,4rem);background:rgba(10,22,40,0.92);backdrop-filter:blur(12px);border-bottom:1px solid rgba(201,168,76,0.12);}
  .nav-logo{font-family:var(--font-display);font-size:1.5rem;font-weight:700;color:var(--white);text-decoration:none;}.nav-logo span{color:var(--gold);}
  .nav-links{display:flex;align-items:center;gap:2rem;list-style:none;}.nav-links a{font-size:0.875rem;font-weight:500;color:var(--white-soft);text-decoration:none;transition:color 0.2s;}.nav-links a:hover{color:var(--gold);}
  .nav-cta{background:var(--gold)!important;color:var(--navy)!important;padding:0.5rem 1.25rem;border-radius:9999px;font-weight:700!important;font-size:0.8rem!important;}
  .hero{min-height:70vh;display:flex;align-items:center;padding:120px clamp(1.5rem,5vw,4rem) 5rem;background:linear-gradient(135deg,#0A1628 0%,#0D2045 60%,#0A1628 100%);position:relative;overflow:hidden;}
  .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 55% 50% at 75% 50%,rgba(201,168,76,0.08),transparent);pointer-events:none;}
  .hero-inner{max-width:1280px;margin:0 auto;width:100%;display:grid;grid-template-columns:1.2fr 0.8fr;gap:5rem;align-items:center;}
  .eyebrow-line{font-family:var(--font-mono);font-size:0.68rem;letter-spacing:0.18em;color:var(--gold);text-transform:uppercase;margin-bottom:1rem;display:flex;align-items:center;gap:0.75rem;}
  .eyebrow-line::before{content:'';display:block;width:32px;height:1.5px;background:var(--gold);}
  .hero-headline{font-family:var(--font-display);font-size:clamp(2.75rem,5vw,4.75rem);font-weight:900;line-height:1.05;letter-spacing:-0.02em;color:var(--white);margin-bottom:1.5rem;}
  .hero-headline em{color:var(--gold);font-style:normal;}
  .hero-sub{font-size:1.05rem;color:var(--white-soft);line-height:1.75;max-width:520px;margin-bottom:2.5rem;}
  .btn-gold{background:var(--gold);color:var(--navy);font-size:0.875rem;font-weight:700;padding:0.875rem 2rem;border-radius:9999px;border:none;cursor:pointer;letter-spacing:0.03em;transition:filter 0.2s,transform 0.2s;text-decoration:none;display:inline-block;}
  .btn-gold:hover{filter:brightness(1.1);transform:scale(1.02);}
  .btn-outline{background:transparent;color:var(--gold);font-size:0.875rem;font-weight:600;padding:0.875rem 2rem;border-radius:9999px;border:1.5px solid var(--gold);cursor:pointer;letter-spacing:0.03em;text-decoration:none;display:inline-block;transition:background 0.2s;}
  .btn-outline:hover{background:rgba(201,168,76,0.08);}
  .cta-row{display:flex;gap:1rem;flex-wrap:wrap;}
  .venue-tags{display:flex;flex-direction:column;gap:0.625rem;}
  .venue-tag{display:flex;align-items:center;gap:0.75rem;padding:0.75rem 1rem;background:rgba(201,168,76,0.06);border:1px solid rgba(201,168,76,0.15);border-radius:8px;}
  .venue-icon{font-size:1rem;width:32px;text-align:center;}
  .venue-name{font-size:0.875rem;font-weight:500;color:var(--white);}
  .venue-sub{font-size:0.75rem;color:var(--white-dim);}
  .section{padding:6rem clamp(1.5rem,5vw,4rem);}.section-inner{max-width:1280px;margin:0 auto;}
  .eyebrow{font-family:var(--font-mono);font-size:0.68rem;letter-spacing:0.18em;color:var(--gold);text-transform:uppercase;margin-bottom:0.875rem;display:flex;align-items:center;gap:0.75rem;}
  .eyebrow::before{content:'';display:block;width:3px;height:36px;background:var(--gold);border-radius:2px;}
  .s-headline{font-family:var(--font-display);font-size:clamp(1.75rem,3vw,2.75rem);font-weight:700;color:var(--white);line-height:1.15;margin-bottom:1rem;letter-spacing:-0.01em;}
  .s-sub{font-size:1rem;color:var(--white-soft);max-width:560px;line-height:1.7;margin-bottom:3rem;}
  .divider{width:100%;height:1px;background:linear-gradient(to right,transparent,rgba(201,168,76,0.2),transparent);}
  .topics-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;}
  .topic-card{background:linear-gradient(145deg,#0D2045,#1A3560);border:1px solid rgba(201,168,76,0.12);border-radius:14px;padding:2rem;border-left:3px solid var(--gold);transition:transform 0.3s,box-shadow 0.3s;}
  .topic-card:hover{transform:translateY(-4px);box-shadow:0 8px 32px rgba(0,0,0,0.3),0 0 32px rgba(201,168,76,0.08);}
  .topic-num{font-family:var(--font-mono);font-size:0.65rem;letter-spacing:0.12em;color:var(--gold-muted);text-transform:uppercase;margin-bottom:0.625rem;}
  .topic-title{font-family:var(--font-display);font-size:1.2rem;font-weight:700;color:var(--white);margin-bottom:0.5rem;}
  .topic-sub{font-family:var(--font-mono);font-size:0.62rem;letter-spacing:0.08em;color:var(--gold);text-transform:uppercase;margin-bottom:0.75rem;}
  .topic-body{font-size:0.85rem;color:var(--white-soft);line-height:1.65;}
  .formats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;}
  .format-card{background:rgba(201,168,76,0.06);border:1px solid rgba(201,168,76,0.15);border-radius:12px;padding:1.5rem;text-align:center;}
  .format-icon{font-size:1.5rem;margin-bottom:0.75rem;}
  .format-name{font-size:0.875rem;font-weight:600;color:var(--white);margin-bottom:0.25rem;}
  .format-desc{font-size:0.75rem;color:var(--white-dim);line-height:1.5;}
  .sig-talk{background:linear-gradient(145deg,#0D2045,#1A3560);border:1px solid rgba(201,168,76,0.25);border-radius:16px;padding:3rem;position:relative;overflow:hidden;box-shadow:0 0 48px rgba(201,168,76,0.07);}
  .sig-talk::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--gold);}
  .sig-badge{display:inline-block;font-family:var(--font-mono);font-size:0.62rem;letter-spacing:0.12em;color:var(--gold);background:rgba(201,168,76,0.1);border:1px solid rgba(201,168,76,0.3);padding:0.25rem 0.75rem;border-radius:9999px;margin-bottom:1rem;text-transform:uppercase;}
  .sig-title{font-family:var(--font-display);font-size:clamp(1.5rem,2.5vw,2.25rem);font-weight:700;color:var(--white);margin-bottom:0.75rem;line-height:1.2;}
  .sig-body{font-size:0.95rem;color:var(--white-soft);line-height:1.7;max-width:680px;margin-bottom:1.5rem;}
  .sig-anchors{display:flex;gap:0.625rem;flex-wrap:wrap;}
  .sig-anchor{font-family:var(--font-mono);font-size:0.62rem;letter-spacing:0.08em;padding:0.25rem 0.625rem;border-radius:9999px;background:rgba(201,168,76,0.08);border:1px solid rgba(201,168,76,0.2);color:var(--gold-muted);text-transform:uppercase;}
  .inquiry-grid{display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:start;}
  .inquiry-body{font-size:1rem;color:var(--white-soft);line-height:1.8;}
  .inquiry-body p+p{margin-top:1rem;}
  .inquiry-list{list-style:none;display:flex;flex-direction:column;gap:0.5rem;margin:1.5rem 0;}
  .inquiry-list li{display:flex;align-items:flex-start;gap:0.625rem;font-size:0.875rem;color:var(--white-soft);}
  .inquiry-list li::before{content:'✦';color:var(--gold);font-size:0.65rem;margin-top:3px;flex-shrink:0;}
  .contact-card{background:linear-gradient(145deg,#0D2045,#1A3560);border:1px solid rgba(201,168,76,0.2);border-radius:14px;padding:2rem;display:flex;flex-direction:column;gap:1rem;}
  .contact-field{display:flex;flex-direction:column;gap:0.25rem;}
  .contact-label{font-family:var(--font-mono);font-size:0.62rem;letter-spacing:0.12em;color:var(--gold-muted);text-transform:uppercase;}
  .contact-value{font-size:0.95rem;color:var(--white);font-weight:500;}
  .contact-value a{color:var(--gold);text-decoration:none;}.contact-value a:hover{text-decoration:underline;}
  .contact-divider{height:1px;background:rgba(201,168,76,0.1);}
  .footer{background:#060F1E;padding:2.5rem clamp(1.5rem,5vw,4rem);border-top:1px solid rgba(201,168,76,0.1);}
  .footer-inner{max-width:1280px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;}
  .footer-logo{font-family:var(--font-display);font-size:1.1rem;font-weight:700;color:var(--white);}.footer-logo span{color:var(--gold);}
  .footer-trust{display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;font-family:var(--font-mono);font-size:0.6rem;letter-spacing:0.12em;color:var(--gold-muted);text-transform:uppercase;}
  .footer-copy{max-width:1280px;margin:1.5rem auto 0;padding-top:1.25rem;border-top:1px solid rgba(255,255,255,0.05);font-size:0.72rem;color:var(--white-dim);display:flex;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;}
  @keyframes fadeInUp{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}
  .anim{animation:fadeInUp 0.6s ease forwards;}.d1{animation-delay:0.1s;opacity:0;}.d2{animation-delay:0.25s;opacity:0;}.d3{animation-delay:0.4s;opacity:0;}
  @media(max-width:900px){.hero-inner,.inquiry-grid{grid-template-columns:1fr;}.topics-grid{grid-template-columns:1fr;}.formats-grid{grid-template-columns:1fr 1fr;}.nav-links li:not(:last-child){display:none;}}
`;

const TOPICS = [
  { num: "01", title: "When the Ground Moves", sub: "Workforce · Transition · Faith Communities", body: "Pivoting with purpose in an age that won't stand still. The signature keynote — delivered at Dellabrook Church Winston-Salem. Anchored in Isaiah 43:19 and Proverbs 20:29. Available for corporate and faith venues." },
  { num: "02", title: "The Proficiency Prison", sub: "Leadership · Executive · CHRO", body: "How expertise becomes a cage — and how high-performers break out without losing what made them great. Built on M2M Composure Architecture™. Ideal for L&D, talent development, and executive retreats." },
  { num: "03", title: "Human OS™ — Your People Are the Platform", sub: "Enterprise · Government · HR Leaders", body: "A data-anchored workforce intelligence keynote for organizations navigating AI disruption. Introduces the Human OS™ framework and the behavioral layer most reskilling programs miss." },
  { num: "04", title: "The Sovereign Architect", sub: "Veterans · Community · Commencement", body: "Identity, authority, and the discipline of building something that lasts. For veteran-serving organizations, community events, and audiences in the middle of a defining transition." },
  { num: "05", title: "What Would Change?", sub: "Faith · Community · Transformation", body: "The 30-day CFM challenge as a live keynote experience. For churches, nonprofits, and community organizations ready to move from conviction to collective action." },
  { num: "06", title: "Custom Keynote", sub: "Tailored · Any Audience · Any Venue", body: "Dr. Smith works with event coordinators to build a keynote specific to your audience, theme, and desired outcome. Corporate, government, academic, and faith formats all available." },
];

const FORMATS = [
  { icon: "🎤", name: "Keynote", desc: "45–90 min. Full audience. Opening or closing slot." },
  { icon: "◈", name: "Workshop", desc: "Half or full day. Small group. Applied frameworks." },
  { icon: "⬡", name: "Panel / Moderation", desc: "Workforce, DEI, veteran, or leadership panels." },
  { icon: "✦", name: "Corporate Training", desc: "Multi-session. BRIDGE OS™ or Human OS™ delivery." },
];

export default function Speaking() {
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
          <li><a href="/contact" className="nav-cta">Book Kev</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-inner">
          <div>
            <p className="eyebrow-line anim d1">Speaking & Keynotes</p>
            <h1 className="hero-headline anim d2">Words That<br /><em>Move People</em><br />to Move.</h1>
            <p className="hero-sub anim d3">Dr. Kevin A. Smith speaks at corporate venues, faith communities, veteran-serving organizations, and executive events. Every engagement is built on the same principle — the audience leaves with a system, not just a story.</p>
            <div className="cta-row anim d3">
              <a href="/contact" className="btn-gold">Book a Speaking Engagement</a>
              <a href="#topics" className="btn-outline">View Topics</a>
            </div>
          </div>
          <div className="venue-tags anim d2">
            {[
              { icon: "🏢", name: "Corporate & Executive", sub: "L&D, CHRO, leadership summits" },
              { icon: "⛪", name: "Faith Communities", sub: "Church, ministry, spiritual growth" },
              { icon: "⚓", name: "Veteran Organizations", sub: "VSOs, military transition programs" },
              { icon: "🏛️", name: "Government & Nonprofit", sub: "Workforce, community, public sector" },
              { icon: "🎓", name: "Academic & Commencement", sub: "University, professional programs" },
            ].map((v) => (
              <div key={v.name} className="venue-tag">
                <div className="venue-icon">{v.icon}</div>
                <div><div className="venue-name">{v.name}</div><div className="venue-sub">{v.sub}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SIGNATURE TALK */}
      <section className="section">
        <div className="section-inner">
          <p className="eyebrow">Signature Keynote</p>
          <div className="sig-talk">
            <div className="sig-badge">Signature Talk · Corporate + Faith Editions</div>
            <h2 className="sig-title">When the Ground Moves:<br />Pivoting With Purpose in an Age That Won't Stand Still</h2>
            <p className="sig-body">Delivered at Dellabrook Church in Winston-Salem, NC — now available in both corporate and faith community editions. This keynote meets audiences where disruption lives: in the body, in the schedule, in the identity. It moves from world context to personal testimony to a concrete pivot framework that audiences can apply within 24 hours of leaving the room.</p>
            <div className="sig-anchors">
              {["Isaiah 43:19","Proverbs 20:29","PIVOT OS™ Framework","M2M Composure Architecture™","Generational Bridge","The Swivel™"].map((a) => (
                <span key={a} className="sig-anchor">{a}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* TOPICS */}
      <section className="section" style={{ background: "#060F1E" }} id="topics">
        <div className="section-inner">
          <p className="eyebrow">Speaking Topics</p>
          <h2 className="s-headline">Six Keynotes.<br />Every Audience.</h2>
          <p className="s-sub">Each talk is built on M2M proprietary IP and tailored for the specific audience — corporate, faith, veteran, or community.</p>
          <div className="topics-grid">
            {TOPICS.map((t) => (
              <div key={t.num} className="topic-card">
                <p className="topic-num">Topic {t.num}</p>
                <h3 className="topic-title">{t.title}</h3>
                <p className="topic-sub">{t.sub}</p>
                <p className="topic-body">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FORMATS */}
      <section className="section">
        <div className="section-inner">
          <p className="eyebrow">Engagement Formats</p>
          <h2 className="s-headline" style={{ marginBottom: "2.5rem" }}>Four Ways to Bring<br />Dr. Smith to Your Event</h2>
          <div className="formats-grid">
            {FORMATS.map((f) => (
              <div key={f.name} className="format-card">
                <div className="format-icon">{f.icon}</div>
                <div className="format-name">{f.name}</div>
                <div className="format-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* INQUIRY */}
      <section className="section" style={{ background: "#060F1E" }}>
        <div className="section-inner">
          <div className="inquiry-grid">
            <div>
              <p className="eyebrow">Book a Speaking Engagement</p>
              <h2 className="s-headline">Let's Build<br />the Right Talk.</h2>
              <div className="inquiry-body">
                <p>Every engagement begins with a conversation about your audience, your moment, and the outcome you need the room to leave with.</p>
                <ul className="inquiry-list">
                  <li>Event date, venue, and expected audience size</li>
                  <li>Primary theme or challenge your audience is navigating</li>
                  <li>Corporate, faith, veteran, academic, or government context</li>
                  <li>Whether you need keynote, workshop, or panel format</li>
                  <li>Any existing speaker requirements or AV specifications</li>
                </ul>
                <p>Dr. Smith is based in Winston-Salem, NC and available for regional and national engagements. Virtual delivery available for select formats.</p>
              </div>
            </div>
            <div className="contact-card">
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.12em", color: "var(--gold)", textTransform: "uppercase" }}>Speaker Inquiry</p>
              <div className="contact-field">
                <div className="contact-label">Primary Contact</div>
                <div className="contact-value">Dr. Kevin A. Smith</div>
              </div>
              <div className="contact-divider" />
              <div className="contact-field">
                <div className="contact-label">Email</div>
                <div className="contact-value"><a href="mailto:info@model2message.net">info@model2message.net</a></div>
              </div>
              <div className="contact-field">
                <div className="contact-label">Phone</div>
                <div className="contact-value"><a href="tel:9804749377">980.474.9377</a></div>
              </div>
              <div className="contact-divider" />
              <div className="contact-field">
                <div className="contact-label">Based In</div>
                <div className="contact-value">Winston-Salem, NC · Available Nationally</div>
              </div>
              <div className="contact-field">
                <div className="contact-label">Certifications</div>
                <div className="contact-value" style={{ fontSize: "0.8rem", color: "var(--white-dim)" }}>SDVOSB · VBE · SAFe 6 · Hon. D.H.L.</div>
              </div>
              <a href="/contact" className="btn-gold" style={{ textAlign: "center", marginTop: "0.5rem" }}>Submit Speaking Inquiry</a>
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
          <span>© 2026 M2M~Inc. All rights reserved. Human OS™ · PIVOT OS™ · BRIDGE OS™ are pending trademarks.</span>
          <a href="/" style={{ color: "var(--gold)", textDecoration: "none" }}>model2message.net</a>
        </div>
      </footer>
    </>
  );
}
