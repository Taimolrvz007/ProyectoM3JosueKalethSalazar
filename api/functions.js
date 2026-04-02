export default async function handler(req, res) {
  const { messages } = req.body;
  
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: messages })
    }
  );

  const data = await response.json();
  console.log(JSON.stringify(data)); // para ver qué devuelve Gemini
  
  if (!data.candidates) {
    return res.status(500).json({ error: "Error de Gemini", details: data });
  }

  res.json({ reply: data.candidates[0].content.parts[0].text });
}