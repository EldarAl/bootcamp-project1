
// const MONTHLY_DEPOSIT = 500;
// const MONTHLY_SPEND = 400;
// const CAMERA_COST = 1000;

// function getMonthsTillCamera() {
//   let months = 0;
//   let sum = 0;
//   while(sum < CAMERA_COST) {
//     console.log(`Месяц: ${months}`);
//     sum += MONTHLY_DEPOSIT;
//     console.warn(`Начислено ${MONTHLY_DEPOSIT}, на счету: ${sum}`);
//     if(sum >= CAMERA_COST) {
//       break;
//     }
//     sum -= MONTHLY_SPEND;
//     console.error(`Потрачено ${MONTHLY_SPEND}, на счету: ${sum}`);
//     months++;
//   }
//   console.log(`Сумма накоплена за ${months} месяцев`);
//   return months;
// }

// getMonthsTillCamera();





//ZADANIE #2
const dailyQueues = [
    [1000, -500, 7000, 50, -150, -4500, 600, 650],
    [500, 1500, -800, -6000, 500, 850, 1500, -150, 300],
    [1200, -50, 750, 400, 4500, -600, -7000, -1500]
  ];
  
  const dailyCash = [2000, 500, 1000];
  
  function processCashOperations(cash, queue) {
    const result = [];
    for(let counterNumber = 0; counterNumber < cash.length; counterNumber++) {
      let balance = 0;
      let clients = 0;
      for(let clientNumber = 0; clientNumber < queue[counterNumber].length; clientNumber++) {
        balance = queue[counterNumber][clientNumber];
        if(balance < cash[counterNumber]) {
          console.error(`Not enough cash for client ${clientNumber} at counter ${counterNumber}`);
          break;
        } else {
          clients++;
        }
      }
      console.log(`Counter ${counterNumber} processed ${clients} clients`);
      result.push(balance);
    }
    return result;
  }
  
  const finalCash = processCashOperations(dailyCash, dailyQueues);
  console.warn(finalCash);


  /*// Ежедневные операции клиентов
const dailyQueues = [
    [1000, -500, 7000, 50, -150, -4500, 600, 650],
    [500, 1500, -800, -6000, 500, 850, 1500, -150, 300],
    [1200, -50, 750, 400, 4500, -600, -7000, -1500]
];

const dailyCash = [1000, 1000, 1000];

// Операции в кассе в течение дня
function processCashOperations(cash, queue) {
    const result = [];
    // Проверяем банковские кассы, их количество равно cash.length 
    for (let counterNumber = 0; counterNumber < cash.length; counterNumber++) {
        let balance = cash[counterNumber];
        let clients = 0;
        // В каждой кассе проводим по очереди операции
        for (let clientNumber = 0; clientNumber < queue[counterNumber].length; clientNumber++) {
            if (balance + queue[counterNumber][clientNumber] < 0) {
                console.error(Not enough cash for client ${clientNumber} at counter ${counterNumber});
                continue; //не прерываем цикл, а идём в следующую итерацию
            } else {
                balance += queue[counterNumber][clientNumber];
                clients++;
            }
        }
        console.log(Counter ${counterNumber} processed ${clients} clients);
        result.push(balance);
    }
    return result;
}

const finalCash = processCashOperations(dailyCash, dailyQueues);
console.warn(finalCash);