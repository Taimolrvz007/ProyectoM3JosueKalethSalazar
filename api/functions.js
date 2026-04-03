export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ reply: "Solo POST" });

  try {
    const { messages } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    // Cambiamos a v1beta y gemini-1.5-flash-8b (que es más ligero y falla menos)
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: messages })
      }
    );

    const data = await response.json();

    if (data.error) {
      return res.status(200).json({ reply: "Error de Google: " + data.error.message });
    }

    if (data.candidates && data.candidates[0].content) {
      res.status(200).json({ reply: data.candidates[0].content.parts[0].text });
    } else {
      res.status(200).json({ reply: "No hay respuesta del modelo." });
    }

  } catch (error) {
    res.status(200).json({ reply: "Error interno: " + error.message });
  }
}