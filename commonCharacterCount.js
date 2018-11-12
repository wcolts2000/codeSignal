// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s1

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s1.length ≤ 15.

// [input] string s2

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s2.length ≤ 15.

// [output] integer

function commonCharacterCount(s1, s2) {
  s1 = s1.split('');
  s2 = s2.split('');
  
  let count = 0;
  let obj1 = {};
  let obj2 = {};
  s1.forEach(element => obj1[element] ? obj1[element]++ : obj1[element] = 1);
  s2.forEach(element => obj2[element] ? obj2[element]++ : obj2[element] = 1);
  
  for (let item in obj1) {
    if(obj2.hasOwnProperty(item)) {
      if (obj1[item] < obj2[item]) {
        count+= obj1[item];
      }
      else { count+= obj2[item]}
    };
  }
  return count;
}


let s1 = "aabcc";
let s2 = "adcaa";

let s3 = "abca"
let s4 = "xyzbac"
console.log(commonCharacterCount(s3,s4) ,3);


console.log(commonCharacterCount(s1, s2), 3);