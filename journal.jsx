/* JMC — Journal page (journal.html) */
const { useState } = React;

function App() {
  window.useJMCLocale?.();
  const C = window.JMC_COPY;
  return (<>
    <window.JMCNotice />
    <window.JMCNav active="journal.html" />
    <section className="page-banner light">
      <div className="page-banner-inner">
        <div className="eyebrow" style={{display:"block", marginBottom:18}}>{C.ui.journalEyebrow}</div>
        <h1>{C.ui.journalH1}</h1>
        <p>{C.ui.journalSub}</p>
      </div>
    </section>

    <section className="section">
      <div className="section-inner">
        <div className="grid-3 mag-grid">
          {C.journal.map((j) => (
            <a key={j.id} href={`#${j.id}`} className="mag-card">
              <div className="mag-img" data-kind={j.kind.toLowerCase()} />
              <div className="mag-meta">
                <span className="mag-kind">{j.kind.toUpperCase()}</span>
                <span>·</span>
                <span>{j.date.toUpperCase()}</span>
              </div>
              <div className="mag-title">{j.title}</div>
              <div className="mag-maker">{j.maker}</div>
            </a>
          ))}
        </div>
      </div>
    </section>

    <window.JMCPillars />
    <window.JMCFooter />
  </>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
