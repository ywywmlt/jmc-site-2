/* JMC — Contact page (contact.html) */
const { useState } = React;

function App() {
  window.useJMCLocale?.();
  const C = window.JMC_COPY;
  return (<>
    <window.JMCNotice />
    <window.JMCNav active="contact.html" />

    <section className="page-banner light">
      <div className="page-banner-inner">
        <div className="eyebrow" style={{display:"block", marginBottom:18}}>{C.ui.contactEyebrow}</div>
        <h1>{C.ui.contactH1}</h1>
        <p>{C.ui.contactSub}</p>
      </div>
    </section>

    <section className="section">
      <div className="section-inner contact-grid">
        <div className="contact-form">
          <div className="eyebrow" style={{display:"block", marginBottom:24}}>{C.ui.sendMessage}</div>
          <div className="contact-row">
            <input type="text" placeholder={C.ui.namePlaceholder} />
            <input type="email" placeholder={C.ui.emailPlaceholder} />
          </div>
          <input type="text" placeholder={C.ui.subjectPlaceholder} />
          <textarea placeholder={C.ui.messagePlaceholder} rows="6"></textarea>
          <button className="btn dark">{C.ui.sendCta}</button>
        </div>

        <div className="contact-info">
          <div className="contact-block">
            <div className="eyebrow">{C.ui.atelier}</div>
            <p>2-12-3 Aoyama, Minato-ku<br/>Tokyo 107-0061, Japan</p>
          </div>
          <div className="contact-block">
            <div className="eyebrow">Concierge</div>
            <p>concierge@jmc.jp<br/>+81 3 5410 0000</p>
          </div>
          <div className="contact-block">
            <div className="eyebrow">{C.ui.pressInquiries}</div>
            <p>press@jmc.jp</p>
          </div>
          <div className="contact-block">
            <div className="eyebrow">Hours</div>
            <p>Monday – Friday<br/>10:00 – 18:00 JST</p>
          </div>
        </div>
      </div>
    </section>

    <window.JMCPillars />
    <window.JMCFooter />
  </>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
