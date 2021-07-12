// #___5/19

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// console.log(ancestor);
// console.log(parent);

// #5/19

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.getPrice = function () {
// 	return this.price;

// };
// Car.prototype.changePrice = function (newPrice) {
// 	return this.price = newPrice;

// };

// #6/19
// function Storage(items) {
//    this.items = items;
//  };
// Storage.prototype.getItems = function () {
//  	return this.items;
// };
// Storage.prototype.addItem = function (newItem) {
//     return this.items.push(newItem);
// };
// Storage.prototype.removeItem = function (item) {
//     const itemIndex = this.items.indexOf(item);
//     return itemIndex > -1 ? this.items.splice(itemIndex, 1) : this.items
// };

// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// #7/19

// function StringBuilder(baseValue) {
//     this.value = baseValue;
//     // console.log(['^'+ baseValue])
//  };
// StringBuilder.prototype.getValue = function () {
//  	return this.value;
// };
// StringBuilder.prototype.padStart = function (str) {
//     return this.value = str + this.value;
// };
// StringBuilder.prototype.padEnd = function (str) {
//     return this.value += str;
// };
// StringBuilder.prototype.padBoth = function (str) {
//     return this.value = str + this.value + str;
// };


// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// #8/19

// class Car {
//     constructor({ brand, model, price }) {

//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     };
// };

// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 } ));


// #10/19

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// Car.prototype.getPrice = function () {
//   return this.price;
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// new Car({ brand: 'Audi', model: 'Q3', price: 36000 });


// #11/19

// class Car {

//  #brand;
  
//   constructor({brand, model, price}) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//     };
    
//    getBrand () {
//     return this.#brand;
//   };

//   changeBrand (newBrand) {
//     this.#brand = newBrand;
//   }
// };

// console.log(new Car({ brand: 'BMW', model: 'X5', price: 58900 }));

// #12/19
// class Storage {
//   #items;
//   constructor (items) {
//   this.#items = items;
//   };

//   getItems () {
//     return this.#items;
//   };

//   addItem (newItem) {
//     this.#items.push(newItem);
//   };

//   removeItem (item) {
//     const itemIndex = this.#items.indexOf(item);
//     this.#items.splice(itemIndex, 1);
//   };

// }

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// 13/19

// class StringBuilder {
//   #value;
//   constructor (baseValue) {
//   this.#value = baseValue;
// 	};
  
//   getValue () {
//     return this.#value;
//   };

//   padEnd (str) {
//     this.#value += str;
//   };

//   padStart (str) {
//     this.#value = str + this.#value;
//   };

//   padBoth (str) {
//     this.padStart(str);
//     this.padEnd(str);
//   };
// };
// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// #15/19

// class Car {
//   // Пиши код ниже этой строки

//   static MAX_PRICE = 50000;
//     #price;
      

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//     set price(newPrice) {
//
//     if (Car.MAX_PRICE >= newPrice)
//     this.#price = newPrice;
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


// #16/19

// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//   static checkPrice(price) {
//     if (Car.#MAX_PRICE >= price){
	
//       return 'Всё хорошо, цена в порядке.';
//     };
//     return 'Внимание! Цена превышает допустимую.  ';
//   };
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.


// #17/19

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки

// class Admin extends User {
//  static AccessLevel = { 
//    BASIC: 'basic', 
//    SUPERUSER: 'superuser' 
//  };
// }

// // Admin.AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };

// console.log(Admin);

// #18/19

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Пиши код ниже этой строки
//   accessLevel;
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     console.log(accessLevel);
  
// 	}
//   // Пиши код выше этой строки
// }

// console.log(Admin.AccessLevel);

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser

// #19/19

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки

//   blacklistedEmails = [];

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   accessLevel;

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     for (const item of this.blacklistedEmails) {
//        return (item === email);
//     };
//    }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true


// Примеры от Ивана
// ________________________________________________________________

​
// const creatIterator = () => {
//     let countCall = 0;
​
//     return () => countCall++;
// }
​
​
// const i = creatIterator();
​
// while ( i() < 10) console.log('ok');
​
/*================================*/
​
// const sum = (num = 0) => {
​
//     if (typeof num !== 'number')
//         num = 0;
​
//     let total = num;
​
//     const print = () => {
//         console.log(total);
        
//         return {sum, print, total};
//     }
​
//     const sum = (num = 0) => {
//         if (typeof num === 'number')
//             total += num;
​
//         return {sum, print, total};
//     }
    
//     return {sum, print, total};
// }
​
​
///sum().sum(2).sum(3).sum(4).sum(5).sum(5).print().sum(5).total; // 15
​
​
// const sum = (num) => {
//     let total = num;
// ​
//     const test = (num) => {
//         total += num;
//         console.log(total);
// ​
//         return test;
//     }
// ​
//     return test;
// ​
// }
// ​
// ​
// sum(1)(2)(3)(4)(5);