# Weather Dashboard Enhancement Tasks

Enhance the Weather Dashboard app with TypeScript, React, Tailwind CSS, and React Router. Implement these 5 tasks to add functionality to the static UI, focusing on TypeScript, API integration, and state management. Use the provided UI pages as the base.

## Prerequisites

- **OpenWeatherMap API Key**: Sign up at [OpenWeatherMap](https://openweathermap.org/) for a free API key.
- **Project Setup**: Ensure Vite project with Tailwind CSS, React Router, and `axios` installed (see previous setup instructions).
- **UI Base**: Use provided `index.html`, `App.tsx`, `Navbar.tsx`, `Home.tsx`, `About.tsx`, and `main.tsx`.

## Task 1: Add Types for Weather Data

**Goal**: Define TypeScript interfaces for weather and forecast data.  
**Steps**:

- Create `src/types.ts`.
- Define `WeatherData` for current weather (e.g., city, temp, humidity, wind).
- Define `ForecastData` for 5-day forecast (e.g., list of daily data with date, temp, weather).
- Export interfaces for use in `Home.tsx`.  
  **TypeScript**:
  - `WeatherData`: `{ name: string; main: { temp: number; humidity: number }; wind: { speed: number }; weather: { description: string }[] }`.
  - `ForecastData`: `{ list: { dt: number; main: { temp: number }; weather: { description: string }[] }[] }`.  
    **Outcome**: Types ready for API integration.

## Task 2: Implement City Search and Current Weather

**Goal**: Fetch and display current weather for a searched city.  
**Steps**:

- In `Home.tsx`, add `useState` for query (`string`) and weather (`WeatherData | null`).
- Add form submit handler to fetch data using `axios` from `https://api.openweathermap.org/data/2.5/weather?q={query}&appid={API_KEY}&units=metric`.
- Update UI to show fetched data (city, temp, humidity, wind, description).
- Style with existing Tailwind classes: `bg-white`, `p-4`, `rounded`.  
  **TypeScript**:
  - Type query: `string`.
  - Type weather: `WeatherData | null`.
  - Type form event: `FormEvent<HTMLFormElement>`.  
    **Outcome**: Search a city (e.g., "London") to display current weather.

## Task 3: Add 5-Day Forecast

**Goal**: Fetch and display a 5-day forecast for the searched city.  
**Steps**:

- Add `useState` for forecast (`ForecastData | null`) in `Home.tsx`.
- Fetch data from `https://api.openweathermap.org/data/2.5/forecast?q={query}&appid={API_KEY}&units=metric`.
- Filter API response to show one forecast per day (e.g., at 12:00 PM).
- Map data to forecast cards, showing date, temp, and description.
- Use existing Tailwind: `grid`, `sm:grid-cols-5`, `bg-gray-100`.  
  **TypeScript**:
  - Type forecast: `ForecastData | null`.
  - Type daily data array.  
    **Outcome**: City search shows 5 daily forecast cards.

## Task 4: Manage Recent Searches

**Goal**: Save up to 5 recent cities in `localStorage` and display as clickable buttons.  
**Steps**:

- Add `useState<string[]>` for recent searches in `Home.tsx`.
- Use `useEffect` to load/save searches to `localStorage`.
- On successful search, add city to searches (limit 5, no duplicates).
- Render searches as buttons, clicking re-fetches weather.
- Use existing Tailwind: `bg-blue-200`, `rounded`, `hover:bg-blue-300`.  
  **TypeScript**:
  - Type searches: `string[]`.
  - Validate `localStorage` data as `string[]`.  
    **Outcome**: Recent cities are saved and clickable.

## Task 5: Add Error and Loading States

**Goal**: Show error messages for invalid searches and a loading spinner during API calls.  
**Steps**:

- Add `error: string | null` and `loading: boolean` states in `Home.tsx`.
- Catch API errors (e.g., 404) and set error message.
- Show error in UI with Tailwind: `text-red-600`, `bg-red-100`.
- Set `loading` during API calls, show spinner (`animate-spin`).
- Clear error/loading on new search.
- Use existing Tailwind for error div and add spinner CSS.  
  **TypeScript**:
  - Type `error: string | null`, `loading: boolean`.
  - Type `AxiosError` for API errors.  
    **Outcome**: Invalid searches show errors, searches show loading spinner.

## Tips

- **Start with Task 1**: Define types first.
- **Test API**: Log OpenWeatherMap responses to console.
- **TypeScript**:
  - Use interfaces for API data.
  - Type all states and events.
- **Tailwind**:
  - Reuse UI classes: `p-4`, `rounded`, `shadow`.
  - Ensure responsive layouts: `sm:`, `md:`.
- **Run**:
  ```bash
  npm run dev
  ```
- **Debug**: Check TypeScript errors and API responses.
