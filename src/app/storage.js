const unitScale = (() => {
  if (!localStorage.getItem("unit")) {
    localStorage.setItem("unit", "metric");
  }
  const toggleUnit = () => {
    localStorage.getItem("unit") == "metric"
      ? localStorage.setItem("unit", "imperial")
      : localStorage.setItem("unit", "metric");
  };
  const getUnit = () => {
    let unit = localStorage.getItem("unit");
    
    return unit
  };

  return {
    toggleUnit,
    getUnit,
  };
})();

const cities = (() => {
  if (!localStorage.getItem("cities")) {
    localStorage.setItem("cities", "[]");
  }
  const addCity = (city) => {
    let arr = getCities();
    localStorage.setItem("cities", JSON.stringify(arr.push(city)));
  };
  const getCities = () => {
    return JSON.parse(localStorage.getItem("cities"));
  };
  const delCity = (city) => {
    let arr = getCities();
    localStorage.setItem(
      "cities",
      JSON.stringify(arr.filter((c) => c == city))
    );
  };

  return {
    addCity,
    getCities,
    delCity,
  };
})();

export { unitScale, cities }