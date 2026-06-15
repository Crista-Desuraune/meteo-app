import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { weatherData, getWeatherInfo } from '../data/cities';
import WeatherCard    from '../components/WeatherCard';
import SearchBar      from '../components/SearchBar';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage   from '../components/ErrorMessage';

function Home() {
  const [weatherResults, setWeatherResults] = useState([]);
  const [loading, setLoading]               = useState(false);
  const [error, setError]                   = useState(null);
  const [refresh, setRefresh]               = useState(0);
  const [searchTerm, setSearchTerm]         = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      setError(null);
      try {
        const results = await Promise.all(
          weatherData.map(async ({ id, city, lat, lon }) => {
            const res = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
            );
            if (!res.ok) throw new Error(`Erreur réseau pour ${city}`);
            const data = await res.json();
            const { temperature, weathercode } = data.current_weather;
            return { id, city, temperature: Math.round(temperature), ...getWeatherInfo(weathercode) };
          })
        );
        setWeatherResults(results);
      } catch (err) {
        setError(err.message || "Erreur lors du chargement des données.");
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [refresh]);

  const filteredData = weatherResults.filter(city =>
    city.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page">
      <div className="page-header">
        <h1>Mon application météo</h1>
        <p>Crista Desuraune--Cocu</p>
      </div>

      <div className="toolbar">
        <button className="btn-primary" onClick={() => setRefresh(r => r + 1)}>
          ↻ Actualiser
        </button>
        <SearchBar
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onClear={() => setSearchTerm('')}
        />
      </div>

      {loading && <LoadingSpinner />}
      {error   && <ErrorMessage message={error} />}

      {!loading && !error && (
        <>
          <p className="results-count">{filteredData.length} ville(s) trouvée(s)</p>
          {filteredData.length > 0
            ? (
              <div className="weather-grid">
                {filteredData.map(city => (
                  <div key={city.id} onClick={() => navigate(`/city/${city.city}`)} style={{ cursor: 'pointer' }}>
                    <WeatherCard {...city} />
                  </div>
                ))}
              </div>
            )
            : <p>Aucune ville disponible</p>
          }
        </>
      )}
    </div>
  );
}

export default Home;
