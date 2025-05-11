export interface WeatherData {
  name: string;
  main: { temp: number; humidity: number };
  wind: { speed: number };
  weather: { description: string }[];
}
export interface ForecastData {
  list: {
    dt_txt: string;
    main: { temp: number };
    weather: { description: string }[];
  }[];
}
