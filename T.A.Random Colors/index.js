const btn = document.querySelector('button');
const body = document.getElementsByTagName('BODY');

btn.addEventListener('click',function(e) {
    e.preventDefault();
    makeColor();
    changeColor();
});

function changeColor() {
    document.body.style.background = makeColor();
}

function makeColor() {
    const arr = [];
    for(let i=0; i < 3; i++){
        const num = Math.floor(Math.random() * 256);
        arr.push(num);
    }
    const newRgb = 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')';
    // console.log(newRgb);
    return newRgb;
}
makeColor();