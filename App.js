// Checking sum zero - problem -1;
// [-5,-4,-3,-2,0,2,4,6,8] -> input;
//[?,?] -> output

function getSumPairZero(array) {
  for (let number of array) {
    for (let j = 1; j < array.length; j++) {
      if (number + array[j] === 0) {
        return [number, array[j]];
      }
    }
  }
}
const result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

function FindSumPair(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
const result1 = FindSumPair([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result1);

// Chrcking String Anagram (Problem 2)

// "hello" => " llheo"

// condition

// Check length (for both strings)
// if agr dono values same h tw wo anagram h agr nai h tw anagram nai h //

function isAnagram(string1, string2) {
  if (string1.length != string2.length) {
    return false;
  }
  let Counter = {};
  for (let letter of string1) {
    Counter[letter] = (Counter[letter] || 0) + 1;
    console.log(Counter[letter]);
  } //for(let = item of string1)
  console.log(Counter);
  for (let items of string2) {
    if (!Counter[items]) {
      return false;
    }
    Counter[items] -= 1;
  } //for(let = item of string2)
  return true;
}
const check = isAnagram("azeem", "meeza");
console.log(check);

// Checking Unique Number (Problem - 3);

// problem [1,1,2,2,3,4,4,5,6,7,8,8]
// accpected output 8;

function countUnique(array) {
  if (array.length) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[i] != array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Array is Empty");
  }
}
const checkCountUinque = countUnique([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]);
console.log(checkCountUinque);

// Checking largest sum Consecutive digits (Problem 4)
// [1,2,3,4,3,5,4,6,7,8] => Total element = 10;
// num = 4
// sum = 25
// conditions
// num > array -> error message
// 10 - 4 + 1 => 7

function findLargest(array, num) {
  if (num > array) {
    throw new Error("Number is not greater than array");
  } else {
    let max = 0;
    for (let i = 0; i < array.length - num + 1; i++) {
      let temp = 0;
      for (let j = 0; j < num; j++) {
        temp += array[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
}
const result3 = findLargest([1, 2, 3, 4, 3, 5, 4, 10, 7, 8,25], 4);
console.log(result3);
