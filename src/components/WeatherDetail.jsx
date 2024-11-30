import React from 'react';
import { useParams } from 'react-router-dom';

const WeatherDetail = () => {
  const { cityName } = useParams();

  // Przykładowe dane - można później podłączyć z API
  const weatherData = {
    currentTemp: 22,
    icon: '☀️', // Ikona bieżącej pogody
    windSpeed: 15,
    windDirection: 'NE',
    cloudiness: 30,
    forecast: [
      { day: 'Poniedziałek', temp: 21, rainChance: 10, rainType: 'Brak', wind: '10 km/h', icon: '☀️' },
      { day: 'Wtorek', temp: 19, rainChance: 50, rainType: 'Deszcz', wind: '11 km/h', icon: '🌧️' },
      { day: 'Sroda', temp: 16, rainChance: 50, rainType: 'Deszcz', wind: '9 km/h', icon: '🌫️' },
      { day: 'Czwartek', temp: 25, rainChance: 50, rainType: 'Deszcz', wind: '13 km/h', icon: '☁️' },
      { day: 'Piatek', temp: 9, rainChance: 50, rainType: 'Deszcz', wind: '25 km/h', icon: '🌬️' },

    ],
  };

  return (
    <div className="weather-detail">
      <h2>Prognoza dla {cityName}</h2>
      <p>Bieżąca temperatura: {weatherData.currentTemp}°C {weatherData.icon}</p>
      <p>Prędkość wiatru: {weatherData.windSpeed} km/h, Kierunek: {weatherData.windDirection}</p>
      <p>Zachmurzenie: {weatherData.cloudiness}%</p>

      <h3>Prognoza na 5 dni:</h3>
      <ul>
        {weatherData.forecast.map((day, index) => (
          <li key={index}>
            {day.day}: {day.temp}°C {day.icon}, Szansa opadów: {day.rainChance}%, Rodzaj: {day.rainType}, Wiatr: {day.wind}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherDetail;

