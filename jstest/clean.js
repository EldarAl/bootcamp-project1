// let cardsStorage = [];
// function addCardToCards(cards, card) {
// const newCards = [];
// for(let i = 0; i < cards.length; i++) {
// 	const curCard = cards[i];
//     newCards.push(curCard);
// }
//     newCards.push(card);
// return newCards;
// }
// cardsStorage = addCardToCards(cardsStorage, '4800 0129 8899 8888');
// cardsStorage = addCardToCards(cardsStorage, '4800 0129 8899 5555');
// cardsStorage = addCardToCards(cardsStorage, '4800 0129 8899 4444');
// cardsStorage = addCardToCards(cardsStorage, '4800 0129 8899 3333');



// const queue = [];
// function addClientToQueue(client) {
//     queue.push(client);
// }

// function addClientToQueue(queue,client) {
//     queue.push(client);
// }

// function addClientToQueue(queue, client) {
//     const queueCopy = Array.from(queue);
//       queueCopy.push(client);
//     return queueCopy;
//   }


/////////////////////////////////////////////////////////

// function bubbleSort(array, compareFunction) {
//     const arr = Array.from(array);
//     for (let i = 0, endI = arr.length - 1; i < endI; i++) {
//         for (let j = 0, endJ = endI - i; j < endJ; j++) {
//             if (compareFunction(arr[j], arr[j + 1]) > 0) {
//                 let swap = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = swap;
//             }
//         }
//     }
//     return arr;
//  }



// const clients = [
//     { name: 'James Polk', balance: 10000 },
//     { name: 'Zachary Taylor', balance: 2000 },
//     { name: 'Millard Fillmore', balance: 3000 },
//     { name: 'Franklin Pierce', balance: 2500 },
// ];
// const sortedClients = bubbleSort(clients, function(clientA, clientB){ 
//     return clientA.balance - clientB.balance });


////////////////////////////////////////////////////////////


// const loadingParagraph = document.getElementById('loading');

// loadingParagraph.innerHtml = 'Идёт загрузка страницы';

// function completeLoading() {
//   loadingParagraph.innerHtml = 'Загрузка завершена';

// };

// setTimeout(completeLoading, 3000);


// const clients = [
//     { name: 'John', gender: 'm', birthYear: 1974 },
//     { name: 'Bill', gender: 'm', birthYear: 1985 },
//     { name: 'Clara', gender: 'w', birthYear: 1994 },
//     { name: 'Ian', gender: 'm', birthYear: 1940 }
// ];

// function map(array, callbackFunction) {
//   const result = [];
//   for(let i = 0; i < array.length; i++) {
//     result.push(callbackFunction(array[i]));
//   }
//   return result;
// }

// function getNameOfClient(client) {
//   return client.name;
// }

// function getBirthYear(client) {
//   return client.birthYear;
// }

// console.log(map(clients, getNameOfClient)); 
// // ['John', 'Bill', 'Clara', 'Ian'] 

// console.log(map(clients, getBirthYear)); 
// // [1974, 1985, 1994, 1940] 

// console.log(map(clients, function(client){return client.gender;})); 


////////////////////////////////////////////




