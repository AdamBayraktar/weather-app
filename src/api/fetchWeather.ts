import API_KEY from "./API_KEY";
import { fetchCityCoords } from "./fetchCityCoordination";

const fetchWeather = async (
  searchCity: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  setWeather: React.Dispatch<React.SetStateAction<any>>
) => {
  try {
    setLoading(true);
    setError("");
    let [lat, lon] = await fetchCityCoords(searchCity);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );

    if (!response.ok) {
      console.log(response.status);
      console.log(response.statusText);
      throw new Error("City not found");
    }

    const data = await response.json();
    console.log(data);
    setWeather(data);
  } catch (err) {
    console.log(err);
    setError("City not found. Please try again.");
    setWeather(null);
  } finally {
    setLoading(false);
  }
};

export default fetchWeather;
