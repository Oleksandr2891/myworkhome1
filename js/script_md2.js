// #2

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line


//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   } 
//   return "Access denied, wrong password!";
//   // Change code above this line
// }


// #3
// function checkStorage(available, ordered) {
//   // Change code below this line
  

//   if (ordered === 0) {
//     return "Your order is empty!";
//   } 
    
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
  
  
//     return "The order is accepted, our manager will contact you";
  
//   // Change code above this line
// }


// #9

// function getExtremeElements(array) {
//   // Change code below this line
    
//    const masArray=[];
//    masArray[0] = array[0];
//    masArray[1] = array[array.length-1];
//     // return masArray;

//     console.log(masArray);

// }

// getExtremeElements([1, 2, 3, 4, 5]);

// getExtremeElements(["Earth", "Mars", "Venus"]);

// #10

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
// 	words = message.split(delimeter);
//   // Change code above this line
//   console.log(words);
// }

// splitMessage("Mango hurries to the train", " ")

// #13

// function slugify(title) {
//   // Change code below this line

// const words = title.toLowerCase().split(" ");
// const slug = words.join("-");

// return slug;
//   // Change code above this line
// }

// #16/32

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

//   const sumArray = firstArray.concat(secondArray);
//   const newArray = sumArray.slice(0, maxLength);

//   console.log(newArray);
//     // Change code above this line
// }
  
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)


// #18/32


// function calculateTotal(number) {
//  // Change code below this line
//   let sum = 0;
  
// 	for (let i=1; i <= number; i += 1) {
	
//     sum += i;
//   }

//   return sum;
//   // Change code above this line
// }

// calculateTotal(7);
//  console.log(sum);


// #20/32

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//  	for (let i=0; i < order.length; i += 1) {
// 	     total += order[i];
//    }
//   // Change code above this line
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);

// #21/32

// function findLongestWord(string) {
//   // Change code below this line
//   let maxLegthIndex = 0;
//   let longWord = 0
//     let word = string.split(" ");
//     for (let i=0; i < word.length; i += 1){
//       if (word[i].length > maxLegthIndex) {
//         maxLegthIndex = word[i].length;
//         longWord = word[i];
//       }
//   }
//   return longWord
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

//#22

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//     for (let i = min; i < max + 1; i += 1){
//         // console.log(i);
//  	numbers.push(i);
//     //  console.log(numbers);
//  }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(29, 34));

// #23

// function filterArray(numbers, value) {
//    // Change code below this line
// const arr = [];  
  
// for (const number of numbers) {
// 	if (number > value) {
//     	arr.push(number)
//     }
//     }
    
//     return arr
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// console.log(filterArray([12, 24, 8, 41, 76], 38));

// #24

// function checkFruit(fruit) {

//   const fruits = ["apple", "plum", "pear", "orange"];

//   return (fruits.includes(fruit)) ? true :  false;
  
// }

// checkFruit("apple");
// 


// #25

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const array3 = [];
  
// for (const value of array1) {
// 	if (array2.includes(value)){
    
//       array3.push(value);
    
//     }
// }
//   return array3
 
//  // Change code above this line
// }

// #26 

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const value of order) {
//   	total += value;
//   }

//   // Change code above this line
//   return total;
// }


// #27

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {
//   number > value ? filteredNumbers.push(number) : filteredNumbers;
//   }
  
  
// //  for (let i = 0; i < numbers.length; i += 1) {
// //    const number = numbers[i];

// //    if (number > value) {
// //      filteredNumbers.push(number);
// //    }
// //  }

//   return filteredNumbers;
//   // Change code above this line
// }



//#28

// function getEvenNumbers(start, end) {
//    // Change code below this line
//  const evenNumbers = [];
  
// for (let i = start; i < end + 1; i++) {
//  if (i % 2 === 0){
//  	evenNumbers.push(i)
//   }
// }

//   return evenNumbers

//     // Change code above this line
// }
  
// console.log(getEvenNumbers(6, 12));

// #32

// function includes(array, value) {
//   // Change code below this line

//   for (const val of array) {
//       if (value === val) {

//           console.log(val);
//         return true
//         }
//   }
//   return false  
//   // Change code above this line
// }

// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));

// -------------------------------------------------------------------------------------------------------------------------------------

//Примеры от Ивана


// 'use strict';
​
// const sumEven = (...args) => {
//     let total = 0;
//     for (const item of args) {
//         if (item % 2 === 0) {
//             total += item
//         }
//     }
//     return total;
// }
​
// console.log(sumEven(1,2,4,6,8,5,4,7,2,1,4,7,5,6,7));
​
/*==================================*/
​
// const multiplicity = (arr, num) => {
//     const result = [];
​
//     for (const item of arr) {
//         if (item % num === 0) {
//             result.push(item);
//         }
//     }
​
//     return result;
// }
​
// const res = multiplicity([1, 2, 4, 5, 6, 7, 10, 9, 45, 100, 2, 4, 15, 4, 7,], 5);
// console.log(res);
​
​
/*===================================*/
​
​
// const average = (arr) => {
//     let total = 0;
//     for (let item of arr) total += item;
​
//     return total / arr.length;
// };
​
​
// const res = average([1, 2, 3, 4, 5]);
​
// console.log(res);
​
/*=================================*/
​
// [ 
//     [0,1,0,1,0,1,0,1]
//     [1,0,1,0,1,0,1,0]
//     [0,1,0,1,0,1,0,1]
//     [1,0,1,0,1,0,1,0]
//     [0,1,0,1,0,1,0,1]
//     [1,0,1,0,1,0,1,0]
//     [0,1,0,1,0,1,0,1]
//     [1,0,1,0,1,0,1,0]
// ]
​
// const render = (num) => {
//     const arr = [];
​
//     for (let i = 0; i < num; i++) {
//         arr[i] = [];
//         for (let j = 0; j < num; j++) {
//             if (!(i % 2))
//                 arr[i].push(j % 2);
//             else
//                 arr[i].push(j % 2 === 0 ? 1 : 0)
//         }
//     }
​
//     return arr;
// }
​
// const res = render(8);
// console.log(res);
​
/*==========================================*/
​
//<- ->
​
//<<<<<--<<-><><><><--<->
​
​
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
​
// const genRandomStr = (base, length) => {
//     let str = '';
​
//     for (let i = 0; i < length; i++)
//         str += base[randomInt(0, base.length)]
​
//     return str;
// }
​
// const randomStr = genRandomStr(['>', '<', '-'], randomInt(25, 50));
​
// const getCountArrow = (str, arrows = ['->', '<-'], countArrow = 0) => {
//     let minIndex = str.length;
//     let useArrow;
​
//     for (const arrow of arrows) {
//         const indexArrow = str.indexOf(arrow);
//         if (indexArrow > -1) {
//             if (indexArrow < minIndex) {
//                 minIndex = indexArrow;
//                 useArrow = arrow;
//             }
//         }
//     }
//     console.log(str, minIndex, useArrow);
​
//     if (minIndex === str.length) {
//         return countArrow;
//     } else {
//         str = str.slice(minIndex + useArrow.length);
​
//         return getCountArrow(str, arrows, ++countArrow);
//     }
​
// };
// console.log(getCountArrow(randomStr));

// --------------------------------------------------------------------------------------------------------------------------------------------