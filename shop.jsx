/* JMC — Shop landing page (shop.html)
   Banner + all 10 disciplines as a 5×2 grid, each linking to its category page.
*/

const { useState, useEffect } = React;

function ShopHero() {
  const C = window.JMC_COPY;
  return (
    <section className="page-banner light">
      <div className="page-banner-img" />
      <div className="page-banner-inner">
        <div className="eyebrow" style={{display:"block", marginBottom:18}}>The Collection</div>
        <h1>{C.ui.shop}</h1>
        <p>{C.brand.description}</p>
      </div>
    </section>
  );
}

function CategoryGrid() {
  const C = window.JMC_COPY;
  // Asymmetric IG-style grid: a few tiles span 2 cols/rows for editorial rhythm.
  // Indices into C.categories that should be "feature" tiles.
  const featureIdx = new Set([0, 5]); // ceramics, paper feature
  const tallIdx    = new Set([2, 7]); // blades, metal go tall
  return (
    <section className="section ig-section">
      <div className="section-head">
        <div className="eyebrow">{C.ui.explore}</div>
        <div className="section-title">{C.ui.disciplines}</div>
        <div className="ig-section-meta">
          <span>朱 · 10 disciplines</span>
          <span className="ig-dot">·</span>
          <span>Spring 2026</span>
        </div>
      </div>
      <div className="section-inner ig-section-inner">
        <div className="ig-grid">
          {C.categories.map((c, i) => {
            const klass = [
              "ig-tile",
              featureIdx.has(i) ? "ig-tile-feature" : "",
              tallIdx.has(i)    ? "ig-tile-tall"    : "",
            ].filter(Boolean).join(" ");
            return (
              <a
                key={c.id}
                href={`shop-category.html?c=${c.id}`}
                className={klass}
                style={{ "--accent": c.accent }}
              >
                <div className="ig-tile-img" aria-hidden="true">
                  <div className="ig-tile-img-bloom" />
                  <div className="ig-tile-img-grain" />
                </div>

                <div className="ig-tile-corner ig-tile-corner-tl">
                  <span className="ig-tile-num">朱 · {(i+1).toString().padStart(3, "0")}</span>
                </div>
                <div className="ig-tile-corner ig-tile-corner-tr">
                  <span className="ig-tile-count">{c.count}</span>
                  <span className="ig-tile-count-label">{C.ui.pieces}</span>
                </div>

                <div className="ig-tile-overlay">
                  <div className="ig-tile-jp">{c.labelJp}</div>
                  <div className="ig-tile-title">{c.label}</div>
                  <div className="ig-tile-cta">
                    <span>{C.ui.shop}</span>
                    <span className="ig-tile-arrow">{window.JMCIcon.arrow()}</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const C = window.JMC_COPY;
  const items = C.products.slice(0, 4);
  return (
    <section className="section section-narrow" style={{borderTop:"1px solid var(--rule)"}}>
      <div className="section-head">
        <div className="eyebrow">House Picks</div>
        <div className="section-title">{C.ui.trending}</div>
      </div>
      <div className="section-inner">
        <div className="grid-4">
          {items.map((p, i) => <window.JMCProductCard key={p.id} p={p} num={(i+1).toString().padStart(3,"0")} />)}
        </div>
      </div>
    </section>
  );
}

function App() {
  window.useJMCLocale?.();
  return (
    <>
      <window.JMCNotice />
      <window.JMCNav active="shop.html" />
      <ShopHero />
      <CategoryGrid />
      <FeaturedProducts />
      <window.JMCPillars />
      <window.JMCFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
