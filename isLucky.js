// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer n

// A ticket number represented as a positive integer with an even number of digits.

// Guaranteed constraints:
// 10 ≤ n < 106.

// [output] boolean

// true if n is a lucky ticket number, false otherwise.

function isLucky(n) {
  n = n.toString();
  let firstHalf = n.substring(0, n.length/2).split('');
  let secondHalf = n.substring(n.length / 2).split('');
  return firstHalf.reduce((a,b) => Number(a) + Number(b)) === secondHalf.reduce((a,b) => Number(a) + Number(b)) ? true : false
}


let firstTicket = 1230;
let secondTicket = 239017;
console.log(isLucky(firstTicket), true);
console.log(isLucky(secondTicket), false);