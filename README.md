# Meteo App

Application météo en temps réel construite avec **React** et **React Router**, utilisant l'API gratuite [Open-Meteo](https://open-meteo.com/).

---

## Fonctionnalités

- Météo en temps réel pour Paris, Lyon et Brest (température, condition, icône)
- Recherche de ville avec filtre instantané et compteur de résultats
- Page de détail par ville via routing dynamique (`/city/:cityName`)
- Bouton Actualiser pour relancer le fetch
- Thème clair / sombre avec persistance (`localStorage`)
- Gestion des états : chargement, erreur réseau, données vides
- Navigation SPA avec React Router (liens actifs, page 404)
- Design responsive (mobile ≥ 320px)

---

## Stack technique

| Outil | Rôle |
|---|---|
| React 18 | UI et gestion d'état (`useState`, `useEffect`, `useContext`) |
| React Router v7 | Routing SPA (`BrowserRouter`, `useParams`, `useNavigate`) |
| Open-Meteo API | Données météo (gratuit, sans clé) |
| Vite | Bundler et serveur de développement |
| CSS variables | Thème clair/sombre sans librairie externe |

---

## Installation

```bash
# Cloner le dépôt
git clone <url-du-repo>
cd meteo-app

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173) dans le navigateur.

---

## Scripts disponibles

```bash
npm run dev      # Serveur de développement avec HMR
npm run build    # Build de production → dossier dist/
npm run preview  # Prévisualiser le build de production en local
```

---

## Structure du projet

```
src/
├── contexts/
│   └── ThemeContext.jsx     # ThemeProvider (contexte thème)
├── hooks/
│   └── useTheme.js          # Hook useTheme + création du contexte
├── data/
│   └── cities.js            # Liste des villes et helper getWeatherInfo()
├── components/
│   ├── Card.jsx             # Conteneur générique avec children
│   ├── ErrorMessage.jsx     # Affichage d'erreur réutilisable
│   ├── LoadingSpinner.jsx   # Spinner animé réutilisable
│   ├── Navigation.jsx       # Barre de navigation + bouton thème
│   ├── SearchBar.jsx        # Input contrôlé + bouton Effacer
│   ├── WeatherCard.jsx      # Carte météo (utilise Card)
│   └── WeatherDetail.jsx    # Vue détaillée d'une ville
├── pages/
│   ├── Home.jsx             # Liste des villes avec recherche
│   ├── CityDetail.jsx       # Détail d'une ville (/city/:cityName)
│   └── About.jsx            # Page à propos
├── App.jsx                  # Layout : Navigation + Routes
└── main.jsx                 # Point d'entrée : BrowserRouter + ThemeProvider
```

---

## Déploiement

### Netlify

Le fichier `public/_redirects` gère le routing SPA :
```
/* /index.html 200
```

1. `npm run build`
2. Déposer le dossier `dist/` sur [Netlify Drop](https://app.netlify.com/drop)

### Vercel

Le fichier `vercel.json` à la racine configure les rewrites :
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

1. Connecter le dépôt GitHub sur [vercel.com](https://vercel.com)
2. Vercel détecte Vite automatiquement et lance `npm run build`

---

## Analyse du bundle

Après `npm run build`, ouvrir `dist/stats.html` dans le navigateur pour visualiser la composition du bundle (généré par `rollup-plugin-visualizer`).

Tailles actuelles :

| Fichier | Brut | Gzip |
|---|---|---|
| `index.js` | 238 kB | 76 kB |
| `index.css` | 5.8 kB | 1.8 kB |

La quasi-totalité du JS est React + React Router DOM — le code applicatif est négligeable.

---

## Auteur

Crista Desuraune--Cocu
