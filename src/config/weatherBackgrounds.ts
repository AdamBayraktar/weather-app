import { WeatherBackground } from "../interfaces/Weather";

// const initial: WeatherBackground = {
//   innerColor: "rgb(133, 133, 133)",
//   midColor: "rgb(67, 98, 133)",
//   outerColor: "rgb(28, 50, 105)",
//   img: "cloud-background.jpg",
// };
const initial: WeatherBackground = {
  innerColor: "rgb(86, 144, 231)",
  midColor: "rgb(63, 133, 240)",
  outerColor: "rgb(23, 111, 243)",
  img: "",
};
const lightRain: WeatherBackground = {
  innerColor: "rgb(133, 133, 133)",
  midColor: "rgb(67, 98, 133)",
  outerColor: "rgb(28, 50, 105)",
  img: "cloud-background.jpg",
};
const scattered: WeatherBackground = {
  innerColor: "rgb(133, 133, 133)",
  midColor: "rgb(67, 98, 133)",
  outerColor: "rgb(28, 50, 105)",
  img: "cloud-background.jpg",
};
const skyClear: WeatherBackground = {
  innerColor: "rgb(241, 245, 252)",
  midColor: "rgb(68, 136, 238)",
  outerColor: "rgb(9, 80, 185)",
  img: "sun-7161716_1280.jpg",
};
const brokenClouds: WeatherBackground = {
  innerColor: "rgb(83, 83, 83)",
  midColor: "rgb(48, 67, 88)",
  outerColor: "rgb(17, 25, 46)",
  img: "aircraft-flying-across-cloudy-sky.jpg",
};

const overcast: WeatherBackground = {
  innerColor: "rgb(114, 113, 113)",
  midColor: "rgb(68, 64, 64)",
  outerColor: "rgb(41, 37, 37)",
  img: "storm-clouds.jpg",
};

const weatherBackgrounds: Record<string, WeatherBackground> = {
  overcast: overcast,
  brokenClouds: brokenClouds,
  scattered: scattered,
  skyClear: skyClear,
  lightRain: lightRain,
  initial: initial,
};

export default weatherBackgrounds;
