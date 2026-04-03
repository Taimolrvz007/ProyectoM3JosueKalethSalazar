export function renderChat() {
  const app = document.getElementById("app");
  app.className = "chat-view";
  app.innerHTML = `
    <div id="chat-container" style="max-width: 600px; margin: auto; padding: 20px;">
      <div id="messages" style="height: 400px; overflow-y: auto; border: 1px solid #ccc; padding: 10px; display: flex; flex-direction: column; gap: 10px; background: white;"></div>
      <div style="display: flex; gap: 10px; margin-top: 10px;">
        <input type="text" id="userInput" placeholder="Habla con Goku..." style="flex: 1; padding: 10px;"/>
        <button id="sendBtn" style="padding: 10px 20px; cursor: pointer; background: #ffcc00; border: none; font-weight: bold;">Enviar</button>
      </div>
    </div>
  `;

  const sendBtn = document.getElementById("sendBtn");
  const userInput = document.getElementById("userInput");
  const messagesDiv = document.getElementById("messages");

  sendBtn.onclick = async () => {
    const text = userInput.value.trim();
    if (!text) return;
    
    // Mensaje del usuario
    messagesDiv.innerHTML += `<div style="align-self: flex-end; background: #007bff; color: white; padding: 8px 12px; border-radius: 15px;">${text}</div>`;
    userInput.value = "";
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    try {
      const response = await fetch("/api/functions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          messages: [{ role: "user", parts: [{ text: text }] }] 
        })
      });

      const data = await response.json();
      
      // Respuesta de Goku
      messagesDiv.innerHTML += `<div style="align-self: flex-start; background: #e9e9eb; padding: 8px 12px; border-radius: 15px;"><b>Goku:</b> ${data.reply}</div>`;
      messagesDiv.scrollTop = messagesDiv.scrollHeight;

    } catch (e) {
      messagesDiv.innerHTML += `<div style="color: red; text-align: center;">Error de conexión.</div>`;
    }
  };
}