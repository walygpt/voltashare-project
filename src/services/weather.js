const API_KEY = "9a320229ab34e722ff5c02ed95ca2134"
const CITY = "Lisbon"
const COUNTRY_CODE = "PT"

export async function fetchWeather() {
  try {
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
