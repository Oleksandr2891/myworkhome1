

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
 const render = (num) => {
    const arr = [];
     for (let i = 0; i < num; i++) {
         arr[i] = [];
         for (let j = 0; j < num; j++) {
             if (!(i % 2)) {
                 arr[i].push(j % 2);
             }
             else { 
             arr[i].push(j % 2 === 0 ? 1 : 0)
         }
         }
     }     return arr;
 }

 const res = render(6);
 console.log(res);