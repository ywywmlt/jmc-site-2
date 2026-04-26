/* JMC — About page (about.html) */
function App() {
  window.useJMCLocale?.();
  const C = window.JMC_COPY;
  return (<>
    <window.JMCNotice />
    <window.JMCNav active="about.html" />

    <section className="page-banner light">
      <div className="page-banner-inner">
        <div className="eyebrow" style={{display:"block", marginBottom:18}}>{C.ui.sectionStory}</div>
        <h1>{C.ui.aboutH1}</h1>
        <p>{C.brand.description}</p>
      </div>
    </section>

    <section className="section">
      <div className="section-inner about-split">
        <div className="about-img" />
        <div className="about-text">
          <div className="eyebrow">{C.ui.aboutDesignEyebrow}</div>
          <h2 className="fs-title">{C.ui.aboutDesignTitle}</h2>
          <p>{C.ui.aboutDesignBody1}</p>
          <p>{C.ui.aboutDesignBody2}</p>
        </div>
      </div>
    </section>

    <section className="brand-story">
      <div className="bs-bg" />
      <div className="bs-card">
        <div className="eyebrow">{C.ui.aboutDesignEyebrow}</div>
        <h3 className="bs-title">{C.ui.storyBody}</h3>
        <p className="bs-body">{C.ui.aboutDesignBody1}</p>
        <a href="contact.html" className="link-underline">{C.ui.visitWorkshop}</a>
      </div>
    </section>

    <window.JMCPillars />
    <window.JMCFooter />
  </>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
