// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//n=2, c=n+1=3
//n=3, c=n+2=5
//n=4, c=n+3=7

function pyramid(n) {
  const columns = n + n - 1

  for (let row = 0; row < n; row++) {
    const m = []
    const midpoint = Math.floor(columns / 2)

    for (let column = 0; column < columns; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        m.push('#')
      } else {
        m.push(' ')
      }
    }

    console.log(m.join(''))
  }
}

module.exports = pyramid
