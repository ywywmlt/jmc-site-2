/* JMC — Trade page (b2b.html)
   Wholesale & trade partners. Editorial brochure feel.
*/

const { useState } = React;

const SEGMENTS = [
  { id: "hospitality", icon: "■", title: "Hospitality",   desc: "Hotels, ryokan, and restaurants commissioning bespoke tableware, amenity programs, and guest gifting.", price: "From ¥1.2M / project" },
  { id: "retail",      icon: "▣", title: "Retail",        desc: "Concept stores, museum shops, and design retailers carrying JMC's seasonal edits and exclusive capsules.",        price: "MOQ ¥250,000" },
  { id: "gifting",     icon: "◆", title: "Corporate Gifting", desc: "Made-to-order gifting programs for milestone moments, executive partnerships, and client appreciation.",  price: "From 50 units" },
  { id: "interior",    icon: "▤", title: "Interior & A&D",   desc: "Architects and designers specifying handcraft for residential, commercial, and yacht & aviation projects.", price: "Spec service incl." },
];

const TERMS = [
  { num: "01", title: "Wholesale margins", desc: "Tiered partner pricing from MOQ ¥250,000. Volume tiers unlock past ¥1m / season, with exclusive geography for flagship accounts." },
  { num: "02", title: "Made-to-order",     desc: "Custom firings, embroidery, lacquer signatures, and bespoke glazes — produced direct with the master atelier. 8 to 14 week lead times." },
  { num: "03", title: "Dedicated logistics", desc: "DHL Express to 80+ countries. Customs clearance, certificates of authenticity, and hand-carry service handled by our Tokyo atelier." },
  { num: "04", title: "Editorial assets",   desc: "Maker bios, hi-res photography, video studio visits, and product copy provided to partners under a co-branded license." },
];

const CLIENTS = [
  "Aman", "Six Senses", "MoMA Design Store", "Hermès Maisons", "The Conran Shop",
  "Heath Ceramics", "Ace Hotel", "Park Hyatt Tokyo", "Tatler", "Mr Porter",
  "Soho House", "Goop", "Bergdorf Goodman", "Fortnum & Mason",
];

