function convert() {
  // Get the input values
  var temperatureInput = document.getElementById("temperature").value;
  var fromUnit = document.getElementById("fromUnit").value;
  var toUnit = document.getElementById("toUnit").value;
  
  // Convert the temperature to the specified unit
  var resultValue;
  if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
  	resultValue = (temperatureInput * 9/5) + 32;
  } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
  	resultValue = parseFloat(temperatureInput) + 273.15;
  } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
  	resultValue = (temperatureInput - 32) * 5/9;
  } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
  	resultValue = (temperatureInput - parseFloat(temperatureInput) + 459.67) * 5/9;
  } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
    resultValue = parseFloat(temperatureInput) - 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
    resultValue = (parseFloat(temperatureInput) * 9/5) - 459.67;
    } else if (fromUnit === toUnit) {
    resultValue = parseFloat(temperatureInput);
    } else {
    alert("Please select the correct units for conversion.");
    return;
    }
    
    // Display the result
    var result = document.getElementById("resultValue");
    result.innerHTML = temperatureInput + " " + fromUnit + " = " + resultValue.toFixed(2) + " " + toUnit;
    }
