export const weatherData = [
  { id: 1, city: "Paris", lat: 48.8566, lon: 2.3522 },
  { id: 2, city: "Lyon",  lat: 45.7640, lon: 4.8357 },
  { id: 3, city: "Brest", lat: 48.3904, lon: -4.4861 },
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
