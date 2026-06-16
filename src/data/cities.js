export const weatherData = [
  { id: 1,  city: "Paris",      lat: 48.8566, lon:  2.3522 },
  { id: 2,  city: "Lyon",       lat: 45.7640, lon:  4.8357 },
  { id: 3,  city: "Brest",      lat: 48.3904, lon: -4.4861 },
  { id: 4,  city: "Rouen",      lat: 49.4432, lon:  1.0993 },
  { id: 5,  city: "Marseille",  lat: 43.2965, lon:  5.3698 },
  { id: 6,  city: "Bordeaux",   lat: 44.8378, lon: -0.5792 },
  { id: 7,  city: "Toulouse",   lat: 43.6047, lon:  1.4442 },
  { id: 8,  city: "Lille",      lat: 50.6292, lon:  3.0573 },
  { id: 9,  city: "Nantes",     lat: 47.2184, lon: -1.5536 },
  { id: 10, city: "Strasbourg", lat: 48.5734, lon:  7.7521 },
];

export function getWeatherInfo(code) {
  if (code === 0)  return { description: "Ensoleillé", icon: "☀️" };
  if (code <= 3)   return { description: "Nuageux",    icon: "⛅" };
  if (code <= 48)  return { description: "Brumeux",    icon: "🌫️" };
  if (code <= 67)  return { description: "Pluvieux",   icon: "🌧️" };
  if (code <= 77)  return { description: "Neigeux",    icon: "🌨️" };
  if (code <= 82)  return { description: "Averses",    icon: "🌦️" };
  return           { description: "Orageux",           icon: "⛈️" };
}
