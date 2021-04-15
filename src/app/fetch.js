const getWeather = (() => {
  const citySearch = asyn
  const fetchToday = async (city, units) => { //pass units as strins 
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=ffeb3c454a61829a57de59148fa37655`)
    const todaysWeather = await response.json()
    return todaysWeather
  }
  const fetchFiveDay = async (city, units) => { //as either imperial or metric
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&units=${units}&APPID=ffeb3c454a61829a57de59148fa37655`)
    const forecast = await response.json()
    return forecast
  }
  return {
    citySearch,
    fetchToday,
    fetchFiveDay,
  }
})()