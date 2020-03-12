// document.querySelector('button').addEventListener('click', function () {
    //   let name = prompt ('Enter your name'); 

   
    // console.log("Пользователь" + " " + name + "  " + "зашел на сайт");
    // alert ( "Hello" +" " +name);

    
    // let name = prompt ('Enter your name');
    // let msg = `Здравствуйте ${name} !`;
    // let info =`Пользователь ${name} зашёл на сайт`;
    // alert (msg);


    // console.log(1024*15*8)


    // let result=(1024*15*8)
    // let msg = `1024*15*8 равняется ${result}`;
    // alert (msg);

    // let num = prompt ('Enter number');
    // let result = num > 0 ;
    // console.log(result)


    // let balance = prompt (`Остаток на счету:`)
    // let limite = prompt (`Кредитный лимит:`)
    // let sum = Number(balance) + Number(limite)
    // alert("Вы можете потратить:" + " " + sum)
    
    // let amount = +prompt(`Введите баланс счёта`)
    // if (amount >= 100) {
    //     amount = amount - 100;
    //     alert("Успешно!");
    //     else if ()
    // }
    //     else if (amount <100) {
    //         alert(`Недостаточно средств`);
    //     }
    //     else {
    //         alert ( `Неверный формат суммы.`);
    //     }





    // let amount = +prompt(`Введите баланс счёта`)
    // let trStatus  = (amount >=1000000) ? 'Вы миллионер!' : 'Вы пока не миллионер!'
    // alert(trStatus)



//     let a = prompt('В каком году разбился Титаник? 1: 1910, 2: 1912, 3: 1914, 4: 1916');
    
//     switch (a) {
//     case '1':
//     case '3':
//     case '4':;
//         alert( 'Неверно!' );
//         break;
//     case '2':
//         alert( 'Правильно!' );
//         break;
//     default:
//         alert( "Нет таких значений" );
// }

//задача
// let left = +prompt('Введите первое число');
// let right = +prompt('Введите второе число');
// let result;

// if (left>right) {
//     result="Первое числоа больше второго на:"+ (left - right);
// }
// else if (right>left) {
//         result="Второе число больне первого на:" + (right - left);
//     }
// else {result='Числа равны или не корректный ввод';
// }
    
// alert(result);
// // }) 
//задача 2

/*
Напишите программу, которая выведет на консоль 
текстом число от 1 до 99, введенное 
пользователем. Например:

24 -> “двадцать четыре”
5  -> “пять”
13 -> “тринадцать”
*/

// Ввод
// let number = +prompt('Введите число');
// let result;

// // Алгоритм
// if (number <= 10) {
//     switch (number) {
//         case 1:
//             result = 'один';
//             break;
//         case 2:
//             result = 'два';
//             break;
//         case 3:
//             result = 'три';
//             break;
//         case 4:
//             result = 'четыре';
//             break;
//         case 5:
//             result = 'пять';
//             break;
//         case 6:
//             result = 'шесть';
//             break;
//         case 7:
//             result = 'семь';
//             break;
//         case 8:
//             result = 'восемь';
//             break;
//         case 9:
//             result = 'девять';
//             break;
//         case 10:
//             result = 'десять';
//             break;
//     }
// } else if (number <= 19) {
//     switch (number) {
//         case 11:
//             result = 'одиннадцать';
//             break;
//         case 12:
//             result = 'двенадцать';
//             break;
//         case 13:
//             result = 'тринадцать';
//             break;
//         case 14:
//             result = 'четырнадцать';
//             break;
//         case 15:
//             result = 'пятнадцать';
//             break;
//         case 16:
//             result = 'шеснадцать';
//             break;
//         case 17:
//             result = 'cемьнадцать';
//             break;
//         case 18:
//             result = 'восемьнадцать';
//             break;
//         case 19:
//             result = 'девятьнадцать';
//             break;
//     }
// } else {
//     let units = number % 10; // Единицы
//     let decimal = (number - units) / 10; // Десятичные
//     console.log(units, decimal);
//     switch (decimal) {
//         case 2:
//             result = 'двадцать';
//             break;
//         case 3:
//             result = 'тридцать';
//             break;
//         case 4:
//             result = 'сорок';
//             break;
//         case 5:
//             result = 'пятьдесят';
//             break;
//         case 6:
//             result = 'шестьдесят';
//             break;
//         case 7:
//             result = 'семьдесят';
//             break;
//         case 8:
//             result = 'восемьдесят';
//             break;
//         case 9:
//             result = 'девяносто';
//             break;
//     }
//     if(units !== 0) {
//         result += ' ';
//     }
//     switch (units) {
//         case 1:
//             result += 'один';
//             break;
//         case 2:
//             result += 'два';
//             break;
//         case 3:
//             result += 'три';
//             break;
//         case 4:
//             result += 'четыре';
//             break;
//         case 5:
//             result += 'пять';
//             break;
//         case 6:
//             result += 'шесть';
//             break;
//         case 7:
//             result += 'семь';
//             break;
//         case 8:
//             result += 'восемь';
//             break;
//         case 9:
//             result += 'девять';
//             break;
//     }
// }
// // Вывод
// alert(result);



// Функции

