export function renderHome() {
    const app = document.getElementById("app");
    app.className = "home-view";
    app.innerHTML = `
    <h1>Bienvenido</h1>
    <p class="home-description">
      Estás a punto de entrar en la cámara del tiempo digital. Aquí podrás entrenar tus 
      habilidades conversacionales con el guerrero más poderoso del universo. Prepárate 
      para elevar tu Ki y dominar el arte de la Inteligencia Artificial junto a Goku y te dara respuesta de todo.
    </p>`
}