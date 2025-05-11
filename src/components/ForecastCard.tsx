import { ForecastData } from "../types";

interface Props {
  forecast: ForecastData | undefined;
}
export const ForecastCard = ({ forecast }: Props) => {
  if (!forecast)
    return (
      <>
        <h3 className="text-lg font-semibold mb-2">5-Day Forecast</h3>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
          {[1, 2, 3, 4, 5].map((day) => (
            <div key={day} className="bg-gray-100 p-2 rounded-md text-center">
              <p className="font-medium">Mon</p>
              <p className="text-xl">23°C</p>
              <p className="text-gray-600">Cloudy</p>
            </div>
          ))}
        </div>
      </>
    );
  else
    return (
      <>
        <h3 className="text-lg font-semibold mb-2">5-Day Forecast</h3>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
          {forecast?.list?.slice(0, 5).map((day, i) => (
            <div key={i} className="bg-gray-100 p-2 rounded-md text-center">
              <p className="font-medium">
                {new Date(day.dt_txt).toLocaleDateString("en-US", {
                  weekday: "short",
                }) || "Mon"}
              </p>
              <p className="text-xl">{Math.round(day.main.temp || 25)}°C</p>
              <p className="text-gray-600">
                {day.weather[0].description || "Cloudy"}
              </p>
            </div>
          ))}
        </div>
      </>
    );
};
