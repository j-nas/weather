const getWeather = (() => {
  const today = async (city, units) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city.replace(" ", "+")}&units=${units}&APPID=ffeb3c454a61829a57de59148fa37655`,
      { mode: "cors" }
    );
    const todaysWeather = await response.json();
    return todaysWeather;
  };
  const fiveDay = async (city, units) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city.replace(" ", "+")}&units=${units}&APPID=ffeb3c454a61829a57de59148fa37655`,
      { mode: "cors" }
    );
    const forecast = await response.json();
    return forecast;
  };
  return {
    today,
    fiveDay,
  };
})();

async function fetchCity(city) {
  
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city.replace(" ", "+")}&APPID=ffeb3c454a61829a57de59148fa37655`,
      {mode: "cors"}
    )
    
    const result = await response.json()
    return result.name
  
   
}
export { getWeather, fetchCity };
