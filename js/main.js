/* ================================================================
   Zaragoza Home — main.js
   - i18n (EN/ES toggle with auto-detect + persistence)
   - Donate modal open/close
   - Share button (Web Share API + clipboard fallback)
   - Video click-to-load (avoids autoloading the 14MB MP4)
   - Sticky header scroll state

   Locale strings are inlined here so the site works on file://
   (no fetch / CORS issues for local preview). The locales/*.json
   files mirror this data for editorial / translator use.
   ================================================================ */

(function () {
  'use strict';

  const LOCALES = {
    en: {
      meta: {
        title: "Zaragoza Home — Help us bring water back to 50 forgotten elders",
        description: "For decades, a small nursing home in Zaragoza, El Salvador paid $9/month for water. Then a hidden leak created a $15,000 debt. Fifty elders have been without running water for months. Help us turn the taps back on.",
        lang_label: "English",
        lang_other: "Español"
      },
      nav: {
        story: "Their story", watch: "Watch", crisis: "The crisis",
        faces: "The faces", help: "How to help", donate: "Donate"
      },
      hero: {
        eyebrow: "Asilo de Ancianos · Zaragoza, El Salvador",
        headline: "Fifty elders.\nMonths without water.",
        subhead: "For decades they paid $9 a month for water. Then a hidden leak, an impossible bill, and a system that turned its back. Help us bring water — and dignity — back to Asilo de Ancianos Zaragoza.",
        cta_primary: "Donate now", cta_secondary: "Read their story"
      },
      video: {
        eyebrow: "Watch their story",
        heading: "Two minutes inside the home",
        body: "A short documentary from the staff at Asilo de Ancianos Zaragoza. Subtitles in English and Spanish.",
        play: "Play the story", loading: "Loading…"
      },
      story: {
        eyebrow: "Who we are",
        heading: "A home for those with nowhere else",
        body_1: "In a small town called Zaragoza, in central El Salvador, more than 50 elderly men and women live together in a modest house that has become their family. Many arrived with no one — no family who could care for them, no savings, no other place in the world to go.",
        body_2: "The staff and volunteers who keep the home running do so on what little comes in from neighbors, churches, and people who happen to hear the story. For decades, that has been enough to keep the lights on, the kitchen running, and the taps flowing. Until now.",
        caption: "Two friends at Asilo de Ancianos Zaragoza — their thank-you notes for a recent visit."
      },
      crisis: {
        eyebrow: "What happened",
        heading: "A $9 bill became a $15,000 catastrophe",
        body_1: "In the span of two years, something broke. The water bill — always around $9 a month — began climbing. And climbing. By the time anyone could understand what was happening, the home owed more than fifteen thousand dollars to the water utility.",
        body_2: "More than a century of normal bills, demanded in just twenty-four months. Somewhere underground, water has been pouring out of a leak that no one will take responsibility for. The utility insists the home must pay. The home cannot.",
        body_3: "For months now, the taps have been dry. Fifty elders are bathing from buckets, drinking from gallons brought by neighbors, and waiting for a justice that hasn't come.",
        stat_1_value: "$9", stat_1_label: "The historic monthly bill",
        stat_2_value: "$15,000+", stat_2_label: "The impossible debt",
        stat_3_value: "TBD", stat_3_label: "Months without running water",
        stat_4_value: "50+", stat_4_label: "Residents affected"
      },
      faces: {
        eyebrow: "Who you're helping",
        heading: "The faces of Asilo de Ancianos Zaragoza",
        body: "Every donation reaches a real person — a grandmother, a brother, a friend. Here are a few of the elders who call this home theirs."
      },
      help: {
        eyebrow: "Make a difference",
        heading: "Three ways to help right now",
        card_1_title: "Donate",
        card_1_body: "Every contribution — small or large — moves us closer to clearing the debt and turning the water back on.",
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
        heading: "Together we can turn the water back on",
        body: "Every dollar moves us closer to clearing this debt and restoring running water to Asilo de Ancianos Zaragoza. 100% of donations go directly to the home and its residents.",
        cta: "Donate to Asilo de Ancianos Zaragoza"
      },
      modal: {
        title: "Choose how to give",
        subtitle: "Pick the option that works best for you. Every channel reaches the home directly.",
        option_gofundme_title: "GoFundMe",
        option_gofundme_body: "Quickest for international donors. Card payments accepted in most currencies.",
        option_gofundme_cta: "Open campaign",
        option_paypal_title: "PayPal",
        option_paypal_body: "One-time or recurring. Best for donors with a PayPal account.",
        option_paypal_cta: "Send via PayPal",
        option_bank_title: "Bank transfer (El Salvador)",
        option_bank_body: "For local donors. Account details will be provided here shortly.",
        option_bank_cta: "View details",
        close: "Close",
        tbd_note: "Donation links coming soon. We're finalizing the channels — check back in a few days."
      },
      footer: {
        tagline: "Help us bring water — and dignity — back to fifty elders in Zaragoza, El Salvador.",
        contact_heading: "Contact",
        contact_email: "hello@zaragozahome.org",
        follow_heading: "Follow the story",
        credits: "© 2026 Asilo de Ancianos Zaragoza. Built with care.",
        brand_title: "Zaragoza Home",
        brand_sub: "Nursing Home · El Salvador"
      },
      a11y: {
        lang_toggle: "Switch language",
        open_donate: "Open donation options",
        close_modal: "Close donation options",
        skip_to_main: "Skip to main content"
      },
      share: {
        title: "Zaragoza Home",
        text: "Fifty elders. Months without water. A $9 monthly bill became a $15,000 debt. Help us turn the taps back on.",
        copied: "Link copied to clipboard"
      }
    },

    es: {
      meta: {
        title: "Asilo de Ancianos Zaragoza — Ayúdanos a devolverles el agua a 50 ancianos olvidados",
        description: "Durante décadas, este pequeño asilo de ancianos en Zaragoza, El Salvador pagó $9 al mes por el agua. Una fuga oculta generó una deuda de más de $15,000. Cincuenta ancianos llevan meses sin agua corriente. Ayúdanos a abrir el grifo de nuevo.",
        lang_label: "Español",
        lang_other: "English"
      },
      nav: {
        story: "Su historia", watch: "Ver", crisis: "La crisis",
        faces: "Los rostros", help: "Cómo ayudar", donate: "Donar"
      },
      hero: {
        eyebrow: "Asilo de Ancianos · Zaragoza, El Salvador",
        headline: "Cincuenta ancianos.\nMeses sin agua.",
        subhead: "Durante décadas pagaron $9 al mes por el agua. Luego, una fuga oculta, una factura imposible y un sistema que les dio la espalda. Ayúdanos a devolverles el agua —y la dignidad— al Asilo de Ancianos Zaragoza.",
        cta_primary: "Donar ahora", cta_secondary: "Leer su historia"
      },
      video: {
        eyebrow: "Mira su historia",
        heading: "Dos minutos dentro del asilo",
        body: "Un breve documental del Asilo de Ancianos Zaragoza. Subtítulos en español e inglés.",
        play: "Ver el video", loading: "Cargando…"
      },
      story: {
        eyebrow: "Quiénes somos",
        heading: "Un hogar para quienes no tienen otro lugar",
        body_1: "En un pequeño pueblo llamado Zaragoza, en el centro de El Salvador, más de 50 ancianos y ancianas viven juntos en una casa modesta que se ha convertido en su familia. Muchos llegaron sin nadie — sin familia que pudiera cuidarlos, sin ahorros, sin otro lugar en el mundo al que ir.",
        body_2: "El personal y los voluntarios que mantienen el hogar lo hacen con lo poco que llega de vecinos, iglesias y de quienes alguna vez escuchan la historia. Durante décadas, eso fue suficiente para mantener la luz, la cocina y los grifos funcionando. Hasta ahora.",
        caption: "Dos amigas del Asilo de Ancianos Zaragoza — sus tarjetas de agradecimiento por una visita reciente."
      },
      crisis: {
        eyebrow: "Lo que pasó",
        heading: "Una factura de $9 se convirtió en una catástrofe de $15,000",
        body_1: "En el lapso de dos años algo se rompió. La factura del agua — siempre alrededor de $9 al mes — comenzó a subir. Y a subir. Para cuando alguien pudo entender qué estaba pasando, el asilo ya debía más de quince mil dólares a la empresa de agua.",
        body_2: "Más de un siglo de facturas normales, exigidas en solo veinticuatro meses. En algún lugar bajo tierra, el agua sale por una fuga de la que nadie quiere hacerse responsable. La empresa insiste en que el asilo debe pagar. El asilo no puede.",
        body_3: "Desde hace meses, los grifos están secos. Cincuenta ancianos se bañan con cubetas, beben de galones que traen los vecinos y esperan una justicia que no llega.",
        stat_1_value: "$9", stat_1_label: "La factura mensual histórica",
        stat_2_value: "$15,000+", stat_2_label: "La deuda imposible",
        stat_3_value: "TBD", stat_3_label: "Meses sin agua corriente",
        stat_4_value: "50+", stat_4_label: "Residentes afectados"
      },
      faces: {
        eyebrow: "A quiénes ayudas",
        heading: "Los rostros del Asilo de Ancianos Zaragoza",
        body: "Cada donación llega a una persona real — una abuela, un hermano, un amigo. Aquí algunos de los ancianos que llaman a este lugar su hogar."
      },
      help: {
        eyebrow: "Haz la diferencia",
        heading: "Tres maneras de ayudar ahora mismo",
        card_1_title: "Donar",
        card_1_body: "Cada aporte — pequeño o grande — nos acerca a pagar la deuda y abrir el grifo de nuevo.",
        card_1_cta: "Donar ahora",
        card_2_title: "Compartir",
        card_2_body: "La historia es la campaña. Comparte esta página con cualquiera que pueda interesarse — cada vez que se comparte, el alcance crece.",
        card_2_cta: "Compartir la página",
        card_3_title: "Visitar",
        card_3_body: "Si estás en El Salvador, ven a conocerlos. Trae agua, trae comida, trae tu tiempo. Te van a recordar.",
        card_3_cta: "Escríbenos"
      },
      donate_section: {
        eyebrow: "La meta",
        heading: "Juntos podemos volver a abrir el agua",
        body: "Cada dólar nos acerca a pagar esta deuda y restablecer el agua corriente en el Asilo de Ancianos Zaragoza. El 100% de las donaciones llega directamente al asilo y a sus residentes.",
        cta: "Donar al Asilo de Ancianos Zaragoza"
      },
      modal: {
        title: "Elige cómo donar",
        subtitle: "Escoge la opción que mejor te funcione. Cada canal llega directo al asilo.",
        option_gofundme_title: "GoFundMe",
        option_gofundme_body: "El más rápido para donantes internacionales. Acepta tarjeta en la mayoría de monedas.",
        option_gofundme_cta: "Abrir campaña",
        option_paypal_title: "PayPal",
        option_paypal_body: "Donación única o recurrente. Ideal para quienes tienen cuenta PayPal.",
        option_paypal_cta: "Enviar por PayPal",
        option_bank_title: "Transferencia bancaria (El Salvador)",
        option_bank_body: "Para donantes locales. Pronto publicaremos los datos de la cuenta.",
        option_bank_cta: "Ver datos",
        close: "Cerrar",
        tbd_note: "Enlaces de donación próximamente. Estamos terminando de configurar los canales — vuelve en unos días."
      },
      footer: {
        tagline: "Ayúdanos a devolverles el agua —y la dignidad— a cincuenta ancianos en Zaragoza, El Salvador.",
        contact_heading: "Contacto",
        contact_email: "hola@zaragozahome.org",
        follow_heading: "Sigue la historia",
        credits: "© 2026 Asilo de Ancianos Zaragoza. Hecho con cariño.",
        brand_title: "Asilo Zaragoza",
        brand_sub: "Zaragoza · El Salvador"
      },
      a11y: {
        lang_toggle: "Cambiar idioma",
        open_donate: "Abrir opciones de donación",
        close_modal: "Cerrar opciones de donación",
        skip_to_main: "Saltar al contenido principal"
      },
      share: {
        title: "Asilo de Ancianos Zaragoza",
        text: "Cincuenta ancianos. Meses sin agua. Una factura de $9 al mes se convirtió en una deuda de $15,000. Ayúdanos a abrir el grifo de nuevo.",
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
    const params = new URLSearchParams(window.location.search);
    const qp = params.get('lang');
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
      const key = el.getAttribute('data-i18n');
      const value = getByPath(dict, key);
      if (typeof value === 'string') el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      const spec = el.getAttribute('data-i18n-attr');
      spec.split(',').forEach(function (pair) {
        const parts = pair.trim().split(':');
        if (parts.length !== 2) return;
        const attr = parts[0].trim();
        const key = parts[1].trim();
        const value = getByPath(dict, key);
        if (typeof value === 'string') el.setAttribute(attr, value);
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
      const next = current === 'en' ? 'es' : 'en';
      applyLang(next);
    });
  }

  let lastFocusedBeforeModal = null;
  function openDonateModal() {
    const modal = document.getElementById('donate-modal');
    if (!modal) return;
    lastFocusedBeforeModal = document.activeElement;
    modal.hidden = false;
    document.body.classList.add('modal-open');
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) setTimeout(function(){ closeBtn.focus(); }, 0);
  }
  function closeDonateModal() {
    const modal = document.getElementById('donate-modal');
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    if (lastFocusedBeforeModal && lastFocusedBeforeModal.focus) lastFocusedBeforeModal.focus();
  }
  function initDonateModal() {
    document.querySelectorAll('.donate-trigger').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        openDonateModal();
      });
    });
    document.querySelectorAll('[data-close-modal]').forEach(function (el) {
      el.addEventListener('click', closeDonateModal);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        const modal = document.getElementById('donate-modal');
        if (modal && !modal.hidden) closeDonateModal();
      }
    });
  }

  function initShare() {
    const btns = document.querySelectorAll('.share-btn');
    btns.forEach(function (btn) {
      btn.addEventListener('click', async function () {
        const lang = document.documentElement.getAttribute('lang') || 'en';
        const dict = LOCALES[lang];
        const shareData = {
          title: getByPath(dict, 'share.title'),
          text: getByPath(dict, 'share.text'),
          url: window.location.href
        };
        try {
          if (navigator.share) {
            await navigator.share(shareData);
          } else if (navigator.clipboard) {
            await navigator.clipboard.writeText(shareData.url);
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
    initDonateModal();
    initShare();
    initVideo();
    initHeaderScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
