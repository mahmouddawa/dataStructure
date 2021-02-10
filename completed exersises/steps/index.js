// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function StepsFunction(step, total){
  let arrayTotal = [];
  for(let i=0;i<step;i++){
    arrayTotal.push('#')
  }
  for(let i=0;i<total;i++){
    arrayTotal.push(' ');
  }
  console.log(arrayTotal.join(""));
}

function steps(n) {
 for (let i = 1; i <= n ;i++){
   StepsFunction(i, n-i);
  } 
}

module.exports = steps;
//# solution 2
  // for(let row = 0;row < n; row++){
  //   let stair = '';
  //   for(let column = 0; column < n; column++){
  //     if(row>=column){
  //       stair+='#'
  //     }
  //     else{
  //       stair+= ' '
  //     }
  //   }
  //   console.log(stair);
  // }

  //# solution 3 recursive solution

//     if(n === row){
//     return;
//   }
//   if(stair.length === n){
//     console.log(stair);
//     return steps(n, row +1)
//   }
// const add = stair.length <= row ? '#' : ' ';
//   steps(n,row,stair + add);
