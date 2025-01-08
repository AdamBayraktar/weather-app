import { WeatherBackground } from "@interfaces/Weather";
import weatherBackgrounds from "../config/weatherBackgrounds";
import { makeItRain, stopRain } from "./makeItRain";

// main function to change the background image
export function changeBackground(weatherType: string) {
  const weatherBackground: WeatherBackground =
    getWeatherBackground(weatherType);
  changeBackgroundImage(weatherBackground);
  changeRootVariables(weatherBackground);
  weatherType.includes("rain") ? makeItRain() : stopRain();
}

// get the background image based on the weather
function getWeatherBackground(weather: string): WeatherBackground {
  console.log(weather);
  switch (weather.toLowerCase()) {
    case "overcast clouds":
      return weatherBackgrounds.overcast;

    case "broken clouds":
      return weatherBackgrounds.brokenClouds;

    case "scattered clouds":
      return weatherBackgrounds.scattered;

    case "clear sky":
      return weatherBackgrounds.skyClear;

    case "light rain":
      return weatherBackgrounds.lightRain;

    case "few clouds":
    default:
      return weatherBackgrounds.initial;
  }
}

// change the root variables responsible for body background based on the weather
function changeRootVariables(weatherBackground: WeatherBackground) {
  document.documentElement.style.setProperty(
    "--innerBackgroundColor",
    weatherBackground.innerColor
  );
  document.documentElement.style.setProperty(
    "--midBackgroundColor",
    weatherBackground.midColor
  );
  document.documentElement.style.setProperty(
    "--outerBackgroundColor",
    weatherBackground.outerColor
  );
}

function changeBackgroundImage(weatherBackground: WeatherBackground) {
  document.querySelector(
    "main"
  )!.style.backgroundImage = `url(${weatherBackground.img})`;
}

export default changeBackground;
