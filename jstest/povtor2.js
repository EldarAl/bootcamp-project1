// let currencyRate = {
//     USD: 1,
//     RUR: 81,
//     AZN: 1.7
//   }
  
   
  
//   let client = {
//     USD: 200,
//     RUR: 5000,
//     AZN: 1500,
//     getTotalAmount: function(currency) {
//       let total = 0;
//       total += this.USD;
//       total += this.RUR / currencyRate.RUR;
//       total += this.AZN / currencyRate.AZN;
      
//       return total * currencyRate[currency];
//     }
//   }
  
   
  
//   console.log(client.getTotalAmount('RUR'));


/////////////////////////////////////////////////////////////////////////////////////////


// let teachers = [
//     'Ivan',
//     'Oruc',
//     'Aleksander',
//     'Irina',
//     'Andrey',
    
// ]

// console.log(teachers[3]);

// teachers[3] = 'Eldar';

// console.log(teachers[3]);

/////////////////////////////////////////////////////////////////////////////////////////////////


// let clients = [
//     'Alieva Sabina Orxan',
//     'Ahmedov Ilkin Salman',
//     'Axundov Telman Ilkin',
//     'Mamedov Ruslan Iqor',
//     'Aliyev Eldar Zaur',
//     'Axmedova Emiliya Teymur',
//     'Aliyeva Leyla Telman',
//     'Mamedova Nazrin Ruslan',
//     'Aliyev Telman Orxan',
//     'Mamedov Jeyhun Sanan',
// ]

// clients[5] = 'Amanova Emiliya Teymur';
// console.log(clients[3]);
// 
// console.log(clients[3])

// for(let i=0; i<10; i++) {
//     console.log(clients[i]);
// }


// let clientsYears = [
//     1996,
//     1986,
//     1981,
//     1978,
//     1993,
//     1989,
//     1997,
//     1985,

// ]

////////////////////////////////////////////////////////////////////////////////////////////////



// let teachers = [
//     'Alieva Sabina Orxan',
//     'Ahmedov Ilkin Salman',
//     'Axundov Telman Ilkin',
//     'Mamedov Ruslan Iqor',
//     'Aliyev Eldar Zaur',
//     'Axmedova Emiliya Teymur',
//     'Aliyeva Leyla Telman',
//     'Mamedova Nazrin Ruslan',
//     'Aliyev Telman Orxan',
//     'Mamedov Jeyhun Sanan',
// ]
// for(let i = 0; i<10 ; i++){
//     teachers[i] = 'professor ' + teachers[i]
//     console.log(teachers[i])
// }


//////////////////////////////////////////////////////////////////////////////////////////////

// let clients = [
//     'Alieva Sabina Orxan',
//     'Ahmedov Ilkin Salman',
//     'Axundov Telman Ilkin',
//     'Mamedov Ruslan Iqor',
//     'Aliyev Eldar Zaur',
//     'Axmedova Emiliya Teymur',
//     'Aliyeva Leyla Telman',
//     'Mamedova Nazrin Ruslan',
//     'Aliyev Telman Orxan',
//     'Mamedov Jeyhun Sanan',
// ]

// for (let i=0 ; i<clients.length; i--)
// clients[i] = clients[i-1]

//////////////////////////////////////////////////////////////////////////////////////////////////



// let teachers = [
//     'Alieva Sabina Orxan',
//     'Ahmedov Ilkin Salman',
//     'Axundov Telman Ilkin',
//     'Mamedov Ruslan Iqor',
//     'Aliyev Eldar Zaur',
//     'Axmedova Emiliya Teymur',
//     'Aliyeva Leyla Telman',
//     'Mamedova Nazrin Ruslan',
//     'Aliyev Telman Orxan',
//     'Mamedov Jeyhun Sanan',
// ]

// teachers.push('Veliyev Omar Axmed');
// console.log(teachers);

// teachers.unshift('Orxan Tagizade');

// console.log(teachers);

// teachers.shift();

// console.log(teachers);

///////////////////////////////////////////////////////////////////////////////////////////////////////


// let teachers = [
//     'Alieva Sabina Orxan',
//     'Ahmedov Ilkin Salman',
//     'Axundov Telman Ilkin',
//     'Mamedov Ruslan Iqor',
//     'Aliyev Eldar Zaur',
//     'Axmedova Emiliya Teymur',
//     'Aliyeva Leyla Telman',
//     'Mamedova Nazrin Ruslan',
//     'Aliyev Telman Orxan',
//     'Mamedov Jeyhun Sanan',
// ]

//    for (let i = 0 ; i< teachers.length; i++)
//    console.log(teachers[i])





