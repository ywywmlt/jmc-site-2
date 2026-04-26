/* JMC — Shared chrome (Nav, Footer, Pillars, Notice)
   Used by every page.
*/

const { useState, useEffect } = React;

// useLocale — subscribes a component to JMC locale changes so it
// re-renders when the user toggles EN ↔ JA.
function useLocale() {
  const [, force] = useState(0);
  useEffect(() => {
    const onChange = () => force(n => n + 1);
    window.addEventListener("jmc:locale", onChange);
    return () => window.removeEventListener("jmc:locale", onChange);
  }, []);
  return window.JMC_LOCALE;
}
window.useJMCLocale = useLocale;

// ─────────────── icons ───────────────────────────────────────
const Icon = {
  arrow: (cls = "") => (
    <svg className={cls} width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
      <path d="M0 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  chevron: (dir = "right") => (
    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden="true"
         style={{ transform: dir === "left" ? "rotate(180deg)" : "none" }}>
      <path d="M2 1l6 6-6 6" stroke="currentColor" strokeWidth="1.4" fill="none" />
    </svg>
  ),
  search: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <circle cx="7" cy="7" r="5" /><path d="M11 11l4 4" />
    </svg>
  ),
  cart: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M5 7h14l-1.5 11a2 2 0 0 1-2 1.7H8.5a2 2 0 0 1-2-1.7L5 7Z" />
      <path d="M9 7V5a3 3 0 0 1 6 0v2" />
    </svg>
  ),
  user: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </svg>
  ),
  shipping: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M4 22V10l12-5 12 5v12l-12 5-12-5z" /><path d="M4 10l12 5 12-5M16 15v12" />
    </svg>
  ),
  returns: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M6 16a10 10 0 1 0 3-7.1" /><path d="M3 5v6h6" />
    </svg>
  ),
  service: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M5 22V10a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H12l-7 5z" />
    </svg>
  ),
  authentic: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M16 3l11 5v9c0 7-5 11-11 12-6-1-11-5-11-12V8l11-5z" /><path d="M11 16l4 4 7-7" />
    </svg>
  ),
  facebook: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-2.2 0-4 1.8-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8c0-.6.4-1 1-1z"/></svg>),
  x: () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21l-6.51 7.43L22.5 22h-6.86l-4.6-6.05L5.5 22H2.74l7.13-8.13L2 2h7.04l4.16 5.5L18.244 2z"/></svg>),
  instagram: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></svg>),
  pinterest: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 0-2.9.2-.8 1.3-5.4 1.3-5.4s-.3-.7-.3-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.7 1.5 1.6 0 1-.6 2.5-.9 3.8-.3 1.1.6 2 1.7 2 2 0 3.6-2.1 3.6-5.2 0-2.7-2-4.6-4.7-4.6-3.2 0-5.1 2.4-5.1 4.9 0 1 .4 2 .8 2.6.1.1.1.2.1.3-.1.4-.3 1.1-.3 1.3-.1.2-.2.3-.4.2-1.4-.6-2.2-2.7-2.2-4.3 0-3.5 2.6-6.8 7.4-6.8 3.9 0 6.9 2.8 6.9 6.5 0 3.9-2.4 7-5.8 7-1.1 0-2.2-.6-2.6-1.3l-.7 2.7c-.3 1-1 2.3-1.4 3 1.1.3 2.2.5 3.4.5 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>),
  youtube: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7.5c-.2-1.4-1.3-2.5-2.7-2.7C17.5 4.5 12 4.5 12 4.5s-5.5 0-7.3.3C3.3 5 2.2 6.1 2 7.5 1.7 9.3 1.7 12 1.7 12s0 2.7.3 4.5c.2 1.4 1.3 2.5 2.7 2.7 1.8.3 7.3.3 7.3.3s5.5 0 7.3-.3c1.4-.2 2.5-1.3 2.7-2.7.3-1.8.3-4.5.3-4.5s0-2.7-.3-4.5zM10 15V9l5 3-5 3z"/></svg>),
};

// ─────────────── Notice bar ───────────────────────────────────
function Notice() {
  useLocale();
  const C = window.JMC_COPY;
  return (
    <div className="notice">
      <span className="nav-arrow left">{Icon.chevron("left")}</span>
      <span>{C.notice}</span>
      <span className="nav-arrow right">{Icon.chevron("right")}</span>
    </div>
  );
}

