/* ─────────────────────────────────────────────
   SWANANDA — Render
   Reads SITE from content/site.js and builds
   the entire page. Do not edit HTML directly —
   update content/site.js instead.
   ───────────────────────────────────────────── */

// ── Helpers ──────────────────────────────────

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function ce(html) {
  // Wrap a string with contenteditable off by default
  return `<span contenteditable="false">${html}</span>`;
}

// ── NAV ──────────────────────────────────────

function renderNav() {
  const s = SITE.nav;
  const links = s.links.map(l =>
    `<li><a href="${l.href}"${l.href === SITE.nav.cta.href ? ' class="nav__cta"' : ''}>${l.label}</a></li>`
  ).join('');

  return `
    <nav class="nav">
      <a href="#" class="nav__brand">
        ${SITE.brand.slice(0, -4)}<span>${SITE.brand.slice(-4)}</span>
      </a>
      <ul class="nav__links">
        ${links}
        <li><a href="${s.cta.href}" class="nav__cta">${s.cta.label}</a></li>
      </ul>
    </nav>`;
}

// ── CAROUSEL ─────────────────────────────────

function renderCarousel() {
  const h = SITE.hero;

  const slides = h.slides.map(s =>
    `<div class="carousel__slide">
       <img src="${s.image}" alt="${s.label}" loading="eager">
     </div>`
  ).join('');

  const dots = h.slides.map((s, i) =>
    `<button class="carousel__dot${i === 0 ? ' active' : ''}" onclick="goTo(${i})" aria-label="${s.label}"></button>`
  ).join('');

  return `
    <div class="carousel" id="carousel">
      <div class="carousel__track" id="carouselTrack">${slides}</div>

      <div class="carousel__caption">
        <div class="carousel__badge" contenteditable="false">${h.badge}</div>
        <h1 class="heading heading--lg" contenteditable="false">${h.headline}</h1>
        <p class="body-text" style="color:rgba(255,255,255,0.8)" contenteditable="false">${h.subtext}</p>
        <div class="carousel__btns">
          <a href="${h.cta_primary.href}"   class="btn btn--primary">${h.cta_primary.label}</a>
          <a href="${h.cta_secondary.href}" class="btn btn--ghost">${h.cta_secondary.label}</a>
        </div>
      </div>

      <div class="carousel__dots">${dots}</div>

      <div class="carousel__arrows">
        <button class="carousel__arrow" onclick="prev()" aria-label="Previous">&#8593;</button>
        <button class="carousel__arrow" onclick="next()" aria-label="Next">&#8595;</button>
      </div>

      <div class="carousel__ticker">
        <div class="carousel__ticker-name" id="tickerName">${h.slides[0].label}</div>
        <div class="carousel__ticker-num"  id="tickerNum">01 / 0${h.slides.length}</div>
      </div>
    </div>`;
}

// ── MARQUEE ──────────────────────────────────

function renderMarquee() {
  const items = [...SITE.marquee, ...SITE.marquee]; // doubled for seamless loop
  const html = items.map((item, i) =>
    `<span class="marquee__item">${item}</span>${i % SITE.marquee.length === SITE.marquee.length - 1 ? '' : '<span class="marquee__item marquee__dot">&#10022;</span>'}`
  ).join('');

  return `
    <div class="marquee" aria-hidden="true">
      <div class="marquee__inner">${html}</div>
    </div>`;
}

// ── ABOUT ─────────────────────────────────────

