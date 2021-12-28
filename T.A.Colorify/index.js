const red = document.getElementById('buttonFirst');
const green = document.getElementById('buttonSecond');
const yellow = document.getElementById('buttonThird');
const blue = document.getElementById('buttonFourth');
const circle = document.getElementById('colorDiv');

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

