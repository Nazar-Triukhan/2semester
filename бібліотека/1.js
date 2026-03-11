// const inpRef = document.querySelector('.inp')
// inpRef.addEventListener('input',_.throttle((event) => {
// console.log(event.target.value);

// },1000))

// Потрібно забезпечити виклик функції при завершенні введення тексту в поле input.
//  Використовуйте метод debounce з бібліотеки lodash. Встановіть 
// час затримки в мілісекундах, наприклад 500мс, і передайте функцію,
//  яку потрібно викликати при завершенні введення тексту.

// const inpRef = document.querySelector('.inp')

// inpRef.addEventListener('input',_.debounce((event) => textFinish(),500))

// function textFinish () {
//     alert('Клацніть на кнопку зарєєструватися')
// }


// Напишіть скрипт привітання користувача на сторінці. Коли користувач введе своє ім’я в інпут на екрані повино
//  з’явитися текст “Вітаємо, ім’я!”. Текст повинен змінитися лише після того як користувач повністю ввів своє ім’я.

// const nameUserRef = document.querySelector('.name') 
// const inpRef = document.querySelector('.inp')

// inpRef.addEventListener('input',_.debounce((e) => {
//     nameTextInput(e)  
//     inpRef.value = ''
// },2000))

// function nameTextInput () {
//     nameUserRef.innerHTML = `Hello, ${inpRef.value}`
// }


// Створіть блок на сторінці, який реагує на рух миші. Кожен раз, коли 
// користувач рухає мишкою, змінюються координати точки на графіку 
// відповідно до руху миші. Використайте метод throttle з бібліотеки lodash для 
// того, щоб координати оновлювалися не занадто часто та не затримували
//  користувача. Встановіть час затримки в мілісекундах, наприклад 50 мс,
//  і передайте функцію, яка буде виконуватися при русі миші.
// const nameUserRef = document.querySelector('.name') 
// const boxRef = document.querySelector('.box')

// document.addEventListener('mousemove', _.throttle((e) => {
//     boxRef.style.left = e.clientX
//     boxRef.style.top = e.clientY

// },50))


