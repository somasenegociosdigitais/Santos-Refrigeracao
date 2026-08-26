/* ENXUGADO PARA PRODUCAO (26/08/2026)
   Carrega BLOQUEANDO no <head> das 19 paginas.
   Mantidos apenas os 12 componentes do design system que o site usa
   (window.DoutorChopeiraDesignSystem_007be3, lido como window.DS no app-bundle.js).
   Removidos por duplicata do app-bundle.js ou por nao serem usados em producao:
     services-data.js  475 KB base64  -> producao usa services-data2.js
     site-images.js    283 KB base64  -> producao usa site-images2.js
     image-slot.js      31 KB         -> index.html carrega o arquivo proprio
     ServicePage/App/Header/Hero/Services/Equipment/Footer/Contato/
     Testimonials/shared  52 KB       -> ja vem no app-bundle.js
   893 KB -> 28 KB.
   ATENCAO: ao regerar .export/Producao/ a partir de _ds_bundle.js, refazer este corte.
*/
/* @ds-bundle: {"format":4,"namespace":"DoutorChopeiraDesignSystem_007be3","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconBadge","sourcePath":"components/core/IconBadge.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"StatBlock","sourcePath":"components/feedback/StatBlock.jsx"},{"name":"TestimonialCard","sourcePath":"components/feedback/TestimonialCard.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"CheckItem","sourcePath":"components/services/CheckItem.jsx"},{"name":"ServiceCard","sourcePath":"components/services/ServiceCard.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"12e72f162a47","components/core/Badge.jsx":"137ec572b2c3","components/core/Button.jsx":"2bd49185cfe7","components/core/Card.jsx":"4e546980fc49","components/core/IconBadge.jsx":"4ff397560a94","components/core/Tag.jsx":"a758a4d5b04c","components/feedback/StatBlock.jsx":"f2c1a1327fb9","components/feedback/TestimonialCard.jsx":"1fef868e2630","components/forms/Input.jsx":"4b12f9d421c0","components/forms/Textarea.jsx":"a05d32ce5d63","components/services/CheckItem.jsx":"f0666ed49888","components/services/ServiceCard.jsx":"630084fefe77","ui_kits/website/App.jsx":"4085e0e29ee7","ui_kits/website/Contato.jsx":"a60c0585fda0","ui_kits/website/Equipment.jsx":"2cd63b98807d","ui_kits/website/Footer.jsx":"bd15b78f3d05","ui_kits/website/Header.jsx":"f5ccdc04bd8f","ui_kits/website/Hero.jsx":"cc5ce2cc4deb","ui_kits/website/ServicePage.jsx":"6ab452eed1f8","ui_kits/website/Services.jsx":"dc868b55dee3","ui_kits/website/Testimonials.jsx":"e68d1edbefb5","ui_kits/website/image-slot.js":"9309434cb09c","ui_kits/website/services-data.js":"6647f3feef53","ui_kits/website/shared.jsx":"0d293a36c73b","ui_kits/website/site-images.js":"21b0840eba41"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DoutorChopeiraDesignSystem_007be3 = window.DoutorChopeiraDesignSystem_007be3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Doutor Chopeira logo lockup: a snowflake mark in a rounded blue badge
 * paired with the wordmark. Uses an inline Lucide-style snowflake path so
 * the logo renders without the CDN; swap to a client-supplied SVG when given.
 */
function Logo({
  variant = 'full',
  tone = 'dark',
  size = 36,
  ...rest
}) {
  const onDark = tone === 'light';
  const wordTop = onDark ? 'var(--white)' : 'var(--color-primary-strong)';
  const wordBottom = onDark ? 'var(--cyan-300)' : 'var(--color-primary)';
  const badge = /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-md)',
      background: 'linear-gradient(150deg, var(--blue-600), var(--blue-800))',
      boxShadow: '0 4px 12px rgba(8,42,77,0.28)',
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size * 0.62,
    height: size * 0.62,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m2 12 1.5-1.5M22 12l-1.5 1.5M12 2l1.5 1.5M12 22l-1.5-1.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "12",
    x2: "22",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4.5",
    y1: "4.5",
    x2: "19.5",
    y2: "19.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "19.5",
    y1: "4.5",
    x2: "4.5",
    y2: "19.5"
  })));
  if (variant === 'mark') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex'
      }
    }, rest), badge);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.6rem'
    }
  }, rest), badge, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1,
      fontFamily: 'var(--font-display)',
      letterSpacing: '-0.01em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: size * 0.5,
      color: wordTop
    }
  }, "Santos"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: size * 0.44,
      color: wordBottom,
      marginTop: 2
    }
  }, "Refrigera\xE7\xE3o")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small status/label pill. Tones map to brand semantics. */