function renderAbout() {
  const a = SITE.about;

  const paragraphs = a.body.map(p =>
    `<p class="body-text" contenteditable="false">${p}</p>`
  ).join('');

  const stats = a.stats.map(s => `
    <div>
      <div class="stat__value" contenteditable="false">${s.value}</div>
      <div class="stat__label" contenteditable="false">${s.label}</div>
    </div>`
  ).join('');

  return `
    <section class="section" id="about">
      <div class="grid-2">
        <div>
          <span class="label fade-up" contenteditable="false">${a.label}</span>
          <h2 class="heading fade-up delay-1" contenteditable="false">${a.headline}</h2>
          <div class="fade-up delay-2">${paragraphs}</div>
          <div class="stats-grid fade-up delay-3">${stats}</div>
        </div>
        <div class="fade-up delay-2">
          <div class="img-stack">
            <img class="img-stack__main"   src="${a.drinkImage}"  alt="Swananda Mocktail">
            <img class="img-stack__accent" src="${a.sachetImage}" alt="Premix Sachet">
          </div>
        </div>
      </div>
    </section>`;
}

// ── OFFERINGS ────────────────────────────────

function renderOfferings() {
  const standard = SITE.flavours.filter(f => f.type === 'standard');
  const prebiotic = SITE.flavours.filter(f => f.type === 'prebiotic');

  function card(f) {
    const badge = f.badge
      ? `<span class="badge badge--${f.badgeColor || 'amber'}">${f.badge}</span>`
      : '';
    const tags = f.tags.map(t => `<span class="tag">${t}</span>`).join('');
    return `
      <div class="catalog-card">
        <div class="catalog-card__images">
          <img src="${f.drinkImage}"  alt="${f.name} Drink" style="object-position:center 50%">
          <img src="${f.sachetImage}" alt="${f.name} Sachet" class="sachet">
        </div>
        <div class="catalog-card__body">
          ${badge}
          <div class="catalog-card__name" contenteditable="false">${f.name}</div>
          <p class="catalog-card__desc"   contenteditable="false">${f.description}</p>
          <div class="tags">${tags}</div>
        </div>
      </div>`;
  }

  const standardCards = standard.map(card).join('');
  const prebioticCards = prebiotic.map(card).join('');

  return `
    <section class="section section--tinted" id="offerings">
      <span class="label fade-up" contenteditable="false">Our Catalogue</span>
      <h2 class="heading fade-up delay-1" contenteditable="false">Choose Your Range</h2>
      <p class="body-text fade-up delay-2" style="max-width:55ch" contenteditable="false">
        Two distinct product lines. Signature flavours for every menu — and a prebiotic range no one else in Indian food service is offering yet.
      </p>

<div class="tabs fade-up delay-2">
        <button class="tab active" onclick="showTab('standard', this)">Standard Flavours</button>
        <button class="tab"        onclick="showTab('prebiotic', this)">Prebiotic Flavours</button>
        <button class="tab"        onclick="showTab('custom', this)">Custom Formulations</button>
      </div>

      <div class="tab-panel active" id="tab-standard">
        <div class="grid-${standard.length <= 3 ? standard.length : '3'}">
          ${standardCards}
        </div>
      </div>

      <div class="tab-panel" id="tab-prebiotic">
        <div class="callout" contenteditable="false">
          Our prebiotic range incorporates <strong>Sunfiber® AG</strong> — a clinically-studied soluble dietary fibre — delivering genuine functional benefit with every serving.
        </div>
        <div class="grid-2c">${prebioticCards}</div>
      </div>

      <div class="tab-panel" id="tab-custom">
        <div style="max-width:640px">
          <h3 class="heading" style="font-size:1.8rem;margin-bottom:1rem">${SITE.custom.headline}</h3>
          <p class="body-text">${SITE.custom.body}</p>
          <div style="margin-top:2rem">
            <a href="${SITE.custom.cta.href}" class="btn btn--dark">${SITE.custom.cta.label} &rarr;</a>
          </div>
        </div>
      </div>
    </section>`;
}

// ── HOW IT WORKS ──────────────────────────────

