async function fetchWeatherInformation(cityName) {
    try {
      let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=5fdc3024bfb04f95b04120512230110&q=${cityName}&aqi=no`);
      if (response.ok) {
        let data = await response.json();
        console.log('Weather Information:', data);
      } else {
        console.error('Failed to fetch weather data. Status:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  

  fetchWeatherInformation('toronto');//enter the city name to display the data

  //http://api.weatherapi.com/v1/current.json?key=5fdc3024bfb04f95b04120512230110&q=London&aqi=no
  