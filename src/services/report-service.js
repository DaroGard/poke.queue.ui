import settings from "@/lib/settings";

export async function getReports() {
    try {
      const response = await fetch(`${settings.URL}/api/request`)

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`)
      }

      const data = await response.json()
      console.log("API Response (GET):", data) // Para depurar la estructura de datos

      return Array.isArray(data) ? data : data.results || data.data || []
    } catch (error) {
      console.error("Error fetching reports:", error)
      throw error
    }
  }

  export async function createReport(pokemonType) {
    try {
      const response = await fetch(`${settings.URL}/api/request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pokemon_type: pokemonType,
        }),
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`)
      }

      const data = await response.json()
      console.log("API Response (POST):", data) // Para depurar la respuesta

      return data
    } catch (error) {
      console.error("Error creating report:", error)
      throw error
    }
  }