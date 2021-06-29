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