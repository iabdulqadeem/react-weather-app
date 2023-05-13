import "./App.css";
import { useState } from "react";

import React from 'react'

const MyAPI = "bb26e6255dbb74051418847c54bdeb4e";


export default function App() {

  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  

  const handleClick = ()=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${MyAPI}`).then(
      reponse => reponse.json()
    ).then(data=>{
      setWeatherData(data)
    })
    setCity("")
  }

  return (
    <div className="container">
      <h1>Welcome to MyWeather App</h1>
      <label className="label">Enter City</label>
    <input className="inputBar" value={city} type="text" onChange={e => setCity(e.target.value)}/>
    <button onClick={handleClick} className="btn" >Go</button>


{typeof weatherData.main === 'undefined' ? (
      <div>
      <p>Add city to see weather</p>
      </div>
      )
      :
      (
      <div>
        <p>City: {weatherData.name}, {weatherData.sys.country} </p>
        <p>Temperature: {Math.round(weatherData.main.temp)} C</p>
        <p>Forecast: {weatherData.weather[0].main}</p>
      </div>
      )}
    </div>
  )
}