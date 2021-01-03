// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let strTemp = '';
  for (i = str.length -1; i>=0 ; i-- ){
    strTemp += str[i];
  }
  return strTemp

}

module.exports = reverse;

//---------------  1
//  return str.split('').reverse().join()

//---------------  2
// let reversed
// for(let character of str) {
// reversed = character + reversed
// }
//return reversed

//---------------3

// return str.split('').reduce((rev,char) => char + rev, '');