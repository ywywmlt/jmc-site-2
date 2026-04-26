(function(){
/* JMC — Shared chrome (Nav, Footer, Pillars, Notice)
   Used by every page.
*/

const {
  useState,
  useEffect
} = React;

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
  arrow: (cls = "") => /*#__PURE__*/React.createElement("svg", {
    className: cls,
    width: "14",
    height: "10",
    viewBox: "0 0 14 10",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 5h12M9 1l4 4-4 4",
    stroke: "currentColor",
    strokeWidth: "1.2"
  })),
  chevron: (dir = "right") => /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "14",
    viewBox: "0 0 10 14",
    fill: "none",
    "aria-hidden": "true",
    style: {
      transform: dir === "left" ? "rotate(180deg)" : "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 1l6 6-6 6",
    stroke: "currentColor",
    strokeWidth: "1.4",
    fill: "none"
  })),
  search: () => /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 11l4 4"
  })),
  cart: () => /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 7h14l-1.5 11a2 2 0 0 1-2 1.7H8.5a2 2 0 0 1-2-1.7L5 7Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 7V5a3 3 0 0 1 6 0v2"
  })),
  user: () => /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"
  })),
  shipping: () => /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.2",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 22V10l12-5 12 5v12l-12 5-12-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 10l12 5 12-5M16 15v12"
  })),
  returns: () => /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.2",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 16a10 10 0 1 0 3-7.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 5v6h6"
  })),
  service: () => /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.2",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 22V10a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H12l-7 5z"
  })),
  authentic: () => /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.2",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 3l11 5v9c0 7-5 11-11 12-6-1-11-5-11-12V8l11-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 16l4 4 7-7"
  })),
  facebook: () => /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 8h3V4h-3c-2.2 0-4 1.8-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8c0-.6.4-1 1-1z"
  })),
  x: () => /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.244 2H21l-6.51 7.43L22.5 22h-6.86l-4.6-6.05L5.5 22H2.74l7.13-8.13L2 2h7.04l4.16 5.5L18.244 2z"
  })),
  instagram: () => /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: "0.6",
    fill: "currentColor"
  })),
  pinterest: () => /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 0-2.9.2-.8 1.3-5.4 1.3-5.4s-.3-.7-.3-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.7 1.5 1.6 0 1-.6 2.5-.9 3.8-.3 1.1.6 2 1.7 2 2 0 3.6-2.1 3.6-5.2 0-2.7-2-4.6-4.7-4.6-3.2 0-5.1 2.4-5.1 4.9 0 1 .4 2 .8 2.6.1.1.1.2.1.3-.1.4-.3 1.1-.3 1.3-.1.2-.2.3-.4.2-1.4-.6-2.2-2.7-2.2-4.3 0-3.5 2.6-6.8 7.4-6.8 3.9 0 6.9 2.8 6.9 6.5 0 3.9-2.4 7-5.8 7-1.1 0-2.2-.6-2.6-1.3l-.7 2.7c-.3 1-1 2.3-1.4 3 1.1.3 2.2.5 3.4.5 5.5 0 10-4.5 10-10S17.5 2 12 2z"
  })),
  youtube: () => /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 7.5c-.2-1.4-1.3-2.5-2.7-2.7C17.5 4.5 12 4.5 12 4.5s-5.5 0-7.3.3C3.3 5 2.2 6.1 2 7.5 1.7 9.3 1.7 12 1.7 12s0 2.7.3 4.5c.2 1.4 1.3 2.5 2.7 2.7 1.8.3 7.3.3 7.3.3s5.5 0 7.3-.3c1.4-.2 2.5-1.3 2.7-2.7.3-1.8.3-4.5.3-4.5s0-2.7-.3-4.5zM10 15V9l5 3-5 3z"
  }))
};

// ─────────────── Notice bar ───────────────────────────────────
function Notice() {
  useLocale();
  const C = window.JMC_COPY;
  return /*#__PURE__*/React.createElement("div", {
    className: "notice"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav-arrow left"
  }, Icon.chevron("left")), /*#__PURE__*/React.createElement("span", null, C.notice), /*#__PURE__*/React.createElement("span", {
    className: "nav-arrow right"
  }, Icon.chevron("right")));
}

