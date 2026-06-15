import Card from './Card';

function WeatherDetail({ city }) {
  if (!city) return null;

  return (
    <Card>
      <div className="detail-card">
        <span className="icon">{city.icon}</span>
        <div>
          <p className="detail-city">{city.city}</p>
          <p className="detail-temp">{city.temperature}°C</p>
          <p className="detail-desc">{city.description}</p>
        </div>
      </div>
    </Card>
  );
}

export default WeatherDetail;
