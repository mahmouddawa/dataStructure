// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
let count = 0;
const vowelsArr  = ['e','a','i','u','o'];
for (let char of str.toLowerCase()){
  if (vowelsArr.includes(char)){
    count++;
  }
}
return count;
}

module.exports = vowels;



// # Soulution 1
// let counter = 0;
// for (let i = 0; i<str.length; i++){
//   if(str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e'
//    || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u'){
//     counter += 1
//   }    
// }
// return counter;

// # solution
// const vowelsArr  = ['e','a','i','u','o'];
// const arr = str.split('').filter( letter => {
//   if (vowelsArr.includes(letter.toLowerCase())){
//     return letter
//   }
// });
// return arr.length;

// function vowels(str) {
//   // this regx match will return an array or null in case of not founding any matches
//   // the g make sure that we don't stop after finding the first match
//   //the i stands for insensitive (it is not case sensitive so there is no need to use tolowercase()  )

// const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }
