import React from 'react';
import { Link } from 'react-router-dom';

const CityCard = ({ city }) => (
  <div className="city-card">
    <h3>{city.name}</h3>
    <p>Temperatura: {city.temp}°C {city.icon}</p>
    <p>Warunki: {city.condition}</p>
    <Link to={`/details/${city.name}`}>Szczegóły</Link>
  </div>
);

export default CityCard;
