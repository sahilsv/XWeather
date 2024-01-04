import WeatherCard from "./WeatherCard";
const WeatherDisplay = ({ isLoading, weatherData}) => {
  
  return (
    <div className="weather-cards">
      {isLoading && <p>Loading data...</p>}
      {!isLoading && weatherData && (
        <>
          <WeatherCard
            title="Temperature"
            data={`${weatherData.current.temp_c}°C`}
          />
          <WeatherCard
            title="Humidity"
            data={`${weatherData.current.humidity}%`}
          />

          <WeatherCard
            title="Condition"
            data={`${weatherData.current.condition.text}`}
          />

          <WeatherCard
            title="Wind Speed"
            data={`${weatherData.current.wind_kph} kph`}
          />
        </>
      )}
    </div>
  );
};

export default WeatherDisplay;