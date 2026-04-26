/* JMC — Home page (index.html)
   Video hero → Featured collection (image-text split) → Discover Collections (3-up large)
   → 2-up category showcase → Trending → Brand story → Magazine → Pillars → Footer
*/

const { useState, useEffect } = React;

// ─── Video hero ──────────────────────────────────────────────
function VideoHero() {
  const C = window.JMC_COPY;
  const ref = React.useRef(null);
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      setScrolled(Math.max(0, Math.min(1, y / (vh * 0.6))));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const tryPlay = () => { try { v.play().catch(()=>{}); } catch {} };
    tryPlay();
    document.addEventListener("click", tryPlay, { once: true });
    return () => document.removeEventListener("click", tryPlay);
  }, []);

  return (
    <section className="video-hero" data-screen-label="01 Video Hero">
      <video ref={ref} className="video-hero-bg" src="assets/jmc-hero.mp4"
             autoPlay muted loop playsInline preload="auto" aria-hidden="true" />
    </section>
  );
}

// ─── Featured collection (split: title left, large image right) ────────
function FeaturedSplit() {
  const C = window.JMC_COPY;
  const F = C.featured;
  return (
    <section className="featured-split">
      <div className="fs-left">
        <div>
          <div className="eyebrow">{F.eyebrow}</div>
          <h2 className="fs-title">{F.title}</h2>
          <p className="fs-desc">{F.desc}</p>
          <a href={F.ctaHref} className="link-underline">{F.cta}</a>
        </div>
      </div>
      <div className="fs-right">
        <div className="fs-image" />
      </div>
    </section>
  );
}

// ─── Discover Collections (3-up, like Strass NECKLACES/EARRINGS/BRACELETS) ───
function DiscoverCollections() {
  const C = window.JMC_COPY;
  const picks = ["ceramics", "blades", "textiles"];
  return (
    <section className="section section-narrow">
      <div className="section-head">
        <div className="eyebrow">{C.ui.explore}</div>
        <div className="section-title">{C.ui.disciplines}</div>
      </div>
      <div className="section-inner">
        <div className="collections-3">
          {picks.map(id => {
            const c = C.categories.find(x => x.id === id);
            return (
              <a key={id} href={`shop-category.html?c=${id}`} className="coll-tile" style={{ "--accent": c.accent }}>
                <div className="coll-img" />
                <div className="coll-overlay">
                  <div className="coll-title">{c.label.toUpperCase()}</div>
                  <span className="link-underline" style={{color:"#fff", borderColor:"rgba(255,255,255,0.7)"}}>{C.ui.discover}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Two-up category showcase ──────────────────────────────────────────
function TwoUpCategories() {
  const C = window.JMC_COPY;
  const a = C.categories.find(x => x.id === "lacquerware");
  const b = C.categories.find(x => x.id === "tea");
  return (
    <section className="two-up">
      {[a, b].map(c => (
        <a key={c.id} href={`shop-category.html?c=${c.id}`} className="two-up-tile" style={{ "--accent": c.accent }}>
          <div className="two-up-img" />
          <div className="two-up-overlay">
            <div className="two-up-title">{c.label.toUpperCase()}</div>
            <span className="link-underline" style={{color:"#fff", borderColor:"rgba(255,255,255,0.7)"}}>{C.ui.shop}</span>
          </div>
        </a>
      ))}
    </section>
  );
}

// ─── Trending (2-up product cards) ─────────────────────────────────────
function Trending() {
  const C = window.JMC_COPY;
  const items = C.trendingIds.map(id => window.JMC_GET_PRODUCT(id));
  return (
    <section className="section section-narrow">
      <div className="section-head">
        <div className="section-title">{C.ui.trending}</div>
      </div>
      <div className="section-inner">
        <div className="trending-grid">
          {items.map((p, i) => <window.JMCProductCard key={p.id} p={p} num={(i+1).toString().padStart(3,"0")} />)}
        </div>
      </div>
    </section>
  );
}

// ─── Brand story (image + floating card, like Strass workshop block) ───
function BrandStory() {
  const C = window.JMC_COPY;
  const S = C.story;
  return (
    <section className="brand-story">
      <div className="bs-bg" />
      <div className="bs-card">
        <div className="eyebrow">{S.eyebrow}</div>
        <h3 className="bs-title">{S.title}</h3>
        <p className="bs-body">{S.body}</p>
        <a href={S.ctaHref} className="link-underline">{S.cta}</a>
      </div>
    </section>
  );
}

// ─── Magazine / Journal (3-up posts, like Strass MAGAZINE) ─────────────
function Magazine() {
  const C = window.JMC_COPY;
  const items = C.journal.slice(0, 3);
  return (
    <section className="section section-narrow">
      <div className="section-head">
        <div className="section-title">{C.ui.magazine}</div>
      </div>
      <div className="section-inner">
        <div className="grid-3 mag-grid">
          {items.map((j, i) => (
            <a key={j.id} href={`journal.html#${j.id}`} className="mag-card">
              <div className="mag-img" data-kind={j.kind.toLowerCase()} />
              <div className="mag-meta">
                <span className="mag-kind">{j.kind.toUpperCase()}</span>
                <span className="mag-dot">·</span>
                <span className="mag-date">{j.date.toUpperCase()}</span>
              </div>
              <div className="mag-title">{j.title}</div>
              <div className="mag-maker">{j.maker}</div>
            </a>
          ))}
        </div>
        <div style={{textAlign:"center", marginTop:48}}>
          <a href="journal.html" className="link-underline">{C.ui.allArticles}</a>
        </div>
      </div>
    </section>
  );
}

// ─── App ───────────────────────────────────────────────────────────────
function App() {
  window.useJMCLocale?.();
  return (
    <>
      <window.JMCNav active="index.html" overVideoOnLoad={true} />
      <VideoHero />
      <FeaturedSplit />
      <DiscoverCollections />
      <TwoUpCategories />
      <Trending />
      <BrandStory />
      <Magazine />
      <window.JMCPillars />
      <window.JMCFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
