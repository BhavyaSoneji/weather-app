# Weather App

A modern, responsive weather application that provides real-time weather information for cities around the world.

## 🌐 Live Demo

Check out the live demo: [https://ecosmart-dusky.vercel.app/index.html](https://ecosmart-dusky.vercel.app/index.html)

## 📋 Description

This Weather App is a clean and intuitive web application that delivers comprehensive weather information for any city globally. Built with vanilla JavaScript, HTML, and CSS, the application leverages the OpenWeatherMap API to fetch and display real-time weather data.

### Key Features:

- **Real-time Weather Data**: Get instant access to current weather conditions for any city worldwide
- **Search Functionality**: Easy-to-use search bar with a magnifying glass icon to quickly find weather information for your desired location
- **Comprehensive Weather Metrics**: 
  - Current temperature with min/max temperature range
  - Weather condition (e.g., Clear, Clouds, Rain)
  - Dynamic weather icons that reflect current conditions
  - "Feels Like" temperature
  - Humidity percentage
  - Wind speed in meters per second
  - Atmospheric pressure in hPa
- **Location Details**: Displays full city name and country with proper formatting
- **Date and Time**: Shows the complete date and time including weekday, ensuring you know when the data was retrieved
- **Default Location**: Automatically loads weather data for Delhi on page load
- **Clean UI Design**: Modern, card-based interface with a black and white color scheme
- **Responsive Layout**: Works seamlessly across different screen sizes and devices
- **Icon Integration**: Uses Font Awesome icons for a polished, professional look

### How It Works:

1. **Search**: Type the name of any city in the search bar and press Enter
2. **Instant Results**: The app fetches data from OpenWeatherMap API and displays:
   - Current weather conditions with appropriate weather icons
   - Temperature readings (current, min, max, and feels like)
   - Additional metrics (humidity, wind speed, pressure)
   - Full location name with country
   - Accurate timestamp of the data
3. **Visual Feedback**: Weather information is presented in an organized card layout with intuitive icons for each metric

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with flexbox and grid layouts
- **JavaScript (ES6+)**: 
  - Async/await for API calls
  - DOM manipulation
  - Event handling
  - Internationalization API for formatting
- **OpenWeatherMap API**: Real-time weather data provider
- **Font Awesome**: Icon library for UI elements

## 🚀 Getting Started

1. Clone the repository
2. Open `index.html` in your web browser
3. Start searching for weather information in your favorite cities!

## 📦 Project Structure

```
weather-app/
│
├── index.html          # Main HTML file with application structure
├── WeatherApp.js       # JavaScript logic for API calls and DOM manipulation
├── WeatherApp.css      # Styling and responsive design
└── README.md           # Project documentation
```

## 🌟 Features Breakdown

### Weather Display Cards
- **Feels Like**: Shows the perceived temperature based on humidity and wind
- **Humidity**: Displays moisture content in the air as a percentage
- **Wind**: Shows wind speed to help plan outdoor activities
- **Pressure**: Atmospheric pressure readings in hectopascals

### Smart Date/Time Formatting
Uses the Internationalization API to format dates and times in a user-friendly manner, displaying full information including day of the week.

### Country Name Display
Converts country codes to full country names for better readability using the Intl.DisplayNames API.

## 🎨 UI Highlights

- Clean, minimalist design with high contrast
- Centered layout for optimal viewing experience
- Card-based information architecture for easy scanning
- Smooth, professional appearance with rounded corners and shadows
- Icon-enhanced data points for quick visual recognition

## 📱 Responsive Design

The application is fully responsive and adapts to various screen sizes, making it accessible on:
- Desktop computers
- Tablets
- Mobile devices

## 🔑 API Information

This application uses the OpenWeatherMap API to fetch weather data. The API provides:
- Current weather conditions
- Temperature data in Kelvin
- Weather descriptions and icons
- Wind speed and direction
- Atmospheric pressure
- Humidity levels

## 📄 License

This project is open source and available for personal and educational use.

## 👨‍💻 Author

Created by Bhavya Soneji

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!
