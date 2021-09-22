let userData = [];

function fetchData() {
    fetch('./data/users.json')
        .then(response => response.json())
            .then(data => {
                const users = data.users;
                console.log(users);  
                userData = users;
                createUI(users);
            });
}
fetchData();

function createUI(users) {
    const mainDiv = document.getElementById('tableDiv');
    
    const ul = document.createElement('ul');
    mainDiv.appendChild(ul);

    for(let i=0; i<=users.length -1; i++) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${users[i].standard_1}</span>`
        ul.appendChild(li);
    }
    console.log(mainDiv);
}
