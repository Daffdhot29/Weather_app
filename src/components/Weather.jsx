import React from 'react'
import './Weather.css'
import searchIcon from '../assets/search.png'
import clearIcon from '../assets/clear.png'
// import cloudIcon from '../assets/cloud.png'
// import rainIcon from '../assets/rain.png'
// import drizzleIcon from '../assets/drizzle.png'
import humidityIcon from '../assets/humidity.png'
// import snowIcon from '../assets/snow.png'
import windIcon from '../assets/wind.png'

const Weather = () => {
  return (
    <div className='weather'>
      <div className='search-bar'>
        <input type="text" placeholder='Search' />
        <img src={searchIcon} alt="search_icon"  />
      </div>
      <img src={clearIcon} alt="clear_icon"  className='weather-icon'/>
      <p className='Temperature'>16 degree</p>
      <p className='location'>Jakarta</p>
      <div className='weather-data'>
        <div className='col'>
           <img src={humidityIcon} alt="humidity_icon" />      
           <div>
              <p> 91 %</p>
              <span>Humidity</span>
           </div>
        </div>
        <div className='col'>
          <img src={windIcon} alt="wind_icon"/>
          <div>
            <p> 2.2 km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
