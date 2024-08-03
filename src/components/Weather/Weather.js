// import { Search, MapPin, Wind } from "react-feather";
// import getWeather from "./getWeather";
// import { useState } from "react";
// // import dateFormat from "dateformat";
// import "./Weather.css";

// function Weather() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState({});

//   const getWeatherbyCity = async () => {
//     const weatherData = await getWeather(city);
//     setWeather(weatherData);
//     setCity("");
//   };

//   return (
//     <div className="app">
//       <h1>Weather App</h1>
//       <div className="input-wrapper">
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter City Name"
//         />
//         <button
//           style={{ background: "#7406a4" }}
//           onClick={() => getWeatherbyCity()}
//         >
//           <Search></Search>
//         </button>
//       </div>

//       {weather && weather.weather && (
//         <div className="content">
//           <div className="location d-flex">
//             <MapPin></MapPin>
//             <h2>
//               {weather.name} <span>({weather.sys.country})</span>
//             </h2>
//           </div>

//           <div className="weatherdesc d-flex flex-c"></div>

//           <div className="tempstats d-flex flex-c">
//             <h1>
//               {weather.main.temp} <span>&deg;C</span>
//             </h1>
//             <h3>
//               Feels Like {weather.main.feels_like} <span>&deg;C</span>
//             </h3>
//           </div>

//           <div className="windstats d-flex">
//             <Wind></Wind>
//             <h3>
//               Wind is {weather.wind.speed} Knots in {weather.wind.deg}&deg;
//             </h3>
//           </div>
//         </div>
//       )}
//       {!weather.weather && (
//         <div className="content">
//           <h4>No Data found !</h4>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Weather;


import { Search, MapPin, Wind } from "react-feather";
import getWeather from "./getWeather";
import { useState } from "react";
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const fetchWeatherData = async () => {
    const weatherData = await getWeather(city);
    setWeather(weatherData);
    setCity("");
  };

  return (
    <div className="weather-container">
      <h1 className="weather-title">Weather App</h1>
      <div className="search-bar">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City Name"
          className="city-input"
        />
        <button
          className="search-button"
          onClick={() => fetchWeatherData()}
        >
          <Search />
        </button>
      </div>

      {weather && weather.weather ? (
        <div className="weather-info">
          <div className="location-info">
            <MapPin className="location-icon" />
            <h2 className="location-name">
              {weather.name} <span className="country-code">({weather.sys.country})</span>
            </h2>
          </div>

          <div className="weather-description">
            {/* Add any weather description here */}
          </div>

          <div className="temperature-info">
            <h1 className="temperature">
              {weather.main.temp} <span className="temperature-unit">&deg;C</span>
            </h1>
            <h3 className="feels-like">
              Feels Like {weather.main.feels_like} <span className="temperature-unit">&deg;C</span>
            </h3>
          </div>

          <div className="wind-info">
            <Wind className="wind-icon" />
            <h3 className="wind-details">
              Wind is {weather.wind.speed} Knots in {weather.wind.deg}&deg;
            </h3>
          </div>
        </div>
      ) : (
        <div className="no-data">
          <h4>No Data Found!</h4>
        </div>
      )}
    </div>
  );
}

export default Weather;
