let aviableBanksList = [
    { "bankName": "Газпромбанк", "investName": "Ваш успех", "currency": "RUB", "incomeType": 6.22, "sumMin": 50000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": false },
    { "bankName": "Кредит Европа Банк", "investName": "Оптимальный на 2 года", "currency": "RUB", "incomeType": 6.45, "sumMin": 100000, "sumMax": null, "termMin": 24, "termMax": 24, "canDeposit": false },
    { "bankName": "Банк Зенит", "investName": "Праздничный 500+", "currency": "RUB", "incomeType": 6, "sumMin": 30000, "sumMax": null, "termMin": 17, "termMax": 17, "canDeposit": false },
    { "bankName": "Еврофинанс Моснарбанк", "investName": "Классический", "currency": "RUB", "incomeType": 6.95, "sumMin": 30000, "sumMax": null, "termMin": 12, "termMax": 24, "canDeposit": false },
    { "bankName": "Джей энд Ти Банк", "investName": "Магнус-Онлайн", "currency": "RUB", "incomeType": 6.8, "sumMin": 100000, "sumMax": null, "termMin": 6, "termMax": 6, "canDeposit": false },
    { "bankName": "МТС Банк", "investName": "В вашу пользу", "currency": "RUB", "incomeType": 6.75, "sumMin": 50000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Эс-Би-Ай Банк", "investName": "Свои правила Онлайн", "currency": "RUB", "incomeType": 6.7, "sumMin": 30000, "sumMax": 30000000, "termMin": 24, "termMax": 24, "canDeposit": false },
    { "bankName": "Банк Уралсиб", "investName": "Прогноз отличный", "currency": "RUB", "incomeType": 6.7, "sumMin": 100000, "sumMax": null, "termMin": 37, "termMax": 37, "canDeposit": false },
    { "bankName": "Инвестторгбанк", "investName": "ИТБ-Постоянный доход", "currency": "RUB", "incomeType": 6.6, "sumMin": 50000, "sumMax": null, "termMin": 37, "termMax": 37, "canDeposit": false },
    { "bankName": "Транскапиталбанк", "investName": "ТКБ.Постоянный доход", "currency": "RUB", "incomeType": 6.6, "sumMin": 50000, "sumMax": null, "termMin": 37, "termMax": 37, "canDeposit": false },
    { "bankName": "Совкомбанк", "investName": "Зимний праздник с Халвой", "currency": "RUB", "incomeType": 5.6, "sumMin": 50000, "sumMax": null, "termMin": 2, "termMax": 2, "canDeposit": true },
    { "bankName": "Агророс", "investName": "Медовый месяц", "currency": "RUB", "incomeType": 5.51, "sumMin": 20000, "sumMax": null, "termMin": 1, "termMax": 1, "canDeposit": true },
    { "bankName": "Росдорбанк", "investName": "Онлайн-1", "currency": "RUB", "incomeType": 5.1, "sumMin": 100000, "sumMax": 150000000, "termMin": 1, "termMax": 1, "canDeposit": true },
    { "bankName": "Национальный Стандарт", "investName": "Сберегательный стандарт", "currency": "RUB", "incomeType": 5.1, "sumMin": 100000, "sumMax": null, "termMin": 1, "termMax": 3, "canDeposit": true },
    { "bankName": "Россия", "investName": "Морозные узоры", "currency": "RUB", "incomeType": 5, "sumMin": 100000, "sumMax": null, "termMin": 1, "termMax": 1, "canDeposit": true },
    { "bankName": "Кузнецкий Мост", "investName": "Накопительный", "currency": "RUB", "incomeType": 4.85, "sumMin": 50000, "sumMax": null, "termMin": 1, "termMax": 3, "canDeposit": true },
    { "bankName": "Тексбанк", "investName": "Универсальный", "currency": "RUB", "incomeType": 4.6, "sumMin": 10000, "sumMax": null, "termMin": 1, "termMax": 1, "canDeposit": true },
    { "bankName": "Морской Банк", "investName": "Правильным курсом +", "currency": "RUB", "incomeType": 4.55, "sumMin": 100000, "sumMax": null, "termMin": 1, "termMax": 3, "canDeposit": true },
    { "bankName": "Норвик Банк", "investName": "Лаконичный", "currency": "RUB", "incomeType": 4.5, "sumMin": 500, "sumMax": 50000000, "termMin": 1, "termMax": 1, "canDeposit": true },
    { "bankName": "Промсельхозбанк", "investName": "Конструктор", "currency": "RUB", "incomeType": 4.5, "sumMin": 10000, "sumMax": null, "termMin": 1, "termMax": 3, "canDeposit": true },
    { "bankName": "Акибанк", "investName": "Онлайн", "currency": "RUB", "incomeType": 6.5, "sumMin": 1000, "sumMax": null, "termMin": 6, "termMax": 6, "canDeposit": true },
    { "bankName": "Банк БКФ", "investName": "Ключевой стандарт", "currency": "RUB", "incomeType": 6.5, "sumMin": 100000, "sumMax": null, "termMin": 6, "termMax": 13, "canDeposit": true },
    { "bankName": "Экспобанк", "investName": "Специальный (в конце срока)", "currency": "RUB", "incomeType": 6.35, "sumMin": 50000, "sumMax": 10000000, "termMin": 6, "termMax": 6, "canDeposit": true },
    { "bankName": "Инвестторгбанк", "investName": "ИТБ-Пополняемый", "currency": "RUB", "incomeType": 6.15, "sumMin": 50000, "sumMax": 30000000, "termMin": 6, "termMax": 6, "canDeposit": true },
    { "bankName": "Транскапиталбанк", "investName": "ТКБ.Пополняемый", "currency": "RUB", "incomeType": 6.15, "sumMin": 50000, "sumMax": 30000000, "termMin": 6, "termMax": 6, "canDeposit": true },
    { "bankName": "Евроазиатский Инвестиционный Банк", "investName": "Классика", "currency": "RUB", "incomeType": 6.1, "sumMin": 100000, "sumMax": null, "termMin": 6, "termMax": 12, "canDeposit": true },
    { "bankName": "Тимер Банк", "investName": "Надежный выбор", "currency": "RUB", "incomeType": 6, "sumMin": 10000, "sumMax": null, "termMin": 6, "termMax": 6, "canDeposit": true },
    { "bankName": "Евразийский Банк", "investName": "TURBO MAXIMUM", "currency": "RUB", "incomeType": 6, "sumMin": 30000, "sumMax": 299999, "termMin": 6, "termMax": 6, "canDeposit": true },
    { "bankName": "Таврический Банк", "investName": "Достижимый (онлайн)", "currency": "RUB", "incomeType": 6, "sumMin": 50000, "sumMax": null, "termMin": 6, "termMax": 6, "canDeposit": true },
    { "bankName": "Экспобанк", "investName": "Юбилейный 25 (в конце срока)", "currency": "RUB", "incomeType": 6.5, "sumMin": 100000, "sumMax": 20000000, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Крокус-Банк", "investName": "Ежемесячный доход", "currency": "RUB", "incomeType": 6.35, "sumMin": 50000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Промсельхозбанк", "investName": "Ваш выбор", "currency": "RUB", "incomeType": 6.3, "sumMin": 10000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Нацинвестпромбанк", "investName": "Прибыльный", "currency": "RUB", "incomeType": 6.3, "sumMin": 50000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Ишбанк", "investName": "Накопительный", "currency": "RUB", "incomeType": 6.25, "sumMin": 100000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Примсоцбанк", "investName": "Новогодний чулок (333 дня)", "currency": "RUB", "incomeType": 6.2, "sumMin": 10000, "sumMax": null, "termMin": 11, "termMax": 11, "canDeposit": true },
    { "bankName": "Еврофинанс Моснарбанк", "investName": "Пополняемый", "currency": "RUB", "incomeType": 6.75, "sumMin": 1000000, "sumMax": null, "termMin": 12, "termMax": 24, "canDeposit": true },
    { "bankName": "Евроазиатский Инвестиционный Банк", "investName": "VIP", "currency": "RUB", "incomeType": 6.35, "sumMin": 1000000, "sumMax": null, "termMin": 9, "termMax": 12, "canDeposit": true },
    { "bankName": "Российская Финансовая Корпорация", "investName": "Универсальный", "currency": "RUB", "incomeType": 6, "sumMin": 5000, "sumMax": null, "termMin": 3, "termMax": 3, "canDeposit": true },
    { "bankName": "Московский Кредитный Банк", "investName": "МЕГА Онлайн", "currency": "RUB", "incomeType": 5.8, "sumMin": 1000, "sumMax": null, "termMin": 3, "termMax": 5, "canDeposit": true },
    { "bankName": "Александровский", "investName": "Черника 19/20", "currency": "RUB", "incomeType": 5.6, "sumMin": 20000, "sumMax": null, "termMin": 3, "termMax": 3, "canDeposit": true },
    { "bankName": "Финанс Бизнес Банк", "investName": "Мандариновый!", "currency": "RUB", "incomeType": 5.6, "sumMin": 50000, "sumMax": null, "termMin": 3, "termMax": 3, "canDeposit": true },
    { "bankName": "ЦентроКредит", "investName": "Доход Плюс", "currency": "USD", "incomeType": 1.15, "sumMin": 5000, "sumMax": null, "termMin": 3, "termMax": 3, "canDeposit": true },
    { "bankName": "Совкомбанк", "investName": "Удобный (в долларах)", "currency": "USD", "incomeType": 1, "sumMin": 500, "sumMax": null, "termMin": 3, "termMax": 6, "canDeposit": true },
    { "bankName": "Веста", "investName": "Веста - Копилка", "currency": "USD", "incomeType": 1, "sumMin": 10000, "sumMax": null, "termMin": 3, "termMax": 6, "canDeposit": true },
    { "bankName": "Славия", "investName": "Славный Капитал", "currency": "USD", "incomeType": 0.85, "sumMin": 5000, "sumMax": null, "termMin": 3, "termMax": 4, "canDeposit": true },
    { "bankName": "Роскосмосбанк", "investName": "Комфортный", "currency": "USD", "incomeType": 0.8, "sumMin": 500, "sumMax": null, "termMin": 3, "termMax": 6, "canDeposit": true },
    { "bankName": "ФорБанк", "investName": "Срочный накопительный", "currency": "USD", "incomeType": 0.8, "sumMin": 10000, "sumMax": 500000, "termMin": 3, "termMax": 3, "canDeposit": true },
    { "bankName": "Московский Областной Банк", "investName": "Гарантированный доллар", "currency": "USD", "incomeType": 0.75, "sumMin": 50, "sumMax": null, "termMin": 4, "termMax": 4, "canDeposit": true },
    { "bankName": "Объединенный Резервный Банк", "investName": "ОРБ-Накопительный (в конце срока)", "currency": "USD", "incomeType": 1.6, "sumMin": 1000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Банк Агора", "investName": "Срочный", "currency": "USD", "incomeType": 1.5, "sumMin": 1000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Тинькофф Банк", "investName": "СмартВклад (с повышенной ставкой)", "currency": "USD", "incomeType": 1.5, "sumMin": 1000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Первый Инвестиционный Банк", "investName": "Закон сохранения", "currency": "USD", "incomeType": 1.5, "sumMin": 1000, "sumMax": null, "termMin": 12, "termMax": 12, "canDeposit": true },
    { "bankName": "Новый Век", "investName": "Сберегательный", "currency": "USD", "incomeType": 1.5, "sumMin": 5000, "sumMax": 20000, "termMin": 12, "termMax": 12, "canDeposit": true }
]

class Deposit{
    constructor(startSum,monthlyAdd,period,currencyUser){
        this.startSum = startSum;
        this.monthlyAdd = monthlyAdd;
        this.period = period;
        this.currency = currencyUser;
    }
}

class BankProduct{
    constructor(){
        this.bankList = this.copyBankList();
    }
    copyBankList(){
        let bankArray = [];
        for (let i =0;i<aviableBanksList.length;i++){
            bankArray.push(aviableBanksList[i]);
        }
        return bankArray;
    }
}

class Calculator{
    calc(data,banks){
        let result;
        let newArray = banks.filter(function (el){
                return el.sumMin <= data.startSum &&
                    (el.sumMax >= data.startSum || el.sumMax === null) &&
                    el.termMin >=data.period&& el.termMax >= data.period;
        });
        for (let i=0;i<newArray.length;i++){
            result = (data.startSum*Math.pow(1+(newArray[i].incomeType/100)/12,data.period)) + data.monthlyAdd*pow(data.period,newArray[i].incomeType);
            newArray[i].result= Math.floor(result);
        }
        function pow(time,annual){
            let power = 0;
            for(let i=time;i>0;i--){
                power += Math.pow(1+(annual/100)/12,i);
            }
            return (power);
        }
        return newArray;
    }
}

function errorCheck(startSum, monthlyAdd, period) {
    if(startSum<=0){
        return error.innerHTML = `Начальная сумма вклада должна быть положительным числом!`;

    }else
    if(monthlyAdd<0){
        return error.innerHTML = `Сумма ежемесячного пополнения должна быть положительным числом!`;
    }else
    if(period<=0 || Number.isInteger(period)===false){
        return error.innerHTML = `Срок должен быть положительным целым числом!`;
    }
    return error.innerHTML='';
}
function getCreate(bankName, investName, incomeType, result) {

    const startSumPart = '<td>'+bankName+'</td>' ;
    const monthlyAddPart = '<td>'+ investName +'</td>' ;
    const periodPart = '<td>'+ incomeType +'</td>' ;
    const currencyUserPart = '<td>'+ result +'</td>' ;

    let row = `<tr>` + startSumPart + monthlyAddPart + periodPart + currencyUserPart + '</tr>' ;
    return row;
}

let error = document.querySelector('.error');
class Application{
    constructor(){
        this.calculate = new Calculator();
        this.button = document.querySelector('button');
        this.button.addEventListener('click',this.handleButtonClick);
    }
    handleButtonClick = () =>{
        let startSum = +(document.querySelector('#startSum').value);
        let monthlyAdd = +(document.querySelector('#monthlyAdd').value);
        let period = +( document.querySelector('#days').value);
        let currency = document.querySelector('#currencyUser').value;

        let depositData = new Deposit(startSum, monthlyAdd,period,currency);
        this.banksArray = new BankProduct();
        let checkList = this.calculate.calc(depositData,this.banksArray.bankList);
        let canDepositCheck = [];
        let maxResult;
        let finalResult = [];
        let table = document.querySelector('.tableCell');
        table.style.display="table";
        if(errorCheck(startSum,monthlyAdd,period)){
            table.innerHTML = '';
            return ;
        }
        for (let i=0;i<checkList.length;i++){
            if (checkList[i].canDeposit===false && monthlyAdd===0 && checkList[i].currency===currency){
                canDepositCheck.push(checkList[i]);
            }else
            if(checkList[i].canDeposit && monthlyAdd>0 && checkList[i].currency===currency) canDepositCheck.push(checkList[i]);
        }
        canDepositCheck.sort((a, b) => a.result - b.result);
        if(canDepositCheck.length===0) alert("Нет подходящего БАНКА");
        else {
            if(canDepositCheck[canDepositCheck.length-1].result===canDepositCheck[canDepositCheck.length-2].result){
                table.innerHTML ='';
                finalResult.push(canDepositCheck[canDepositCheck.length-2],canDepositCheck[canDepositCheck.length-1]);
                table.innerHTML += `<tr>
                    <th>Название Банка</th>
                    <th>Вклад</th>
                    <th>Процент</th>
                    <th>Итоговая сумма</th>
                </tr>`;
            }else {
                table.innerHTML ='';
                finalResult.push(canDepositCheck[canDepositCheck.length-1]);
                table.innerHTML += `<tr>
                    <th>Название Банка</th>
                    <th>Вклад</th>
                    <th>Процент</th>
                    <th>Итоговая сумма</th>
                </tr>`;
            }
            console.log(finalResult);
            for (let i=0;i<finalResult.length;i++){
                table.innerHTML += getCreate(finalResult[i].bankName,finalResult[i].investName,finalResult[i].incomeType,finalResult[i].result);
            }
        }
    }
}
new Application();
