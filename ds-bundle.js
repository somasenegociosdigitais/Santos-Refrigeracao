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
