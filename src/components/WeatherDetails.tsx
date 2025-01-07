import { Search, Cloud, Droplets, Wind, Thermometer } from "lucide-react";
import { WeatherData } from "../interfaces/Weather";
import "../styles/WeatherDetails.css";

export function WeatherDetails({ weather }: { weather: WeatherData }) {
  return (
    <div className="weather-container">
      <div className="weather-header">
        <h2>{weather.name}</h2>
        <p>{Math.round(weather.main.temp) - 272}°C</p>
        <p className="weather-description">{weather.weather[0].description}</p>
      </div>

      <div className="weather-stats">
        <div className="weather-stat">
          <Thermometer className="stat-icon" />
          <div>
            <p className="stat-text">Feels Like</p>
            <p className="stat-value">
              {Math.round(weather.main.feels_like) - 272}°C
            </p>
          </div>
        </div>

        <div className="weather-stat">
          <Droplets className="stat-icon" />
          <div>
            <p className="stat-text">Humidity</p>
            <p className="stat-value">{weather.main.humidity}%</p>
          </div>
        </div>

        <div className="weather-stat">
          <Wind className="stat-icon" />
          <div>
            <p className="stat-text">Wind Speed</p>
            <p className="stat-value">{weather.wind.speed} m/s</p>
          </div>
        </div>

        <div className="weather-stat">
          <Cloud className="stat-icon" />
          <div>
            <p className="stat-text">Condition</p>
            <p className="stat-value">{weather.weather[0].main}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