function renderHowItWorks() {
  const h = SITE.howItWorks;

  const steps = h.steps.map(s => `
    <div class="step fade-up">
      <div class="step__num">${s.num}</div>
      <div>
        <div class="step__title" contenteditable="false">${s.title}</div>
        <p class="step__body"    contenteditable="false">${s.body}</p>
      </div>
    </div>`
  ).join('');

  return `
    <div class="split-section" id="how">
      <div class="split-section__visual">
        <img src="${h.image}" alt="How to make Swananda mocktail">
      </div>
      <div class="split-section__content">
        <span class="label fade-up"         contenteditable="false">${h.label}</span>
        <h2  class="heading fade-up delay-1" contenteditable="false">${h.headline}</h2>
        <div class="steps">${steps}</div>
        <div style="margin-top:2.5rem">
          <a href="#sample" class="btn btn--dark fade-up delay-4">Request a Sample Kit &rarr;</a>
        </div>
      </div>
    </div>`;
}

// ── REQUEST SAMPLE ────────────────────────────

function renderSample() {
  const s = SITE.sample;

  const estabOptions = s.establishmentTypes.map(t =>
    `<option>${t}</option>`
  ).join('');

  const volumeOptions = s.volumeOptions.map(v =>
    `<option>${v}</option>`
  ).join('');

  const flavourCheckboxes = SITE.flavours.map(f => `
    <label class="form__checkbox">
      <input type="checkbox" value="${f.name}"> ${f.name}
    </label>`
  ).join('');

  return `
    <section class="section section--dark" id="sample">
      <div class="grid-2 grid-2--top">

        <div>
          <span class="label label--gold" contenteditable="false">${s.label}</span>
          <h2 class="heading heading--light fade-up" contenteditable="false">${s.headline}</h2>
          <p class="body-text body-text--light" contenteditable="false">${s.body}</p>
          <div class="contact-list">
            <div class="contact-item">
              <div class="contact-item__icon">&#128231;</div>
              <div class="contact-item__text">
                <strong>Email</strong>
                <span contenteditable="false">${s.contact.email}</span>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-item__icon">&#128205;</div>
              <div class="contact-item__text">
                <strong>Location</strong>
                <span contenteditable="false">${s.contact.location}</span>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-item__icon">&#127963;</div>
              <div class="contact-item__text">
                <strong>Incubated At</strong>
                <span contenteditable="false">${s.contact.incubator}</span>
              </div>
            </div>
          </div>
        </div>

        <form class="form" id="inquiryForm" name="inquiry" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="inquiry">
          <div class="form__row">
            <div class="form__group">
              <label class="form__label">Your Name *</label>
              <input id="f-name"     class="form__input"  type="text"  placeholder="Full name"        required>
            </div>
            <div class="form__group">
              <label class="form__label">Business Name *</label>
              <input id="f-business" class="form__input"  type="text"  placeholder="Restaurant / Hotel / Café" required>
            </div>
          </div>
          <div class="form__row">
            <div class="form__group">
              <label class="form__label">Phone Number *</label>
              <input id="f-phone"    class="form__input"  type="tel"   placeholder="+91 98765 43210"  required>
            </div>
            <div class="form__group">
              <label class="form__label">Email Address</label>
              <input id="f-email"    class="form__input"  type="email" placeholder="you@business.com">
            </div>
          </div>
          <div class="form__group">
            <label class="form__label">Type of Establishment *</label>
            <select id="f-estab" class="form__select" required>
              <option value="">Select establishment type</option>
              ${estabOptions}
            </select>
          </div>
          <div class="form__group">
            <label class="form__label">City / Location</label>
            <input id="f-city" class="form__input" type="text" placeholder="Bengaluru, Mumbai, Hyderabad...">
          </div>
          <div class="form__group">
            <label class="form__label">Flavours of Interest</label>
            <div class="form__checkboxes">${flavourCheckboxes}</div>
          </div>
          <div class="form__group">
            <label class="form__label">Approximate Monthly Volume</label>
            <select id="f-volume" class="form__select">
              <option value="">Select estimated volume</option>
              ${volumeOptions}
            </select>
          </div>
          <div class="form__group">
            <label class="form__label">Message (Optional)</label>
            <textarea id="f-message" class="form__textarea" placeholder="Tell us about your venue or specific requirements..."></textarea>
          </div>
          <button class="form__submit" id="submitBtn" onclick="submitForm()">
            Send Inquiry &amp; Request Sample Kit
          </button>
          <p class="form__note">We respond within 48 hours. Your information is never shared.</p>
          <div class="form__success" id="formSuccess">
            &#127807; Thank you! We've received your inquiry and will reach out within 48 hours.
          </div>
        </form>
      </div>
    </section>`;
}

