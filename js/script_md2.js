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

function findLongestWord(string) {
  // Change code below this line

    let word = string.split(" ");
    console.log(word);
  
    for (let i=0; i < word.length; i += 1){
  
      console.log(word[i].length);
      
      let maxLengthworld = word[i].length < word[i].length;

      console.log(maxLengthworld);

}
  // Change code above this line
}
findLongestWord("The quick brown fox jumped over the lazy dog");