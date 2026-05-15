/* ================================================================
   Zaragoza Home — main.js  (v2)
   Bilingual EN/ES, donate flow, video click-to-load, header scroll.
   Locale strings inlined; locales/*.json mirror these.
   ================================================================ */
(function () {
  'use strict';

  const LOCALES = {
    en: {
      meta: {
        title: "Zaragoza Home — Help 38 elders bring water back",
        description: "For decades they paid $9 a month for water at Hogar de Ancianos Giuseppe Angelucci in Zaragoza, El Salvador. Then bills jumped to $750 — and kept stacking. Today the home owes over $50,000, and water runs only two days a week. 38 elders need your help.",
        lang_label: "English",
        lang_other: "Español"
      },
      nav: {
        story: "Their story", watch: "Watch", crisis: "The crisis",
        faces: "The faces", team: "The team", donate: "Donate"
      },
      hero: {
        eyebrow: "Hogar de Ancianos Giuseppe Angelucci · Zaragoza, La Libertad, El Salvador",
        headline: "Thirty-eight elders.\nTwo days of water a week.",
        subhead: "For decades they paid $9 a month for water. In January 2024 the bill arrived at $750. Then another. And another. Today the debt sits at over $50,000 — for water they barely have.",
        cta_primary: "Donate now",
        cta_secondary: "Read their story"
      },
      video: {
        eyebrow: "Watch their story",
        heading: "Two minutes inside the home",
        body: "A short documentary from the staff at Hogar de Ancianos Giuseppe Angelucci. Subtitles in English and Spanish.",
        play: "Play the story",
        loading: "Loading…"
      },
      story: {
        eyebrow: "Who we are",
        heading: "A home for those with nowhere else",
        body_1: "In a small town called Zaragoza, in the department of La Libertad, El Salvador, thirty-eight elderly men and women live together in a modest home named Hogar de Ancianos Giuseppe Angelucci. The land was given to a local church on a 25-year loan. The building itself was constructed by the Embassy of Taiwan in El Salvador. For decades, what came in from neighbors, churches, and the occasional volunteer was enough to keep the lights on and the kitchen running.",
        body_2: "Many residents arrived with no one. Only three of the thirty-eight are visited by their families. The other thirty-five spend their last years entirely in the care of the seven-person team that runs the home — and the donors and volunteers who keep it going. One resident was left under a tree at the entrance, badly hurt, and never claimed. This is the quiet reality. The home is not asking for charity. It is asking that the water keeps running, and that someone keeps caring.",
        caption: "The entrance to Hogar de Ancianos Giuseppe Angelucci — Zaragoza, La Libertad."
      },
      crisis: {
        eyebrow: "What happened",
        heading: "A $9 bill became a $50,000 catastrophe",
        body_1: "For decades, the water bill was around $9 a month. Then, in January 2024, an invoice arrived for $750. The next one was higher. Then higher again. ANDA — the Salvadoran water utility — pointed at an underground leak that nobody could find.",
        body_2: "Three different inspections, including one led by the home's caretaker Carolina, confirmed it: there is no leak. The residents flush toilets with buckets. They bathe from gallons brought by neighbors. The home does not have a swimming pool. As Suzi, one of the home's longest-standing donors, put it: \"You'd need a giant water park, filling and emptying it over and over, to use that much water.\"",
        body_3: "And yet, in roughly eighteen months, the home owes more than fifty thousand dollars — the equivalent of one hundred and thirty-four years of normal water bills, stacked into a year and a half. Three different ANDA directors have refused to forgive the debt. Meanwhile, water reaches the taps only two days a week.",
        stat_1_value: "$9", stat_1_label: "The historic monthly bill",
        stat_2_value: "$50,000+", stat_2_label: "Accumulated debt since Jan 2024",
        stat_3_value: "2", stat_3_label: "Days of water per week",
        stat_4_value: "38", stat_4_label: "Residents affected",
        photo_1_caption: "The pila — the home's main water reservoir. Mostly empty.",
        photo_2_caption: "Buckets and basins used in place of running water.",
        photo_3_caption: "The water meter ANDA has been billing against."
      },
      faces: {
        eyebrow: "Who you're helping",
        heading: "Thirty-eight names. Eight you can meet today.",
        body: "Every donation reaches a real person — a grandmother, a brother, a friend. Here are eight of the residents who call Hogar de Ancianos Giuseppe Angelucci theirs. The other thirty live just past this gallery."
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
        card_3_cta: "Get in touch"
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
        international_status: "We are finalizing these. Check back in a few days, or email us and we'll guide you."
      },
      footer: {
        tagline: "Help us bring water — and dignity — back to thirty-eight elders in Zaragoza, El Salvador.",
        contact_heading: "Contact",
        contact_email: "contactogenteayudandogente@gmail.com",
        follow_heading: "Follow the story",
        credits: "© 2026 Asociación Gente Ayudando Gente · Hogar de Ancianos Giuseppe Angelucci",
        brand_title: "Zaragoza Home",
        brand_sub: "Hogar Giuseppe Angelucci · El Salvador"
      },
      a11y: {
        lang_toggle: "Switch language",
        skip_to_main: "Skip to main content"
      },
      share: {
        title: "Zaragoza Home",
        text: "Thirty-eight elders. Two days of water a week. A $9 monthly bill became a $50,000 debt. Help us turn the water back on.",
        copied: "Link copied to clipboard"
      }
    },

    es: {
      meta: {
        title: "Hogar Giuseppe Angelucci — Ayúdanos a devolverles el agua a 38 ancianos",
        description: "Durante décadas pagaron $9 al mes por el agua en el Hogar de Ancianos Giuseppe Angelucci, en Zaragoza, La Libertad. En enero de 2024 las facturas subieron a $750 y siguieron acumulándose. Hoy la deuda supera los $50,000 y el agua llega solo dos días a la semana. 38 ancianos necesitan tu ayuda.",
        lang_label: "Español",
        lang_other: "English"
      },
      nav: {
        story: "Su historia", watch: "Ver", crisis: "La crisis",
        faces: "Los rostros", team: "El equipo", donate: "Donar"
      },
      hero: {
        eyebrow: "Hogar de Ancianos Giuseppe Angelucci · Zaragoza, La Libertad, El Salvador",
        headline: "Treinta y ocho ancianos.\nDos días de agua por semana.",
        subhead: "Durante décadas pagaron $9 al mes por el agua. En enero de 2024 llegó una factura de $750. Luego otra. Y otra. Hoy la deuda supera los $50,000 — por un agua que casi no tienen.",
        cta_primary: "Donar ahora",
        cta_secondary: "Leer su historia"
      },
      video: {
        eyebrow: "Mira su historia",
        heading: "Dos minutos dentro del hogar",
        body: "Un breve documental del Hogar de Ancianos Giuseppe Angelucci. Subtítulos en español e inglés.",
        play: "Ver el video",
        loading: "Cargando…"
      },
      story: {
        eyebrow: "Quiénes somos",
        heading: "Un hogar para quienes no tienen otro lugar",
        body_1: "En un pequeño pueblo llamado Zaragoza, en el departamento de La Libertad, El Salvador, treinta y ocho ancianos y ancianas viven juntos en un modesto hogar llamado Hogar de Ancianos Giuseppe Angelucci. El terreno fue dado en comodato a una iglesia local por 25 años. El edificio fue construido por la Embajada de Taiwán en El Salvador. Durante décadas, lo que llegaba de vecinos, iglesias y voluntarios alcanzaba para mantener la luz y la cocina.",
        body_2: "Muchos llegaron sin nadie. Solo tres de los treinta y ocho son visitados por sus familias. Los otros treinta y cinco pasan sus últimos años enteramente al cuidado del equipo de siete personas que sostiene el hogar — y de los donantes y voluntarios que lo hacen posible. Uno fue dejado bajo un árbol en la entrada, malherido, y nunca lo reclamaron. Esta es la realidad. El hogar no pide caridad. Pide que el agua vuelva a correr, y que alguien siga cuidando.",
        caption: "La entrada del Hogar de Ancianos Giuseppe Angelucci — Zaragoza, La Libertad."
      },
      crisis: {
        eyebrow: "Lo que pasó",
        heading: "Una factura de $9 se convirtió en una catástrofe de $50,000",
        body_1: "Durante décadas, la factura del agua rondaba los $9 al mes. En enero de 2024 llegó una factura de $750. La siguiente, más alta. La siguiente, más todavía. ANDA — la empresa de agua — señaló una fuga subterránea que nadie pudo encontrar.",
        body_2: "Tres inspecciones distintas, una de ellas dirigida por la directora del hogar, Carolina, confirmaron lo mismo: no hay fuga. Los residentes echan agua en los inodoros con cubeta. Se bañan con galones traídos por los vecinos. El hogar no tiene piscina. Como dijo Suzi, una de las donantes más constantes: \"Tendrían que tener un parque de agua gigante, llenarlo y vaciarlo una y otra vez, para gastar tanta agua.\"",
        body_3: "Y aun así, en aproximadamente dieciocho meses, el hogar debe más de cincuenta mil dólares — el equivalente a ciento treinta y cuatro años de facturas normales, acumulados en un año y medio. Tres directores distintos de ANDA se han negado a perdonar la deuda. Mientras tanto, el agua llega a los grifos solo dos días a la semana.",
        stat_1_value: "$9", stat_1_label: "La factura mensual histórica",
        stat_2_value: "$50,000+", stat_2_label: "Deuda acumulada desde ene-2024",
        stat_3_value: "2", stat_3_label: "Días de agua por semana",
        stat_4_value: "38", stat_4_label: "Residentes afectados",
        photo_1_caption: "La pila — el principal depósito de agua del hogar. Casi siempre vacía.",
        photo_2_caption: "Cubetas y guacales que reemplazan al agua corriente.",
        photo_3_caption: "El medidor de agua sobre el que ANDA cobra esta deuda."
      },
      faces: {
        eyebrow: "A quiénes ayudas",
        heading: "Treinta y ocho nombres. Ocho que puedes conocer hoy.",
        body: "Cada donación llega a una persona real — una abuela, un hermano, un amigo. Aquí ocho de los residentes del Hogar de Ancianos Giuseppe Angelucci. Los otros treinta viven justo detrás de esta galería."
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
        card_3_cta: "Escríbenos"
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
        international_status: "Estamos terminando de configurar estos canales. Vuelve en unos días o escríbenos y te guiamos."
      },
      footer: {
        tagline: "Ayúdanos a devolverles el agua —y la dignidad— a treinta y ocho ancianos en Zaragoza, El Salvador.",
        contact_heading: "Contacto",
        contact_email: "contactogenteayudandogente@gmail.com",
        follow_heading: "Sigue la historia",
        credits: "© 2026 Asociación Gente Ayudando Gente · Hogar de Ancianos Giuseppe Angelucci",
        brand_title: "Hogar Zaragoza",
        brand_sub: "Hogar Giuseppe Angelucci · El Salvador"
      },
      a11y: {
        lang_toggle: "Cambiar idioma",
        skip_to_main: "Saltar al contenido principal"
      },
      share: {
        title: "Hogar de Ancianos Giuseppe Angelucci",
        text: "Treinta y ocho ancianos. Dos días de agua por semana. Una factura de $9 al mes se convirtió en una deuda de $50,000. Ayúdanos a abrir el grifo de nuevo.",
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
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (_) {}
    const qp = new URLSearchParams(window.location.search).get('lang');
    if (qp && SUPPORTED.indexOf(qp) !== -1) return qp;
    const navLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (navLang.indexOf('es') === 0) return 'es';
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

  // Donate triggers scroll to #donate section (no modal)
  function initDonateTriggers() {
    document.querySelectorAll('.donate-trigger').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.getElementById('donate');
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  // Copy-account-number button
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

  function boot() {
    applyLang(detectInitialLang());
    initLangToggle();
    initDonateTriggers();
    initCopyAccount();
    initShare();
    initVideo();
    initHeaderScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else { boot(); }
})();
