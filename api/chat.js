export default async function handler(req, res) {
  const { message } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    // ✅ Add this to inspect what OpenAI is actually returning
    console.log("OpenAI raw response:", data);

    if (!data.choices) {
      return res.status(500).json({ error: "Missing choices in OpenAI response", details: data });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("OpenAI API error:", error);
    res.status(500).json({ error: "OpenAI request failed", detail: error.message });
  }
}
