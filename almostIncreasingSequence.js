// Easy

// Codewriting

// 300

// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Example

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer sequence

// Guaranteed constraints:
// 2 ≤ sequence.length ≤ 105,
// -105 ≤ sequence[i] ≤ 105.

// [output] boolean

// Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.

// function almostIncreasingSequence(sequence) {
// let str = sequence.toString().split(',').join("");
// let strSub;
// for (let i = 1; i < sequence.length; i++) {
//   if(sequence[i] > 99 || ( -9 > sequence[i] > -100) ) {
//     strSub = `${str.substring(0, i)}${str.substring(i+3)}`;
//     console.log(strSub);
//   }


//   if(sequence[i] > 10) {
//     strSub = `${str.substring(0, i)}${str.substring(i+2)}`;
//   }
//   else {strSub = `${str.substring(0, i)}${str.substring(i+1)}`;}
//   // console.log(new Set(strSub).size === sequence.length);
  
// if(strSub === strSub.split('').sort((a,b)=>a-b).join('') && new Set(strSub).size === strSub.length) {
//   return true;
//   }
//   } 
// return false
// }

function almostIncreasingSequence(seq) {
  var bad=0
  for(var i=1;i<seq.length;i++) if(seq[i]<=seq[i-1]) {
    bad++
    if(bad>1) return false
    if(seq[i]<=seq[i-2]&&seq[i+1]<=seq[i-1]) return false
  }
  return true
}


const sequence =  [1, 3, 2];
const sequence2 = [1, 3, 2, 1];
const sequence3 = [1, 4, 10, 4, 2];
const sequence4 = [1,1];
const sequence5 = [1, 2, 5, 3, 5];
const sequence6 = [1, 2, 1, 2];
const sequence7 = [1, 2, 3, 4, 99, 5, 6];
const sequence8 = [123, -17, -5, 1, 2, 3, 12, 43, 45]
console.log(almostIncreasingSequence(sequence8), true);

console.log(almostIncreasingSequence(sequence), true);
console.log(almostIncreasingSequence(sequence2), false);
console.log(almostIncreasingSequence(sequence3), false);
console.log(almostIncreasingSequence(sequence4), true);
console.log(almostIncreasingSequence(sequence5), true);
console.log(almostIncreasingSequence(sequence6), false);
console.log(almostIncreasingSequence(sequence7), true);