// ── JOURNEY ───────────────────────────────────

function renderJourney() {
  const j = SITE.journey;

  const credentials = j.credentials.map(c => `
    <div class="credential credential--${c.color}">
      <span class="label label--${c.color}" contenteditable="false">${c.label}</span>
      <div class="credential__title" contenteditable="false">${c.title}</div>
      <p   class="credential__body"  contenteditable="false">${c.body}</p>
    </div>`
  ).join('');

  const milestones = j.milestones.map((m, i) => `
    <div class="milestone-card fade-up delay-${i + 1}">
      <div class="milestone-card__photo">
        <img src="${m.image}" alt="${m.title}">
        <div class="milestone-card__year">${m.year}</div>
      </div>
      <div class="milestone-card__body">
        <div class="milestone-card__tag"       contenteditable="false">${m.tag}</div>
        <div class="milestone-card__title"     contenteditable="false">${m.title}</div>
        <p   class="milestone-card__body-text" contenteditable="false">${m.body}</p>
      </div>
    </div>`
  ).join('');

  return `
    <section class="section" id="journey">
      <div class="grid-2 grid-2--end" style="margin-bottom:4rem">
        <div>
          <span class="label fade-up"         contenteditable="false">${j.label}</span>
          <h2  class="heading fade-up delay-1" contenteditable="false">${j.headline}</h2>
          <p   class="body-text fade-up delay-2" contenteditable="false">${j.body}</p>
        </div>
        <div class="credentials fade-up delay-3">${credentials}</div>
      </div>
      <div class="grid-3">${milestones}</div>
    </section>`;
}

// ── FOOTER ────────────────────────────────────

function renderFooter() {
  const f = SITE.footer;
  const links = SITE.nav.links.map(l =>
    `<li><a href="${l.href}">${l.label}</a></li>`
  ).join('');

  return `
    <footer class="footer">
      <a href="#" class="footer__brand">
        ${SITE.brand.slice(0, -4)}<span>${SITE.brand.slice(-4)}</span>
      </a>
      <ul class="footer__links">${links}</ul>
      <div class="footer__copy" contenteditable="false">
        ${f.tagline}
        <span class="footer__sub">${f.sub}</span>
      </div>
    </footer>`;
}

// ── EDIT TOGGLE ───────────────────────────────

function renderEditToggle() {
  return `
    <button class="edit-toggle" id="editToggle" onclick="toggleEditMode()">
      <span>&#9998;</span>
      <span id="editLabel">Edit Text</span>
    </button>`;
}

// ── INIT ──────────────────────────────────────

function init() {
  const app = document.getElementById('app');

  app.innerHTML = [
    renderEditToggle(),
    renderNav(),
    renderCarousel(),
    renderMarquee(),
    renderAbout(),
    renderOfferings(),
    renderHowItWorks(),
    renderSample(),
    renderJourney(),
    renderFooter()
  ].join('\n');

  // Scroll-reveal observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// ── EDIT MODE ─────────────────────────────────

let editMode = false;

function toggleEditMode() {
  editMode = !editMode;
  document.body.classList.toggle('editable-active', editMode);
  document.querySelectorAll('[contenteditable]').forEach(el =>
    el.setAttribute('contenteditable', editMode ? 'true' : 'false')
  );
  document.getElementById('editToggle').classList.toggle('active', editMode);
  document.getElementById('editLabel').textContent = editMode ? 'Done Editing' : 'Edit Text';
}

document.addEventListener('DOMContentLoaded', init);
