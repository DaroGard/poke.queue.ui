import settings from "@/lib/settings";

export async function getReports() {
  try {
    const response = await fetch(`${settings.URL}/api/request`)

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`)
    }

    const data = await response.json()
    console.log("API Response (GET):", data) 

    return Array.isArray(data) ? data : data.results || data.data || []
  } catch (error) {
    console.error("Error fetching reports:", error)
    throw error
  }
}

export async function createReport(pokemonType, sampleSize) { //Tarea 3
  try {
    const body = {
      pokemon_type: pokemonType,
    };
    if (typeof sampleSize === 'number' && sampleSize > 0) {//Tarea 3
      body.sample_size = sampleSize;
    }

    console.log("Sending POST to API with body:", body);

    const response = await fetch(`${settings.URL}/api/request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Backend response error:", errorText);
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating report:", error);
    throw error;
  }
}
