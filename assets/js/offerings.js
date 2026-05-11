/* ─────────────────────────────────────────────
   SWANANDA — Offerings
   Tab switching for Standard / Prebiotic panels.
   ───────────────────────────────────────────── */

function showTab(id, clickedBtn) {
  // Hide all panels
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

  // Deactivate all tabs
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

  // Show selected panel
  const panel = document.getElementById('tab-' + id);
  if (panel) panel.classList.add('active');

  // Activate clicked tab
  if (clickedBtn) clickedBtn.classList.add('active');
}