// ─────────────── Nav (centered logo, like Strass) ─────────────
function Nav({
  active = "",
  overVideoOnLoad = false
}) {
  const locale = useLocale();
  const C = window.JMC_COPY;
  const [overVideo, setOverVideo] = useState(overVideoOnLoad);
  useEffect(() => {
    if (!overVideoOnLoad) return;
    const onScroll = () => {
      setOverVideo(window.scrollY < window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [overVideoOnLoad]);
  return /*#__PURE__*/React.createElement("nav", {
    className: `nav ${overVideo ? "over-video" : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-left"
  }, /*#__PURE__*/React.createElement("button", {
    className: "nav-burger",
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), C.nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.href,
    href: n.href,
    className: `nav-link hide-sm ${active === n.href ? "active" : ""}`
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    className: "nav-center"
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    className: "nav-mark",
    "aria-label": "JMC home"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/jmc-mark.png",
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: "nav-right"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nav-lang hide-sm",
    "aria-label": locale === "en" ? "Switch to Japanese" : "Switch to English",
    onClick: () => window.JMC_SET_LOCALE(locale === "en" ? "ja" : "en")
  }, /*#__PURE__*/React.createElement("span", {
    className: `nav-lang-opt ${locale === "en" ? "is-active" : ""}`
  }, "EN"), /*#__PURE__*/React.createElement("span", {
    className: `nav-lang-opt ${locale === "ja" ? "is-active" : ""}`
  }, "\u65E5\u672C\u8A9E")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "nav-link hide-sm",
    "aria-label": "Account"
  }, Icon.user()), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "nav-link",
    "aria-label": "Search"
  }, Icon.search()), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "nav-link",
    "aria-label": "Cart",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, Icon.cart(), /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: 0
    }
  }, "(0)"))));
}

// ─────────────── Pillars (4-up service strip) ─────────────────
function Pillars() {
  useLocale();
  const C = window.JMC_COPY;
  return /*#__PURE__*/React.createElement("section", {
    className: "pillars"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pillars-grid"
  }, C.pillars.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "pillar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pillar-icon"
  }, Icon[p.icon] ? Icon[p.icon]() : null), /*#__PURE__*/React.createElement("div", {
    className: "pillar-title"
  }, p.title), /*#__PURE__*/React.createElement("div", {
    className: "pillar-desc"
  }, p.desc)))));
}

// ─────────────── Footer ───────────────────────────────────────
function Footer() {
  useLocale();
  const C = window.JMC_COPY;
  const F = C.footer;
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-newsletter"
  }, /*#__PURE__*/React.createElement("h4", null, F.newsletter.title), /*#__PURE__*/React.createElement("p", null, F.newsletter.desc), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: F.newsletter.placeholder
  }), /*#__PURE__*/React.createElement("button", null, F.newsletter.cta), /*#__PURE__*/React.createElement("div", {
    className: "footer-socials"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Facebook"
  }, Icon.facebook()), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "X"
  }, Icon.x()), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Instagram"
  }, Icon.instagram()), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Pinterest"
  }, Icon.pinterest()), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "YouTube"
  }, Icon.youtube()))), F.columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("h4", null, col.title), /*#__PURE__*/React.createElement("ul", null, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href
  }, l.label)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, F.about.title), /*#__PURE__*/React.createElement("p", null, F.about.body))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 14,
      height: 14,
      borderRadius: "50%",
      background: "radial-gradient(circle, #fff 0 5px, var(--accent) 5px 7px, #fff 7px)"
    }
  }), F.locale, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 8,
      opacity: 0.7
    }
  }, "\u25BC")), /*#__PURE__*/React.createElement("span", null, F.copyright), /*#__PURE__*/React.createElement("span", {
    className: "footer-payments"
  }, /*#__PURE__*/React.createElement("span", {
    className: "footer-pay"
  }, "VISA"), /*#__PURE__*/React.createElement("span", {
    className: "footer-pay"
  }, "MC"), /*#__PURE__*/React.createElement("span", {
    className: "footer-pay"
  }, "AMEX"), /*#__PURE__*/React.createElement("span", {
    className: "footer-pay"
  }, "PAYPAL"), /*#__PURE__*/React.createElement("span", {
    className: "footer-pay"
  }, "JCB"))));
}

// ─────────────── Product card ─────────────────────────────────
function ProductCard({
  p,
  num
}) {
  useLocale();
  const cat = window.JMC_GET_CATEGORY(p.cat);
  return /*#__PURE__*/React.createElement("a", {
    href: `product.html?id=${p.id}`,
    className: "product-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "product-tile",
    style: {
      "--swatch": p.swatch
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "product-tile-num"
  }, "\u6731 \xB7 ", num || p.id.replace("p", "")), /*#__PURE__*/React.createElement("span", {
    className: "product-tile-cat"
  }, cat?.label), /*#__PURE__*/React.createElement("span", {
    className: "product-tile-mark"
  })), /*#__PURE__*/React.createElement("div", {
    className: "product-name"
  }, p.name), /*#__PURE__*/React.createElement("div", {
    className: "product-maker"
  }, p.maker), /*#__PURE__*/React.createElement("div", {
    className: "product-price"
  }, window.JMC_PRICE(p.price)));
}

// ─────────────── exports ──────────────────────────────────────
Object.assign(window, {
  JMCNav: Nav,
  JMCFooter: Footer,
  JMCNotice: Notice,
  JMCPillars: Pillars,
  JMCProductCard: ProductCard,
  JMCIcon: Icon
});
})();