function TradeBanner() {
  return (
    <section className="trade-banner">
      <div className="trade-banner-grid">
        <div className="trade-banner-text">
          <div className="trade-banner-tape">
            <span>TRADE PROGRAM</span>
            <span>·</span>
            <span>SPRING 2026</span>
            <span>·</span>
            <span>EST. 2025</span>
          </div>
          <div className="eyebrow">For trade partners</div>
          <h1 className="trade-banner-h1">A house program<br/>for hospitality, retail<br/><em>&amp; design.</em></h1>
          <p className="trade-banner-sub">JMC supplies design-led hotels, restaurants, and retailers worldwide with the work of Japan's master makers — direct from the atelier, with dedicated logistics, made-to-order capacity, and editorial support.</p>
          <div className="trade-banner-cta">
            <a href="#apply" className="btn dark">Become a partner</a>
            <a href="#deck" className="link-underline">Download trade deck (PDF)</a>
          </div>
        </div>
        <div className="trade-banner-card">
          <div className="trade-banner-card-stamp">朱 · TRADE</div>
          <div className="trade-banner-card-rows">
            <div><span>MOQ</span><span>¥250,000</span></div>
            <div><span>Lead time</span><span>4 – 14 wks</span></div>
            <div><span>Margins</span><span>40 – 55%</span></div>
            <div><span>Geo</span><span>80+ countries</span></div>
            <div><span>Contract</span><span>Annual / Capsule</span></div>
            <div><span>Currency</span><span>JPY · USD · EUR · GBP</span></div>
          </div>
          <div className="trade-banner-card-foot">
            <div className="trade-banner-card-mark" />
            <div>
              <div className="trade-banner-card-foot-name">JMC Trade</div>
              <div className="trade-banner-card-foot-meta">2-12-3 Aoyama, Tokyo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TradeIntro() {
  return (
    <section className="trade-intro">
      <div className="trade-intro-inner">
        <div className="trade-intro-num">01 — Programme</div>
        <h2 className="trade-intro-h2">Direct access to Japan's master ateliers, under one trade contract.</h2>
        <p className="trade-intro-body">JMC's trade programme brings the work of sixty-eight workshops — across ceramic, lacquer, blade, textile, wood, paper, tea, glass, metal, and garment — to partners who care about provenance and longevity. We handle the relationships with the makers, the logistics, the certificates, and the editorial assets. You pour, plate, sell, or gift.</p>
      </div>
    </section>
  );
}

function TradeSegments() {
  return (
    <section className="trade-segments">
      <div className="trade-segments-head">
        <div className="trade-intro-num">02 — Who we work with</div>
        <h2 className="trade-segments-h2">Selected partners</h2>
      </div>
      <div className="trade-segments-grid">
        {SEGMENTS.map(s => (
          <article key={s.id} className="trade-seg">
            <div className="trade-seg-icon" aria-hidden="true">{s.icon}</div>
            <div className="trade-seg-title">{s.title}</div>
            <p className="trade-seg-desc">{s.desc}</p>
            <div className="trade-seg-price">{s.price}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TradeClients() {
  // duplicate for marquee feel
  const list = [...CLIENTS, ...CLIENTS];
  return (
    <section className="trade-clients">
      <div className="trade-clients-head">
        <div className="eyebrow">Currently working with</div>
      </div>
      <div className="trade-clients-marquee">
        <div className="trade-clients-track">
          {list.map((c, i) => (
            <span key={i} className="trade-client">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function TradeTerms() {
  return (
    <section className="trade-terms">
      <div className="trade-terms-inner">
        <div className="trade-terms-head">
          <div className="trade-intro-num">03 — How it works</div>
          <h2 className="trade-segments-h2">Trade terms</h2>
        </div>
        <div className="trade-terms-grid">
          {TERMS.map(t => (
            <div key={t.num} className="trade-term">
              <div className="trade-term-num">{t.num}</div>
              <div className="trade-term-title">{t.title}</div>
              <p className="trade-term-desc">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TradeProcess() {
  const steps = [
    { n: "I.",   t: "Application",      d: "Submit your project, sector, and intended scale. We respond within two business days." },
    { n: "II.",  t: "Discovery call",   d: "30-minute brief with our trade team. We map your needs to the right makers and disciplines." },
    { n: "III.", t: "Sample programme", d: "Sample selection delivered within 14 days. Production begins on signed PO." },
    { n: "IV.",  t: "Production & ship", d: "Direct atelier production, certified, photographed, and shipped DDP via DHL Express." },
  ];
  return (
    <section className="trade-process">
      <div className="trade-process-inner">
        <div className="trade-intro-num">04 — Process</div>
        <h2 className="trade-segments-h2">From brief to bill of lading.</h2>
        <ol className="trade-process-list">
          {steps.map(s => (
            <li key={s.n} className="trade-process-step">
              <div className="trade-process-step-n">{s.n}</div>
              <div>
                <div className="trade-process-step-t">{s.t}</div>
                <p className="trade-process-step-d">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function TradeApply() {
  return (
    <section className="trade-apply" id="apply">
      <div className="trade-apply-inner">
        <div className="trade-apply-text">
          <div className="trade-intro-num" style={{color:"rgba(255,255,255,0.6)"}}>05 — Apply</div>
          <h2 className="trade-apply-h2">Become a partner.</h2>
          <p className="trade-apply-body">Tell us about your project. Our trade team responds within two business days.</p>

          <div className="trade-apply-meta">
            <div>
              <div className="eyebrow" style={{color:"rgba(255,255,255,0.6)"}}>Trade desk</div>
              <p>trade@jmc.jp<br/>+81 3 5410 0010</p>
            </div>
            <div>
              <div className="eyebrow" style={{color:"rgba(255,255,255,0.6)"}}>Atelier</div>
              <p>2-12-3 Aoyama, Minato-ku<br/>Tokyo 107-0061, Japan</p>
            </div>
            <div>
              <div className="eyebrow" style={{color:"rgba(255,255,255,0.6)"}}>Hours</div>
              <p>Monday – Friday<br/>10:00 – 18:00 JST</p>
            </div>
          </div>
        </div>

        <form className="trade-form" onSubmit={e => e.preventDefault()}>
          <div className="trade-form-row">
            <label>
              <span>Company</span>
              <input type="text" placeholder="Aman Tokyo" />
            </label>
            <label>
              <span>Sector</span>
              <select defaultValue="">
                <option value="" disabled>Select sector</option>
                <option>Hospitality</option>
                <option>Retail</option>
                <option>Corporate Gifting</option>
                <option>Interior & A&D</option>
                <option>Other</option>
              </select>
            </label>
          </div>
          <div className="trade-form-row">
            <label>
              <span>Contact name</span>
              <input type="text" placeholder="Ms. Aoki" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="aoki@aman.com" />
            </label>
          </div>
          <div className="trade-form-row">
            <label>
              <span>Country</span>
              <input type="text" placeholder="Japan" />
            </label>
            <label>
              <span>Estimated annual scale</span>
              <select defaultValue="">
                <option value="" disabled>Select</option>
                <option>Under ¥1m</option>
                <option>¥1m – ¥5m</option>
                <option>¥5m – ¥20m</option>
                <option>Over ¥20m</option>
              </select>
            </label>
          </div>
          <label className="full">
            <span>Tell us about your project</span>
            <textarea rows="5" placeholder="A short brief on your project, the disciplines that interest you, and your intended timing."></textarea>
          </label>

          <div className="trade-form-foot">
            <div className="trade-form-tos">By submitting, you accept our trade-program terms. We respond within two business days.</div>
            <button className="btn light">Submit application →</button>
          </div>
        </form>
      </div>
    </section>
  );
}

function App() {
  window.useJMCLocale?.();
  return (<>
    <window.JMCNotice />
    <window.JMCNav active="b2b.html" />

    <TradeBanner />
    <TradeIntro />
    <TradeSegments />
    <TradeClients />
    <TradeTerms />
    <TradeProcess />
    <TradeApply />

    <window.JMCPillars />
    <window.JMCFooter />
  </>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