function Badge({
  tone = 'blue',
  children,
  style = {},
  ...rest
}) {
  const tones = {
    blue: {
      bg: 'var(--blue-100)',
      fg: 'var(--blue-700)'
    },
    cyan: {
      bg: 'var(--cyan-100)',
      fg: 'var(--cyan-600)'
    },
    amber: {
      bg: 'var(--amber-100)',
      fg: 'var(--amber-700)'
    },
    green: {
      bg: 'var(--green-100)',
      fg: 'var(--green-500)'
    },
    neutral: {
      bg: 'var(--slate-100)',
      fg: 'var(--slate-600)'
    },
    solid: {
      bg: 'var(--color-primary)',
      fg: 'var(--white)'
    }
  };
  const t = tones[tone] || tones.blue;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.35rem',
      padding: '0.3rem 0.7rem',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--fs-xs)',
      letterSpacing: '0.02em',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Primary action element. `cta` = the amber WhatsApp/orçamento button (highest
 * priority); `primary` = blue; `secondary` = outline; `ghost` = text + hover tint.
 */
function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  iconLeft = null,
  iconRight = null,
  block = false,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0.5rem 0.95rem',
      fontSize: 'var(--fs-sm)',
      gap: '0.4rem'
    },
    md: {
      padding: '0.75rem 1.4rem',
      fontSize: 'var(--fs-base)',
      gap: '0.5rem'
    },
    lg: {
      padding: '1rem 1.9rem',
      fontSize: 'var(--fs-lg)',
      gap: '0.6rem'
    }
  };
  const variants = {
    cta: {
      background: 'var(--color-cta)',
      color: 'var(--color-on-cta)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-cta)',
      fontWeight: 700
    },
    whatsapp: {
      background: 'var(--color-whatsapp)',
      color: 'var(--color-on-whatsapp)',
      border: '1px solid transparent',
      boxShadow: '0 10px 24px rgba(37,211,102,0.30)',
      fontWeight: 700
    },
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--white)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)',
      fontWeight: 600
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1.5px solid var(--color-primary)',
      fontWeight: 600
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1px solid transparent',
      fontWeight: 600
    },
    'on-dark': {
      background: 'var(--white)',
      color: 'var(--color-primary-strong)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)',
      fontWeight: 600
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      textDecoration: 'none',
      lineHeight: 1,
      transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), filter var(--dur-base) var(--ease-out)',
      ...sizes[size],
      ...variants[variant],
      ...style
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.98)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseEnter: e => {
      if (variant === 'cta') e.currentTarget.style.background = 'var(--color-cta-hover)';else if (variant === 'whatsapp') e.currentTarget.style.background = 'var(--color-whatsapp-hover)';else if (variant === 'primary') e.currentTarget.style.background = 'var(--color-primary-hover)';else if (variant === 'secondary' || variant === 'ghost') e.currentTarget.style.background = 'var(--blue-100)';else if (variant === 'on-dark') e.currentTarget.style.filter = 'brightness(0.94)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = variants[variant].background;
      e.currentTarget.style.filter = 'none';
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Generic surface card: white, subtle border, soft shadow, lifts on hover. */
function Card({
  hover = true,
  pad = 'var(--space-6)',
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: pad,
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    },
    onMouseEnter: hover ? e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    } : undefined,
    onMouseLeave: hover ? e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Rounded icon container used in service cards / trust badges. Holds a Lucide icon. */
function IconBadge({
  tone = 'blue',
  size = 56,
  children,
  style = {},
  ...rest
}) {
  const tones = {
    blue: {
      bg: 'var(--blue-100)',
      fg: 'var(--color-primary)'
    },
    cyan: {
      bg: 'var(--cyan-100)',
      fg: 'var(--color-accent-strong)'
    },
    amber: {
      bg: 'var(--amber-100)',
      fg: 'var(--amber-700)'
    },
    solid: {
      bg: 'linear-gradient(150deg, var(--blue-600), var(--blue-800))',
      fg: 'var(--white)'
    }
  };
  const t = tones[tone] || tones.blue;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-md)',
      background: t.bg,
      color: t.fg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill chip for equipment / filters. */
function Tag({
  active = false,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4rem',
      padding: '0.45rem 0.9rem',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--fs-sm)',
      cursor: 'default',
      border: active ? '1px solid transparent' : '1px solid var(--border-default)',
      background: active ? 'var(--color-primary)' : 'var(--white)',
      color: active ? 'var(--white)' : 'var(--text-body)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Big number + label, for trust/stats strips. */
function StatBlock({
  value,
  label,
  tone = 'dark',
  align = 'center',
  style = {},
  ...rest
}) {
  const valueColor = tone === 'light' ? 'var(--white)' : 'var(--color-primary)';
  const labelColor = tone === 'light' ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.2rem',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-h1)',
      lineHeight: 1,
      color: valueColor,
      letterSpacing: 'var(--ls-tight)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 600,
      color: labelColor
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/feedback/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Google-style review card: stars, quote, author + role. */
function TestimonialCard({
  rating = 5,
  quote,
  author,
  role,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.15rem',
      color: 'var(--amber-500)'
    }
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    "data-lucide": "star",
    style: {
      width: 18,
      height: 18,
      fill: i < rating ? 'var(--amber-500)' : 'none',
      opacity: i < rating ? 1 : 0.3
    }
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-lg)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-normal)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, "\"", quote, "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--blue-100)',
      color: 'var(--color-primary)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700
    }
  }, author ? author[0] : '—'), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, author), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)'
    }
  }, role))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with optional label. Cool border, soft-blue focus ring. */
