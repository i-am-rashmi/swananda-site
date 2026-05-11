/* ─────────────────────────────────────────────
   SWANANDA — Form
   Inquiry form validation and submission.

   TO CONNECT A REAL BACKEND:
   Replace the "TODO" section below with a fetch()
   call to Netlify Forms, Formspree, or your API.
   ───────────────────────────────────────────── */

function submitForm(e) {
  if (e) e.preventDefault();

  const name = document.getElementById('f-name')?.value.trim();
  const business = document.getElementById('f-business')?.value.trim();
  const phone = document.getElementById('f-phone')?.value.trim();
  const estab = document.getElementById('f-estab')?.value;

  if (!name || !business || !phone || !estab) {
    alert('Please fill in all required fields: Name, Business, Phone, and Establishment Type.');
    return;
  }

  const form = document.getElementById('inquiryForm');
  const formData = new FormData(form);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString()
  })
    .then(() => {
      document.getElementById('formSuccess').style.display = 'block';
      const btn = document.getElementById('submitBtn');
      btn.disabled = true;
      btn.textContent = '✓ Inquiry Sent';
      document.getElementById('formSuccess').scrollIntoView({ behavior: 'smooth', block: 'center' });
    })
    .catch(() => {
      alert('Something went wrong. Please email us directly at swananda.foods.beverages@gmail.com');
    });
}