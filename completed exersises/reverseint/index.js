// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // const reversed = n.toString().split('').reverse().join('');
	// return parseInt(reversed) * Math.sign(n);
  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}

module.exports = reverseInt;

  // const string1 = n.toString().split('').reverse().join('');
	// 	return (string1[string1.length -1])  === '-' ?  -(parseInt(string1)) : parseInt(string1);