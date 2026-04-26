(function(){
/* JMC — Shop landing page (shop.html)
   Banner + all 10 disciplines as a 5×2 grid, each linking to its category page.
*/

const {
  useState,
  useEffect
} = React;
function ShopHero() {
  const C = window.JMC_COPY;
  return /*#__PURE__*/React.createElement("section", {
    className: "page-banner light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-banner-img"
  }), /*#__PURE__*/React.createElement("div", {
    className: "page-banner-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      display: "block",
      marginBottom: 18
    }
  }, "The Collection"), /*#__PURE__*/React.createElement("h1", null, C.ui.shop), /*#__PURE__*/React.createElement("p", null, C.brand.description)));
}
function CategoryGrid() {
  const C = window.JMC_COPY;
  // Asymmetric IG-style grid: a few tiles span 2 cols/rows for editorial rhythm.
  // Indices into C.categories that should be "feature" tiles.
  const featureIdx = new Set([0, 5]); // ceramics, paper feature
  const tallIdx = new Set([2, 7]); // blades, metal go tall
  return /*#__PURE__*/React.createElement("section", {
    className: "section ig-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, C.ui.explore), /*#__PURE__*/React.createElement("div", {
    className: "section-title"
  }, C.ui.disciplines), /*#__PURE__*/React.createElement("div", {
    className: "ig-section-meta"
  }, /*#__PURE__*/React.createElement("span", null, "\u6731 \xB7 10 disciplines"), /*#__PURE__*/React.createElement("span", {
    className: "ig-dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Spring 2026"))), /*#__PURE__*/React.createElement("div", {
    className: "section-inner ig-section-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-grid"
  }, C.categories.map((c, i) => {
    const klass = ["ig-tile", featureIdx.has(i) ? "ig-tile-feature" : "", tallIdx.has(i) ? "ig-tile-tall" : ""].filter(Boolean).join(" ");
    return /*#__PURE__*/React.createElement("a", {
      key: c.id,
      href: `shop-category.html?c=${c.id}`,
      className: klass,
      style: {
        "--accent": c.accent
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ig-tile-img",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ig-tile-img-bloom"
    }), /*#__PURE__*/React.createElement("div", {
      className: "ig-tile-img-grain"
    })), /*#__PURE__*/React.createElement("div", {
      className: "ig-tile-corner ig-tile-corner-tl"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ig-tile-num"
    }, "\u6731 \xB7 ", (i + 1).toString().padStart(3, "0"))), /*#__PURE__*/React.createElement("div", {
      className: "ig-tile-corner ig-tile-corner-tr"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ig-tile-count"
    }, c.count), /*#__PURE__*/React.createElement("span", {
      className: "ig-tile-count-label"
    }, C.ui.pieces)), /*#__PURE__*/React.createElement("div", {
      className: "ig-tile-overlay"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ig-tile-jp"
    }, c.labelJp), /*#__PURE__*/React.createElement("div", {
      className: "ig-tile-title"
    }, c.label), /*#__PURE__*/React.createElement("div", {
      className: "ig-tile-cta"
    }, /*#__PURE__*/React.createElement("span", null, C.ui.shop), /*#__PURE__*/React.createElement("span", {
      className: "ig-tile-arrow"
    }, window.JMCIcon.arrow()))));
  }))));
}
function FeaturedProducts() {
  const C = window.JMC_COPY;
  const items = C.products.slice(0, 4);
  return /*#__PURE__*/React.createElement("section", {
    className: "section section-narrow",
    style: {
      borderTop: "1px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "House Picks"), /*#__PURE__*/React.createElement("div", {
    className: "section-title"
  }, C.ui.trending)), /*#__PURE__*/React.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-4"
  }, items.map((p, i) => /*#__PURE__*/React.createElement(window.JMCProductCard, {
    key: p.id,
    p: p,
    num: (i + 1).toString().padStart(3, "0")
  })))));
}
function App() {
  window.useJMCLocale?.();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.JMCNotice, null), /*#__PURE__*/React.createElement(window.JMCNav, {
    active: "shop.html"
  }), /*#__PURE__*/React.createElement(ShopHero, null), /*#__PURE__*/React.createElement(CategoryGrid, null), /*#__PURE__*/React.createElement(FeaturedProducts, null), /*#__PURE__*/React.createElement(window.JMCPillars, null), /*#__PURE__*/React.createElement(window.JMCFooter, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})();