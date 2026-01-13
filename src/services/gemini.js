const GEMINI_API_KEY = "AIzaSyDhboO6yFT4fvm4RBgXJdapwQtVRZyQTw0"
const GEMINI_MODEL = "gemini-1.5-flash"
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`

export async function getEnergyAdvice(weather, batteryLevel) {
  try {
    const prompt = `The weather in Lisbon is ${weather.description} and temp is ${Math.round(weather.temp)}°C. I have ${batteryLevel}% battery charge. Should I SELL my energy to neighbors or STORE it? Give me a short, punchy advice in 2 sentences.`

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }),
    })

    if (!response.ok) {
      throw new Error("Gemini API response not ok")
    }

    const data = await response.json()
    const advice = data.candidates?.[0]?.content?.parts?.[0]?.text || "Unable to generate advice"

    return advice
  } catch (error) {
    console.error("Error getting energy advice:", error)
    throw error
  }
}
