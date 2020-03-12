// // Задание 1
// // подключите данный скрипт к файлу index.js
// let interestRate = 18.5;

// const deposit = '30000';

// const growth = '150';

// const currency = 'руб';

// let summ = Number(deposit) + Number(growth);

// let message = `Ваш депозит на начало расчетного периода составлял ${deposit} ${currency}`;
// let message2 = `Согласно вашему тарифу, вам была присвоена ставка ${interestRate}%`;
// let message3 = `К концу расчетного прирост составил ${growth} ${currency} и на данный момент ваш депозит составляет ${summ}`

// console.log(message); // Ваш депозит на начало расчетного периода составлял 30000 руб

// console.log(message2); // Согласно вашему тарифу, вам была присвоена ставка 18.5%

// console.log(message3); // К концу расчетного прирост составил 150 руб и на данный момент ваш депозит составляет 30150 руб

// //Задание 2

// let amount = prompt(`Сумма денег:`);

// let percent =Number(amount)*0.07;

// let sum = percent + Number(amount)

// let msg =`Через год у вас будет ${sum} на счету`;

// alert (msg);

//Задание 3

let amount = prompt(`Сумма денег:`);

let amount2 = prompt(`Процентная ставка:`)

let percent =Number(amount)/100*Number(amount2);

let sum = percent + Number(amount)

let msg =`Через год у вас будет ${sum} на счету`;

alert (msg);


