// Return the factorial of the provided integer.

function factorialize(num) {
  var total = 1;
  for (i = 1; i <= num; ++i) {
    total = total * i
  }
  return total;
}

console.log(factorialize(5))