import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ForecastData, WeatherData } from "../types";
import { ForecastCard } from "../components/ForecastCard";
import { WeatherCard } from "../components/WeatherCard";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Spinner from "../components/Spinner";

const Home = (): React.ReactNode => {
  const { data: cities, setItem } = useLocalStorage("cities");
  const [cityList, setCityList] = useState<string[]>(cities || []);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [weather, setWeather] = useState<WeatherData>();
  const [forecast, setForecast] = useState<ForecastData>();
  const [city, setCity] = useState("");

  const getFirst5DaysForecast = (list: ForecastData["list"]) => {
    const dailyForecasts = list.filter((item) =>
      item.dt_txt.includes("12:00:00"),
    );

    return dailyForecasts.slice(0, 5);
  };

  const handleSearch = async (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
    city: string,
  ): Promise<void> => {
    setError(false);
    setLoading(true);
    e.preventDefault();
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }&units=metric`;
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&exclude=current,minutely,hourly,alerts&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }&units=metric`;
    try {
      const resWeather: AxiosResponse<WeatherData> = await axios.get(
        urlWeather,
      );
      const resForecast: AxiosResponse<ForecastData> = await axios.get(
        urlForecast,
      );
      setWeather(resWeather.data);
      resForecast.data.list = getFirst5DaysForecast(resForecast.data.list);
      setForecast(resForecast.data);
      console.log(resForecast.data);
      setCity(city);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (weather) {
      const updated = [city, ...cityList.filter((c) => c !== city)];
      const limited = updated.slice(0, 5);
      setCityList(limited);
      setItem(limited);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weather]);
  return (
    <div className="space-y-6">
      {/* Search Form */}
      <form
        className="flex flex-col sm:flex-row gap-2"
        onSubmit={(e) => handleSearch(e, city)}
      >
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Recent Searches */}
      <div className="flex flex-wrap gap-2">
        {cityList.map((city) => (
          <button
            key={city}
            onClick={(e) => handleSearch(e, city)}
            className="bg-blue-200 text-blue-800 px-3 py-1 rounded-md hover:bg-blue-300"
          >
            {city}
          </button>
        ))}
      </div>

      {/* Error Message (Placeholder) */}
      <div
        className={`text-red-600 bg-red-100 p-2 rounded-md ${
          error ? "" : "hidden"
        }`}
      >
        City not found
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <WeatherCard weather={weather} />

          <ForecastCard forecast={forecast} />
        </>
      )}
    </div>
  );
};

export default Home;