// ─────────────── Nav (centered logo, like Strass) ─────────────
function Nav({ active = "", overVideoOnLoad = false }) {
  const locale = useLocale();
  const C = window.JMC_COPY;
  const [overVideo, setOverVideo] = useState(overVideoOnLoad);

  useEffect(() => {
    if (!overVideoOnLoad) return;
    const onScroll = () => {
      setOverVideo(window.scrollY < window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [overVideoOnLoad]);

  return (
    <nav className={`nav ${overVideo ? "over-video" : ""}`}>
      <div className="nav-left">
        <button className="nav-burger" aria-label="Menu"><span/><span/><span/></button>
        {C.nav.map(n => (
          <a key={n.href} href={n.href}
             className={`nav-link hide-sm ${active === n.href ? "active" : ""}`}>
            {n.label}
          </a>
        ))}
      </div>
      <div className="nav-center">
        <a href="index.html" className="nav-mark" aria-label="JMC home">
          <img src="assets/jmc-mark.png" alt="" />
        </a>
      </div>
      <div className="nav-right">
        <button
          type="button"
          className="nav-lang hide-sm"
          aria-label={locale === "en" ? "Switch to Japanese" : "Switch to English"}
          onClick={() => window.JMC_SET_LOCALE(locale === "en" ? "ja" : "en")}>
          <span className={`nav-lang-opt ${locale === "en" ? "is-active" : ""}`}>EN</span>
          <span className={`nav-lang-opt ${locale === "ja" ? "is-active" : ""}`}>日本語</span>
        </button>
        <a href="#" className="nav-link hide-sm" aria-label="Account">{Icon.user()}</a>
        <a href="#" className="nav-link" aria-label="Search">{Icon.search()}</a>
        <a href="#" className="nav-link" aria-label="Cart" style={{display:"inline-flex", alignItems:"center", gap:6}}>
          {Icon.cart()}<span style={{letterSpacing:0}}>(0)</span>
        </a>
      </div>
    </nav>
  );
}

// ─────────────── Pillars (4-up service strip) ─────────────────
function Pillars() {
  useLocale();
  const C = window.JMC_COPY;
  return (
    <section className="pillars">
      <div className="pillars-grid">
        {C.pillars.map((p, i) => (
          <div key={i} className="pillar">
            <div className="pillar-icon">{Icon[p.icon] ? Icon[p.icon]() : null}</div>
            <div className="pillar-title">{p.title}</div>
            <div className="pillar-desc">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────── Footer ───────────────────────────────────────
function Footer() {
  useLocale();
  const C = window.JMC_COPY;
  const F = C.footer;
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-newsletter">
          <h4>{F.newsletter.title}</h4>
          <p>{F.newsletter.desc}</p>
          <input type="email" placeholder={F.newsletter.placeholder} />
          <button>{F.newsletter.cta}</button>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook">{Icon.facebook()}</a>
            <a href="#" aria-label="X">{Icon.x()}</a>
            <a href="#" aria-label="Instagram">{Icon.instagram()}</a>
            <a href="#" aria-label="Pinterest">{Icon.pinterest()}</a>
            <a href="#" aria-label="YouTube">{Icon.youtube()}</a>
          </div>
        </div>
        {F.columns.map(col => (
          <div key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
            </ul>
          </div>
        ))}
        <div>
          <h4>{F.about.title}</h4>
          <p>{F.about.body}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span style={{display:"inline-flex", alignItems:"center", gap:10}}>
          <span style={{display:"inline-block", width:14, height:14, borderRadius:"50%", background:"radial-gradient(circle, #fff 0 5px, var(--accent) 5px 7px, #fff 7px)"}} />
          {F.locale} <span style={{fontSize:8, opacity:0.7}}>▼</span>
        </span>
        <span>{F.copyright}</span>
        <span className="footer-payments">
          <span className="footer-pay">VISA</span>
          <span className="footer-pay">MC</span>
          <span className="footer-pay">AMEX</span>
          <span className="footer-pay">PAYPAL</span>
          <span className="footer-pay">JCB</span>
        </span>
      </div>
    </footer>
  );
}

// ─────────────── Product card ─────────────────────────────────
function ProductCard({ p, num }) {
  useLocale();
  const cat = window.JMC_GET_CATEGORY(p.cat);
  return (
    <a href={`product.html?id=${p.id}`} className="product-card">
      <div className="product-tile" style={{ "--swatch": p.swatch }}>
        <span className="product-tile-num">朱 · {num || p.id.replace("p", "")}</span>
        <span className="product-tile-cat">{cat?.label}</span>
        <span className="product-tile-mark" />
      </div>
      <div className="product-name">{p.name}</div>
      <div className="product-maker">{p.maker}</div>
      <div className="product-price">{window.JMC_PRICE(p.price)}</div>
    </a>
  );
}

// ─────────────── exports ──────────────────────────────────────
Object.assign(window, {
  JMCNav: Nav,
  JMCFooter: Footer,
  JMCNotice: Notice,
  JMCPillars: Pillars,
  JMCProductCard: ProductCard,
  JMCIcon: Icon,
});
