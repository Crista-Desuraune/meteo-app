import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { weatherData, getWeatherInfo } from '../data/cities';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage   from '../components/ErrorMessage';
import WeatherDetail  from '../components/WeatherDetail';

function CityDetail() {
  const { cityName } = useParams();
  const navigate     = useNavigate();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);

  const cityEntry = weatherData.find(
    c => c.city.toLowerCase() === cityName.toLowerCase()
  );

  useEffect(() => {
    if (!cityEntry) return;

    const fetchCity = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${cityEntry.lat}&longitude=${cityEntry.lon}&current_weather=true`
        );
        if (!res.ok) throw new Error(`Erreur réseau pour ${cityEntry.city}`);
        const data = await res.json();
        const { temperature, weathercode } = data.current_weather;
        setWeather({
          city: cityEntry.city,
          temperature: Math.round(temperature),
          ...getWeatherInfo(weathercode),
        });
      } catch (err) {
        setError(err.message || "Erreur lors du chargement.");
      } finally {
        setLoading(false);
      }
    };

    fetchCity();
  }, [cityName]);

  if (!cityEntry) {
    return (
      <div className="page not-found">
        <h1>404</h1>
        <p>Ville "{cityName}" introuvable.</p>
        <button className="btn-back" onClick={() => navigate('/')}>← Retour à l'accueil</button>
      </div>
    );
  }

  return (
    <div className="page">
      <button className="btn-back" onClick={() => navigate('/')}>← Retour</button>
      <div className="page-header">
        <h1>Météo — {cityEntry.city}</h1>
      </div>
      {loading && <LoadingSpinner />}
      {error   && <ErrorMessage message={error} />}
      {weather && <WeatherDetail city={weather} />}
    </div>
  );
}

export default CityDetail;
