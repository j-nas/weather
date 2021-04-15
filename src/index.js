import "./css/style.css";
import { addDays } from "date-fns";


const getCurrentWeather = async () => {
  const response = await fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=maple+ridge&APPID=ffeb3c454a61829a57de59148fa37655",
    { mode: "cors" }
  );
  const currentWeather = await response.json()
  sessionStorage.setItem("weather", JSON.stringify(currentWeather))
  return currentWeather
};
const button = document.createElement("button");
const body = document.querySelector("body");
button.innerText = "log api call";
button.addEventListener("click", (e) => {
  sessionStorage.setItem("weather", getCurrentWeather());
});
body.appendChild(button);
console.log("function call", getCurrentWeather())
sessionStorage.ge