function Input({
  label,
  id,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.4rem'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-base)',
      color: 'var(--text-strong)',
      padding: '0.75rem 0.9rem',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-default)',
      background: 'var(--white)',
      outline: 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)',
      ...style
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--color-primary)';
      e.target.style.boxShadow = '0 0 0 3px var(--ring)';
    },
    onBlur: e => {
      e.target.style.borderColor = 'var(--border-default)';
      e.target.style.boxShadow = 'none';
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text input with optional label. */
function Textarea({
  label,
  id,
  rows = 4,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.4rem'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-base)',
      color: 'var(--text-strong)',
      padding: '0.75rem 0.9rem',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-default)',
      background: 'var(--white)',
      outline: 'none',
      resize: 'vertical',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)',
      ...style
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--color-primary)';
      e.target.style.boxShadow = '0 0 0 3px var(--ring)';
    },
    onBlur: e => {
      e.target.style.borderColor = 'var(--border-default)';
      e.target.style.boxShadow = 'none';
    }
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/services/CheckItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkmark list item for equipment lists. Green/blue circle + Lucide check. */
function CheckItem({
  tone = 'blue',
  children,
  style = {},
  ...rest
}) {
  const c = tone === 'green' ? 'var(--status-success)' : 'var(--color-primary)';
  const bg = tone === 'green' ? 'var(--green-100)' : 'var(--blue-100)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.65rem',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-base)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 24,
      height: 24,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: bg,
      color: c
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 15,
      height: 15
    }
  })), children);
}
Object.assign(__ds_scope, { CheckItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/services/CheckItem.jsx", error: String((e && e.message) || e) }); }

// components/services/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Service offering card: icon badge, title, short description, optional link.
 * Used in the "Nossos serviços" grid.
 */
function ServiceCard({
  icon = 'snowflake',
  title,
  description,
  footer = null,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      e.currentTarget.style.borderColor = 'var(--blue-200)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-md)',
      background: 'var(--blue-100)',
      color: 'var(--color-primary)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 28,
      height: 28
    }
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h4)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-base)',
      color: 'var(--text-muted)',
      margin: 0,
      lineHeight: 'var(--lh-normal)'
    }
  }, description), footer);
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/services/ServiceCard.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconBadge = __ds_scope.IconBadge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.CheckItem = __ds_scope.CheckItem;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

})();

/* ===== app-bundle.js (componentes das paginas) ===== */
window.__abrirWa = function(url){var a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener';document.body.appendChild(a);a.click();a.remove();};
// Shared helpers for the Doutor Chopeira website UI kit.
const DS = window.DoutorChopeiraDesignSystem_007be3;

// Lucide icon helper — renders an <i data-lucide> that the page upgrades.
function Icon({
  name,
  size = 22,
  color = 'currentColor',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      color,
      ...style
    }
  });
}

// Section wrapper with container + optional surface tone.
function Section({
  tone = 'page',
  id,
  style = {},
  children,
  pad = 'clamp(56px, 8.5vw, 92px)'
}) {
  const bg = {
    page: 'var(--surface-page)',
    subtle: 'var(--surface-subtle)',
    section: 'var(--surface-section)',
    dark: 'var(--surface-dark)'
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg,
      paddingBlock: pad,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-container"
  }, children));
}

// Section header: eyebrow + title + optional lead.
function SectionHead({
  eyebrow,
  title,
  lead,
  align = 'center',
  tone = 'dark'
}) {
  const titleColor = tone === 'light' ? 'var(--white)' : 'var(--text-strong)';
  const leadColor = tone === 'light' ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth: align === 'center' ? 680 : 620,
      marginInline: align === 'center' ? 'auto' : 0,
      marginBottom: 'clamp(32px, 5vw, 48px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-eyebrow",
    style: tone === 'light' ? {
      color: 'var(--cyan-300)'
    } : {}
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2)',
      color: titleColor,
      margin: 0,
      textWrap: 'balance'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lg)',
      color: leadColor,
      margin: 0,
      lineHeight: 'var(--lh-normal)',
      textWrap: 'pretty'
    }
  }, lead));
}

