function convertTemperature() {
  var inputTemperature = document.getElementById("temperatureInput").value.trim(); // Trim any leading/trailing whitespace
  var selectedUnit = document.getElementById("unitSelector").value;
  var resultElement = document.getElementById("result");
  var convertedTemperature;

  if (inputTemperature === "") {
      resultElement.innerHTML = "Please enter a temperature.";
      return;
  }

  if (isNaN(inputTemperature)) {
      resultElement.innerHTML = "Please enter a valid number for temperature.";
      return;
  }

  inputTemperature = parseFloat(inputTemperature);

  if (selectedUnit === "celsius") {
      convertedTemperature = inputTemperature;
  } else if (selectedUnit === "fahrenheit") {
      convertedTemperature = (inputTemperature - 32) * (5 / 9);
  } else if (selectedUnit === "kelvin") {
      convertedTemperature = inputTemperature - 273.15;
  } else {
      resultElement.innerHTML = "Invalid unit selected.";
      return;
  }

  resultElement.innerHTML = "Converted Temperature: " + convertedTemperature.toFixed(2) + " " + selectedUnit;
}
