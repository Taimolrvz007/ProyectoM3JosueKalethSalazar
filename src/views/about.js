export function renderAbout() {
  const app = document.getElementById("app");
  
  app.className = "about-view"; 

  app.innerHTML = `
    <div class="about-container">
      <h1>Sobre el Proyecto: Agente de IA</h1>
      <p class="about-description">
        Este proyecto nace de la curiosidad por fusionar el desarrollo **Full Stack** con la potencia de la 
        Inteligencia Artificial. Utilizando la API de Gemini y desplegado en Vercel, este agente no solo 
        es una interfaz de chat, sino un experimento de personalización y diseño responsivo.
      </p>
      <p class="about-tech">
        Construido con JavaScript Vanilla, CSS3 modular (Flexbox & Grid) y una arquitectura de vistas dinámica.
      </p>
    </div>
  `;
}