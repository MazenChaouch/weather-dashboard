const About = (): React.ReactNode => {
  return (
    <div className="bg-white p-6 rounded-md shadow">
      <h2 className="text-2xl font-bold mb-4">About Weather Dashboard</h2>
      <p className="text-gray-700 mb-4">
        This app lets you check the current weather and 5-day forecast for any
        city. Search for a city, view recent searches, and get detailed weather
        information.
      </p>
      <p className="text-gray-700">
        Built with React, TypeScript, Tailwind CSS, and React Router. Powered by
        the OpenWeatherMap API.
      </p>
    </div>
  );
};

export default About;
