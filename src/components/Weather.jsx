import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import searchIcon from '../assets/search.png'
import clearIcon from '../assets/clear.png'
import cloudIcon from '../assets/cloud.png'
import rainIcon from '../assets/rain.png'
import drizzleIcon from '../assets/drizzle.png'
import humidityIcon from '../assets/humidity.png'
import snowIcon from '../assets/snow.png'
import windIcon from '../assets/wind.png'

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setweatherData] = useState(false);

  const allIcon = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": cloudIcon,
    "02n": cloudIcon,
    "03d": cloudIcon,
    "03n": cloudIcon,
    "04d": drizzleIcon,
    "04n": drizzleIcon,
    "09d": rainIcon,
    "09n": rainIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "13d": snowIcon,
    "13n": snowIcon,

  }
  const search = async (city) => {
    if (city === ''){
      alert('Please enter a city name');
      return;
    } 
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}
      &appid=${import.meta.env.WEATHER_API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok){
        alert(data.message);
        return;
      }
      console.log(data);
      const icon = allIcon[data.weather[0].icon] || clearIcon;
      setweatherData({
        humidity : data.main.humidity,
        windSpeed : data.wind.speed,
        temperature : Math.floor(data.main.temp),
        location : data.name,
        icon : icon
      })
    } catch (error) {
      setweatherData(false);
      console.error("Error fetching weather data:", error);
    }
  }

  useEffect(() => {
    search('Jakarta');
  },[])
  return (
    <div className='weather'>
      <div className='search-bar'>
        <input ref= {inputRef}type="text" placeholder='Search' />
        <img src={searchIcon} alt="search_icon" onClick={() => search(inputRef.current.value)} />
      </div>
      {weatherData?<>
      <img src={weatherData.icon} alt="clear_icon"  className='weather-icon'/>
      <p className='Temperature'>{weatherData.temperature}</p>
      <p className='location'>{weatherData.location}</p>
      <div className='weather-data'>
        <div className='col'>
           <img src={humidityIcon} alt="humidity_icon" />      
           <div>
              <p>{weatherData.humidity}</p>
              <span>Humidity</span>
           </div>
        </div>
        <div className='col'>
          <img src={windIcon} alt="wind_icon"/>
          <div>
            <p>{weatherData.windSpeed}</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
      </>:<></>}
    </div>
  )
}

export default Weather
