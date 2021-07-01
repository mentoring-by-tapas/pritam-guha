
function fetchUserData() {


    fetch('./data/users.json')
        .then(response => response.json())
            .then(data => {
                // All users
                const users = data.users;
                console.log(users);

                // main div
                const mainDiv = document.getElementById('pritam-id');
                
                // ul
                const ul = document.createElement('ul');
                mainDiv.appendChild(ul);

                for (let index=0; index<= users.length -1; index++) {
                    const li = document.createElement('li');
                    li.setAttribute('class', 'user-row');
                    li.innerHTML = `<span>${users[index].name}</span> rating is <span><b>${users[index].rating}</b></span> director is <span><b>${users[index].director}</b></span>`;
                    ul.appendChild(li);
                }
                

                console.log(mainDiv);
            });
    // After Fetching the user data, push it to the HTML file
}

fetchUserData();