//Простая функция 
function me() {
    console.log('Eldar');
}

me();               //Вызываем функцию



//Функция с заданной переменной
function sayHi (name) {
    console.log('Привет,'+ name);
}

sayHi ('Eldar')  //Вызываем функцию


//Функция с двумя переменными
function sayHello (name, site) {
    console.log ('Hello' + name);
    console.log ('Welcome to ' + site);
}

sayHello('Eldar','google.com')


//Сложить два числа
function sum (num1, num2) {
    console.log (num1+num2);
}

sum(5,6)

// Сравнить два числа, и вывести минимальное из них
function min (num1, num2) {
    if (num1<num2){
        console.log(num1);
    }
    else if (num1>num2) {
        console.log(num2);
    }
    else {                                     //Последний из возможных вариантов, 
        console.log('Они равны');              // не имеет скобок ,если нужно дать условие (num1=num2), то используем else if
    }
}

min (1,6)

//Вывести число в четвертую степень
function fourth(num) {
    console.log(num**4);
}

fourth(4)

//Возвращение значения функции

function great() {
    return 'Привет, Вася';                     //Функция выполнена, сохраняем ее значение 
}

let message = great();                         //Передаём значение функции в переменную

console.log(message);



//Задача проверить число , четное иили не четное

function isEven(num) {
    if (num % 2 == 0) {                          // Остаток от деления на 2 приравнивается к 0
        return true;
    } else {
        return false;
    }

}
console.log (isEven(10));


//Задача, написать функцию, которая возвращает наибольшее из 2-ух чисел

function max (num1, num2){
    if (num1>num2){
        return num1
    }else if (num1<num2){
        return num2
    }
}
console.log(max(5,8))

//Задача: вернуть сумму вклада увеличенного на процентную ставку

function yearDeposit(deposit, percent){
    let result = deposit+(deposit*percent/100);
    return result;

}

console.log(yearDeposit(170,10))

//Задача

function fullDeposit(amount, percent, year) {
    let finalAmount = amount;

    for (let i = 1; i <= year; i++) {
        finalAmount+=finalAmount*percent/100;

    }
    return finalAmount
    
}

console.log(fullDeposit(1200, 5 , 15))