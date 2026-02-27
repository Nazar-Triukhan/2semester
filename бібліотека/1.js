const inpRef = document.querySelector('.inp')
inpRef.addEventListener('input',_.throttle((event) => {
console.log(event.target.value);

},1000))