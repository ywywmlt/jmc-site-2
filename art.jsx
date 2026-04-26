/* JMC — Art page (art.html)
   The artists behind JMC. Editorial roster + feature spread.
*/

const ARTISTS = [
  {
    id: "sakata",
    name: "Sakata Shōji",
    nameJp: "坂田 昌志",
    discipline: "Hagi-yaki Ceramics",
    disciplineJp: "萩焼",
    region: "Yamaguchi",
    workshop: "Sakata Kiln",
    generation: "14th gen.",
    since: 1612,
    swatch: "#a08566",
    accent: "#b48a64",
    quote: "I am not making the bowl my grandfather made. I am making the bowl he would have made today.",
    blurb: "The fourteenth-generation Hagi master who fires only twice a year, and rejects more than half of what comes out.",
  },
  {
    id: "tsutsumi",
    name: "Tsutsumi Yoshiyuki",
    nameJp: "堤 義之",
    discipline: "Wajima Lacquer",
    disciplineJp: "輪島塗",
    region: "Ishikawa",
    workshop: "Tsutsumi Urushi",
    generation: "5th gen.",
    since: 1872,
    swatch: "#7a2e2a",
    accent: "#922f29",
    quote: "Lacquer is patience. Thirty years before the wear becomes the work.",
    blurb: "Negoro lacquerware — built up in 24 layers, each cured a fortnight before the next.",
  },
  {
    id: "nakaya",
    name: "Nakaya Hiroshi",
    nameJp: "中谷 弘",
    discipline: "Sakai Blades",
    disciplineJp: "堺打刃物",
    region: "Osaka",
    workshop: "Nakaya Forge",
    generation: "3rd gen.",
    since: 1948,
    swatch: "#3a3a3a",
    accent: "#454545",
    quote: "The steel tells me when to stop.",
    blurb: "Aogami No. 2 hand-forged blades. A single knife is the work of three days.",
  },
  {
    id: "watanabe",
    name: "Watanabe Mariko",
    nameJp: "渡辺 真理子",
    discipline: "Indigo Textiles",
    disciplineJp: "藍染",
    region: "Kyoto",
    workshop: "Watanabe Atelier",
    generation: "Independent",
    since: 1998,
    swatch: "#1a2a3a",
    accent: "#1f3050",
    quote: "Indigo is honest. The vat tells you what kind of day you are having.",
    blurb: "Vat-dyes thirty times for the deepest blues. Works only with hemp grown by her cousin in Tokushima.",
  },
  {
    id: "yoshino",
    name: "Yoshino Kenji",
    nameJp: "吉野 健司",
    discipline: "Wood & Joinery",
    disciplineJp: "指物",
    region: "Nara",
    workshop: "Yoshino Joinery",
    generation: "4th gen.",
    since: 1928,
    swatch: "#8a6a4b",
    accent: "#9c7a58",
    quote: "Hinoki wants to be joined, not nailed.",
    blurb: "Hinoki cypress, joined without a single nail. Cutting boards that lift their own knife marks overnight.",
  },
  {
    id: "hanasho",
    name: "Hanashō Kiriko",
    nameJp: "花正 切子",
    discipline: "Edo Glass",
    disciplineJp: "江戸切子",
    region: "Tokyo",
    workshop: "Hanashō Studio",
    generation: "6th gen.",
    since: 1888,
    swatch: "#1c3550",
    accent: "#22416b",
    quote: "Five hours of patience for one tumbler.",
    blurb: "Edo Kiriko cut by hand on a stone wheel. The faceting catches light from twelve angles.",
  },
];

// Hand-drawn portrait placeholder (graphic mark, not a real face)
function PortraitMark({ accent, label, large = false }) {
  const size = large ? 1 : 0.6;
  return (
    <svg className="art-portrait-svg" viewBox="0 0 200 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id={`pg-${label}`} cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.55" />
          <stop offset="60%" stopColor={accent} stopOpacity="0.18" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="200" height="240" fill={accent} fillOpacity="0.08" />
      <rect width="200" height="240" fill={`url(#pg-${label})`} />
      {/* Subtle shoulders silhouette */}
      <ellipse cx="100" cy="240" rx="78" ry="60" fill={accent} fillOpacity="0.35" />
      <circle cx="100" cy="115" r="38" fill={accent} fillOpacity="0.5" />
      {/* JMC red mark in corner */}
      <g transform="translate(20,210)">
        <circle cx="6" cy="6" r="8" fill="var(--accent)" opacity="0.92"/>
        <text x="6" y="9" textAnchor="middle" fontSize="9" fill="#fff" fontFamily="serif">朱</text>
      </g>
    </svg>
  );
}

