// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
let stringInputToArray = str.split("");
let max = 0;
let maxChar = '';
 
 let strNamesCount = stringInputToArray.reduce(function (charCounter, char1) {
  if (char1 in charCounter) {
    charCounter[char1]++
  } else{
    charCounter[char1] = 1;
  } 
  return charCounter;
  
}, {} );


for (let char in strNamesCount){
  if (strNamesCount[char] > max) {
    max = strNamesCount[char];
    maxChar = char
  }
}
// var arr = Object.keys( strNamesCount ).map(function ( key ) { return strNamesCount[key]; });
// const max = Math.max.apply(null, arr);

return maxChar
}


module.exports = maxChar;


// const map = {};
// let max = 0;
// let maxChar = '';
// for(let i = 0;i<str.length; i++){
//     if(map[str[i]]){
//         map[str[i]]++
//     }
//     else map[str[i]] = 1;
// }
// for(let char in map){
//     if(map[char]>max){
//         max = map[char];
//         maxChar = char;
//     }
// }
// return maxChar;
