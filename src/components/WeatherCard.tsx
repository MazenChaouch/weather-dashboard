import { WeatherData } from "../types";

interface Props {
  weather: WeatherData | undefined;
}
export const WeatherCard = ({ weather }: Props) => {
  return (
    <div className="bg-white p-4 rounded-md shadow">
      <h2 className="text-xl font-semibold">{weather?.name || "City Name"}</h2>
      <p className="text-3xl font-bold">
        {Math.round(weather?.main.temp ?? 25)}°C
      </p>
      <p className="text-gray-600">
        {weather?.weather[0]?.description || "Sunny"}
      </p>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <p>Humidity: {weather?.main.humidity || "60"}%</p>
        <p>Wind: {weather?.wind.speed || "10"} km/h</p>
      </div>
    </div>
  );
};
