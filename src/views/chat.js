export function renderChat() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div id="messages"></div>
    <input type="text" id="userInput" placeholder="Habla con Goku..."/>
    <button id="sendBtn">Enviar</button>
  `;

  const sendBtn = document.getElementById("sendBtn");
  const userInput = document.getElementById("userInput");
  const messages = document.getElementById("messages");

  sendBtn.onclick = async () => {
  const text = userInput.value;
  if (!text) return;
  
  messages.innerHTML += `<p class="user-msg">${text}</p>`;
  userInput.value = "";

  const response = await fetch("/api/functions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: [{ role: "user", parts: [{ text }] }] })
  });

  const data = await response.json();
  messages.innerHTML += `<p class="goku-msg">${data.reply}</p>`;
};
}