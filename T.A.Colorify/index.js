const red = document.querySelector('.button_1');
const green = document.querySelector('.button_2');
const yellow = document.querySelector('.button_3');
const blue = document.querySelector('.button_4');
const circle = document.querySelector('.color__div');

red.addEventListener('click', function(e) {
    e.preventDefault();
    circle.style.backgroundColor = 'red';
});

green.addEventListener('click', () => 
    circle.style.backgroundColor = 'green');

yellow.addEventListener('click', () => 
    circle.style.backgroundColor = 'yellow');

blue.addEventListener('click', () => 
    circle.style.backgroundColor = 'blue');