// Labeled image placeholder — drop real client photos here later.
function ImagePlaceholder({
  icon = 'image',
  label,
  ratio = '4 / 3',
  radius = 'var(--radius-xl)',
  tone = 'blue',
  style = {}
}) {
  const tones = {
    blue: 'linear-gradient(150deg, var(--blue-100), var(--blue-200))',
    dark: 'linear-gradient(150deg, var(--blue-700), var(--blue-900))',
    cyan: 'linear-gradient(150deg, var(--cyan-100), var(--blue-100))'
  };
  const fg = tone === 'dark' ? 'rgba(255,255,255,0.85)' : 'var(--color-primary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      width: '100%',
      borderRadius: radius,
      background: tones[tone],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      color: fg,
      overflow: 'hidden',
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 40
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 700,
      opacity: 0.85
    }
  }, label));
}
Object.assign(window, {
  DS,
  Icon,
  Section,
  SectionHead,
  ImagePlaceholder
});
// Top bar + sticky header navigation.
function Header({
  onQuote,
  base = ''
}) {
  const {
    Logo,
    Button
  } = window.DS;
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [['Início', base || '#top'], ['Serviços', base + '#servicos'], ['Quem somos', base + '#sobre'], ['Área de atendimento', base + '#area'], ['Contato', 'contato.html']];
  return /*#__PURE__*/React.createElement("header", {
    id: "top",
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--blue-950)',
      color: 'rgba(255,255,255,0.88)',
      fontSize: 'var(--fs-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 40,
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15,
    color: "var(--cyan-300)"
  }), " (21) 96782-6279"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    },
    className: "hide-sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 15,
    color: "var(--cyan-300)"
  }), " Seg\u2013S\xE1b \xB7 8h \xE0s 18h")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    },
    className: "hide-sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 15,
    color: "var(--cyan-300)"
  }), " Rio de Janeiro \xB7 Grande Rio"), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/5521967826279",
    target: "_blank",
    rel: "noopener",
    "aria-label": "Falar no WhatsApp",
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 16,
    color: "var(--cyan-300)"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: scrolled ? 'rgba(255,255,255,0.92)' : 'var(--white)',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      borderBottom: '1px solid var(--border-subtle)',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      transition: 'box-shadow var(--dur-base), background var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 74,
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top"
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 36
  })), /*#__PURE__*/React.createElement("nav", {
    className: "nav-links",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 26
    }
  }, links.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: href,
    href: href,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)',
      whiteSpace: 'nowrap'
    },
    onMouseEnter: e => e.target.style.color = 'var(--color-primary)',
    onMouseLeave: e => e.target.style.color = 'var(--text-body)'
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    size: "md",
    className: "header-cta",
    as: "a",
    href: "https://wa.me/5521967826279",
    target: "_blank",
    rel: "noopener",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 18
    })
  }, "WhatsApp"), /*#__PURE__*/React.createElement("a", {
    className: "mobile-action",
    href: "tel:+5521967826279",
    "aria-label": "Ligar",
    style: {
      display: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-md)',
      background: 'var(--blue-100)',
      color: 'var(--color-primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 20
  })), !menuOpen && /*#__PURE__*/React.createElement("a", {
    className: "mobile-action",
    href: "https://wa.me/5521967826279",
    target: "_blank",
    rel: "noopener",
    "aria-label": "WhatsApp",
    style: {
      display: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-whatsapp)',
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    className: "menu-btn",
    onClick: () => setMenuOpen(o => !o),
    style: {
      display: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-strong)',
      padding: 4
    },
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: menuOpen ? 'x' : 'menu',
    size: 26
  })))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "mobile-menu",
    style: {
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--white)',
      padding: '12px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-container",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, links.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: href,
    href: href,
    onClick: () => setMenuOpen(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      color: 'var(--text-body)',
      padding: '10px 4px'
    }
  }, label))))));
}
Object.assign(window, {
  Header
});
// Footer — dark, contact, services, hours, social.
function Footer() {
  const {
    Logo
  } = window.DS;
  const all = window.SERVICES_DATA || {};
  const services = Object.values(all).length ? Object.values(all).filter(s => !s.hideFromNav).map(s => [s.title, s.slug + '.html']) : [['Câmara fria', 'camara-fria.html'], ['Chopeiras', 'chopeiras.html'], ['Gela Caneca', 'gela-caneca.html'], ['Ar condicionado', 'ar-condicionado.html'], ['Geladeira comercial', 'geladeira-comercial.html'], ['Balcão refrigerado', 'balcao-refrigerado.html'], ['Ilha de congelados', 'ilha-de-congelados.html'], ['Ultra freezer', 'ultra-freezer.html'], ['Refresqueira', 'refresqueira.html'], ['Máquina de gelo', 'maquina-de-gelo.html']];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--blue-950)',
      color: 'rgba(255,255,255,0.78)',
      paddingTop: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1.6fr 1fr',
      gap: 48,
      paddingBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 340
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 38,
    tone: "light"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-sm)',
      lineHeight: 'var(--lh-relaxed)',
      margin: 0
    }
  }, "Refrigera\xE7\xE3o comercial no Rio de Janeiro e Grande Rio. Instala\xE7\xE3o, manuten\xE7\xE3o preventiva e corretiva com t\xE9cnicos especializados."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/5521967826279",
    target: "_blank",
    rel: "noopener",
    "aria-label": "Falar no WhatsApp",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-md)',
      background: 'rgba(37,211,102,0.16)',
      color: 'var(--color-whatsapp)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 18
  })), /*#__PURE__*/React.createElement("a", {
    href: "tel:+5521967826279",
    "aria-label": "Ligar para a Santos Refrigera\xE7\xE3o",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-md)',
      background: 'rgba(255,255,255,0.08)',
      color: 'var(--cyan-300)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--white)',
      fontSize: 'var(--fs-base)',
      margin: '0 0 16px'
    }
  }, "Servi\xE7os"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '10px 20px',
      fontSize: 'var(--fs-sm)'
    }
  }, services.map(([label, href]) => /*#__PURE__*/React.createElement("li", {
    key: href
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color: 'rgba(255,255,255,0.78)'
    }
  }, label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--white)',
      fontSize: 'var(--fs-base)',
      margin: '0 0 16px'
    }
  }, "Contato"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      fontSize: 'var(--fs-sm)'
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 17,
    color: "var(--cyan-300)"
  }), " (21) 96782-6279"), /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 17,
    color: "var(--cyan-300)",
    style: {
      flex: '0 0 auto',
      marginTop: 2
    }
  }), " ", /*#__PURE__*/React.createElement("span", null, "Av. Dom H\xE9lder C\xE2mara, 10229 \u2014 Cascadura, Rio de Janeiro - RJ, 21380-002", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
    href: "https://maps.google.com/maps?cid=12728115243696976866",
    target: "_blank",
    rel: "noopener",
    style: {
      color: 'var(--cyan-300)',
      fontWeight: 600
    }
  }, "Ver no Google Maps"))), /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 17,
    color: "var(--cyan-300)"
  }), " Seg\u2013S\xE1b \xB7 8h \xE0s 18h")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.1)',
      paddingBlock: 22,
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12,
      fontSize: 'var(--fs-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Santos Refrigera\xE7\xE3o \xB7 Refrigera\xE7\xE3o Comercial. CNPJ 62.899.580/0001-58. Todos os direitos reservados."))));
}
Object.assign(window, {
  Footer
});
window.__abrirWa = function (url) {
  var a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  a.remove();
};
window.__abrirWa = function (url) {
  var a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  a.remove();
};
// ServicePage — template reutilizável para páginas de serviço (câmara fria, etc).
// Use window.SERVICE_PAGE = {…} antes de montar para configurar o conteúdo.

