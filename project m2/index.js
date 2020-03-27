let clickk = document.querySelector('button');
let message = document.getElementById('message');

function calculate (start, refill, rate, date){
    start = Number(document.getElementById("amount").value);
    refill = Number(document.getElementById("refill").value);
    rate = Number(document.getElementById("percent").value);
    date = Number(document.getElementById("date").value);
    rate = rate/100/12;  
    date = Math.trunc(date/30);
    
    if ( start > 0 && refill >= 0 && rate > 0 && rate < 100 && date > 0){
        for(i=0; i<date; i++){
        start = start + refill+(start+ refill)*rate ;
        };
        alert(`Сумма вклада на момент окончания срока действия = ` + start.toFixed(2) + ` ₽`);
    }else{
        errorCheck(start, refill, rate, date);
        console.log(NaN);
    };
};

clickk.addEventListener('click', calculate);

function errorCheck(start, refill, rate, date){
    if (start <= 0 || start ==  '' ){
        message.innerHTML = `Начальная сумма вклада введена не корректно`;
    }
    else if (refill < 0){
        message.innerHTML = `Сумма ежемесячного пополнения введена не корректно`;
    }
    else if (rate <= 0 || rate > 100 ){
        message.innerHTML = `Процентная ставка введена не корректно`;
    }
    else if (date <= 0 || date == ''){
        message.innerHTML = `Срок вклада введён не корректно`;
    };
};
 






















