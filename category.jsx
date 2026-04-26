/* JMC — Category page (shop-category.html?c=ceramics)
   Banner with category info, sort/filter bar, product grid.
*/

const { useState, useEffect } = React;

function getCategoryFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("c") || "ceramics";
}

function CategoryBanner({ cat }) {
  const C = window.JMC_COPY;
  return (
    <section className="cat-banner" style={{ "--accent": cat.accent }}>
      <div className="cat-banner-img" />
      <div className="cat-banner-overlay" />
      <div className="cat-banner-inner">
        <div className="eyebrow" style={{display:"block", marginBottom:18, color:"rgba(255,255,255,0.9)", letterSpacing:"0.32em"}}>{cat.labelJp}</div>
        <h1 className="cat-banner-title">{cat.label}</h1>
        <p className="cat-banner-desc">{C.ui.aboutDesignBody1}</p>
      </div>
    </section>
  );
}

function CategoryToolbar({ count, sort, setSort }) {
  const C = window.JMC_COPY;
  return (
    <div className="cat-toolbar">
      <div className="cat-tools-left">
        <button className="cat-grid-toggle on" aria-label="Grid view">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><rect x="0" y="0" width="6" height="6"/><rect x="8" y="0" width="6" height="6"/><rect x="0" y="8" width="6" height="6"/><rect x="8" y="8" width="6" height="6"/></svg>
        </button>
        <button className="cat-grid-toggle" aria-label="Dense grid">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><rect x="0" y="0" width="4" height="4"/><rect x="5" y="0" width="4" height="4"/><rect x="10" y="0" width="4" height="4"/><rect x="0" y="5" width="4" height="4"/><rect x="5" y="5" width="4" height="4"/><rect x="10" y="5" width="4" height="4"/><rect x="0" y="10" width="4" height="4"/><rect x="5" y="10" width="4" height="4"/><rect x="10" y="10" width="4" height="4"/></svg>
        </button>
        <button className="cat-grid-toggle" aria-label="List view">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><rect x="0" y="1" width="14" height="2"/><rect x="0" y="6" width="14" height="2"/><rect x="0" y="11" width="14" height="2"/></svg>
        </button>
      </div>
      <div className="cat-count">{count} {C.ui.pieces}</div>
      <div className="cat-tools-right">
        <select className="cat-select" value={sort} onChange={e => setSort(e.target.value)}>
          <option value="featured">{C.ui.sortBy} — Featured</option>
          <option value="new">{C.ui.sortBy} — Newest</option>
          <option value="price-asc">{C.ui.sortBy} — Price: Low to High</option>
          <option value="price-desc">{C.ui.sortBy} — Price: High to Low</option>
        </select>
        <button className="cat-filter-btn">
          {C.ui.filter}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M2 3h8M3 6h6M5 9h2"/></svg>
        </button>
      </div>
    </div>
  );
}

function App() {
  window.useJMCLocale?.();
  const C = window.JMC_COPY;
  const catId = getCategoryFromUrl();
  const cat = window.JMC_GET_CATEGORY(catId);

  // Build a longer product list — repeat real products with variations of the swatches
  const baseProducts = window.JMC_BY_CATEGORY(catId);
  const otherProducts = C.products.filter(p => p.cat !== catId).slice(0, 8);
  const allProducts = [...baseProducts, ...otherProducts.map((p, i) => ({...p, id: p.id + "_x" + i, cat: catId, swatch: cat.accent}))];

  const [sort, setSort] = useState("featured");
  const sorted = [...allProducts].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    return 0;
  });

  if (!cat) {
    return (<>
      <window.JMCNav active="shop.html" />
      <div style={{padding:80, textAlign:"center"}}>Category not found.</div>
      <window.JMCFooter />
    </>);
  }

  return (
    <>
      <window.JMCNotice />
      <window.JMCNav active="shop.html" />
      <CategoryBanner cat={cat} />
      <CategoryToolbar count={sorted.length} sort={sort} setSort={setSort} />
      <section className="section">
        <div className="section-inner">
          <div className="grid-4 cat-products">
            {sorted.map((p, i) => <window.JMCProductCard key={p.id} p={p} num={(i+1).toString().padStart(3,"0")} />)}
          </div>
        </div>
      </section>
      <window.JMCPillars />
      <window.JMCFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
