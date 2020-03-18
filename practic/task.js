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

// let amount = prompt(`Сумма денег:`);

// let amount2 = prompt(`Процентная ставка:`)

// let percent =Number(amount)/100*Number(amount2);

// let sum = percent + Number(amount)

// let msg =`Через год у вас будет ${sum} на счету`;

// alert (msg);



// CODE PEN WORKS 
// let acces;
// let age = prompt("How old are you?")
// if (age<18) {
//   acces = false
// }else {
//   acces = true
// }
// alert(acces)


// let acces = age>18 ? 1 : 2;
// alert(acces)

// let age = prompt("How old are you?")
// let message = (age<5)? "Hi baby":
// (age<18)? "Hello":
// (age<100)? "Hey,Man":
//  "What???"


// let name = prompt("What's your name?")
// let message = (name=="Eldar")? "Hi man":
// (name=="Telman")? "Hi vanyucka":
// (name=="Emil")? "Hi obyezyana" :
// (name=="Ruslan")? "Hi pidr":
// "Ti kto takoy?"


// alert(message);


// let answer;
// let ask = prompt("Какое 'официальное' название JS?");
// if (ask=="ECMAScript") {
//   answer = "Верно"
// } else {
//   answer = "Не знаете? ECMAScript"
// }

// alert(answer)


// let ask = prompt ("Enter a number");

// if (ask > 0) {
//   alert(1);
// }else if (ask<0) {
//   alert(-1);
// }else {
//   alert (0);
// }
// let balance = prompt("Your balance");
// if (balance>100) {
//   balance = balance-100;
//   alert ("Transaction succes, your balance" + balance)
// } else if (balance = 100) {
//   alert ("Операция выполнена успешно, но на счету не осталось средств.");
  
// }
//    else {
//          alert ("Not enought")
// }
//          alert ("Thanks for transaction")

// let amount = +prompt ("Enter your balance")
// let tran = (amount>=100)? "Success" : "Not enougt";
// alert (tran)

// let amount = +prompt("Enter your money balance:")

// let mstatus = (amount>=1000000)? "You are millianere" : "You are still note millianere";

// alert(mstatus)




// let age= prompt('number')


// if (!(age>=14 && age<=90)) {
//   alert(age)
// }


// let login = prompt('Enter your login');
// if (login=="adminn") {
//   password = prompt('Enter your password');
//  if (paswword=="pass") {
//   alert("Здравствуйте");
//    }
// }
// alert('I dont know you')

// let ask = confirm ("Желаете взять кредит?");
// if (ask == true) {
//     alert('link1');
// } else if (ask == false) {
//     num= confirm("Желаете сделать вклад?");
// }
// if (num==true) {
//     alert('link2')
// } else if (num==false) {
//     alert('Main page')

// }


