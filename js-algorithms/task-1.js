//The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

function convertToFahrenheit(celsius) {
  let number = celsius * 9.5
  let fahrenheit = number   + 32 ;
  return fahrenheit;
}

console.log(convertToFahrenheit(30))