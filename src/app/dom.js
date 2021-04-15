import { unitScale, cities } from "./storage";
import { getWeather } from "./fetch";

const baseRender = () => {
  const body = document.querySelector("body");
  body.innerHTML = "";

  const container = document.createElement("div");
  container.classList.add("container");
  body.appendChild(container);

  const inputArea = document.createElement("div");
  inputArea.classList.add("input");
  container.appendChild(inputArea);

  const searchBar = document.createElement("input");
  searchBar.type = "text";
  searchBar.value = "Enter city name";
  searchBar.id = "searchBar";
  inputArea.appendChild(searchBar);

  const submitButton = document.createElement("button");
  submitButton.classList.add("submitButton");
  submitButton.innerText = "Add City";
  inputArea.appendChild(submitButton)

  const errorMessage = document.createElement("div");
  errorMessage.class = "errorMessage";
  errorMessage.hidden = "true";
  errorMessage.innerText = "Error. Check spelling, and try again.";
  inputArea.appendChild(errorMessage)

  const unitSelect = document.createElement("label");
  unitSelect.classList.add("toggle");
  unitSelect.setAttribute("for", "unitToggle");
  container.appendChild(unitSelect);

  const toggle = document.createElement("input");
  toggle.classList.add("toggle__input");
  toggle.type = "checkbox";
  toggle.id = "unitToggle";
  toggle.name = ""
  
  if (unitScale.getUnit() == "metric") {
    toggle.checked = "yes";
  }
  unitSelect.appendChild(toggle);

  const toggleFill = document.createElement("div");
  toggleFill.classList.add("toggle__fill");
  unitSelect.appendChild(toggleFill)

  const mainContent = document.createElement("div");
  mainContent.classList.add("mainContent");
  container.appendChild(mainContent);

  cards.render()
  
};

const cards = (() => {
  const icon = (code, desc) => {
    return `<img src="http://openweathermap.org/img/wn/${code}@2x.png" alt="${desc}"></img>`;
  };
  
  const round = (string) => {
    return Math.round(parseFloat(string)).toString()
  }
  
  const render = async () => {
    // let arrCities = cities.getCities();
    const _mainContent = document.querySelector(".mainContent");
    let arrCities = ["vancouver", "maple ridge"]
    for (let i = 0; i < arrCities.length; i++) {
      const currentCity = await getWeather.today(arrCities[i], unitScale.getUnit());
      const cityCard = document.createElement("div");
      cityCard.classList.add("cityCard");
      cityCard.id = currentCity.name;
      _mainContent.appendChild(cityCard);

      const cityName = document.createElement('div')
      cityName.classList.add("cityName")
      cityName.innerText = currentCity.name
      cityCard.appendChild(cityName)

      const currentTemp = document.createElement("div");
      currentTemp.classList.add("currentTemp");
      currentTemp.innerHTML = round(currentCity.main.temp) + `&deg;`;
      cityCard.appendChild(currentTemp);

      const currentCondition = document.createElement("div");
      currentCondition.classList.add("currentCondition");
      currentCondition.innerHTML = currentCity.weather[0].main;
      cityCard.appendChild(currentCondition)
      
      const conditionIcon = document.createElement("div")
      conditionIcon.classList.add("conditionIcon")
      conditionIcon.innerHTML = icon(currentCity.weather[0].icon, currentCity.weather[0].description)
      cityCard.appendChild(conditionIcon)

      const deleteButton = document.createElement("div");
      deleteButton.classList.add("deleteButton")
      deleteButton.innerText = "X"
      cityCard.appendChild(deleteButton)

      const fiveDayButton = document.createElement("div");
      fiveDayButton.classList.add("fiveDayButton")
      fiveDayButton.innerText = "5 DAY FORECAST HERE"
      cityCard.appendChild(fiveDayButton)
    }
  };
  const fiveDayForecast = (city) => {
  
  }
  return {
    icon,
    render
  }
})();


export { baseRender, cards };
