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
      console.log(verified)
      if (verified == undefined) {
        error.hidden = false
        return
      }
      error.hidden = true
      cities.addCity(verified)
      cards.render()
    }
    if (e.target.classList == "deleteButton") {
      
      cities.delCity(e.target.parentElement.id)
      cards.render()
      
    }

    if (e.target.classList == "fiveDayButton") {
      if (e.target.classList == "fiveDayButton")
      e.target.nextSibling.hidden = false
      e.target.classList.add('open')
      
    } else if(e.targetClassList == "fiveDayButton open") {
      e.target.nextSibling.hidden = true
      e.target.classList.remove('open')
      
    }
  })    
})()