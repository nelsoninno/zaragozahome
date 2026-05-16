/* ================================================================
   Zaragoza Home — main.js  (v3)
   Bilingual EN/ES, donate flow, video click-to-load, lightbox,
   sticky header.
   ================================================================ */
(function () {
  'use strict';

  const LOCALES = {
    en: {
      meta: {
        title: "Zaragoza Home — Help 38 elders bring water back",
        description: "For decades they paid $9 a month for water at Hogar de Ancianos Giuseppe Angelucci in Zaragoza, El Salvador. Then bills jumped to $750 — and kept stacking. Today the home owes over $15,000, and water runs only two days a week. 38 elders need your help.",
        lang_label: "English",
        lang_other: "Español"
      },
      nav: {
        story: "Their story", watch: "Watch", crisis: "The crisis",
        place: "The place", faces: "The faces", team: "The team", donate: "Donate"
      },
      hero: {
        eyebrow: "Hogar de Ancianos Giuseppe Angelucci · Zaragoza, La Libertad, El Salvador",
        headline: "Thirty-eight elders.\nTwo days of water a week.",
        subhead: "For decades they paid $9 a month for water. In January 2024 the bill arrived at $750. Then another. And another. Today the debt sits at over $15,000 — for water they barely have.",
        cta_primary: "Donate now",
        cta_secondary: "Read their story"
      },
      story: {
        eyebrow: "Who we are",
        heading: "A home for those with nowhere else",
        body_1: "In a small town called Zaragoza, in the department of La Libertad, El Salvador, thirty-eight elderly men and women live together at Hogar de Ancianos Giuseppe Angelucci — a small home officially recognized as serving a vulnerable community. The land was given to a local church on a 25-year loan. The building itself was built by the Embassy of Taiwan in El Salvador. For decades, what came in from neighbors, churches, and the occasional volunteer was enough to keep the lights on and the kitchen running.",
        body_2: "Many residents arrived with no one. Only three of the thirty-eight are visited by their families. The other thirty-five spend their last years entirely in the care of the seven-person team that runs the home — and the donors and volunteers who keep it going. One resident was left at the entrance under a tree, badly hurt, and never claimed. This is the quiet reality. The home is not asking for charity. It is asking that the water keeps running, and that someone keeps caring.",
        caption: "The entrance to Hogar de Ancianos Giuseppe Angelucci — Zaragoza, La Libertad."
      },
      video: {
        eyebrow: "Watch their story",
        heading: "Two minutes inside the home",
        body: "A short documentary from the staff at Hogar de Ancianos Giuseppe Angelucci. Subtitles in English and Spanish.",
        play: "Play the story", loading: "Loading…"
      },
      crisis: {
        eyebrow: "What happened",
        heading: "A $9 bill became a $15,000 catastrophe",
        body_1: "For decades, the water bill was around $9 a month. Then, in January 2024, an invoice arrived for $750. The next one was higher. Then higher again. ANDA — the Salvadoran water utility — pointed at an underground leak that nobody could find.",
        body_2: "Three different inspections, including one led by the home's director Carolina, confirmed it: there is no leak. The residents flush toilets with buckets. They bathe from gallons brought by neighbors. The home does not have a swimming pool. As Suzi, one of the home's longest-standing donors, put it: \"You'd need a giant water park, filling and emptying it over and over, to use that much water.\"",
        body_3: "And yet, in roughly eighteen months, the home owes more than fifteen thousand dollars — the equivalent of one hundred and thirty-four years of normal water bills, stacked into a year and a half. Three different ANDA directors have refused to forgive the debt. Meanwhile, water reaches the taps only two days a week.",
        stat_1_value: "$9", stat_1_label: "The historic monthly bill",
        stat_2_value: "$15,000+", stat_2_label: "Accumulated debt since Jan 2024",
        stat_3_value: "2", stat_3_label: "Days of water per week",
        stat_4_value: "38", stat_4_label: "Residents affected",
        photo_1_caption: "The pila — the home's main water reservoir. Mostly empty.",
        photo_2_caption: "Buckets and basins used in place of running water.",
        photo_3_caption: "The water meter ANDA has been billing against."
      },
      place: {
        eyebrow: "The place",
        heading: "Painted walls. Tended plants. Beds that break.",
        body: "The home runs on what comes in. Walls have been painted. Plants are tended. The kitchen is clean. The team takes pride in what they have. But beds break and don't always get replaced. Furniture wears down. There is always less than there should be. With your help, the home stays standing — and the elders here keep their dignity.",
        photo_1_caption: "The courtyard, with the tree the residents sit under most afternoons.",
        photo_2_caption: "The front of the home, with the sign and visiting hours.",
        photo_3_caption: "A walkway along the building, lined with flowers.",
        photo_4_caption: "A side wall and the back gate — quiet, well-kept.",
        photo_5_caption: "Worn furniture that has been here longer than anyone remembers.",
        photo_6_caption: "The main entrance from the street."
      },
      abandoned_callout: {
        line_1: "35 of 38",
        line_2: "residents have been completely abandoned by their families."
      },
      faces: {
        eyebrow: "Who you're helping",
        heading: "Thirty-eight names. Eight you can meet today.",
        body: "Every donation reaches a real person — a grandmother, a brother, a friend. Tap any face to see them larger. The other thirty live just past this gallery."
      },
      team: {
        eyebrow: "The hands that keep this place running",
        heading: "Seven people for thirty-eight elders",
        body: "A small, devoted team runs the home every day. Carolina leads the operation; Cristian and the rest of the team look after the residents medically and personally. They do this on what donations and volunteer hours come in.",
        carolina_name: "Carolina",
        carolina_role: "General Director",
        cristian_name: "Cristian",
        cristian_role: "Nurse"
      },
      help: {
        eyebrow: "Make a difference",
        heading: "Three ways to help right now",
        card_1_title: "Donate",
        card_1_body: "Every dollar moves us closer to clearing the water debt and keeping the home running.",
        card_1_cta: "Give now",
        card_2_title: "Share",
        card_2_body: "The story is the fundraiser. Share this page with anyone who might care — every share extends the reach.",
        card_2_cta: "Share the page",
        card_3_title: "Visit",
        card_3_body: "If you're in El Salvador, come meet them. Bring water, bring food, bring time. They will remember you.",
        card_3_cta_maps: "Open in Google Maps",
        card_3_cta_whatsapp: "WhatsApp Carolina"
      },
      donate_section: {
        eyebrow: "The goal",
        heading: "Turn the water back on",
        body: "100% of donations go directly to the home and its residents. The local nonprofit Asociación Gente Ayudando Gente receives funds on behalf of the home.",
        local_title: "Wire transfer (El Salvador)",
        local_subtitle: "For donors with a Salvadoran bank account.",
        local_account_name_label: "Account name",
        local_account_name_value: "Asociación Gente Ayudando Gente",
        local_bank_label: "Bank",
        local_bank_value: "Banco Cuscatlán",
        local_account_label: "Cuenta corriente",
        local_account_value: "010-301-00-005590-0",
        local_email_label: "Confirm transfer to",
        local_email_value: "contactogenteayudandogente@gmail.com",
        local_copy: "Copy account number",
        local_copied: "Copied!",
        international_title: "International donors (US, EU, others)",
        international_subtitle: "GoFundMe and PayPal channels — coming soon.",
        international_status: "We are finalizing these. Check back in a few days, or message Carolina on WhatsApp and we'll guide you."
      },
      footer: {
        tagline: "Help us bring water — and dignity — back to thirty-eight elders in Zaragoza, El Salvador.",
        contact_heading: "Contact",
        contact_whatsapp_label: "WhatsApp · Carolina García",
        contact_whatsapp_value: "+503 7457 0984",
        contact_email_label: "Email",
        contact_email_value: "contactogenteayudandogente@gmail.com",
        follow_heading: "Follow the story",
        follow_facebook: "Facebook",
        credits: "© 2026 Asociación Gente Ayudando Gente · Hogar de Ancianos Giuseppe Angelucci",
        brand_title: "Zaragoza Home",
        brand_sub: "Hogar Giuseppe Angelucci · El Salvador"
      },
      a11y: {
        lang_toggle: "Switch language",
        skip_to_main: "Skip to main content",
        close_lightbox: "Close",
        prev_image: "Previous",
        next_image: "Next"
      },
      share: {
        title: "Zaragoza Home",
        text: "Thirty-eight elders. Two days of water a week. A $9 monthly bill became a $15,000 debt. Help us turn the water back on.",
        copied: "Link copied to clipboard"
      }
    },

    es: {
      meta: {
        title: "Hogar Giuseppe Angelucci — Ayúdanos a devolverles el agua a 38 ancianos",
        description: "Durante décadas pagaron $9 al mes por el agua en el Hogar de Ancianos Giuseppe Angelucci, en Zaragoza, La Libertad. En enero de 2024 las facturas subieron a $750 y siguieron acumulándose. Hoy la deuda supera los $15,000 y el agua llega solo dos días a la semana. 38 ancianos necesitan tu ayuda.",
        lang_label: "Español",
        lang_other: "English"
      },
      nav: {
        story: "Su historia", watch: "Ver", crisis: "La crisis",
        place: "El lugar", faces: "Los rostros", team: "El equipo", donate: "Donar"
      },
      hero: {
        eyebrow: "Hogar de Ancianos Giuseppe Angelucci · Zaragoza, La Libertad, El Salvador",
        headline: "Treinta y ocho ancianos.\nDos días de agua por semana.",
        subhead: "Durante décadas pagaron $9 al mes por el agua. En enero de 2024 llegó una factura de $750. Luego otra. Y otra. Hoy la deuda supera los $15,000 — por un agua que casi no tienen.",
        cta_primary: "Donar ahora",
        cta_secondary: "Leer su historia"
      },
      story: {
        eyebrow: "Quiénes somos",
        heading: "Un hogar para quienes no tienen otro lugar",
        body_1: "En un pequeño pueblo llamado Zaragoza, en el departamento de La Libertad, El Salvador, treinta y ocho ancianos y ancianas viven juntos en el Hogar de Ancianos Giuseppe Angelucci — un hogar oficialmente reconocido por atender a una comunidad vulnerable. El terreno fue dado en comodato a una iglesia local por 25 años. El edificio fue construido por la Embajada de Taiwán en El Salvador. Durante décadas, lo que llegaba de vecinos, iglesias y voluntarios alcanzaba para mantener la luz y la cocina.",
        body_2: "Muchos llegaron sin nadie. Solo tres de los treinta y ocho son visitados por sus familias. Los otros treinta y cinco pasan sus últimos años enteramente al cuidado del equipo de siete personas que sostiene el hogar — y de los donantes y voluntarios que lo hacen posible. Uno fue dejado bajo un árbol en la entrada, malherido, y nunca lo reclamaron. Esta es la realidad. El hogar no pide caridad. Pide que el agua vuelva a correr, y que alguien siga cuidando.",
        caption: "La entrada del Hogar de Ancianos Giuseppe Angelucci — Zaragoza, La Libertad."
      },
      video: {
        eyebrow: "Mira su historia",
        heading: "Dos minutos dentro del hogar",
        body: "Un breve documental del Hogar de Ancianos Giuseppe Angelucci. Subtítulos en español e inglés.",
        play: "Ver el video", loading: "Cargando…"
      },
      crisis: {
        eyebrow: "Lo que pasó",
        heading: "Una factura de $9 se convirtió en una catástrofe de $15,000",
        body_1: "Durante décadas, la factura del agua rondaba los $9 al mes. En enero de 2024 llegó una factura de $750. La siguiente, más alta. La siguiente, más todavía. ANDA — la empresa de agua — señaló una fuga subterránea que nadie pudo encontrar.",
        body_2: "Tres inspecciones distintas, una de ellas dirigida por la directora del hogar, Carolina, confirmaron lo mismo: no hay fuga. Los residentes echan agua en los inodoros con cubeta. Se bañan con galones traídos por los vecinos. El hogar no tiene piscina. Como dijo Suzi, una de las donantes más constantes: \"Tendrían que tener un parque de agua gigante, llenarlo y vaciarlo una y otra vez, para gastar tanta agua.\"",
        body_3: "Y aun así, en aproximadamente dieciocho meses, el hogar debe más de quince mil dólares — el equivalente a ciento treinta y cuatro años de facturas normales, acumulados en un año y medio. Tres directores distintos de ANDA se han negado a perdonar la deuda. Mientras tanto, el agua llega a los grifos solo dos días a la semana.",
        stat_1_value: "$9", stat_1_label: "La factura mensual histórica",
        stat_2_value: "$15,000+", stat_2_label: "Deuda acumulada desde ene-2024",
        stat_3_value: "2", stat_3_label: "Días de agua por semana",
        stat_4_value: "38", stat_4_label: "Residentes afectados",
        photo_1_caption: "La pila — el principal depósito de agua del hogar. Casi siempre vacía.",
        photo_2_caption: "Cubetas y guacales que reemplazan al agua corriente.",
        photo_3_caption: "El medidor de agua sobre el que ANDA cobra esta deuda."
      },
      place: {
        eyebrow: "El lugar",
        heading: "Paredes pintadas. Plantas cuidadas. Camas que se rompen.",
        body: "El hogar funciona con lo que llega. Las paredes están pintadas. Las plantas se cuidan. La cocina se mantiene limpia. El equipo se enorgullece de lo que tienen. Pero las camas se rompen y no siempre se reemplazan. Los muebles se desgastan. Siempre falta más. Con tu ayuda, el hogar sigue de pie — y los ancianos que viven aquí conservan su dignidad.",
        photo_1_caption: "El patio, con el árbol bajo el que los residentes se sientan casi todas las tardes.",
        photo_2_caption: "El frente del hogar, con el rótulo y los horarios de visita.",
        photo_3_caption: "Un corredor del edificio, bordeado de flores.",
        photo_4_caption: "Una pared lateral y el portón trasero — tranquilo, bien cuidado.",
        photo_5_caption: "Muebles desgastados que llevan aquí más tiempo del que nadie recuerda.",
        photo_6_caption: "La entrada principal desde la calle."
      },
      abandoned_callout: {
        line_1: "35 de 38",
        line_2: "residentes han sido completamente abandonados por sus familias."
      },
      faces: {
        eyebrow: "A quiénes ayudas",
        heading: "Treinta y ocho nombres. Ocho que puedes conocer hoy.",
        body: "Cada donación llega a una persona real — una abuela, un hermano, un amigo. Toca cualquier rostro para verlo más grande. Los otros treinta viven justo detrás de esta galería."
      },
      team: {
        eyebrow: "Las manos que sostienen este lugar",
        heading: "Siete personas para treinta y ocho ancianos",
        body: "Un equipo pequeño y entregado mantiene el hogar todos los días. Carolina lidera la operación; Cristian y el resto del equipo cuidan a los residentes médica y personalmente. Lo hacen con lo que llega de donaciones y horas voluntarias.",
        carolina_name: "Carolina",
        carolina_role: "Directora General",
        cristian_name: "Cristian",
        cristian_role: "Enfermero"
      },
      help: {
        eyebrow: "Haz la diferencia",
        heading: "Tres maneras de ayudar ahora mismo",
        card_1_title: "Donar",
        card_1_body: "Cada dólar nos acerca a pagar la deuda del agua y a mantener el hogar funcionando.",
        card_1_cta: "Donar ahora",
        card_2_title: "Compartir",
        card_2_body: "La historia es la campaña. Comparte esta página con cualquiera que pueda interesarse — cada vez que se comparte, el alcance crece.",
        card_2_cta: "Compartir la página",
        card_3_title: "Visitar",
        card_3_body: "Si estás en El Salvador, ven a conocerlos. Trae agua, trae comida, trae tiempo. Te van a recordar.",
        card_3_cta_maps: "Abrir en Google Maps",
        card_3_cta_whatsapp: "Escribir a Carolina"
      },
      donate_section: {
        eyebrow: "La meta",
        heading: "Vuelve a abrir el agua",
        body: "El 100% de las donaciones llega directo al hogar y a sus residentes. La asociación local Gente Ayudando Gente recibe los fondos en nombre del hogar.",
        local_title: "Transferencia bancaria (El Salvador)",
        local_subtitle: "Para donantes con cuenta en El Salvador.",
        local_account_name_label: "Nombre de la cuenta",
        local_account_name_value: "Asociación Gente Ayudando Gente",
        local_bank_label: "Banco",
        local_bank_value: "Banco Cuscatlán",
        local_account_label: "Cuenta corriente",
        local_account_value: "010-301-00-005590-0",
        local_email_label: "Confirma la transferencia a",
        local_email_value: "contactogenteayudandogente@gmail.com",
        local_copy: "Copiar número de cuenta",
        local_copied: "¡Copiado!",
        international_title: "Donantes internacionales (EE.UU., Europa, otros)",
        international_subtitle: "Canales de GoFundMe y PayPal — próximamente.",
        international_status: "Estamos terminando de configurar estos canales. Vuelve en unos días o escríbele a Carolina por WhatsApp y te guiamos."
      },
      footer: {
        tagline: "Ayúdanos a devolverles el agua —y la dignidad— a treinta y ocho ancianos en Zaragoza, El Salvador.",
        contact_heading: "Contacto",
        contact_whatsapp_label: "WhatsApp · Carolina García",
        contact_whatsapp_value: "+503 7457 0984",
        contact_email_label: "Correo",
        contact_email_value: "contactogenteayudandogente@gmail.com",
        follow_heading: "Sigue la historia",
        follow_facebook: "Facebook",
        credits: "© 2026 Asociación Gente Ayudando Gente · Hogar de Ancianos Giuseppe Angelucci",
        brand_title: "Hogar Zaragoza",
        brand_sub: "Hogar Giuseppe Angelucci · El Salvador"
      },
      a11y: {
        lang_toggle: "Cambiar idioma",
        skip_to_main: "Saltar al contenido principal",
        close_lightbox: "Cerrar",
        prev_image: "Anterior",
        next_image: "Siguiente"
      },
      share: {
        title: "Hogar de Ancianos Giuseppe Angelucci",
        text: "Treinta y ocho ancianos. Dos días de agua por semana. Una factura de $9 al mes se convirtió en una deuda de $15,000. Ayúdanos a abrir el grifo de nuevo.",
        copied: "Enlace copiado al portapapeles"
      }
    }
  };

  const STORAGE_KEY = 'zh_lang';
  const SUPPORTED = ['en', 'es'];

  function getByPath(obj, path) {
    return path.split('.').reduce(function (a, k) {
      return (a && a[k] !== undefined) ? a[k] : undefined;
    }, obj);
  }
  function detectInitialLang() {
    try { const s = localStorage.getItem(STORAGE_KEY); if (s && SUPPORTED.indexOf(s) !== -1) return s; } catch (_) {}
    const qp = new URLSearchParams(window.location.search).get('lang');
    if (qp && SUPPORTED.indexOf(qp) !== -1) return qp;
    const n = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (n.indexOf('es') === 0) return 'es';
    return 'en';
  }
  function applyLang(lang) {
    const dict = LOCALES[lang];
    if (!dict) return;
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const v = getByPath(dict, el.getAttribute('data-i18n'));
      if (typeof v === 'string') el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
        const parts = pair.trim().split(':');
        if (parts.length !== 2) return;
        const v = getByPath(dict, parts[1].trim());
        if (typeof v === 'string') el.setAttribute(parts[0].trim(), v);
      });
    });
    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) document.title = titleEl.textContent;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
    const toggle = document.getElementById('lang-toggle');
    if (toggle) toggle.setAttribute('aria-label', getByPath(dict, 'a11y.lang_toggle') || 'Switch language');
  }

  function initLangToggle() {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      const current = document.documentElement.getAttribute('lang') || 'en';
      applyLang(current === 'en' ? 'es' : 'en');
    });
  }

  function initDonateTriggers() {
    document.querySelectorAll('.donate-trigger').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.getElementById('donate');
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function initCopyAccount() {
    document.querySelectorAll('.copy-account').forEach(function (btn) {
      btn.addEventListener('click', async function () {
        const value = btn.getAttribute('data-copy-value') || '';
        const lang = document.documentElement.getAttribute('lang') || 'en';
        try {
          await navigator.clipboard.writeText(value);
          const original = btn.textContent;
          btn.textContent = getByPath(LOCALES[lang], 'donate_section.local_copied') || 'Copied!';
          btn.classList.add('is-copied');
          setTimeout(function () {
            btn.textContent = original;
            btn.classList.remove('is-copied');
          }, 2000);
        } catch (_) {}
      });
    });
  }

  function initShare() {
    document.querySelectorAll('.share-btn').forEach(function (btn) {
      btn.addEventListener('click', async function () {
        const lang = document.documentElement.getAttribute('lang') || 'en';
        const dict = LOCALES[lang];
        const data = {
          title: getByPath(dict, 'share.title'),
          text: getByPath(dict, 'share.text'),
          url: window.location.href
        };
        try {
          if (navigator.share) await navigator.share(data);
          else if (navigator.clipboard) {
            await navigator.clipboard.writeText(data.url);
            const original = btn.textContent;
            btn.textContent = getByPath(dict, 'share.copied') || 'Link copied';
            setTimeout(function () { btn.textContent = original; }, 2200);
          }
        } catch (_) {}
      });
    });
  }

  function initVideo() {
    const playBtn = document.getElementById('video-play');
    const player = document.getElementById('video-player');
    if (!playBtn || !player) return;
    playBtn.addEventListener('click', function () {
      const video = document.createElement('video');
      video.src = 'video/story.mp4';
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      video.preload = 'auto';
      video.className = 'video-element';
      const poster = player.querySelector('.video-poster');
      if (poster && poster.currentSrc) video.poster = poster.currentSrc;
      player.innerHTML = '';
      player.appendChild(video);
      video.play().catch(function () {});
    });
  }

  function initHeaderScroll() {
    const header = document.getElementById('site-header');
    if (!header) return;
    function update() {
      if (window.scrollY > 24) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  /* ---- Lightbox (gallery + place photos) ---- */
  let lightboxItems = [];
  let lightboxIndex = 0;

  function openLightbox(items, index) {
    lightboxItems = items;
    lightboxIndex = index;
    const lb = document.getElementById('lightbox');
    if (!lb) return;
    renderLightbox();
    lb.hidden = false;
    document.body.classList.add('lightbox-open');
    const closeBtn = lb.querySelector('.lightbox-close');
    if (closeBtn) setTimeout(function () { closeBtn.focus(); }, 0);
  }
  function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (!lb) return;
    lb.hidden = true;
    document.body.classList.remove('lightbox-open');
  }
  function moveLightbox(delta) {
    if (!lightboxItems.length) return;
    lightboxIndex = (lightboxIndex + delta + lightboxItems.length) % lightboxItems.length;
    renderLightbox();
  }
  function renderLightbox() {
    const lb = document.getElementById('lightbox');
    if (!lb) return;
    const item = lightboxItems[lightboxIndex];
    if (!item) return;
    const img = lb.querySelector('.lightbox-img');
    const cap = lb.querySelector('.lightbox-caption');
    if (img) {
      img.src = item.full;
      img.alt = item.alt || '';
    }
    if (cap) {
      cap.textContent = item.caption || '';
      cap.style.display = item.caption ? '' : 'none';
    }
  }
  function initLightbox() {
    // Gather all clickable images in galleries and place sections
    const groups = document.querySelectorAll('[data-lightbox-group]');
    groups.forEach(function (group) {
      const items = Array.from(group.querySelectorAll('[data-lightbox-item]')).map(function (el) {
        return {
          full: el.getAttribute('data-full'),
          alt: el.getAttribute('data-alt') || '',
          caption: el.getAttribute('data-caption') || ''
        };
      });
      group.querySelectorAll('[data-lightbox-item]').forEach(function (el, i) {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          openLightbox(items, i);
        });
      });
    });
    // Close handlers
    document.querySelectorAll('[data-close-lightbox]').forEach(function (el) {
      el.addEventListener('click', closeLightbox);
    });
    document.querySelectorAll('[data-lightbox-prev]').forEach(function (el) {
      el.addEventListener('click', function () { moveLightbox(-1); });
    });
    document.querySelectorAll('[data-lightbox-next]').forEach(function (el) {
      el.addEventListener('click', function () { moveLightbox(1); });
    });
    document.addEventListener('keydown', function (e) {
      const lb = document.getElementById('lightbox');
      if (!lb || lb.hidden) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') moveLightbox(1);
      else if (e.key === 'ArrowLeft') moveLightbox(-1);
    });
  }

  function boot() {
    applyLang(detectInitialLang());
    initLangToggle();
    initDonateTriggers();
    initCopyAccount();
    initShare();
    initVideo();
    initLightbox();
    initHeaderScroll();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
