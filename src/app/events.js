import { cards } from "./dom"
import { unitScale, cities } from "./storage"
import { fetchCity } from "./fetch"
const listeners = (() => {
  const body = document.querySelector("body")
  body.addEventListener('click', async (e) => {
    if(e.target.id == "unitToggle") {
      unitScale.toggleUnit()
      cards.render()
    }
    if(e.target.classList == "submitButton") {
      
      const inputField = document.getElementById("searchBar")
      let verified = await fetchCity(inputField.value)
      const error = document.querySelector(".errorMessage")
      if (verified == "404" || verified == "401") {
        error.hidden = false
        return
      }
      error.hidden = true
      cities.addCity(verified)
      cards.render()
      
  }})    
})()