import { useState } from "react";
import { Loader2 } from "lucide-react";
import "./styles/App.css";
import SearchBar from "@components/SearchBar";
import { WeatherDetails } from "@components/WeatherDetails";
import changeBackground from "@utils/changeAppBackground";
import fetchWeather from "@api/fetchWeather";
import { WeatherData } from "@interfaces/Weather";

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  changeBackground((weather && weather.weather[0].description) || "initial");
  const handleSearch = (city: string) => {
    fetchWeather(city, setLoading, setError, setWeather);
  };

  return (
    <>
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && (
        <div className="flex justify-center items-center py-8">
          <Loader2 className="animate-spin" size={32} />
        </div>
      )}
      {error && <div className="text-red-500 text-center py-4">{error}</div>}
      {weather && !loading && <WeatherDetails weather={weather} />}
    </>
  );
}

export default App;
