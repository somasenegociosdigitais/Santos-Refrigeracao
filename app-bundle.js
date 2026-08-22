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
// Hero — dark blue gradient, headline + CTAs left, equipment showcase panel right.
function Hero({
  onQuote
}) {
  const {
    Button
  } = window.DS;
  return /*#__PURE__*/React.createElement("section", {
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
      paddingBlock: 'clamp(56px, 9vw, 96px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      alignItems: 'center',
      textAlign: 'center',
      maxWidth: 780,
      marginInline: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'rgba(255,255,255,0.12)',
      border: '1px solid rgba(255,255,255,0.18)',
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "snowflake",
    size: 16,
    color: "var(--cyan-300)"
  }), " Refrigera\xE7\xE3o comercial"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.15rem, 1.1rem + 4.4vw, 3.4rem)',
      lineHeight: 1.05,
      color: 'var(--white)',
      margin: 0,
      textWrap: 'balance'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cyan-300)'
    }
  }, "Refrigera\xE7\xE3o comercial"), " com agilidade no Rio e Grande Rio"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    size: "lg",
    onClick: onQuote,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 20
    })
  }, "Pe\xE7a seu or\xE7amento"), /*#__PURE__*/React.createElement(Button, {
    variant: "on-dark",
    size: "lg",
    as: "a",
    href: "#servicos",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-down",
      size: 18
    })
  }, "Ver servi\xE7os")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 12
    }
  }, [['shield-check', 'Orçamento sem compromisso'], ['truck', 'Atendemos no local'], ['clock', 'Resposta rápida']].map(([ic, tx]) => /*#__PURE__*/React.createElement("span", {
    key: tx,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--fs-sm)',
      fontWeight: 600,
      color: 'rgba(255,255,255,0.9)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    color: "var(--cyan-300)"
  }), " ", tx))))));
}
Object.assign(window, {
  Hero
});
window.__abrirWa = window.__abrirWa || function (url) {
  var a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  a.remove();
};
// Trust strip — three reassurance features below the hero.
function TrustStrip() {
  const items = [['wrench', 'Instalação e manutenção', 'Preventiva e corretiva em todos os equipamentos de refrigeração.'], ['map-pin', 'No local ou na oficina', 'Atendemos no seu endereço ou na nossa oficina, bem localizada no Rio.'], ['badge-check', 'Técnicos especializados', 'Equipe experiente, peças de qualidade e garantia no serviço.']];
  return /*#__PURE__*/React.createElement("div", {
    className: "ds-container",
    style: {
      marginTop: -44,
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "trust-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, items.map(([ic, title, desc]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      padding: '24px 24px',
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-md)',
      background: 'linear-gradient(150deg, var(--blue-600), var(--blue-800))',
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--fs-h4)',
      margin: '0 0 4px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)',
      margin: 0,
      lineHeight: 'var(--lh-normal)'
    }
  }, desc))))));
}

