import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import WeatherDisplay from "./components/WeatherDisplay";
import Searchbar from "./components/Searchbar";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  const handleSearch = async (city) => {
    if (!city) {
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://api.weatherapi.com/v1/current.json",
        {
          params: {
            key: "f22c287ee24649338cb145744232709",
            q: city,
          },
        }
      );
      // console.log(response.data);
      setWeatherData(response.data);
      setCity(city);
    } catch (err) {
      console.log("Error fetching data", err.message);
      alert("Failed to fetch weather data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [city]);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Searchbar
        onSearch={() => handleSearch(city)}
        city={city}
        setCity={setCity}
        placeholder="Enter city name"
      />
      <WeatherDisplay weatherData={weatherData} isLoading={isLoading} />
    </div>
  );
}
