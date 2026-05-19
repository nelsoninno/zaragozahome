/* ================================================================
   Zaragoza Home, main.js  (v3)
   Bilingual EN/ES, donate flow, video click-to-load, lightbox,
   sticky header.
   ================================================================ */
(function () {
  'use strict';

  const LOCALES = {
    en: {
      meta: {
        title: "Zaragoza Home, Help 38 elders bring water back",
        description: "For decades they paid $9 a month for water at Hogar de Ancianos Giuseppe Angelucci in Zaragoza, El Salvador. Then bills jumped to $750, and kept stacking. Today the home owes over $15,000, and water runs only two days a week. 38 elders need your help.",
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
        subhead: "For decades they paid $9 a month for water. In January 2024 the bill arrived at $750. Then another. And another. Today the debt sits at over $15,000, for water they barely have.",
        cta_primary: "Donate now",
        cta_secondary: "Read their story"
      },
      story: {
        eyebrow: "Who we are",
        heading: "A home for those with nowhere else",
        name_note: "On its official sign, this place is called “Hogar de Ancianos Giuseppe Angelucci”, its registered name, after the founders. Those founders are no longer involved. Today, the donors and community who keep the home alive simply call it Zaragoza Home, a name that fits what it has become.",
        body_1: "In a small town called Zaragoza, in the department of La Libertad, El Salvador, thirty-eight elderly men and women live together at Hogar de Ancianos Giuseppe Angelucci, a small home officially recognized as serving a vulnerable community. The building itself was built by the Embassy of Taiwan in El Salvador. For decades, what came in from neighbors, churches, and the occasional volunteer was enough to keep the lights on and the kitchen running.",
        body_2: "Many residents arrived with no one. Only three of the thirty-eight are visited by their families. The other thirty-five spend their last years entirely in the care of the seven-person team that runs the home, and the donors and volunteers who keep it going. One resident was left at the entrance under a tree, badly hurt, and never claimed. This is the quiet reality. The home is not asking for charity. It is asking that the water keeps running, and that someone keeps caring.",
        caption: "The entrance to Hogar de Ancianos Giuseppe Angelucci, Zaragoza, La Libertad."
      },
      video: {
        eyebrow: "Watch their story",
        heading: "Two minutes inside the home",
        body: "A short documentary from the staff at Hogar de Ancianos Giuseppe Angelucci. Subtitles in English and Spanish.",
        play: "Play the story", loading: "Loading…"
      },
      crisis: {
        eyebrow: "What happened",
        heading: "Stable for ten years. Impossible since January 2024.",
        intro: "The water utility replaced the home's meter in January 2024. The very next bill was dozens of times higher, and the bills have not stopped climbing since.",
        body_1: "For more than a decade, the bill was around $9 a month. Then, in January 2024, the water utility replaced the meter. The bills have not stopped climbing since. Today, the home owes more than $15,000.",
        body_2: "An official inspection in March 2025 confirmed it on paper: water reaches the home only two days a week. Residents bathe with buckets and gallons brought by neighbors. There is no laundry machine, no pool, no irrigation.",
        body_3: "And yet the bills keep climbing. The most recent invoice alone is over $1,000, for water that, by the utility's own inspection, does not even reach the home most days. Somewhere underground, water appears to be leaving the system before it gets there. The utility insists the home must pay.",
        body_4: "Most homes in El Salvador pay between $0.21 and $0.30 per cubic meter of water, under residential or bulk-condominium tariffs. The home is billed at $3.40/m³, the commercial maximum tier. That is roughly 15× the rate a typical condominium pays for the same water. A nursing home for thirty-eight elderly people, with water two days a week, is being billed at the same rate as a hotel laundry.",
        stat_1_value: "$9", stat_1_label: "The historic monthly bill",
        stat_2_value: "$15,000+", stat_2_label: "Accumulated debt since Jan 2024",
        stat_3_value: "2", stat_3_label: "Days of water per week",
        stat_4_value: "38", stat_4_label: "Residents affected",
        photo_1_caption: "The pila, the home's main water reservoir. Mostly empty.",
        photo_2_caption: "Buckets and basins used in place of running water.",
        photo_3_caption: "The water meter being billed against.",
        chart_title: "What the home has been billed each month",
        chart_subtitle: "Monthly water bills · Apr 2023 to Nov 2025",
        chart_stable_label: "Stable for a decade",
        chart_fair_note: "Dashed line: a fair monthly bill at regular residential use, around $67.",
        chart_pre_label: "Before the meter change",
        chart_after_label: "After the meter change",
        chart_meter_event: "Meter replaced",
        chart_fair_max: "What a fair monthly maximum would be (~$241)",
        chart_axis_year_2023: "2023",
        chart_axis_year_2024: "2024",
        chart_axis_year_2025: "2025",
        update_note: "Update: the water utility has agreed to replace the meter again. Bills are expected to come back down to around $20 a month."
      },
      place: {
        eyebrow: "The place",
        heading: "Painted walls. Tended plants. A place worth keeping.",
        body: "The home runs on what comes in. Walls have been painted. Plants are tended. The kitchen is clean. Most beds were recently replaced. The team takes pride in what they have. What remains is maintenance, every wall, every chair, every corner needs ongoing care. With your help, the home keeps its dignity.",
        photo_1_caption: "The courtyard, with the tree the residents sit under most afternoons.",
        photo_2_caption: "An afternoon in the common room, residents, staff, and volunteers together.",
        photo_3_caption: "A walkway lined with flowers. The older medical beds at the far end are gradually being replaced.",
        photo_4_caption: "A side wall and the front gate, quiet, well-kept.",
        photo_5_caption: "Furniture that has earned its rest. Maintenance never stops.",
        photo_6_caption: "The wheelchairs that get the residents through the day."
      },
      abandoned_callout: {
        line_1: "35 of 38",
        line_2: "residents have been completely abandoned by their families."
      },
      faces: {
        eyebrow: "Who you're helping",
        heading: "Thirty-eight names. Eight you can meet today.",
        body: "Every donation reaches a real person, a grandmother, a brother, a friend. Tap any face to see them larger. The other thirty live just past this gallery."
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
        card_2_body: "The story is the fundraiser. Share this page with anyone who might care, every share extends the reach.",
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
        international_subtitle: "GoFundMe and PayPal channels, coming soon.",
        international_status: "We are finalizing these. Check back in a few days, or message Carolina on WhatsApp and we'll guide you."
      },
      footer: {
        tagline: "Help us bring water, and dignity, back to thirty-eight elders in Zaragoza, El Salvador.",
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
        title: "Hogar Giuseppe Angelucci, Ayúdanos a devolverles el agua a 38 ancianos",
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
        subhead: "Durante décadas pagaron $9 al mes por el agua. En enero de 2024 llegó una factura de $750. Luego otra. Y otra. Hoy la deuda supera los $15,000, por un agua que casi no tienen.",
        cta_primary: "Donar ahora",
        cta_secondary: "Leer su historia"
      },
      story: {
        eyebrow: "Quiénes somos",
        heading: "Un hogar para quienes no tienen otro lugar",
        name_note: "En su rótulo oficial, este lugar se llama “Hogar de Ancianos Giuseppe Angelucci”, su nombre registrado, en honor a sus fundadores. Esos fundadores ya no están involucrados. Hoy los donantes y la comunidad que mantienen vivo el hogar simplemente lo llaman Zaragoza Home, un nombre que refleja lo que se ha convertido.",
        body_1: "En un pequeño pueblo llamado Zaragoza, en el departamento de La Libertad, El Salvador, treinta y ocho ancianos y ancianas viven juntos en el Hogar de Ancianos Giuseppe Angelucci, un hogar oficialmente reconocido por atender a una comunidad vulnerable. El edificio fue construido por la Embajada de Taiwán en El Salvador. Durante décadas, lo que llegaba de vecinos, iglesias y voluntarios alcanzaba para mantener la luz y la cocina.",
        body_2: "Muchos llegaron sin nadie. Solo tres de los treinta y ocho son visitados por sus familias. Los otros treinta y cinco pasan sus últimos años enteramente al cuidado del equipo de siete personas que sostiene el hogar, y de los donantes y voluntarios que lo hacen posible. Uno fue dejado bajo un árbol en la entrada, malherido, y nunca lo reclamaron. Esta es la realidad. El hogar no pide caridad. Pide que el agua vuelva a correr, y que alguien siga cuidando.",
        caption: "La entrada del Hogar de Ancianos Giuseppe Angelucci, Zaragoza, La Libertad."
      },
      video: {
        eyebrow: "Mira su historia",
        heading: "Dos minutos dentro del hogar",
        body: "Un breve documental del Hogar de Ancianos Giuseppe Angelucci. Subtítulos en español e inglés.",
        play: "Ver el video", loading: "Cargando…"
      },
      crisis: {
        eyebrow: "Lo que pasó",
        heading: "Estable durante diez años. Imposible desde enero de 2024.",
        intro: "La empresa de agua reemplazó el medidor del hogar en enero de 2024. La siguiente factura fue decenas de veces más alta, y las facturas no han parado de subir desde entonces.",
        body_1: "Durante más de una década, la factura rondaba los $9 al mes. Entonces, en enero de 2024, la empresa de agua reemplazó el medidor. Las facturas no han parado de subir desde entonces. Hoy el hogar debe más de $15,000.",
        body_2: "Una inspección oficial en marzo de 2025 confirmó por escrito que el agua llega al hogar solo dos días por semana. Los residentes se bañan con cubetas y galones que traen los vecinos. No hay lavadora, ni piscina, ni riego.",
        body_3: "Y aun así las facturas siguen subiendo. La última factura sola supera los $1,000, por un agua que, según la inspección de la propia empresa, ni siquiera llega al hogar la mayoría de los días. En algún punto bajo tierra, el agua se está escapando antes de llegar al lugar. La empresa insiste en que el hogar debe pagar.",
        body_4: "La mayoría de los hogares en El Salvador paga entre $0.21 y $0.30 por metro cúbico de agua, bajo tarifas residenciales o de condominio en bloque. Al hogar le cobran $3.40/m³, el tope de la tarifa comercial. Eso es aproximadamente 15× la tarifa que paga un condominio típico por la misma agua. Un asilo para treinta y ocho ancianos, con agua dos días a la semana, está siendo facturado a la misma tarifa que la lavandería de un hotel.",
        stat_1_value: "$9", stat_1_label: "La factura mensual histórica",
        stat_2_value: "$15,000+", stat_2_label: "Deuda acumulada desde ene-2024",
        stat_3_value: "2", stat_3_label: "Días de agua por semana",
        stat_4_value: "38", stat_4_label: "Residentes afectados",
        photo_1_caption: "La pila, el principal depósito de agua del hogar. Casi siempre vacía.",
        photo_2_caption: "Cubetas y guacales que reemplazan al agua corriente.",
        photo_3_caption: "El medidor de agua sobre el que se cobra esta deuda.",
        chart_title: "Lo que se le ha facturado al hogar cada mes",
        chart_subtitle: "Facturas mensuales de agua · Abr 2023 a Nov 2025",
        chart_stable_label: "Estable durante una década",
        chart_fair_note: "Línea punteada: una factura mensual justa al uso residencial regular, alrededor de $67.",
        chart_pre_label: "Antes del cambio de medidor",
        chart_after_label: "Después del cambio de medidor",
        chart_meter_event: "Medidor reemplazado",
        chart_fair_max: "Lo que sería un máximo mensual justo (~$241)",
        chart_axis_year_2023: "2023",
        chart_axis_year_2024: "2024",
        chart_axis_year_2025: "2025",
        update_note: "Actualización: la empresa de agua ha aceptado reemplazar el medidor nuevamente. Se espera que las facturas bajen a alrededor de $20 al mes."
      },
      place: {
        eyebrow: "El lugar",
        heading: "Paredes pintadas. Plantas cuidadas. Un lugar que vale la pena cuidar.",
        body: "El hogar funciona con lo que llega. Las paredes están pintadas. Las plantas se cuidan. La cocina se mantiene limpia. Casi todas las camas se reemplazaron recientemente. El equipo se enorgullece de lo que tienen. Lo que queda es mantenimiento, cada pared, cada silla, cada rincón necesita cuidado constante. Con tu ayuda, el hogar conserva su dignidad.",
        photo_1_caption: "El patio, con el árbol bajo el que los residentes se sientan casi todas las tardes.",
        photo_2_caption: "Una tarde en el área común, residentes, equipo y voluntarios juntos.",
        photo_3_caption: "Un corredor bordeado de flores. Las camas hospitalarias del fondo se están reemplazando poco a poco.",
        photo_4_caption: "Una pared lateral y el portón delantero, tranquilo, bien cuidado.",
        photo_5_caption: "Muebles que se han ganado el descanso. El mantenimiento nunca termina.",
        photo_6_caption: "Las sillas de ruedas que acompañan a los residentes todos los días."
      },
      abandoned_callout: {
        line_1: "35 de 38",
        line_2: "residentes han sido completamente abandonados por sus familias."
      },
      faces: {
        eyebrow: "A quiénes ayudas",
        heading: "Treinta y ocho nombres. Ocho que puedes conocer hoy.",
        body: "Cada donación llega a una persona real, una abuela, un hermano, un amigo. Toca cualquier rostro para verlo más grande. Los otros treinta viven justo detrás de esta galería."
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
        card_2_body: "La historia es la campaña. Comparte esta página con cualquiera que pueda interesarse, cada vez que se comparte, el alcance crece.",
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
        international_subtitle: "Canales de GoFundMe y PayPal, próximamente.",
        international_status: "Estamos terminando de configurar estos canales. Vuelve en unos días o escríbele a Carolina por WhatsApp y te guiamos."
      },
      footer: {
        tagline: "Ayúdanos a devolverles el agua,y la dignidada treinta y ocho ancianos en Zaragoza, El Salvador.",
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


  /* ---- Crisis chart: monthly bills timeline since Apr 2023 ---- */
  const CHART_DATA = [
    { label: 'Apr 23', bill: 9.90,   era: 'before' },
    { label: 'Jun 23', bill: 9.90,   era: 'before' },
    { label: 'Dec 23', bill: 9.90,   era: 'before' },
    { label: 'Jan 24', bill: 731.67, era: 'spike'  },
    { label: 'Feb 24', bill: 496.40, era: 'after'  },
    { label: 'Mar 24', bill: 564.40, era: 'after'  },
    { label: 'Aug 24', bill: 564.40, era: 'after'  },
    { label: 'Sep 24', bill: 537.20, era: 'after'  },
    { label: 'Oct 24', bill: 489.60, era: 'after'  },
    { label: 'Nov 24', bill: 290.00, era: 'after'  },
    { label: 'Dec 24', bill: 404.60, era: 'after'  },
    { label: 'Jan 25', bill: 493.00, era: 'after'  },
    { label: 'May 25', bill: 284.20, era: 'after'  },
    { label: 'Jul 25', bill: 683.40, era: 'after'  },
    { label: 'Aug 25', bill: 761.60, era: 'after'  },
    { label: 'Sep 25', bill: 744.60, era: 'after'  },
    { label: 'Oct 25', bill: 598.40, era: 'after'  },
    { label: 'Nov 25', bill: 1067.60, era: 'after' }
  ];

  function buildCrisisChart() {
    const host = document.getElementById('crisis-chart');
    if (!host) return;
    const W = 880, H = 380;
    const ML = 60, MR = 24, MT = 40, MB = 60;     // margins
    const innerW = W - ML - MR;
    const innerH = H - MT - MB;
    const maxY = 1100;
    const n = CHART_DATA.length;
    const barW = Math.min(34, (innerW - (n - 1) * 8) / n);
    const gap = (innerW - n * barW) / (n - 1);

    const yTicks = [0, 250, 500, 750, 1000];
    const yPos = v => MT + innerH - (v / maxY) * innerH;
    const fairMax = 67;
    const fairY = yPos(fairMax);

    let svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="crisis-chart-title" class="crisis-chart-svg">';
    svg += '<title id="crisis-chart-title">Monthly water bills, Apr 2023 to Nov 2025</title>';

    // Y-axis gridlines + labels
    yTicks.forEach(function (v) {
      const y = yPos(v);
      svg += '<line x1="' + ML + '" y1="' + y + '" x2="' + (W - MR) + '" y2="' + y + '" class="chart-grid" />';
      svg += '<text x="' + (ML - 8) + '" y="' + (y + 4) + '" text-anchor="end" class="chart-y-label">$' + v + '</text>';
    });

    // Fair-max dotted line + label
    svg += '<line x1="' + ML + '" y1="' + fairY + '" x2="' + (W - MR) + '" y2="' + fairY + '" class="chart-fairmax-line" />';
    // fair-max label is rendered as a note BELOW the chart instead

    // Bars (each with a stagger animation via inline style)
    CHART_DATA.forEach(function (d, i) {
      const x = ML + i * (barW + gap);
      const h = (d.bill / maxY) * innerH;
      // Minimum visible height for the tiny $9.90 bars so they show
      const visibleH = Math.max(h, 2);
      const y = MT + innerH - visibleH;
      const cls = 'chart-bar chart-bar-' + d.era;
      const delay = (i * 60) + 'ms';
      svg += '<rect class="' + cls + '" x="' + x + '" y="' + y + '" width="' + barW + '" height="' + visibleH + '" rx="2" style="animation-delay:' + delay + ';transform-origin:' + (x + barW/2) + 'px ' + (MT + innerH) + 'px"><title>' + d.label + ' · $' + d.bill.toFixed(2) + '</title></rect>';
      // Bar value labels on the tall bars
      if (d.bill > 300) {
        svg += '<text x="' + (x + barW / 2) + '" y="' + (y - 6) + '" text-anchor="middle" class="chart-bar-value">$' + Math.round(d.bill) + '</text>';
      }
    });

    // '$9.90' labels above the 2023 bars + 'Stable for a decade' annotation
    for (let pi = 0; pi < 3; pi++) {
      const px = ML + pi * (barW + gap) + barW / 2;
      const py = yPos(CHART_DATA[pi].bill) - 8;
      svg += '<text x="' + px + '" y="' + py + '" text-anchor="middle" class="chart-bar-value chart-bar-value-before">$9.90</text>';
    }
    // Stable-for-a-decade annotation: arrow + label above the 2023 cluster
    const stableMidX = ML + 1 * (barW + gap) + barW / 2;
    const stableY = yPos(0) - 70;
    svg += '<g class="chart-annotation">';
    svg += '<text x="' + stableMidX + '" y="' + stableY + '" text-anchor="middle" class="chart-anno-text chart-anno-text-before" data-i18n="crisis.chart_stable_label">Stable for a decade</text>';
    svg += '<path d="M ' + stableMidX + ' ' + (stableY + 6) + ' L ' + stableMidX + ' ' + (yPos(0) - 14) + '" class="chart-anno-arrow chart-anno-arrow-before" />';
    svg += '<polygon points="' + (stableMidX - 4) + ',' + (yPos(0) - 14) + ' ' + (stableMidX + 4) + ',' + (yPos(0) - 14) + ' ' + stableMidX + ',' + (yPos(0) - 6) + '" class="chart-anno-arrow-head chart-anno-arrow-head-before" />';
    svg += '</g>';

    // Spike annotation arrow + text pointing at Jan 24 bar (index 3)
    const spikeIdx = 3;
    const spikeX = ML + spikeIdx * (barW + gap) + barW / 2;
    const spikeY = yPos(CHART_DATA[spikeIdx].bill);
    const annoX = spikeX - 100;
    const annoY = spikeY - 28;
    svg += '<g class="chart-annotation">';
    svg += '<text x="' + (annoX - 6) + '" y="' + annoY + '" text-anchor="end" class="chart-anno-text" data-i18n="crisis.chart_meter_event">Meter replaced</text>';
    svg += '<text x="' + (annoX - 6) + '" y="' + (annoY + 16) + '" text-anchor="end" class="chart-anno-date">Jan 2024</text>';
    svg += '<path d="M ' + (annoX - 2) + ' ' + (annoY + 6) + ' Q ' + (annoX + 24) + ' ' + (annoY + 6) + ' ' + (spikeX - 6) + ' ' + (spikeY - 4) + '" class="chart-anno-arrow" />';
    svg += '<polygon points="' + (spikeX - 8) + ',' + (spikeY - 10) + ' ' + (spikeX - 2) + ',' + (spikeY - 2) + ' ' + (spikeX - 12) + ',' + (spikeY - 2) + '" class="chart-anno-arrow-head" />';
    svg += '</g>';

    // X-axis baseline
    svg += '<line x1="' + ML + '" y1="' + (MT + innerH) + '" x2="' + (W - MR) + '" y2="' + (MT + innerH) + '" class="chart-axis" />';

    // X-axis year labels, group bars by year and show year under midpoint
    const yearGroups = { 2023: [], 2024: [], 2025: [] };
    CHART_DATA.forEach(function (d, i) {
      const yr = '20' + d.label.slice(-2);
      yearGroups[yr].push(i);
    });
    Object.keys(yearGroups).forEach(function (yr) {
      const idxs = yearGroups[yr];
      if (!idxs.length) return;
      const startX = ML + idxs[0] * (barW + gap);
      const endX = ML + idxs[idxs.length - 1] * (barW + gap) + barW;
      const midX = (startX + endX) / 2;
      svg += '<text x="' + midX + '" y="' + (MT + innerH + 26) + '" text-anchor="middle" class="chart-year-label" data-i18n="crisis.chart_axis_year_' + yr + '">' + yr + '</text>';
      svg += '<line x1="' + startX + '" y1="' + (MT + innerH + 8) + '" x2="' + endX + '" y2="' + (MT + innerH + 8) + '" class="chart-year-rule" />';
    });

    svg += '</svg>';
    host.innerHTML = svg;
    // Re-apply i18n to the freshly inserted nodes
    applyLang(document.documentElement.getAttribute('lang') || 'en');
  }


  function boot() {
    applyLang(detectInitialLang());
    initLangToggle();
    initDonateTriggers();
    initCopyAccount();
    initShare();
    initVideo();
    initLightbox();
    buildCrisisChart();
    initHeaderScroll();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
