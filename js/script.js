// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;

// console.log (totalPrice);


// function sayHi() {
//   // Тело функции
//   console.log("Hello, this is my first function!");
// }

// sayHi();



// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//     const totalPrice = (orderedQuantity * pricePerDroid) + deliveryFee;

//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   // Change code above this line
//   return console.log (message);
// }

// makeOrderMessage(2, 100, 50)



// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// if (available <= ordered) {
//   message = `Not enough goods in stock!`;
// } else { 
//   message = `Order is processed, our manager will contact you.`;
// }
//   // Change code above this line
//   return console.log (message);
// }

// checkStorage(100, 130);




// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
// const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice <= customerCredits) {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
//   } else {
//   	message = `Insufficient funds!`
//   }
//   // Change code above this line
//   return message;
// }


// #19


//function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (ADMIN_PASSWORD === password) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }


// # 24
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
// if(totalSpent >= 50000){
//   discount = GOLD_DISCOUNT;
// } else if (50000 > totalSpent && totalSpent >= 20000){
// 	discount = SILVER_DISCOUNT;
// } else if (20000 > totalSpent && totalSpent >= 5000){
// 	discount = BRONZE_DISCOUNT;
// } else {
// 	discount = BASE_DISCOUNT;
// }
//   // Change code above this line
//   return discount;
// }

//#27

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }


//#29

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
// 		switch (country) {
//           case "Australia":
//             message = "Shipping to Australia will cost 170 credits";
//             break;
//           case "China":
//         	message = "Shipping to China will cost 100 credits";
//             break;
//           case "Chile":
//         	message = "Shipping to Chile will cost 250 credits";
//             break;
//           case "Jamaica":
//         	message = "Shipping to Jamaica will cost 120 credits";
//             break;
            
//           default: 
//             message = "Sorry, there is no delivery to your country";
//         }
//   // Change code above this line
//   return message;
// }

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

// console.log(message);
// }

// getNameLength("Poly");



// #32

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }

//  #33
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
// if(message.length > maxLength) {
// 	result = message.slice(0, maxLength) + "...";
// } else {
// 	result = message.slice(0, maxLength);
// }
//   /// Change code above this line
//   return result;
// }


// #36 
// function checkForSpam(message) {
//   let result;
//   // Change code below this line
// 	result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
//   // Change code above this line
//   return result;
// }
