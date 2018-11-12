// Given a string, find out if its characters can be rearranged to form a palindrome.
// Example
// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.
// We can rearrange "aabb" to make "abba", which is a palindrome.
// Input/Output
// [execution time limit] 4 seconds (js)
// [input] string inputString
// A string consisting of lowercase English letters.
// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 50.
// [output] boolean
// true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.

  const palindromeRearranging = (inputString) => {
    let strArr = [...inputString];
    let strObj = {}
    for (let i = 0; i < strArr.length; i++) {
      strObj[strArr[i]] = (strObj[strArr[i]] || 0) + 1;
    }
    let count = 0;
    let valArr = [...Object.values(strObj)];
    for (let i =0 ; i < valArr.length; i++) {
      if(valArr[i] % 2 === 1) {
        count++
      }
    }   console.log(count);
    if (count === 0) {
      return true
    }
    if(count % 2 === 0)
    {
      return false
    }
    if(count % 2 === 1 && count > 1) {
      return false
    }
    return true
  }

const inputString = "aabb";
const newInputString= "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc";
const sample =   "abcad";
console.log(palindromeRearranging(sample), false);
console.log(palindromeRearranging(inputString), true);
console.log(palindromeRearranging(newInputString), false);