function ArtBanner() {
  const C = window.JMC_COPY;
  return (
    <section className="art-banner">
      <div className="art-banner-tape">
        <span>{C.ui.artBannerEyebrow}</span>
        <span className="art-banner-tape-dot" />
        <span>SPRING / 春 2026</span>
        <span className="art-banner-tape-dot" />
        <span>SIX ARTISTS / 六名</span>
        <span className="art-banner-tape-dot" />
        <span>TOKYO ATELIER</span>
      </div>
      <div className="art-banner-inner">
        <div className="art-banner-text">
          <div className="eyebrow">{C.ui.artBannerEyebrow}</div>
          <h1 className="art-banner-h1">The hands<br/>behind the mark.</h1>
          <p className="art-banner-sub">{C.ui.artBannerSub}</p>
          <div className="art-banner-meta">
            <div><span className="art-stat-num">06</span><span>Masters in residence</span></div>
            <div><span className="art-stat-num">10</span><span>Disciplines</span></div>
            <div><span className="art-stat-num">68</span><span>Workshops in network</span></div>
          </div>
        </div>
        <div className="art-banner-visual">
          <div className="art-banner-stamp">
            <div className="art-banner-stamp-num">朱</div>
            <div className="art-banner-stamp-roman">JMC · 2026</div>
          </div>
          <div className="art-banner-grid">
            {ARTISTS.slice(0,4).map(a => (
              <div key={a.id} className="art-banner-tile" style={{ "--accent": a.accent }}>
                <PortraitMark accent={a.accent} label={a.id}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Featured artist (first in roster) — magazine spread
function FeaturedArtist() {
  const C = window.JMC_COPY;
  const a = ARTISTS[0];
  return (
    <section className="art-feature">
      <div className="art-feature-portrait" style={{ "--accent": a.accent }}>
        <PortraitMark accent={a.accent} label={`feat-${a.id}`} large />
        <div className="art-feature-portrait-cap">
          <div>朱 · 001</div>
          <div>{a.workshop}, {a.region}</div>
        </div>
      </div>
      <div className="art-feature-text">
        <div className="eyebrow">{C.ui.artFeatureEyebrow}</div>
        <div className="art-feature-jp">{a.nameJp}</div>
        <h2 className="art-feature-name">{a.name}</h2>
        <div className="art-feature-meta">
          <span>{a.disciplineJp} · {a.discipline}</span>
          <span className="art-feature-dot" />
          <span>{a.generation}</span>
          <span className="art-feature-dot" />
          <span>{C.ui.artistSince} {a.since}</span>
        </div>
        <blockquote className="art-feature-quote">
          <span className="art-feature-quote-mark">"</span>
          {a.quote}
        </blockquote>
        <p className="art-feature-body">
          From his kiln in the hills above Hagi, Sakata-san fires only twice a year — at the spring equinox and the first frost of autumn. Each load takes 72 hours, watched in shifts. More than half of what comes out is broken on the studio floor before it cools.
        </p>
        <p className="art-feature-body">
          The pieces that survive are signed in cinnabar on the underside, dated to the firing, and cataloged in a hand-bound ledger his father kept since 1968.
        </p>
        <div className="art-feature-cta">
          <a href="journal.html" className="link-underline">{C.ui.artFeatureFullVisit}</a>
          <a href={`shop-category.html?c=ceramics`} className="link-underline">{C.ui.artFeatureShop} {a.discipline}</a>
        </div>
      </div>
    </section>
  );
}

function ArtistCard({ a, idx }) {
  const C = window.JMC_COPY;
  return (
    <article className="artist-card" style={{ "--accent": a.accent }}>
      <a href="journal.html" className="artist-portrait" aria-label={`Portrait of ${a.name}`}>
        <PortraitMark accent={a.accent} label={a.id} />
        <span className="artist-portrait-num">朱 · {String(idx).padStart(3, "0")}</span>
      </a>
      <div className="artist-card-body">
        <div className="artist-card-discipline">
          <span>{a.disciplineJp}</span>
          <span className="artist-card-dot">·</span>
          <span>{a.discipline}</span>
        </div>
        <h3 className="artist-card-name">{a.name}</h3>
        <div className="artist-card-jp">{a.nameJp}</div>
        <div className="artist-card-meta">
          {a.workshop}, {a.region} · {a.generation} · Est. {a.since}
        </div>
        <p className="artist-card-blurb">{a.blurb}</p>
        <a href="journal.html" className="link-underline artist-card-cta">{C.ui.read}</a>
      </div>
    </article>
  );
}

function ArtistRoster() {
  const C = window.JMC_COPY;
  return (
    <section className="art-roster">
      <div className="art-roster-inner">
        <div className="art-roster-head">
          <div className="eyebrow">{C.ui.artRosterEyebrow} · {ARTISTS.length} masters</div>
          <h2 className="art-roster-title">{C.ui.artRosterTitle}</h2>
          <p className="art-roster-intro">{C.ui.artRosterIntro}</p>
        </div>
        <div className="artist-grid">
          {ARTISTS.slice(1).map((a, i) => (
            <ArtistCard key={a.id} a={a} idx={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArtPledge() {
  const C = window.JMC_COPY;
  return (
    <section className="art-pledge">
      <div className="art-pledge-inner">
        <div className="art-pledge-text">
          <div className="eyebrow" style={{color:"rgba(255,255,255,0.6)"}}>{C.ui.artPledgeEyebrow}</div>
          <h3 className="art-pledge-title">{C.ui.artPledgeTitle}</h3>
          <p className="art-pledge-body">{C.ui.artPledgeBody}</p>
        </div>
        <div className="art-pledge-stats">
          <div><span className="art-stat-num big">06</span><span className="art-stat-label">{C.ui.artStat1}</span></div>
          <div><span className="art-stat-num big">12</span><span className="art-stat-label">{C.ui.artStat2}</span></div>
          <div><span className="art-stat-num big">100%</span><span className="art-stat-label">{C.ui.artStat3}</span></div>
        </div>
      </div>
    </section>
  );
}

function App() {
  window.useJMCLocale?.();
  return (<>
    <window.JMCNotice />
    <window.JMCNav active="art.html" />

    <ArtBanner />
    <FeaturedArtist />
    <ArtistRoster />
    <ArtPledge />

    <window.JMCPillars />
    <window.JMCFooter />
  </>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
