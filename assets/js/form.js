/* ─────────────────────────────────────────────
   SWANANDA — Form
   Inquiry form validation and submission.

   TO CONNECT A REAL BACKEND:
   Replace the "TODO" section below with a fetch()
   call to Netlify Forms, Formspree, or your API.
   ───────────────────────────────────────────── */

function submitForm() {
  // Collect values
  const name     = document.getElementById('f-name')?.value.trim();
  const business = document.getElementById('f-business')?.value.trim();
  const phone    = document.getElementById('f-phone')?.value.trim();
  const estab    = document.getElementById('f-estab')?.value;
  const email    = document.getElementById('f-email')?.value.trim();
  const city     = document.getElementById('f-city')?.value.trim();
  const volume   = document.getElementById('f-volume')?.value;
  const message  = document.getElementById('f-message')?.value.trim();

  const flavours = [...document.querySelectorAll('.form__checkboxes input:checked')]
    .map(cb => cb.value)
    .join(', ') || 'Not specified';

  // Validate required fields
  if (!name || !business || !phone || !estab) {
    alert('Please fill in all required fields: Name, Business, Phone, and Establishment Type.');
    return;
  }

  const payload = { name, business, phone, email, estab, city, flavours, volume, message };
  console.log('Form submitted:', payload);

  // ── TODO: send to Netlify / Formspree ────────
  // Example for Netlify Forms — add name="inquiry"
  // and data-netlify="true" to the form element,
  // then use fetch('/') with FormData.
  //
  // Example for Formspree:
  // fetch('https://formspree.io/f/YOUR_ID', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(payload)
  // });
  // ─────────────────────────────────────────────

  // Show success state
  const successEl = document.getElementById('formSuccess');
  const submitBtn = document.getElementById('submitBtn');

  if (successEl) successEl.style.display = 'block';

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = '✓ Inquiry Sent';
  }

  if (successEl) {
    successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
