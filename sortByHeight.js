// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.

// Guaranteed constraints:
// 1 ≤ a.length ≤ 1000,
// -1 ≤ a[i] ≤ 1000.

// [output] array.integer

// Sorted array a with all the trees untouched.

function sortByHeight(a) {
  let sortedArr = a.filter(a=> a > -1).sort((a,b) => a-b);
  let sortedArrWithTrees = [];
  for(i = 0; i < a.length; i++) {
    if(a[i] === -1) {
      sortedArrWithTrees.push(a[i]);
    } else {sortedArrWithTrees.push(sortedArr.shift())}
  }
return sortedArrWithTrees;
}

const  a = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(
  sortByHeight(a), [-1, 150, 160, 170, -1, -1, 180, 190]);
