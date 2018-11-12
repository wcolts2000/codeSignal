// Given a rectangular matrix of characters, add a border of asterisks(*) to it.
// Example For
// picture = ["abc",
//            "ded"]
// the output should be

// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string picture

// A non-empty array of non-empty equal-length strings.

// Guaranteed constraints:
// 1 ≤ picture.length ≤ 100,
// 1 ≤ picture[i].length ≤ 100.

// [output] array.string

// The same matrix of characters, framed with a border of asterisks of width 1.

const addBorder = (picture) => {
  let newArr = [...picture];
  for(let i = 0; i < picture.length; i++) {
    newArr[i] = "*"+newArr[i]+"*";
  }
  newArr.push("*".repeat(newArr[0].length));
  newArr.unshift("*".repeat(newArr[0].length));
return newArr;
}

const picture = ["abc", "ded"]
console.log(addBorder(picture), ["*****", "*abc*", "*ded*", "*****"])