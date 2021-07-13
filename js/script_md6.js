// #1/44

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   //for (let i = 0; i < orderedItems.length; i += 1) {
//   //  totalPrice += orderedItems[i];
//   //}
//   orderedItems.forEach(num => totalPrice += num );
  

//   // Пиши код выше этой строки
//     return totalPrice;

// }


// console.log(calculateTotalPrice([12, 85, 37, 4]));


// #2/44

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
  
//     numbers.forEach((num) => {
//         console.log(num > value)
//             if (num > value) {
//             filteredNumbers.push(num)
//         }
//     });
//     console.log(filteredNumbers)
 
//     // Пиши код выше этой строки
//     return filteredNumbers;
// }
  
// filterArray([12, 24, 8, 41, 76], 38);

// #3/44

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
//   	firstArray.forEach((num) => {

//        if (secondArray.includes(num)) {
//             commonElements.push(num)
//         }
//     });
   
//     return commonElements;
//     // Пиши код выше этой строки
//   }


// #6/44

// Пиши код ниже этой строки
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;
//   orderedItems.forEach(item => totalPrice += item);
//   return totalPrice;
// }
// // Пиши код выше этой строки

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));


// #7/44

// // Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
// }
  
// filterArray([12, 24, 8, 41, 76], 20);

// #8/44
// Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach((element) => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return commonElements;
// }
  
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])


// #9/44

// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//     const newArray = [];

//     for (let i = 0; i < numbers.length; i += 1) {
//         newArray.push(numbers[i] % 2 ? numbers[i] : numbers[i] + value);
//     }
//     return newArray;
//       // Пиши код выше этой строки
// }
  
// const arr = changeEven([44, 13, 81, 92, 36, 54], 100); // [144, 13, 81, 192, 136, 154]
// console.log(arr);

// const arr1 = changeEven([1, 2, 3, 4, 5], 10) // [1, 12, 3, 14, 5]
// console.log(arr1);


// #10/44


// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet) => planet.length);

// console.log(planetsLengths);

// #12/44

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки
  
// const genres = books.flatMap((book) => book.genres);

// #13/44

// // Пиши код ниже этой строки
// const getUserNames = users => {
//  const arrName = users.map((user) => user.name);
//   return arrName;
//   };
//   // Пиши код выше этой строки
  

// #14/44

// // Пиши код ниже этой строки
// const getUserEmails = users => {
//     const arrEmails = users.map((user) => user.email);
//    return arrEmails;

//   };
//   // Пиши код выше этой строки


// #15/41

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(num => num % 2 === 0);
// const oddNumbers = numbers.filter(num => num % 2 !== 0);

// #17/44

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// #18/44
// const base = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39
//   }
// ]
// // Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) =>  users.filter((user) => user.eyeColor === color);
    
// // Пиши код выше этой строки

// console.log(getUsersWithEyeColor(base,'brown'));

// #19/44

// const getUsersWithAge = (users, minAge, maxAge) => users.filter((user) => minAge <= user.age && user.age <= maxAge);
//     // return getItemArr;
//     // const getItemArr = ((user) => minAge <= user.age <= maxAge);


// console.log(getUsersWithAge(base, 30, 40));
// console.log(getUsersWithAge(base, 20, 30));


// // #20/44                                                                                     
// // console.log(baseNew);
//     // users.map(({ friends }) => friend);
//     // users.filter((user) => user.friends.includes()
// console.log(getFriends(base));

// #21/44
// const getActiveUsers = (users) => users.filter((user) => user.isActive);
//   // Бред
//   // users.filter((user) => user.isActive).map((user) => user.name);
//   // return users.filter((user) => user.isActive);
//   const userActive = users.filter((user) => user.isActive);
//   const userActiveName = userActive.forEach((num) => {
//     const {name} = num;
//     // const { name } = userName
//     console.log({ name });
//     return name; // возвращает массив обїектов с именами;
//   });

//   // const [...{ name }] = userActive;
  
//   return userActiveName;

// };
// console.log(getActiveUsers(base));

// #24/44
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);


// #25/44

// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email);
// };

// console.log(getUserWithEmail(base, 'shereeanthony@kog.com'));

// #26/44

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);


// #27/44


// // Пиши код ниже этой строки
// const isEveryUserActive = (users) => {
//    return users.every((user) => user.isActive === true);
// };
// // Пиши код выше этой строки


// #28/44

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);

// 29/44

// Пиши код ниже этой строки
// const isAnyUserActive = users => {
//   return users.some((user) => user.isActive === true); 
// };
// Пиши код выше этой строки

