export function renderNotFound() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>404 - Página no encontrada</h1>
    <p>La ruta "${window.location.pathname}" no existe.</p>
    <a href="/">Volver al inicio</a>
  `;
}