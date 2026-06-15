import { useState } from 'react';
import Card from './Card';

function WeatherCard({ city, temperature, description, icon }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card>
      <span className="icon">{icon}</span>
      <h2>{city}</h2>
      <p className="temp">{temperature}°C</p>
      <p className="desc">{description}</p>
      <button onClick={() => setShowDetails(s => !s)}>
        {showDetails ? 'Masquer les détails' : 'Afficher les détails'}
      </button>
      {showDetails && (
        <div className="details">
          <p>Ville : {city}</p>
          <p>Température : {temperature}°C</p>
        </div>
      )}
    </Card>
  );
}

export default WeatherCard;
