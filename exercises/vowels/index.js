// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const v = ['a', 'e', 'i', 'o', 'u']

  const res = str
    .toLowerCase()
    .split('')
    .reduce((previous, current) => {
      if (v.includes(current)) {
        return previous + 1
      }
      return previous
    }, 0)

  return res
}

module.exports = vowels
