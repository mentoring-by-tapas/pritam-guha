const pass = document.getElementById('password');
const msg = document.getElementById('message');
const str = document.getElementById('strength');

pass.addEventListener('input', () => {
    if(pass.value.match(/[0-9]/)) {
        pass.style.color = 'white';
    }else{
        msg.innerHTML = `0 to 9 number then`;
        msg.style.color = 'red'
    }

    if(pass.value.match(/[A-Z]/)) {
        pass.style.color = 'white';
    }else{
        msg.innerHTML = `Use Upper case`;
        msg.style.color = 'red'
    }

    if(pass.value.match(/[a-z]/)) {
        pass.style.color = 'white';
    }else{
        msg.innerHTML = `Use a to z`;
        msg.style.color = 'red'
    }

    if(pass.value.match(/[!\@\#\$\*\-\_\+]/)) {
        pass.style.color = 'white';
    }else{
        msg.innerHTML = `Use special character`;
        msg.style.color = 'red'
    }

    if(pass.value.length < 8) {
        pass.style.color = 'white';
    }else{
        msg.innerHTML = `Password is correct`;
        msg.style.color = 'white'
    }
    
});