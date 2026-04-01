import { router } from './router.js';
import { setupLinkInterception } from './navigation.js';

// 1. Escuchar cuando el usuario presiona Atrás/Adelante
window.addEventListener('popstate', () => {
  router();
});

// 2. Activar la intercepción de links
setupLinkInterception();

// 3. Render inicial
router();