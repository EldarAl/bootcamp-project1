// const input1 = document.querySelector('#student-name');
// const input2 = document.forms.feedback_form.elements[0];

// setTimeout(() =>{
// console.log(input1.value);
// console.log(input2.value);

// }, 5000);

const form = document.querySelector('feedback_form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(document.forms.feedback_form.elements[0].value)
})
