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
      `http://api.openweathermap.org/data/2.5/forecast?q=${city.replace(" ", "+")}&cnt=5&units=${units}&APPID=ffeb3c454a61829a57de59148fa37655`,
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
    `http://api.openweathermap.org/data/2.5/weather?q=${city.replace(" ", "+")}&units=${units}&APPID=ffeb3c454a61829a57de59148fa37655`,
    {mode: "cors"}
  )
  const result = await response.json()
  if (result.cod == "404" || result.cod == "401") {
    return result.cod
  }
  return result.name.replace(" ", "+")
}
export { getWeather, fetchCity };
