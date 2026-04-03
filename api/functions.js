export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ reply: "Solo POST" });

  try {
    const { messages } = req.body;

    const systemPrompt = {
      role: "user",
      parts: [{ text: "Eres Goku, el guerrero Saiyan de Dragon Ball Z. Hablas de forma simple y entusiasta, siempre mencionas el entrenamiento, las peleas y superar tus límites. Tus respuestas son cortas, máximo 2 oraciones." }]
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [systemPrompt, ...messages] })
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