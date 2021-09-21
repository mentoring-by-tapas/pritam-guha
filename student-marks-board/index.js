let userData = [];

function fetchData() {
    fetch('./data/users.json')
        .then(response => response.json())
            .then(data => {
                const users = data.users;
                console.log(users);  
                
                userData = users;
            });
}
fetchData();