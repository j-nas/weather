import { cards } from "./dom";
import { unitScale, cities } from "./storage";
import { fetchCity } from "./fetch";
const listeners = (() => {
  const body = document.querySelector("body");
  body.addEventListener("click", async (e) => {
    if (e.target.id == "unitToggle") {
      unitScale.toggleUnit();
      cards.render();
    }
    if (e.target.classList == "submitButton") {
      const inputField = document.getElementById("searchBar");
      let verified = await fetchCity(inputField.value);
      const error = document.querySelector(".errorMessage");
      if (verified == undefined) {
        error.hidden = false;
        return;
      }
      error.hidden = true;
      cities.addCity(verified);
      cards.render();
    }
    if (e.target.classList == "deleteButton") {
      cities.delCity(e.target.parentElement.id);
      cards.render();
    }

    if (e.target.classList == "fiveDayButton") {
      e.target.nextSibling.classList.toggle("visible");
    }
  });
  body.addEventListener("keypress", async (enter) => {
    if (enter.key === "Enter") {
      if (enter.target.id === "searchBar") {
        const inputField = document.getElementById("searchBar");
        let verified = await fetchCity(inputField.value);
        const error = document.querySelector(".errorMessage");
        if (verified == undefined) {
          error.hidden = false;
          return;
        }
        error.hidden = true;
        cities.addCity(verified);
        cards.render();
      }
    }
  });
})();
