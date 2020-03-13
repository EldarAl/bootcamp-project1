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

/*
Напишите программу, которая выведет на консоль 
текстом число от 1 до 99, введенное 
пользователем. Например:

24 -> “двадцать четыре”
5  -> “пять”
13 -> “тринадцать”
*/

// function getNumber() {
//     return +prompt('Введите число');
// }

// function convertDigitToWord(digit) {
//     switch (digit) {
//         case 1:
//             return 'один';
//         case 2:
//             return 'два';
//         case 3:
//             return 'три';
//         case 4:
//             return 'четыре';
//         case 5:
//             return 'пять';
//         case 6:
//             return 'шесть';
//         case 7:
//             return 'семь';
//         case 8:
//             return 'восемь';
//         case 9:
//             return 'девять';
//         case 10:
//             return 'десять';
//     }
// }

// function convertTeensToWords(teens) {
//     let result;
//     switch (teens) {
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
//             result = 'мемьнадцать';
//             break;
//         case 18:
//             result = 'восемьнадцать';
//             break;
//         case 19:
//             result = 'девятьнадцать';
//             break;
//     }
//     return result;
// }

// function convertDecimalToWords(decimal) {
//     let result;
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
//     return result;
// }

// function convertNumberToWords(number) {
//     let result;
//     if (number <= 10) {
//         result = convertDigitToWord(number);
//     } else if (number <= 19) {
//         result = convertTeensToWords(number);
//     } else {
//         let units = number % 10; // Единицы
//         let decimal = (number - units) / 10; // Десятичные
//         result = convertDecimalToWords(decimal);
//         if (units !== 0) {
//             result += ' ' + convertDigitToWord(units);
//         }
//     }
//     return result;
// }

// // Ввод
// let number = getNumber();

// // Алгоритм
// // Вывод
// alert(convertNumberToWords(number));





//Цвета задача

// function convertHexDigitToDecimal(digit) {
//     if (Number(digit) >= 0 && Number(digit) <= 9) {
//       return Number(digit);
//     }
//     switch (digit) {
//       case 'A': return 10;
//       case 'B': return 11;
//       case 'C': return 12;
//       case 'D': return 13;
//       case 'E': return 14;
//       case 'F': return 15;
//     }
//   }
//   function convertHexColorToRGB(color) {
//     let R = convertHexDigitToDecimal(color[1]) * 16 + convertHexDigitToDecimal(color[2]);
//     let G = convertHexDigitToDecimal(color[3]) * 16 + convertHexDigitToDecimal(color[4]);
//     let B = convertHexDigitToDecimal(color[5]) * 16 + convertHexDigitToDecimal(color[6]);
    
//     return `RGB(${R}, ${G}, ${B})`;
//   }
//   let hex = '#8A8A8A';
//   let result = convertHexColorToRGB(hex);
//   console.log(result);

// let i = 0;
// while (i < 10) {
//     alert (i);
//     i++;
// }




// let initialString = 'Hello. My name is Ivan.';

// function convertDots(str) {
//     let newStr = ' ';

//     let i =0;
//     while (str[i]) {
//         if(str[i]=='.'){
//             newStr = newStr +'!';
//         } else {
//             newStr += str[i];
//         }
//         i++;
//     }

//     return newStr
// }


// let result = convertDots(initialString);
// console.log(result);


//Objects




// let student = {
//     name: 'Eldar',
//     age: 23,
// };

// alert(student.name);
// student.name ='Mark';
// alert(student.name)
// delete student.name


//Альтернативный синтаксис

// let key = prompt('Что вас интересует?')

// let student = {
//     name: 'Eldar',
//     age: 23,
//     'programming language': 'JavaScript',
// };

// alert(student[key])



// let currency = 'AZN';
// let amount = 1000;

// let student = {
//         name: 'Eldar',
//         age: 23,
//         'programming language': 'JavaScript',
//         [currency+'deposit']: amount

// }

// console.log(student);

// console.log(student.AZNdeposit);
// console.log(student[currency+'deposit']);



//     country = prompt('Страна'),
//     serial = prompt('Номер паспорта')
// }

// alert(passport)

let key = prompt ('Что вас интересует?')

let student = {
    name: 'Eldar',
    age: 23,
    'programming language': 'JavaScript',
};
alert(key in student)




