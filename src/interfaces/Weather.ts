export interface WeatherData {
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: Array<{
    main: string;
    description: string;
  }>;
  wind: {
    speed: number;
  };
  name: string;
}

export interface WeatherBackground {
  innerColor: string;
  midColor: string;
  outerColor: string;
  img: string;
}