// Services grid — "Nossos serviços". Um card por equipamento; subserviços como
// links reais dentro do card (mantém as páginas filhas a um clique da home).
function Services({
  onQuote
}) {
  const {
    Button
  } = window.DS;
  const services = [['photo:assets/icon-p-camara.png', 'Câmara fria', 'Instalação e manutenção de câmaras frias e frigoríficos comerciais.', 'camara-fria.html'], ['photo:assets/icon-p-chopeira.png', 'Chopeiras', 'Instalação, manutenção e higienização de chopeiras.', 'chopeiras.html'], ['photo:assets/icon-p-gela-caneca.png', 'Gela Caneca', 'Manutenção e conserto de gela caneca para o seu bar.', 'gela-caneca.html'], ['photo:assets/icon-p-ar.png', 'Ar condicionado', 'Instalação, manutenção e higienização de ar condicionado comercial e residencial.', 'ar-condicionado.html', [['Instalação', 'instalacao-ar-condicionado.html'], ['Manutenção', 'manutencao-ar-condicionado.html'], ['Higienização', 'higienizacao-ar-condicionado.html'], ['Tubulação', 'tubulacao-ar-condicionado.html']]], ['photo:assets/icon-p-geladeira.png', 'Geladeira', 'Geladeira e refrigerador sempre gelando, do comércio à residência.', 'geladeira-comercial.html', [['Comercial', 'geladeira-comercial.html'], ['Residencial', 'conserto-de-geladeira.html'], ['Industrial', 'geladeira-comercial.html']]], ['photo:assets/icon-balcao-foto.png', 'Balcão refrigerado', 'Balcões e expositores refrigerados para seu ponto de venda.', 'balcao-refrigerado.html'], ['photo:assets/icon-p-ilha.png', 'Ilha de congelados', 'Ilhas de congelados e expositores em pleno funcionamento.', 'ilha-de-congelados.html'], ['photo:assets/icon-p-ultra-freezer.png', 'Ultra freezer', 'Ultra freezers e equipamentos de baixa temperatura.', 'ultra-freezer.html'], ['photo:assets/icon-p-refresqueira.png', 'Refresqueira', 'Refresqueiras para lanchonetes, comércios e eventos.', 'refresqueira.html'], ['photo:assets/icon-p-maquina-gelo.png', 'Máquina de gelo', 'Conserto e manutenção de máquinas de gelo, sem faltar gelo.', 'maquina-de-gelo.html'], ['photo:assets/icon-p-adega.png', 'Adega climatizada de vinhos', 'Instalação e manutenção de adega climatizada de vinhos.', 'adega-vinhos.html']];
  return /*#__PURE__*/React.createElement(Section, {
    id: "servicos",
    tone: "subtle"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Nossos servi\xE7os",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Cuidamos de ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--color-primary)'
      }
    }, "todo o seu equipamento"), " de refrigera\xE7\xE3o"),
    lead: "Atendemos clientes comerciais em toda a \xE1rea de refrigera\xE7\xE3o \u2014 do bar ao restaurante, do mercado \xE0 ind\xFAstria."
  }), /*#__PURE__*/React.createElement("div", {
    className: "cards-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 22
    }
  }, services.map(([icon, title, desc, href, subs]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    onClick: e => {
      if (!e.target.closest('a')) window.location.href = href;
    },
    style: {
      height: '100%',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      cursor: 'pointer',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)'
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
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 60,
      height: 60,
      borderRadius: 'var(--radius-md)',
      background: 'var(--blue-100)',
      color: 'var(--color-primary)'
    }
  }, icon.indexOf('photo:') === 0 ? /*#__PURE__*/React.createElement("img", {
    src: icon.slice(6),
    alt: "",
    style: {
      width: 48,
      height: 48,
      objectFit: 'contain',
      display: 'block'
    }
  }) : icon.indexOf('img:') === 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 34,
      height: 34,
      background: 'var(--color-primary)',
      opacity: 0.42,
      WebkitMaskImage: 'url(' + icon.slice(4) + ')',
      maskImage: 'url(' + icon.slice(4) + ')',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain'
    }
  }) : /*#__PURE__*/React.createElement("i", {
    className: 'ph-duotone ph-' + icon,
    style: {
      fontSize: 34
    }
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h4)',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color: 'var(--text-strong)',
      textDecoration: 'none'
    }
  }, title)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-base)',
      color: 'var(--text-muted)',
      margin: 0,
      lineHeight: 'var(--lh-normal)'
    }
  }, desc), subs && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '6px 8px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)'
    }
  }, subs.map(([label, sh], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: label
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--border-strong, #cbd5e1)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("a", {
    href: sh,
    style: {
      color: 'var(--color-primary)',
      textDecoration: 'none',
      fontWeight: 600
    },
    onMouseEnter: e => {
      e.currentTarget.style.textDecoration = 'underline';
    },
    onMouseLeave: e => {
      e.currentTarget.style.textDecoration = 'none';
    }
  }, label)))), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 'auto',
      paddingTop: 8,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--fs-sm)',
      color: 'var(--color-primary)',
      textDecoration: 'none'
    }
  }, "Saiba mais ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 15
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    size: "lg",
    onClick: () => window.__abrirWa('https://wa.me/5521967826279?text=' + encodeURIComponent('Olá! Não encontrei meu equipamento no site. Vocês atendem?')),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 20
    })
  }, "N\xE3o achou seu equipamento? Fale conosco")));
}
Object.assign(window, {
  TrustStrip,
  Services
});
// About the company — split layout with technician photo + company story.
function Equipment({
  onQuote
}) {
  const {
    Button
  } = window.DS;
  return /*#__PURE__*/React.createElement(Section, {
    id: "sobre",
    tone: "page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '0.95fr 1.05fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-head-mobile",
    style: {
      display: 'none',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-eyebrow"
  }, "Quem somos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2)',
      margin: 0,
      textWrap: 'balance'
    }
  }, "Qualidade que gera confian\xE7a, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent-strong)'
    }
  }, "confian\xE7a que gera parcerias"))), /*#__PURE__*/React.createElement("div", {
    className: "about-photo",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.SITE_IMAGES && window.SITE_IMAGES.tecnico || 'assets/tecnico-atendimento.jpg',
    alt: "T\xE9cnico da Santos Refrigera\xE7\xE3o em atendimento de refrigera\xE7\xE3o comercial no Rio de Janeiro",
    style: {
      width: '100%',
      aspectRatio: '4 / 3.4',
      objectFit: 'cover',
      objectPosition: 'center 12%',
      display: 'block',
      background: 'var(--blue-100)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "about-badge",
    style: {
      position: 'absolute',
      bottom: -24,
      right: -16,
      background: 'var(--color-cta)',
      color: 'var(--ink)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px 20px',
      boxShadow: 'var(--shadow-cta)',
      maxWidth: 200
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      display: 'block',
      lineHeight: 1
    }
  }, "12 anos"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 600
    }
  }, "cuidando da refrigera\xE7\xE3o do seu neg\xF3cio"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-head-desktop",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-eyebrow"
  }, "Quem somos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2)',
      margin: 0,
      textWrap: 'balance'
    }
  }, "Qualidade que gera confian\xE7a, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent-strong)'
    }
  }, "confian\xE7a que gera parcerias"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-base)',
      color: 'var(--text-muted)',
      margin: 0,
      lineHeight: 'var(--lh-relaxed)'
    }
  }, "Confian\xE7a n\xE3o se conquista com promessas, mas com trabalho bem feito. H\xE1 12 anos, a Santos Refrigera\xE7\xE3o constr\xF3i sua hist\xF3ria com seriedade, transpar\xEAncia e compromisso em cada atendimento. \xC9 por isso que empresas de todo o Rio de Janeiro e Grande Rio depositam em nossa equipe a confian\xE7a de quem busca qualidade, responsabilidade e solu\xE7\xF5es executadas com excel\xEAncia."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-base)',
      color: 'var(--text-muted)',
      margin: 0,
      lineHeight: 'var(--lh-relaxed)'
    }
  }, "Cada servi\xE7o \xE9 realizado com aten\xE7\xE3o aos detalhes, diagn\xF3stico preciso e total clareza em todas as etapas. Trabalhamos com honestidade, pre\xE7o definido antes da execu\xE7\xE3o e garantia em tudo o que fazemos, porque acreditamos que respeito ao cliente e qualidade n\xE3o s\xE3o diferenciais, mas princ\xEDpios."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-base)',
      color: 'var(--text-muted)',
      margin: 0,
      lineHeight: 'var(--lh-relaxed)'
    }
  }, "Mais do que prestar ", /*#__PURE__*/React.createElement("a", {
    href: "tecnico-refrigeracao-comercial.html",
    style: {
      color: 'inherit',
      textDecoration: 'underline',
      textUnderlineOffset: 3
    }
  }, "assist\xEAncia t\xE9cnica em refrigera\xE7\xE3o comercial"), ", entregamos seguran\xE7a, tranquilidade e a certeza de que existe uma equipe comprometida em fazer o trabalho da maneira certa. \xC9 assim que, ao longo dos anos, transformamos a confian\xE7a de nossos clientes em relacionamentos duradouros e constru\xEDmos uma reputa\xE7\xE3o que levamos com orgulho em cada servi\xE7o realizado."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    size: "lg",
    onClick: onQuote,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 20
    })
  }, "Solicitar atendimento")))));
}

