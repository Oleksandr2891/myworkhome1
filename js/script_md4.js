// #2/10

// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// // Пиши код ниже этой строки
// function makeMessage(pizzaName, callback) {
//     return (pizzaName === "Роял гранд") ? makePizza(pizzaName) : deliverPizza(pizzaName);
// };


// #3/10

// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки

// makePizza('Ультрасыр', function eatPizza(pizzaName) {
// 	console.log(`Едим пиццу ${pizzaName}.`);
// });

// #4/10
// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//     order(pizzaName, onSuccess, onError) {
//         // console.log(this.pizzas);
//         if (this.pizzas.includes(pizzaName)) {
//             return onSuccess = makePizza(pizzaName);
//         }
//         return onError = onOrderError(pizzaName);
//     },
    
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return console.log(`Ваш заказ принят. Готовим пиццу ${pizzaName}.`);
// }

// // Колбэк для onError
// function onOrderError(pizzaName) {
//   return console.log(`Ошибка! В ассортименте нет пиццы с названием ${pizzaName}.`);
// }

// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);

//#7/10 
const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//     // console.log(orders[position]);
//     if (!orders[position]) {
//         return messages[position]
        
//     }
// // }
// console.log(orders[position].dish);
// const messages = [];
for (let i; i < orders.length; i++) {
    const makeMassages = `Готовим ${orders[position].dish} для ${orders[position].email}. Ваш заказ ${position}-й в очереди.`;
    // console.log(makeMassages);
    messages.push(i);
 }
console.log(messages);

//  composeMessage(2);
