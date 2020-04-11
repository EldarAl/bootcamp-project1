// const equities = document.getElementById('equities');
// console.log(equities);

// const equities = document.querySelector('#equities');
// console.log(equities);

// const cell = document.querySelector('.first');
// console.log(cell);

// const headl = document.querySelector('.head-last');
// console.log(headl);


// const firsts = document.querySelectorAll('.first');

// firsts.forEach((item) => {
//     console.log(item);
// })

// console.log(firsts);

// const cells = document.querySelectorAll('.last-cell');


// cells.forEach((item) => {
//     console.log(item.innerHTML);
// })

// console.log(cells);








// упражнение изменить битые ссылки на флаги 
const italyElements = document.querySelectorAll('.italy');
italyElements.forEach((item) => {
    const flag = item.querySelector('.flag')
    console.log(flag);
    flag.src = "http://mathboard.xyz/flags/italy.svg";
    item.style.background = '#f5dada';   //меняем ccs элемента ,styles color
});


const spainElements = document.querySelectorAll('.spain .flag');
spainElements.forEach((item) => {
    item.src = "http://mathboard.xyz/flags/spain.svg";
});


const finlandElements = document.querySelectorAll('.finland');
finlandElements.forEach((item) => {
    const flag = item.firstElementChild.firstElementChild;
    console.log(flag);
    flag.src = "http://mathboard.xyz/flags/finland.svg";
});

const netherlandsElements = document.querySelectorAll('.netherlands .flag');
netherlandsElements.forEach((item) => {
    item.src = "http://mathboard.xyz/flags/netherland.svg";
});
// упражнение сменить цвет всем отрицательным ячейкам
const changeColor = document.querySelectorAll('.minus');
changeColor.forEach((item) => {
    item.style.color = "darkred"
});

const tableRows = document.querySelectorAll('#equities tr');
tableRows.forEach((item) => {
    // item.lastElementChild;
    const value = item.lastElementChild.innerText;
    console.log(value);
    if (value[0] === '-'){
        item.lastElementChild.style.color = 'darkred';
    }
});



const row = document.querySelector('#equities tr:nth-child(2)');
console.log(row.classList +'');

row.classList.add('new');  // добавляет выбранный класс
console.log(row.classList +'');

row.classList.remove('table-row'); // удаляет выбранный класс
console.log(row.classList +'');

row.classList.toggle('toggle-class'); //добавляет класс
console.log(row.classList +'');

row.classList.toggle('toggle-class'); //удаляет тот самый класс
console.log(row.classList +'');

console.log(row.classList.contains('toggle-class')); //Проверка на наличие класса - false данного класса не существует



// меняем цвет отрицательным ячейкам
const lastCells = document.querySelectorAll('#equities tr td:last-child');

lastCells.forEach((item) => {
    const value1 = item.innerText.slice(0, -1);
    console.log(+value1);

    if (value1 < 0 ){
        item.classList.add('decrease');
    }else {
        item.classList.add('increase');
    }
})
// удаляем цвет фона если число равно 0
lastCells.forEach((item) => {
    const value2 = item.innerText.slice(0, -1);

    if (value2 == 0 ){
        item.classList.remove('increase');
    } 
})



// const table = document.querySelector('#equities')

// function createNewRow (country, name, price, changes){
//     const row = document.createElement('tr');
//     row.innerHTML = '<td> </td>'+
//     '<td>' + country + '</td>' +
//     '<td>' +name +'</td>' +
//     '<td>' + price +'</td>' +
//     '<td>' + changes +'</td>' ;

//     table.append(row);
// }


// createNewRow('USA', 'SOME inc.', 54.09, '+0.08%');









const table = document.querySelector('#equities')


//добавляем строку в таблицу
function createNewRow (country, name, price, changes, strNum){
    const row = document.createElement('tr');
    row.innerHTML = '<td> </td>'+
    '<td>' + country + '</td>' +
    '<td>' +name +'</td>' +
    '<td>' + price +'</td>' +
    '<td>' + changes +'</td>' ;


   const refEl = document.querySelector(`#equities tr:nth-child(${strNum})`);

   refEl.parentElement.insertBefore(row,refEl);
}


createNewRow('USA', 'SOME inc.', 54.09, '+0.08%', 3);


// удаляем строку из таблицы
    const element = document.querySelector(`tr:nth-child(6)`);
    element.parentElement.removeChild(element)





