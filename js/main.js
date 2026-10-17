const FACEBOOK_URL = 'https://www.facebook.com/share/1K4V7vzMbK/?mibextid=wwXIfr';
const nav = document.querySelector('#main-nav');
const toggle = document.querySelector('.menu-toggle');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  toggle.textContent = open ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation'); toggle.textContent = '☰';
}));
document.querySelectorAll('#facebook-link, .contact-details a[href^="https://www.facebook.com"]').forEach(a => a.href = FACEBOOK_URL);

// Keep the mobile menu keyboard-friendly.
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    toggle.textContent = '☰';
    toggle.focus();
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
  const service = document.querySelector('#service');
  service.value = link.dataset.service;
}));
document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = `Project enquiry: ${data.get('service')}`;
  const body = `Hello Claire,\n\nMy name is ${data.get('name')}.\nMy email address is ${data.get('email')}.\nService required: ${data.get('service')}\n\nProject details:\n${data.get('description')}\n\nKind regards,\n${data.get('name')}`;
  document.querySelector('#form-status').textContent = 'Your email application should open with the enquiry prepared. Please review it and send it from your email application. No message has been sent by this website.';
  window.location.href = `mailto:clairesmithrose8@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
