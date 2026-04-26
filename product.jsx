/* JMC — Product detail page (product.html?id=p01)
   Image gallery left, buy box right. Sticky add-to-cart bar on top.
*/

const { useState, useEffect } = React;

function getProductFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id") || "p01";
}

function StickyBar({ p }) {
  const C = window.JMC_COPY;
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`sticky-bar ${show ? "show" : ""}`}>
      <div className="sb-inner">
        <div className="sb-left">
          <div className="sb-thumb" style={{background: p.swatch}} />
          <div>
            <div className="sb-name">{p.name.toUpperCase()}</div>
            <div className="sb-price">{window.JMC_PRICE(p.price)}</div>
          </div>
        </div>
        <button className="btn dark">{C.ui.addToCart}</button>
      </div>
    </div>
  );
}

function App() {
  window.useJMCLocale?.();
  const C = window.JMC_COPY;
  const p = window.JMC_GET_PRODUCT(getProductFromUrl());
  const cat = p ? window.JMC_GET_CATEGORY(p.cat) : null;
  const pairs = window.JMC_COPY.products.filter(x => x.id !== p?.id).slice(0, 2);
  const [color, setColor] = useState(0);
  const [size, setSize] = useState("Standard");

  if (!p) {
    return (<>
      <window.JMCNav />
      <div style={{padding:80, textAlign:"center"}}>Product not found.</div>
      <window.JMCFooter />
    </>);
  }

  return (
    <>
      <window.JMCNotice />
      <window.JMCNav active="shop.html" />
      <StickyBar p={p} />

      <section className="pdp">
        <div className="pdp-gallery">
          <div className="pdp-image main" style={{ "--swatch": p.swatch }}>
            <span className="pdp-mark" />
            <span className="pdp-tag">朱 · {p.id.replace("p","")}</span>
          </div>
          <div className="pdp-image sub" style={{ "--swatch": p.swatch }}>
            <span className="pdp-mark small" />
          </div>
          <div className="pdp-image sub" style={{ "--swatch": p.swatch }}>
            <span className="pdp-mark small" />
          </div>
        </div>

        <div className="pdp-info">
          <div className="eyebrow">{cat.label}</div>
          <h1 className="pdp-title">{p.name}</h1>
          <div className="pdp-maker">{p.maker}</div>
          <div className="pdp-price">{window.JMC_PRICE(p.price)}</div>
          <hr className="pdp-rule" />

          <div className="pdp-field">
            <div className="pdp-label">{C.ui.color}: <span className="pdp-value">Natural</span></div>
            <div className="pdp-swatches">
              {[p.swatch, "#a89888", "#1c1c1c"].map((s, i) => (
                <button key={i} className={`pdp-swatch ${color===i?"on":""}`} style={{background:s}} onClick={()=>setColor(i)} aria-label={`Variant ${i+1}`}/>
              ))}
            </div>
          </div>

          <div className="pdp-field">
            <div className="pdp-label">{C.ui.size}:</div>
            <div className="pdp-sizes">
              {["S","M","L","Standard"].map(s => (
                <button key={s} className={`pdp-size ${size===s?"on":""}`} onClick={()=>setSize(s)}>{s}</button>
              ))}
            </div>
          </div>

          <button className="btn ghost full" style={{marginTop:24}}>{C.ui.addToCart}</button>
          <button className="btn dark full" style={{marginTop:12}}>Buy It Now</button>

          <p className="pdp-desc">
            {p.maker} — {C.ui.signedBy}.
          </p>

          <hr className="pdp-rule" />

          <div className="pdp-pairs">
            <div className="eyebrow" style={{marginBottom:20, display:"block"}}>{C.ui.youMayAlsoLike}</div>
            {pairs.map(pp => (
              <a key={pp.id} href={`product.html?id=${pp.id}`} className="pdp-pair">
                <div className="pdp-pair-thumb" style={{background: pp.swatch}} />
                <div className="pdp-pair-info">
                  <div className="pdp-pair-name">{pp.name.toUpperCase()}</div>
                  <div className="pdp-pair-price">{window.JMC_PRICE(pp.price)}</div>
                </div>
                <button className="btn ghost" style={{padding:"10px 18px", fontSize:10}}>{C.ui.addToCart}</button>
              </a>
            ))}
          </div>
        </div>
      </section>

      <window.JMCPillars />
      <window.JMCFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
