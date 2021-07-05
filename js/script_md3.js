

// #1/42

// const apartment = {
// imgUrl: "https://via.placeholder.com/640x480",
// descr: "Spacious apartment in the city center",
// rating: 4,
// price: 2153,
// tags: ["premium", "promoted", "top"],
// };

// console.log(apartment);  


// #7

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";
// console.log(apartment);


// #10/41
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const item in apartment) {
//     // console.log(item);
    
// //   for (let i=0; i < keys.length; i++){
//     keys.push(item);

//     values.push(apartment[item])

// }
  
// console.log(keys);
// console.log(values);
// };

// Change code below this line


// #11/21

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//  if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
//  }
//   // Change code above this line
// }

// #12/21


// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//     for (const key in object) {
		
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//             // console.log(propCount);
//         }
//         // Change code above this line

//     }
//     return propCount;
// }

// console.log(countProps({ name: "Mango", age: 2 }));


// // #13/41

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);

// #14/41

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   let keys = Object.keys(object);
//   for (const key of keys) {
//     propCount += 1 ;
//   }
//     console.log(propCount);
//   return propCount;

// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// #16/41

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// const salariesOnly = Object.values(salaries);
//   for (const value of salariesOnly){
//   	totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }

// #17/41

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
//  for (const color of colors) {
//  	hexColors.push(color.hex);
//    	rgbColors.push(color.rgb);
//  };

// #18/41 

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     console.log(product);
//     if (product.name === productName){
//      return product.price
//         }
//       }
//    return null
//     // Change code above this line
// }

// #19/21 

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
  
//   let arrey = [];
//   // Change code below this line
//   for (const product of products) {
    
//     if (!!product[propName])
//   	 arrey.push(product[propName]);
//   }
  
//    return arrey
//   // Change code above this line
// }

// getAllPropValues("quantity");


// 20/21 
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//     let totalPrice = 0;
  
//     for (const product of products) {
//         let newObt = Object.values(product);
//         // console.log(newObt.length);

//         for (let j = 0; j < newObt.length; j += 1) {
//             if (newObt[j] === productName) {
//                 totalPrice = newObt[j+1] * newObt[j+2]
//                 // console.log(newObt[j]);
//                 console.log(totalPrice);
//             }
//           console.log(totalPrice);
//         }
//     }
//     return totalPrice
// }

// calculateTotalPrice("Radar");
// calculateTotalPrice("Blaster");


// ____________________________________________________________________________________________

//  [ 
//      [0,1,0,1,0,1,0,1]
//      [1,0,1,0,1,0,1,0]
//      [0,1,0,1,0,1,0,1]
//      [1,0,1,0,1,0,1,0]
//      [0,1,0,1,0,1,0,1]
//      [1,0,1,0,1,0,1,0]
//      [0,1,0,1,0,1,0,1]
//      [1,0,1,0,1,0,1,0]
//  ]
//  const render = (num) => {
//     const arr = [];
//      for (let i = 0; i < num; i++) {
//          arr[i] = [];
//          for (let j = 0; j < num; j++) {
//              if (!(i % 2)) {
//                  arr[i].push(j % 2);
//              }
//              else { 
//              arr[i].push(j % 2 === 0 ? 1 : 0)
//          }
//          }
//      }     return arr;
//  }

//  const res = render(6);
//  console.log(res);

// #25/41

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const { today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//      tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, } = forecast;

// // const { today,
// //     tomorrow, } = forecast;

// console.log(lowToday, highToday, todayIcon);


// #26/41

// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {today: {low: todayLow, high: todayHigh,},
//         tomorrow: {low: tomorrowLow, high: tomorrowHigh,},
//         } = forecast;
// //  const todayLow = forecast.today.low;
// //  const todayHigh = forecast.today.high;
// //  const tomorrowLow = forecast.tomorrow.low;
// // const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// const forecast = {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// };


// #27/41

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);


// #28/41 

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);


// console.log(allScores);

// #30/41

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//     const priority = 'Normal';
//   // Change code below this line
//     const defoultTask = { completed, category, priority };

//     return { ...defoultTask, ...data };

//   // Change code above this line
// }

// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// console.log(makeTask({}));
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// // console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));


// #31/41

// function add(...args) {
//   // Change code above this line
    
//     console.log(args);
//   let result = 0;
//     for (const value of args) {
//         console.log(value);
//         result += value;    
//   };
//   return result
// }

// console.log(add(74, 11, 62, 46, 12, 36));

// #32/41

// // Change code below this line
// function addOverNum(firstNum, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNum) total += arg;
//   }

//   return total;
//   // Change code above this line
// }

// addOverNum(20, 74, 11, 62, 46, 12, 36);


// #33/41 

// function findMatches(array, ...args) {
//     const matches = []; // Don't change this line
//     console.log(array);
//     console.log(args);
//     for (const value of args) {
//     console.log(value);
//         if (array.includes(value)) {
//             matches.push(value);
//         }
        
//     }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

// // возвращает [17, 89, 2]
// //  [89, 17, 2]


// #34/41

// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   // Change code above this line
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//   	return `Updating book ${oldName} to ${newName}`
//   },
// };

// #35/41

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//       const library = this.books
//       const indexDelBooks = library.indexOf(oldName);

//      	 if (library.indexOf(oldName) > -1) {
//               return library.splice(indexDelBooks, 1, newName)
//             }
//     // Change code above this line
//   },
// };

// bookShelf.updateBook("Haze", "Dungeon chronicles");

// console.log(bookShelf.books)

// #36/41

// const atTheOldToad = {
//   // Change code below this line
//   potions: [],
//   // Change code above this line
// };


// #37/41 

// const atTheOldToad = {
//   // Change code below this line
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   // Change code above this line
//     getPotions() {
//       const value = this.potions
//         // console.log(value);
//         return value
//   }, 
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.potions);


// #38/41

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     // Change code below this line
//       const value = this.potions;
//     value.push(potionName);
//     // Change code above this line
//   },
// };


// #39/41

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const value = this.potions;
//        	 if (value.indexOf(potionName) > -1) {
//             return value.splice(value.indexOf(potionName), 1)
//            }
//     // Change code above this line
//   },
// };

// #40/41 

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//       const value = this.potions;
//       const indexValue = value.indexOf(oldName)
//         	 if (indexValue > -1) {
//              return value.splice(indexValue, 1, newName)
//             }
//     // Change code above this line
//   },
// };


// #41/41

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//     getPotions() {
//     return this.potions
//   },
//     addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Potion ${potionName} is already equipped!`;
//     }

//     this.potions.push(potionName);
//   },
//     removePotion(potionName) {
//         const { potions } = this;
//         for (let i = 0; i < potions.length; i += 1) {
//             let { name } = potions[i];
//             console.log(name);
//             if (potionName === name) {
//                 potions.splice(i, 1);
//             }

//         }
//     return `Potion ${potionName} is not in inventory!`;    
//   },
//     updatePotionName(oldName, newName) {
//         const { potions } = this;
//         for (let i = 0; i < potions.length; i += 1) {
//             let { name } = potions[i];

//            if (oldName === name) {

//                 potions[i].name = newName;
//            }
//         }
//         return `Potion ${oldName} is not in inventory!`;
//     }
// //   Change code above this line
// };

// // atTheOldToad.getPotions();
// // atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// atTheOldToad.removePotion("Dragon breath");
// // atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.potions);

