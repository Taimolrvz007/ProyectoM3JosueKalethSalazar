export default async function handler(req, res) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    // Esta URL consulta la lista oficial de modelos disponibles para tu clave
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
    );

    const data = await response.json();

    if (data.error) {
      return res.status(200).json({ error: data.error.message });
    }

    // Filtramos solo los nombres de los modelos para que sea fácil de leer
    const modelNames = data.models.map(m => m.name);
    res.status(200).json({ 
      mensaje: "Estos son los modelos que puedes usar:",
      modelos: modelNames 
    });

  } catch (error) {
    res.status(200).json({ error: error.message });
  }
}