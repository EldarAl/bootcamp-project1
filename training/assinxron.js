// let text = document.querySelector('#text');
// let sec = 0;
// setInterval(() => {
//     text.innerHTML = sec;
//     sec += 1;
// }, 1000);

// function makeRequest(request, callback) {
//     setTimeout(() => {
//         console.log('response', request);
//         callback();
//     }, 5000);
// }

// makeRequest('123', ()=> {
//     console.log('after request');
// });

// // Запускаем промис через введеное количество секунд
// function getTimer(seconds) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve (console.log('aa'));
//         }, seconds*1000);;
//     });
//  }
 
//  let promisRes = getTimer(5);

//  promisRes.then(
//      ()=> {
//          console.log('Время вышло')
//      }
//  );







// Вывести в консоль сообщения с помощью then
 function getTimer(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve ();
        }, seconds*1000);;
    });
 }

 const timer = getTimer(5);
 timer.then (() => {
     console.log('Осталось 10 секунд')
     return getTimer(5);
 })
 .then (() => {
    console.log('Осталось 5 секунд')
     return getTimer(5);
 })
 .then (() => {
    console.log('Время вышло')
     
 })