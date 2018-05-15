// use console to enter inputs
const readline = require("readline-sync");

// initialize converted temperature to 0
let convertTemperature = 0;

// input temperature in •c(degrees celcius) value from console as a number
let temperature = parseInt(readline.question("Enter temperature in celcius?"));
// add a converter
let converter = readline.question("Enter muiltiplier?");

switch (converter) {
  // convert temperature into fahrenheit
  case "fahrenheit":
    convertTemperature = temperature * 1.8 + 32;
    break;
  // convert temperature into kelvin

  case "kelvin":
    convertTemperature = temperature + 273;
    break;
  // convert temperature into rankine

  case "rankine":
    convertTemperature = temperature * 1.8 + 273;
    break;
  // convert temperature into newton

  case "newton":
    convertTemperature = temperature * 0.33;
    break;
  default:
    convertTemperature;
    break;
}

console.log("Temperature in Fahrenheit is : ", convertTemperature);