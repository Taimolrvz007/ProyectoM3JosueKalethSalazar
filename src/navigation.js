import { navigateTo } from './router.js';

export function setupLinkInterception() {
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href');
    navigateTo(href);
    event.preventDefault();
    navigateTo(href);
  
});
}