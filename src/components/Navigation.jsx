import { NavLink } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

function Navigation() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <NavLink to="/" end>Accueil</NavLink>
      <NavLink to="/about">À propos</NavLink>
      <button className="theme-toggle" onClick={toggleTheme} title="Changer le thème">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}

export default Navigation;
