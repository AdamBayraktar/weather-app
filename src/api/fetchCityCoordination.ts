import API_KEY from "@api/API_KEY";

export async function fetchCityCoords(
  searchCity: string
): Promise<[number, number]> {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=1&appid=${API_KEY}`
  );

  let lat, lon;
  const data = await response.json();
  try {
    lat = data[0].lat;
    lon = data[0].lon;
  } catch (error) {
    console.log(response.status);
    console.log(response.statusText);
    console.log(`Data:`);
    console.log(data);
    throw new Error("City not found");
  }
  return [lat, lon];
}
