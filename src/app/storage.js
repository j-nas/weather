const unitScale = (() => {
  if (!localStorage.getItem("unit")) {
    localStorage.setItem("unit", "metric")
  }
  const toggleUnit = () => {
    localStorage.getItem("unit") == "metric" ? 
    localStorage.setItem("unit", "imperial") : 
    localStorage.setItem("unit", "metric")
  }
  const getUnit = () => {
    return localStorage.getItem("unit")
  }

  return {
    toggleUnit,
    getUnit,
  }
})()