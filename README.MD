# **Weather Dashboard 🌤️**

A modern and responsive weather app built with **React** and **TypeScript**, leveraging the **OpenWeatherMap API** to provide real-time weather data.

## **Features**

- 🌍 Search for current weather by city name.
- 📊 Display key weather metrics, including:
  - Temperature
  - Humidity
  - Wind speed
  - Weather conditions
- 📅 Optional 5-day forecast visualization (enhancements planned).
- 💡 Handles errors for invalid inputs and API issues gracefully.
- 📱 Fully responsive design for desktop and mobile.

---

## **Tech Stack**

- **React** with hooks for state management
- **TypeScript** for type safety and clean, maintainable code
- **Fetch API** for making API requests to OpenWeatherMap
- **Vite** for fast development and builds

---

## **Important Note**

This project uses a **free API key** from OpenWeatherMap, which is included in the repository for demonstration purposes.

### **Key Limitations**

- The free API key has **rate limits** (e.g., 60 calls per minute).
- The key may stop working if the rate limit is exceeded.

### **Recommendation for Production**

- Replace the included API key with your own from [OpenWeatherMap](https://openweathermap.org/api).
- Use environment variables to keep your API key secure.

---

## **Getting Started**

### **Clone the Repository**

```bash
git clone https://github.com/yourusername/weather-dashboard.git
cd weather-dashboard

```

### **Install Dependencies**

```bash
npm i

```

### **Run the App Locally**

```bash
npm run dev

```

### **Access the App**

Visit http://localhost:xxxx in your browser.

## **Enhancements Planned**

- 🌟 Add a 5-day weather forecast feature.
- 📊 Integrate charts for better data visualization.
- 🌍 Add geolocation support for automatic weather updates.
- 🖌️ Improve UI with animations, drag/drop and dark mode.

## **Enhancements Planned**

This project is open-source and available under the MIT License.
