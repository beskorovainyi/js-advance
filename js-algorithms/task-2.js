//Reverse the provided string. Your result must be a string.

function reversString(str) {
  return str.split('').reverse().join('');
}

console.log(reversString("hello"))