// Service area — neighborhoods + map placeholder.
// Floco de neve estilizado (6 raios) usado na ilustração do Cristo.
function FrostFlake({
  x,
  y,
  s,
  o
}) {
  return /*#__PURE__*/React.createElement("g", {
    transform: 'translate(' + x + ' ' + y + ')',
    opacity: o,
    stroke: "#6CD6EA",
    strokeWidth: Math.max(1.6, s * 0.16),
    strokeLinecap: "round"
  }, [0, 60, 120].map(r => /*#__PURE__*/React.createElement("line", {
    key: r,
    x1: -s,
    y1: "0",
    x2: s,
    y2: "0",
    transform: 'rotate(' + r + ')'
  })));
}
function ServiceArea() {
  const {
    Tag
  } = window.DS;
  const areas = ['Centro', 'Zona Sul', 'Zona Norte', 'Zona Oeste', 'Niterói', 'São Gonçalo', 'Duque de Caxias', 'Nova Iguaçu', 'São João de Meriti', 'Nilópolis'];
  return /*#__PURE__*/React.createElement(Section, {
    id: "area",
    tone: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-eyebrow"
  }, "\xC1rea de atendimento"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2)',
      margin: 0,
      textWrap: 'balance'
    }
  }, "Atendemos todo o Rio e Grande Rio"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-base)',
      color: 'var(--text-muted)',
      margin: 0,
      lineHeight: 'var(--lh-relaxed)'
    }
  }, "Acesso f\xE1cil e r\xE1pido a diversos bairros. Confira algumas das regi\xF5es que atendemos \u2014 n\xE3o viu a sua? Fale conosco."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      marginTop: 4
    }
  }, areas.map(a => /*#__PURE__*/React.createElement(Tag, {
    key: a
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14,
    color: "var(--color-primary)"
  }), " ", a)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)',
      border: '1px solid var(--border-subtle)',
      aspectRatio: '4 / 3.2',
      position: 'relative',
      background: 'var(--blue-100)'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "cristo-foto",
    shape: "rect",
    src: window.SITE_IMAGES && window.SITE_IMAGES.cristo || 'assets/cristo-original.png',
    placeholder: "Arraste aqui uma foto do Cristo Redentor",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    }
  }))));
}
Object.assign(window, {
  Equipment,
  ServiceArea
});
// CTA band — dark blue, high-priority WhatsApp conversion.
function CtaBand({
  onQuote
}) {
  const {
    Button
  } = window.DS;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(135deg, var(--blue-900), var(--blue-700))',
      paddingBlock: 64
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
  }, "Fale agora com um t\xE9cnico especializado."), /*#__PURE__*/React.createElement("p", {
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
    as: "a",
    href: "https://wa.me/5521967826279",
    target: "_blank",
    rel: "noopener",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 20
    })
  }, "Falar no WhatsApp"), /*#__PURE__*/React.createElement(Button, {
    variant: "on-dark",
    size: "lg",
    as: "a",
    href: "tel:+5521967826279",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 18
    })
  }, "(21) 96782-6279"))));
}
Object.assign(window, {
  CtaBand
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
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
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
  }, label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
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
// Composition for the home page. "Orçamento" CTAs navigate to the Contato page.
function App() {
  const goContato = () => {
    window.location.href = 'contato.html';
  };
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    onQuote: goContato
  }), /*#__PURE__*/React.createElement(Hero, {
    onQuote: goContato
  }), /*#__PURE__*/React.createElement(TrustStrip, null), /*#__PURE__*/React.createElement(Services, {
    onQuote: goContato
  }), /*#__PURE__*/React.createElement(Equipment, {
    onQuote: goContato
  }), /*#__PURE__*/React.createElement(ServiceArea, null), /*#__PURE__*/React.createElement(CtaBand, {
    onQuote: goContato
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement("a", {
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
  App
});
// Página Contato — formulário de orçamento + informações de contato + mapa.
function ContactSection() {
  const {
    Button,
    Input,
    Textarea
  } = window.DS;
  const [nome, setNome] = React.useState('');
  const [zap, setZap] = React.useState('');
  const [equip, setEquip] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const equipamentos = ['Câmara fria', 'Chopeira', 'Ar-condicionado', 'Geladeira comercial', 'Balcão refrigerado', 'Ilha de congelados', 'Ultra freezer', 'Expositor de bebidas', 'Refresqueira', 'Gela Caneca', 'Outro equipamento'];
  const enviar = e => {
    e.preventDefault();
    const texto = `Olá! Me chamo ${nome || '...'}.\nEquipamento: ${equip || 'equipamento de refrigeração'}.\n${msg ? 'Detalhes: ' + msg : ''}\nPode me passar um orçamento?`;
    window.__abrirWa('https://wa.me/5521967826279?text=' + encodeURIComponent(texto));
  };
  const selectStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-base)',
    color: equip ? 'var(--text-strong)' : 'var(--text-muted)',
    padding: '0.75rem 0.9rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-default)',
    background: 'var(--white)',
    outline: 'none',
    width: '100%',
    cursor: 'pointer'
  };
  const infoItems = [['phone', 'Telefone / WhatsApp', '(21) 96782-6279', 'tel:+5521967826279'], ['map-pin', 'Endereço', 'Av. Dom Hélder Câmara, 10229 — Cascadura, RJ', 'https://www.google.com/maps/search/?api=1&query=Av.%20Dom%20H%C3%A9lder%20C%C3%A2mara%2C%2010229%20-%20Cascadura%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2021380-002'], ['clock', 'Horário de atendimento', 'Seg–Sáb · 8h às 18h', null], ['wrench', 'Onde atendemos', 'No seu endereço ou na nossa oficina', null]];
  return /*#__PURE__*/React.createElement(Section, {
    tone: "subtle",
    pad: "72px"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-eyebrow"
  }, "Contato"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-h2)',
      margin: 0,
      textWrap: 'balance'
    }
  }, "Fale conosco e pe\xE7a seu or\xE7amento"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      margin: 0,
      lineHeight: 'var(--lh-relaxed)'
    }
  }, "Preencha o formul\xE1rio ou chame direto no WhatsApp. Or\xE7amento sem compromisso, com resposta r\xE1pida.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, infoItems.map(([ic, label, value, href]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px 18px',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 46,
      height: 46,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-md)',
      background: 'var(--blue-100)',
      color: 'var(--color-primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.35
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--text-muted)'
    }
  }, label), href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-lg)',
      color: 'var(--text-strong)'
    }
  }, value) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--fs-lg)',
      color: 'var(--text-strong)'
    }
  }, value))))), /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    size: "lg",
    as: "a",
    href: "https://wa.me/5521967826279",
    target: "_blank",
    rel: "noopener",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 20
    }),
    style: {
      alignSelf: 'flex-start'
    }
  }, "Chamar direto no WhatsApp")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-md)',
      border: '1px solid var(--border-subtle)',
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h3)',
      margin: '0 0 6px'
    }
  }, "Solicite seu or\xE7amento"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      margin: '0 0 22px',
      fontSize: 'var(--fs-sm)'
    }
  }, "Ao enviar, abrimos o WhatsApp com a sua mensagem pronta."), /*#__PURE__*/React.createElement("form", {
    onSubmit: enviar,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Seu nome",
    placeholder: "Nome completo",
    value: nome,
    onChange: e => setNome(e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "WhatsApp",
    type: "tel",
    placeholder: "(21) 9XXXX-XXXX",
    value: zap,
    onChange: e => setZap(e.target.value)
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.4rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-strong)'
    }
  }, "Qual equipamento?"), /*#__PURE__*/React.createElement("select", {
    value: equip,
    onChange: e => setEquip(e.target.value),
    style: selectStyle,
    required: true
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Selecione o equipamento"), equipamentos.map(eq => /*#__PURE__*/React.createElement("option", {
    key: eq,
    value: eq
  }, eq)))), /*#__PURE__*/React.createElement(Textarea, {
    label: "Descreva o problema ou servi\xE7o",
    placeholder: "Ex.: c\xE2mara fria n\xE3o est\xE1 gelando; instala\xE7\xE3o de chopeira nova...",
    rows: 4,
    value: msg,
    onChange: e => setMsg(e.target.value)
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    size: "lg",
    block: true,
    type: "submit",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 18
    })
  }, "Enviar pelo WhatsApp"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      justifyContent: 'center',
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 13
  }), " Seus dados s\xF3 s\xE3o usados para o atendimento")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)',
      border: '1px solid var(--border-subtle)',
      height: 340
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "Santos Refrigera\xE7\xE3o \u2014 Av. Dom H\xE9lder C\xE2mara, 10229, Cascadura",
    src: "https://maps.google.com/maps?q=Av.%20Dom%20H%C3%A9lder%20C%C3%A2mara%2C%2010229%20-%20Cascadura%2C%20Rio%20de%20Janeiro%20-%20RJ&z=16&output=embed",
    style: {
      width: '100%',
      height: '100%',
      border: 0
    },
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade"
  })));
}
function ContatoApp() {
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    base: "index.html",
    onQuote: () => window.__abrirWa('https://wa.me/5521967826279')
  }), /*#__PURE__*/React.createElement(ContactSection, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement("a", {
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
  ContactSection,
  ContatoApp
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
    title: highlightTitle('Serviços de chopeira que já executamos', data.highlight, 'var(--color-accent-strong)'),
    lead: "Instala\xE7\xF5es e manuten\xE7\xF5es reais feitas pela nossa equipe."
  }), /*#__PURE__*/React.createElement("div", {
    className: "gallery-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
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
      aspectRatio: '3 / 4',
      boxShadow: 'var(--shadow-sm)',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: 'Serviço de chopeira realizado pela Santos Refrigeração ' + (i + 1),
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
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
  })), /*#__PURE__*/React.createElement("h4", {
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
