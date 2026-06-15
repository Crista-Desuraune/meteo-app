import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <button className="btn-back" onClick={() => navigate('/')}>← Retour</button>
      <div className="page-header">
        <h1>À propos</h1>
      </div>
      <div className="about-content">
        <p>Application météo utilisant l'API <strong>Open-Meteo</strong> — gratuite, sans clé d'API requise.</p>
        <p>Données en temps réel pour Paris, Lyon et Brest : température actuelle et condition météo.</p>
        <p>Construite avec React, React Router et des composants réutilisables.</p>
      </div>
    </div>
  );
}

export default About;
