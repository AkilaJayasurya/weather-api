## 🌦️ Weather App


React-based Weather App that fetches real-time weather data using the OpenWeather API. It displays temperature, weather conditions, humidity, and an appropriate weather icon.


## 🚀 Features

- 🌍 **Search weather by city name**  
  Easily look up weather information for any city worldwide.

- 🌡️ **Displays temperature (in Celsius)**  
  Real-time temperature updates in Celsius.

- 🌤️ **Shows weather conditions with dynamic icons**  
  Visually engaging icons that reflect current weather conditions.

- 💦 **Displays humidity level**  
  Get accurate humidity readings alongside temperature data.

- 🎨 **Beautiful UI with animated background**  
  A modern, responsive design featuring smooth animated backgrounds.



## 🚀 Live Demo

https://weather-app-one-chi-20.vercel.app/


## 🗂 Project Structure

```
  weather-app-react/
├── public/
│   └── favicon.ico (or other public assets)
├── src/
│   ├── assets/
│   │   └── img.png (used in index.html as favicon)
│   ├── components/
│   │   └── Weather.jsx        # Main Weather UI + API logic
│   ├── App.jsx                # Loads Weather component
│   ├── App.css                # Optional custom styles
│   ├── index.css              # Tailwind CSS entry
│   └── main.jsx               # React root entry
├── .env                       # API key for OpenWeatherMap
├── .gitignore                 # Ignores node_modules, .env, etc.
├── index.html                 # Root HTML loaded by Vite
├── package.json               # Project metadata and dependencies
├── vite.config.js             # Vite and Tailwind config
├── eslint.config.js           # Optional linting rules
├── README.md                  # GitHub documentation

  ```


## 📦 Installation 

1.Clone the repository : git clone https://github.com/AkilaJayasurya/weather-app.git

2.Install dependencies : npm install

3.Add your API key : const API_KEY = 'YOUR_API_KEY_HERE';

4.Development server : npm run dev
