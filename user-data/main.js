console.log('main.js');

let userData = [];

function fetchUserData() {

    // Fetch User data here using - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

    fetch('./data/users.json')
        .then(response => response.json())
            .then(data => {
                // All users
                const users = data.users;
                console.log(users);
                userData = users;
                createUI(users);
               
            });
    // After Fetching the user data, push it to the HTML file
}

function createUI(users) {
    // main div
    const mainDiv = document.getElementById('details-id');

    // ul
    const ul = document.createElement('ul');
    mainDiv.appendChild(ul);

    for (let index=0; index<= users.length -1; index++) {
        const li = document.createElement('li');
        li.setAttribute('class', 'user-row');
        li.innerHTML = `<span>${users[index].name}</span> stays at <span><b>${users[index].address}</b></span>`;
        ul.appendChild(li);
    }
}

function search(event) {
    // First get the search term
    const term = event.target.value;

    // Filter the user array using the term
    const filteredUsers = userData.filter(user => user.name.toLowerCase().indexOf(term.toLowerCase()) > -1);
    
    const mainDiv = document.getElementById('details-id');
    mainDiv.innerHTML = '';

    createUI(filteredUsers);
}


function sortUser() {
    // Sort the user array
    let sorteduser = userData.sort((a, b) => {
       return a-b;
    });


}

fetchUserData();