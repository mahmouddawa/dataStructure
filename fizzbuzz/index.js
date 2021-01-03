// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

//modulo


function fizzBuzz(n) {
  for(let i = 1; i<=n; i++){
    if(i%3=== 0 && i %5=== 0){
      console.log('fizzbuzz')
    }else if (i % 3 === 0){
      console.log('fizz')
    }else if (i% 5 === 0){
      console.log('buzz');
    }else{
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;

//let x = 1;
//function fizzBuzz(n) {
// if(x%3 === 0 && x%5 === 0){
//   console.log('fizzbuzz');
// }
// else if(x%3 === 0){
//   console.log('fizz');
// }else if (x%5 === 0) {
//   console.log('buzz');
// }
// else{
//   console.log(x);
// }

// x++;

//  if ( n > 1) return fizzBuzz( n-1 );