// #30/44

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((previousValue, number) => {return previousValue + number}, 0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;

// #31/44

// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => { return acc + player.playtime / player.gamesPlayed}, 0);


// #32/44

// const calculateTotalBalance = users => {
//   return users.reduce((acc, user) => {
//     return acc + user.balance
//   },0); 
// };

// #33/44

// // Пиши код ниже этой строки
// const getTotalFriendCount = users => {
//   return users.reduce((acc, user) => {
//     return acc + user.friends.length},0)
// };
// // Пиши код выше этой строки

// #34/44

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// #35/44
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// #36/44

// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки
  
//   const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
  
//   const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// #37/44

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) => {
//   return firstBook.author.localeCompare(secondBook.author)
// }
// );

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => {
//   return secondBook.author.localeCompare(firstBook.author)
// }
// );

// const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);

// const sortedByDescentingRating = [...books].sort(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating
// );

// console.log(sortedByDescentingRating);

// #38/44

// const sortByAscendingBalance = users => {
//    return [...users].sort((currentVal, nextVal) => {
//    return currentVal.balance - nextVal.balance
//    });
// };

// console.log(sortByAscendingBalance(base));


// #39/44

// Пиши код ниже этой строки
// const sortByDescendingFriendCount = users => {
//   return [...users].sort((currentVal, nextVal) => {
//     return nextVal.friends.length - currentVal.friends.length
//   });
// };
// // Пиши код выше этой строки

//  console.log(sortByDescendingFriendCount(base));

// #40/44


// const sortByName = users => {
//   return [...users].sort((firstName, secondName) => {
//     return firstName.name.localeCompare(secondName.name)
//   });
// };

// console.log(sortByName(base));


// #41/44

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = books
// 	.filter((book) => book.rating > MIN_BOOK_RATING)
// 	.map((book) => book.author)
//   .sort();
  

// #42/44

// Пиши код ниже этой строки
// const getNamesSortedByFriendCount = users => {
//    return [...users]
//     .sort((currentVal, nextVal) => currentVal.friends.length - nextVal.friends.length)
// 	  .map(user => user.name)
// };
// // Пиши код выше этой строки

//  console.log(getNamesSortedByFriendCount(base)); //(7) ["Ross Vazquez", "Sharlene Bush", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony", "Moore Hensley"]


// #43/44

// const getSortedFriends = users => {
//   const arrFriends = [];
//   users.forEach((num) => arrFriends.push(...num.friends));
//   return [...arrFriends]
//     .filter((friend, ind, arr) => arr.indexOf(friend) === ind)
//     .sort((firstName, secondName) => firstName.localeCompare(secondName));
  
// };
// console.log(getSortedFriends(base));

  // #44/44

//   const getTotalBalanceByGender = (users, gender) => {
//     return [...users]
//       .filter((user) => user.gender === gender)
//       .reduce(((acc, user) => acc + user.balance),0)
// };

// console.log(getTotalBalanceByGender (base, 'male'));


// ___________________________________________________________________________
//  Скрипт для цветов в консоли - интересный вариант

​
​
/*========================================*/
​
//console.log('%c1%c2%c3%c4%c5', 'background-color: red; padding: 15px;');
​
class Palette {
    static invertColor(color) {
        return color.map(item => 255 - item);
    }
​
    static rgbToHex(color) {
        const hex = color.reduce((acc, item) => acc + item.toString(16), '#');
        return hex;
    }
​
    static hexToRgb(hexColor) {
        return hexColor.slice(1).split('').reduce((acc, item, index) => {
            if (!(index % 2)) acc.push(item);
            else acc[acc.length - 1] += item;
​
            return acc;
        }, []).map(item => parseInt(item, 16));
    }
​
    constructor() {
        this.reprint();
    }
​
    #colors = [
        [255, 0, 0],
        [0, 255, 0],
        [0, 0, 255],
        [0, 0, 0],
        [255, 255, 255]
    ];
​
    reprint() {
        const pattern = this.#colors.reduce((acc, item, index) => acc + `%c${index + 1}`, '');
        const styles = this.#colors.map(item => `background-color: rgb(${item}); font-size:20px; padding: 20px; color: rgb(${Palette.invertColor(item)})`);
        console.clear();
        console.log(pattern, ...styles);
    }
​
    getColorById(id) {
        return this.#colors[id - 1];
    }
​
    addColor(color) {
        if (color.every(item => item >= 0 && item <= 255))
            this.#colors.push(color);
​
        this.reprint();
    }
​
    invertById(id, isAdd = false) {
        const color = this.getColorById(id);
        const newColor = color.map(item => 255 - item);
​
        if (isAdd) this.addColor(newColor);
​
        return newColor;
    }
​
    remove(id) {
        if (id < 5) return false;
​
        this.#colors.splice(id - 1, 1);
​
        this.reprint();
    }
​
    mix(...ids) {
        const colors = ids.map(id => this.getColorById(id));
​
        const newColor = colors.reduce((acc, item) => {
            acc[0] += item[0];
            acc[1] += item[1];
            acc[2] += item[2];
​
            return acc;
        }, [0, 0, 0]).map(item => parseInt(item / colors.length));
​
        this.addColor(newColor);
    }
​
    updateColorById(id, mixId) {
        if (id < 5) return false;
​
        const color = this.getColorById(id);
        const mixColor = this.getColorById(mixId);
​
        [color, mixColor].reduce((acc, item) => {
            acc[0] += item[0];
            acc[1] += item[1];
            acc[2] += item[2];
​
            return acc;
        }, [0, 0, 0])
            .map(item => parseInt(item / 2))
            .forEach((item, index) => color[index] = item);
​
        this.reprint();
    }
​
}
​
const palette = new Palette();
​
palette.invertById(2, true);
​
palette.mix(1, 4, 4, 4, 5);
​
palette.remove(7);
​
palette.updateColorById(6, 5);