// Destaca todas as ocorrências da palavra-chave (singular e plural) nos títulos.
function highlightTitle(title, phrase, color) {
  color = color || 'var(--cyan-300)';
  if (!phrase || typeof title !== 'string') return title;
  const esc = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp('(' + esc + 's?)', 'ig');
  const ph = phrase.toLowerCase();
  const parts = title.split(re);
  return /*#__PURE__*/React.createElement(React.Fragment, null, parts.map((p, i) => {
    const pl = (p || '').toLowerCase();
    return pl === ph || pl === ph + 's' ? /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        color: color
      }
    }, p) : /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, p);
  }));
}

// FaqItem — acordeão acessível para a seção de perguntas frequentes.
function FaqItem({
  q,
  a,
  open,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--white)',
      overflow: 'hidden',
      boxShadow: open ? 'var(--shadow-sm)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    "aria-expanded": open,
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '18px 22px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-lg)',
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", null, q), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      display: 'inline-flex',
      transition: 'transform var(--dur-base) var(--ease-out)',
      transform: open ? 'rotate(180deg)' : 'none',
      color: 'var(--color-primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 22
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: open ? 600 : 0,
      overflow: 'hidden',
      transition: 'max-height var(--dur-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      padding: '0 22px 20px',
      margin: 0,
      fontSize: 'var(--fs-base)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-relaxed)'
    }
  }, a)));
}
function ServicePage({
  data
}) {
  const {
    Button,
    Badge,
    CheckItem
  } = window.DS;
  const wa = msg => window.__abrirWa('https://wa.me/5521967826279?text=' + encodeURIComponent(msg));
  const orcamento = () => wa(data.waMessage);
  const [openFaq, setOpenFaq] = React.useState(-1);
  const [lightbox, setLightbox] = React.useState(-1);
  const all = window.SERVICES_DATA || {};
  const related = Object.values(all).filter(s => s.slug !== data.slug && !s.hideFromNav).slice(0, 4);

  // SEO: título, meta description e JSON-LD (Service + Breadcrumb) injetados no <head>.
  React.useEffect(() => {
    if (data.metaTitle) document.title = data.metaTitle;
    const setMeta = (name, content) => {
      let m = document.querySelector('meta[name="' + name + '"]');
      if (!m) {
        m = document.createElement('meta');
        m.setAttribute('name', name);
        document.head.appendChild(m);
      }
      m.setAttribute('content', content);
    };
    if (data.metaDescription) setMeta('description', data.metaDescription);
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: data.title,
      provider: {
        '@type': 'LocalBusiness',
        name: 'Santos Refrigeração',
        taxID: '62.899.580/0001-58',
        telephone: '+55-21-96782-6279',
        areaServed: 'Rio de Janeiro e Grande Rio',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Av. Dom Hélder Câmara, 10229 - Cascadura',
          addressLocality: 'Rio de Janeiro',
          addressRegion: 'RJ',
          postalCode: '21380-002',
          addressCountry: 'BR'
        }
      },
      areaServed: 'Rio de Janeiro e Grande Rio',
      description: data.metaDescription
    };
    const tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.textContent = JSON.stringify(ld);
    document.head.appendChild(tag);
    // FAQ JSON-LD (rich results no Google)
    let faqTag = null;
    if (data.faq && data.faq.length) {
      const faqLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.faq.map(([q, a]) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: a
          }
        }))
      };
      faqTag = document.createElement('script');
      faqTag.type = 'application/ld+json';
      faqTag.textContent = JSON.stringify(faqLd);
      document.head.appendChild(faqTag);
    }
    return () => {
      document.head.removeChild(tag);
      if (faqTag) document.head.removeChild(faqTag);
    };
  }, [data]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    base: "index.html",
    onQuote: orcamento
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(135deg, var(--blue-900) 0%, var(--blue-700) 60%, var(--blue-600) 100%)',
      position: 'relative',
      overflow: 'hidden',
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -120,
      right: -80,
      width: 420,
      height: 420,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(32,190,220,0.22), transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ds-container",
    style: {
      position: 'relative',
      paddingBlock: 'clamp(48px, 7vw, 80px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--fs-sm)',
      color: 'rgba(255,255,255,0.7)',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      color: 'rgba(255,255,255,0.7)'
    }
  }, "In\xEDcio"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14
  }), /*#__PURE__*/React.createElement("a", {
    href: "index.html#servicos",
    style: {
      color: 'rgba(255,255,255,0.7)'
    }
  }, "Servi\xE7os"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cyan-300)'
    }
  }, data.title)), /*#__PURE__*/React.createElement("div", {
    className: "hero-grid svc-hero",
    style: {
      display: 'grid',
      gridTemplateColumns: data.heroImage ? '1.05fr 0.95fr' : '1fr',
      gap: 'clamp(32px, 5vw, 56px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-hero-text",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      alignSelf: 'flex-start',
      background: 'rgba(255,255,255,0.12)',
      border: '1px solid rgba(255,255,255,0.18)',
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: data.icon,
    size: 16,
    color: "var(--cyan-300)"
  }), " ", data.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-h1)',
      lineHeight: 1.05,
      color: 'var(--white)',
      margin: 0,
      textWrap: 'balance'
    }
  }, highlightTitle(data.heroTitle, data.highlight)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lg)',
      color: 'rgba(255,255,255,0.85)',
      margin: 0,
      maxWidth: 520,
      lineHeight: 'var(--lh-normal)',
      textWrap: 'pretty'
    }
  }, data.heroLead), /*#__PURE__*/React.createElement("div", {
    className: "svc-actions-desktop",
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    size: "lg",
    onClick: orcamento,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 20
    })
  }, "Pe\xE7a seu or\xE7amento"), /*#__PURE__*/React.createElement(Button, {
    variant: "on-dark",
    size: "lg",
    as: "a",
    href: "tel:+5521967826279",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 18
    })
  }, "(21) 96782-6279"))), data.heroImage && /*#__PURE__*/React.createElement("div", {
    className: "svc-hero-media",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)',
      background: '#EDEEF0',
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: data.heroImage,
    alt: data.heroImageLabel,
    style: {
      width: '100%',
      aspectRatio: '4 / 3',
      objectFit: 'contain',
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "svc-actions-mobile",
    style: {
      display: 'none',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    size: "lg",
    block: true,
    onClick: orcamento,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 20
    })
  }, "Pe\xE7a seu or\xE7amento"), /*#__PURE__*/React.createElement(Button, {
    variant: "on-dark",
    size: "lg",
    block: true,
    as: "a",
    href: "tel:+5521967826279",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 18
    })
  }, "(21) 96782-6279"))))), /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(32px, 5vw, 56px)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-eyebrow"
  }, "O que fazemos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2)',
      margin: 0,
      textWrap: 'balance'
    }
  }, highlightTitle(data.servicesTitle, data.highlight, 'var(--color-accent-strong)')), data.intro.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontSize: 'var(--fs-base)',
      color: 'var(--text-muted)',
      margin: 0,
      lineHeight: 'var(--lh-relaxed)'
    }
  }, p)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-base)',
      color: 'var(--text-muted)',
      margin: 0,
      lineHeight: 'var(--lh-relaxed)'
    }
  }, "Conhe\xE7a tamb\xE9m os ", /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      color: 'var(--color-primary)',
      fontWeight: 700
    }
  }, "outros servi\xE7os de refrigera\xE7\xE3o comercial da Santos Refrigera\xE7\xE3o"), ", no Rio e Grande Rio.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'clamp(22px, 3vw, 32px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h4)',
      margin: 0
    }
  }, highlightTitle(data.servicesListTitle, data.highlight, 'var(--color-accent-strong)')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13
    }
  }, data.services.map(s => /*#__PURE__*/React.createElement(CheckItem, {
    key: s
  }, s)))))), data.sections && data.sections.length > 0 && /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      marginInline: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(32px, 4vw, 44px)'
    }
  }, data.sections.map((sec, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h3)',
      margin: 0,
      textWrap: 'balance'
    }
  }, highlightTitle(sec.title, data.highlight, 'var(--color-accent-strong)')), sec.body.map((p, j) => /*#__PURE__*/React.createElement("p", {
    key: j,
    style: {
      fontSize: 'var(--fs-base)',
      color: 'var(--text-muted)',
      margin: 0,
      lineHeight: 'var(--lh-relaxed)'
    }
  }, p)))))), data.hubLinks && data.hubLinks.length > 0 && /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Equipamentos",
    title: data.hubTitle || 'Equipamentos que atendemos',
    lead: "Clique no equipamento para ver o servi\xE7o em detalhe."
  }), /*#__PURE__*/React.createElement("div", {
    className: "cards-grid-3",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 18
    }
  }, data.hubLinks.map(([label, href, ic, desc]) => /*#__PURE__*/React.createElement("a", {
    key: href,
    href: href,
    style: {
      textDecoration: 'none',
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-md)',
      background: 'var(--blue-100)',
      color: 'var(--color-primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h4)',
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)',
      margin: 0,
      lineHeight: 'var(--lh-normal)'
    }
  }, desc))))), data.gallery && data.gallery.length > 0 && /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Trabalhos realizados",
    title: highlightTitle(data.galleryTitle || 'Serviços de chopeira que já executamos', data.highlight, 'var(--color-accent-strong)'),
    lead: data.galleryLead || "Instala\xE7\xF5es e manuten\xE7\xF5es reais feitas pela nossa equipe."
  }), /*#__PURE__*/React.createElement("div", {
    className: "gallery-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + (data.galleryCols || 4) + ', 1fr)',
      gap: 16
    }
  }, data.gallery.map((src, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setLightbox(i),
    style: {
      padding: 0,
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      cursor: 'pointer',
      background: 'var(--white)',
      aspectRatio: data.galleryAspect || '3 / 4',
      boxShadow: 'var(--shadow-sm)',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: (data.galleryAlt || 'Serviço de chopeira realizado pela Santos Refrigeração') + ' ' + (i + 1),
    loading: "lazy",
    style: {
      width: '100%',
      height: data.galleryTrim ? (100 + data.galleryTrim) + '%' : '100%',
      objectFit: data.galleryFit || 'contain',
      objectPosition: (data.galleryPos && data.galleryPos[i]) || (data.galleryTrim ? 'center top' : 'center'),
      display: 'block',
      transition: 'transform var(--dur-base) var(--ease-out)'
    },
    onMouseEnter: e => e.currentTarget.style.transform = 'scale(1.04)',
    onMouseLeave: e => e.currentTarget.style.transform = 'scale(1)'
  }))))), (lightbox >= 0 || lightbox === -2) && data.gallery && /*#__PURE__*/React.createElement("div", {
    onClick: () => setLightbox(-1),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      background: 'rgba(8,18,30,0.88)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setLightbox(-1),
    "aria-label": "Fechar",
    style: {
      position: 'absolute',
      top: 18,
      right: 18,
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: 'rgba(255,255,255,0.15)',
      color: 'var(--white)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 24
  })), lightbox >= 0 && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setLightbox((lightbox - 1 + data.gallery.length) % data.gallery.length);
    },
    "aria-label": "Anterior",
    style: {
      position: 'absolute',
      left: 12,
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: 'rgba(255,255,255,0.15)',
      color: 'var(--white)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 26
  })), /*#__PURE__*/React.createElement("img", {
    src: lightbox === -2 ? data.galleryFeature : data.gallery[lightbox],
    alt: "",
    onClick: e => e.stopPropagation(),
    style: {
      maxWidth: 'min(92vw, 800px)',
      maxHeight: '86vh',
      objectFit: 'contain',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)'
    }
  }), lightbox >= 0 && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      setLightbox((lightbox + 1) % data.gallery.length);
    },
    "aria-label": "Pr\xF3xima",
    style: {
      position: 'absolute',
      right: 12,
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: 'rgba(255,255,255,0.15)',
      color: 'var(--white)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 26
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Sinais de alerta",
    title: highlightTitle(data.signsTitle, data.highlight, 'var(--color-accent-strong)'),
    lead: "Notou algum destes sintomas? \xC9 hora de chamar um t\xE9cnico antes que o preju\xEDzo aumente."
  }), /*#__PURE__*/React.createElement("div", {
    className: "cards-grid-3",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    }
  }, data.signs.map(([ic, title, desc, link]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 'var(--radius-md)',
      background: 'var(--blue-100)',
      color: 'var(--color-primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h4)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)',
      margin: 0,
      lineHeight: 'var(--lh-normal)'
    }
  }, desc), link && /*#__PURE__*/React.createElement("a", {
    href: link[1],
    style: {
      marginTop: 'auto',
      paddingTop: 4,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 'var(--fs-sm)',
      fontWeight: 700,
      color: 'var(--color-primary)',
      textDecoration: 'none'
    }
  }, link[0], " ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14
  })))))), data.emergency && /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      marginInline: 'auto',
      background: 'var(--blue-100)',
      border: '1px solid var(--blue-200)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'clamp(28px, 4vw, 40px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--color-primary)'
    }
  }, "Atendimento de emerg\xEAncia"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h2)',
      margin: 0,
      textWrap: 'balance'
    }
  }, "Equipamento parado n\xE3o espera hor\xE1rio comercial"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-lg)',
      color: 'var(--text-muted)',
      margin: 0,
      lineHeight: 'var(--lh-normal)',
      textWrap: 'pretty'
    }
  }, data.emergency), /*#__PURE__*/React.createElement("div", {
    className: "emergency-cta",
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    size: "lg",
    onClick: orcamento,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 20
    })
  }, "Chamar no WhatsApp"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    as: "a",
    href: "tel:+5521967826279",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 18
    })
  }, "(21) 96782-6279")))), data.faq && data.faq.length > 0 && /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Perguntas frequentes",
    title: highlightTitle(data.faqTitle || 'Dúvidas sobre ' + data.title, data.highlight, 'var(--color-accent-strong)')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      marginInline: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, data.faq.map(([q, a], i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: i,
    q: q,
    a: a,
    open: openFaq === i,
    onToggle: () => setOpenFaq(openFaq === i ? -1 : i)
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(135deg, var(--blue-900), var(--blue-700))',
      paddingBlock: 'clamp(48px, 7vw, 64px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ds-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2)',
      color: 'var(--white)',
      margin: '0 0 8px',
      textWrap: 'balance'
    }
  }, highlightTitle(data.ctaTitle, data.highlight)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lg)',
      color: 'rgba(255,255,255,0.82)',
      margin: 0
    }
  }, "Or\xE7amento sem compromisso. Atendimento r\xE1pido no Rio e Grande Rio.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    size: "lg",
    onClick: orcamento,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 20
    })
  }, "Falar no WhatsApp"), /*#__PURE__*/React.createElement(Button, {
    variant: "on-dark",
    size: "lg",
    as: "a",
    href: "index.html#servicos",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 18
    })
  }, "Ver outros servi\xE7os")))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/5521967826279",
    target: "_blank",
    rel: "noopener",
    "aria-label": "WhatsApp",
    style: {
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 60,
      width: 60,
      height: 60,
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      background: 'var(--color-whatsapp)',
      color: 'var(--white)',
      boxShadow: '0 10px 24px rgba(37,211,102,0.4)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 28
  })));
}
Object.assign(window, {
  ServicePage
});
