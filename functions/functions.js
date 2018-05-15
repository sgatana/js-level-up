/**
 * a funtion that converts temperature from degrees celcius into other units
 * pass a value of the teperature you want to convert into other units
 */
const input = require('readline-sync');

const convertTemperature = (temperature) => {
  const converter = input.question('Enter input to convert into: ');
  switch (converter) {
    // convert temperature into fahrenheit
    case 'fahrenheit':
      return (temperature * 1.8) + 32;

    // convert temperature into kelvin
    case 'kelvin':
      return temperature + 273;

    // convert temperature into rankine
    case 'rankine':
      return (temperature * 1.8) + 273;

    // convert temperature into newton
    case 'newton':
      return temperature * 0.33;

    // return default
    default:
      return temperature;
  }
};

// pass the temperature parameter you want to convert into
console.log(convertTemperature(5));
