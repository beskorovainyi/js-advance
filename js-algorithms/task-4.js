// Return the length of the longest word in the provided sentence.

function findLongestWordLength(str) {
  var i,
    size = str.length,
    count = 0,
    max = 0
  for (i = 0; i < size; i++) {
    if (str[i] === ' ') {
      count = 0
    } else {
      count += 1
    }
    if (max < count) max = count
  }
  return max
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))