// let payments = [
//     150,
//     270,
//     310,
//     470,
//     590,
//     630,
//     710,
//     500,

// ]
// let amount=0
// let result=0
// for (let i=0; i< payments.length;i ++)
// result+= payments[i]

// amount=result/payments.length


// console.log('Клиент совершил ' + payments.length + ' платежей. Средняя сумма платежей '+ amount)


///////////////////////////////////////////////////////

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];

// console.log(matrix[0][2]) ; 
// console.log(matrix[2][0]);

// for (let i = 0; i < 3; i++){
//     console.log(matrix[1][i]);
// }

// for (let i = 0; i < 3; i++) {
//     console.log(matrix[i][0])
// }

/////////////////////////////////////////////////////////

// let salary = [
//     [10,45,78,886,45,12,78,56,23,48,75,12],
//     [78,98,32,56,81,75,12,43,69,32,56,78],
//     [58,85,63,15,45,79,35,15,48,75,86,13],
//     [74,86,32,15,48,562,14,785,26,25,47,85]
//     [74,53,21,45,63,20,14,23,9,52,81,12],
//     [69,35,84,52,63,41,78,56,24,56,32,21],
//     [96,52,14,53,26,98,52,14,52,36,75,10],
//     [78,96,35,20,1,45,36,23,89,62,51,42],
//     [78,86,53,15,45,78,56,23,81,42,5353,53],
//     [879,3,532,12,45,78,68,32,15,23,20,52],
// ]

// let sum = 0;

// for (let i = 0; i < 12; i++) {
//     sum+=salary[0][i]
// }


// console.log(sum)


// let fruits =[
//     'banana',
//     'apple',
//     'limon',
//     'orange',
//     'blackberry',
// ];



////////////////////////////

// const array = [4, 8, 15, 16, 23];
// const array2 = [1, 2, 9, 15, 13];

// function addElement(currentarray, newElement){
//   let length = currentarray.length;
// currentarray[length] = newElement;
// }
// addElement(array, 42);
// array[6] = 47;

// console.log(array);



// ////


// function first(a, b, fun){
//   let sum = a + b;
//   fun(sum)
// }
// function second(num){
//   console.log(num);
// }

// first(2,3, second);


// const userNames = ['Петя', 'Вася', 'Саша'];

// function executeForEach(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i]);
//   }
// }


// executeForEach(userNames, function(item){
//   console.log(item);
// })


// const array =  [9, 8, 7, 6, 5];

// const newArray = array.map(function(item){
//   return item+5
// });

// console.log(newArray);

// const array = ['Баден', 'Бора', 'Манго', 'Чау'];
// const newArray = array.map(function(item){return item+'-'+item});

// console.log(newArray);




// const numbers = [5, 11, 6, 33, 72];

// const evens = numbers.filter(function(item){
//   return item % 2 === 0;
// });


// console.log(evens)


// const clients = [
//   { name: "Петр", age: 23, status: "vip" },
//   { name: "Мария", age: 30, status: "regular" },
//   { name: "Елена", age: 40, status: "vip" },
//   { name: "Иван", age: 18, status: "vip" },
//   { name: "Мухамед", age: 33, status: "regular" },
//   { name: "Андрей", age: 56, status: "vip" }
// ];
// const matureClients = clients.filter(function(item){
//   return item.age > 30;
// })
//  console.log(matureClients);

// const strings = [
//   'Так говорила в июле 1805 г. известная Анна Павловна Шерер',
//   'фрейлина и приближенная императрицы Марии Феодоровны, встречая важного и чиновного князя Василия',
//   'первого приехавшего на ее вечер',
//   'Анна Павловна кашляла несколько дней, у нее был грипп, как она говорила',
//   'Грипп был тогда новое слово, употреблявшееся только редкими',
//   'В записочках, разосланных утром с красным лакеем, было написано без различия во всех'
// ];

// const result = strings.find(function(item){
//   return item.length == 59;
// })

// console.log(result); 


// const banks = [
//   {name: 'Sberbank', status: 'national', founded: 1996},
//   {name: 'VTB', status: 'international', founded: 1945},
//   {name: 'AkBars', status: 'international', founded: 1999},
//   {name: 'PASHA Bank', status: 'national', founded: 1972},
//   {name: 'Interbank', status: 'international', founded: 1980},
// ];
// const pasha = banks.find(function(item){
//   return item.name === 'PASHA Bank';
// })
// console.log(pasha);




// canst arr = [1, 5, 10];

// const rra = arr.reduce(function(previousResult, item){
//   return previousResult + item;
// }, 0)


// console.log(rra);