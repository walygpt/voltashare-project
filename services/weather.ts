// التعديل: سحب المفتاح من بيئة التشغيل NEXT_PUBLIC_WEATHER_API_KEY
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY
const CITY = "Lisbon"
const COUNTRY_CODE = "PT"

export async function fetchWeather() {
  try {
    // التأكد من وجود المفتاح قبل إرسال الطلب
    if (!API_KEY) {
      console.error("Weather API key is missing. Please check .env.local")
      throw new Error("Weather API key is missing")
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY_CODE}&appid=${API_KEY}&units=metric`,
    )

    if (!response.ok) {
      throw new Error("Weather API response not ok")
    }

    const data = await response.json()

    return {
      temp: data.main.temp,
      description: data.weather[0].main,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
    }
  } catch (error) {
    console.error("Error fetching weather:", error)
    throw error
  }
}