import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; // Upewnij się, że ten plik istnieje
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherList from './components/WeatherList'; // Komponent z listą miast
import WeatherDetail from './components/WeatherDetail'; // Komponent szczegółów pogody
import './styles/WeatherList.css'; // Plik CSS ze stylami

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <h1 className="app-title">Weather App</h1>
        <Routes>
          <Route path="/" element={<WeatherList />} />
          <Route path="/details/:cityName" element={<WeatherDetail />} />
        </Routes>
      </div>
    </Router>
  </Provider>
);

export default App;
