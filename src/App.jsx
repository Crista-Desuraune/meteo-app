import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home       from './pages/Home';
import CityDetail from './pages/CityDetail';
import About      from './pages/About';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/"              element={<Home />} />
        <Route path="/city/:cityName" element={<CityDetail />} />
        <Route path="/about"         element={<About />} />
        <Route path="*"              element={
          <div className="page not-found">
            <h1>404</h1>
            <p>Cette page n'existe pas.</p>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
