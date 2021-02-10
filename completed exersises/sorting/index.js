// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort
const swap = (a)=>{
  
}
function bubbleSort(arr) {
  let lesser = 0;
  for(let i = 0; i<arr.length ; i++ ){
    for (let j=0; j< (arr.length- i -1); j++){
      if( arr[j]>arr[j+1]){
        lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  let index = 0;
  let temp = 0;
  for(let i = 0;i< arr.length; i++){
    index = i;
    for(let j = i+1; j< arr.length; j++){
      if(arr[index]>arr[j]){
        index = j;
      }
    }
    if(i != index){
      temp = arr[i];
      arr[i] = arr[index]
      arr[index] = temp;
    }
  }
  return arr

}

function mergeSort(arr) {
  if(arr.length === 1){
    return arr
  }
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0,center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right))

}

function merge(left, right) {
  const results = [];
  while(left.length > 0 && right.length > 0){
    if(left[0] > right[0]){
      results.push(right.shift());
    }else if (left[0] < right[0]){
      results.push(left.shift());
    }
  }
  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
