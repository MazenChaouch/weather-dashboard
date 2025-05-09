const Home = (): React.ReactNode => {
  return (
    <div className="space-y-6">
      {/* Search Form */}
      <form className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Enter city name"
          className="flex-1 border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Error Message (Placeholder) */}
      <div className="hidden text-red-600 bg-red-100 p-2 rounded-md">
        City not found
      </div>

      {/* Recent Searches */}
      <div className="flex flex-wrap gap-2">
        <button className="bg-blue-200 text-blue-800 px-3 py-1 rounded-md hover:bg-blue-300">
          London
        </button>
        <button className="bg-blue-200 text-blue-800 px-3 py-1 rounded-md hover:bg-blue-300">
          New York
        </button>
        <button className="bg-blue-200 text-blue-800 px-3 py-1 rounded-md hover:bg-blue-300">
          Tokyo
        </button>
      </div>

      {/* Current Weather */}
      <div className="bg-white p-4 rounded-md shadow">
        <h2 className="text-xl font-semibold">City Name</h2>
        <p className="text-3xl font-bold">25°C</p>
        <p className="text-gray-600">Sunny</p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <p>Humidity: 60%</p>
          <p>Wind: 10 km/h</p>
        </div>
      </div>

      {/* 5-Day Forecast */}
      <div>
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
      </div>
    </div>
  );
};

export default Home;
