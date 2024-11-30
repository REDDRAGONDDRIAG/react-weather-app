import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../redux/slices/favoritesSlice'; // Import akcji z Redux
import { Link } from 'react-router-dom';


const cities = [
  { name: 'Warszawa', temp: 20, condition: 'Sunny', icon: '☀️' },
  { name: 'Kraków', temp: 18, condition: 'Cloudy', icon: '☁️' },
  { name: 'Wrocław', temp: 22, condition: 'Rainy', icon: '🌧️' },
  { name: 'Gdańsk', temp: 15, condition: 'Windy', icon: '🌬️' },
  { name: 'Poznań', temp: 19, condition: 'Foggy', icon: '🌫️' },
];

const WeatherList = () => {
  const [search, setSearch] = useState('');
  const [unit, setUnit] = useState('C'); // Domyślna jednostka to Celsjusz
  const favorites = useSelector((state) => state.favorites.favorites); // Pobranie ulubionych miast z Redux
  const dispatch = useDispatch(); // Inicjalizacja dispatch dla Redux

  // Obsługa zmiany wyszukiwania
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Obsługa zmiany jednostki temperatury
  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  // Konwersja temperatury
  const convertTemperature = (temp) => {
    if (unit === 'F') {
      return `${((temp * 9) / 5 + 32).toFixed(2)}°F`;
    } else if (unit === 'K') {
      return `${(temp + 273.15).toFixed(2)}K`;
    }
    return `${temp}°C`;
  };

  // Filtrowanie miast na podstawie wyszukiwanej frazy
  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="weather-list">
      <input
        type="text"
        placeholder="Szukaj miasta..."
        value={search}
        onChange={handleSearch}
        className="search-input"
      />

      <select onChange={handleUnitChange} value={unit} className="unit-selector">
        <option value="C">Celsjusz (°C)</option>
        <option value="F">Fahrenheit (°F)</option>
        <option value="K">Kelvin (K)</option>
      </select>

      {filteredCities.map((city) => (
        <div key={city.name} className="city-card">
          <h3>
            {city.name}
            <span
              className="favorite-icon"
              onClick={() => dispatch(toggleFavorite(city.name))} // Dodanie/Usunięcie z ulubionych
              style={{ cursor: 'pointer', marginLeft: '10px' }}
            >
              {favorites.includes(city.name) ? '⭐' : '☆'}
            </span>
          </h3>
          <p>Temperatura: {convertTemperature(city.temp)} {city.icon}</p>
          <p>Warunki: {city.condition}</p>
          <Link to={`/details/${city.name}`} className="details-link">Szczegóły</Link>
        </div>
      ))}
    </div>
  );
};

export default WeatherList;
