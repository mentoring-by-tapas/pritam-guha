const pass = document.getElementById('password');
const msg = document.getElementById('message');
const str = document.getElementById('strength');

pass.addEventListener('input', () => {
    if(pass.value.match(/[0-9]/)) {
        // msg.innerHTML = `0 to 9 number then`;
        pass.style.color = 'white';
    }else{
        pass.style.color = 'red'
    }

    if(pass.value.match(/[A-Z]/)) {
        pass.style.color = 'white';
    }else{
        pass.style.color = 'red'
    }

    if(pass.value.match(/[a-z]/)) {
        pass.style.color = 'white';
    }else{
        msg.style.color = 'red'
    }

    if(pass.value.match(/[!\@\#\$\*\-\_\+]/)) {
        pass.style.color = 'white';
    }else{
        pass.style.color = 'red'
    }

    if(pass.value.length < 8) {
        pass.style.color = 'white';
    }else{
        pass.style.color = 'red'
    }
    
});