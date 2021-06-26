console.log("main.js");


function fetchUserData() {
    
    fetch('./use-data/user.json')
         .then(response => response.json())
            .then(data => {

            const users = user-data.users; 
            console.log(users);

            const mainDiv = document.getElementById('creater-id');
            
            const ul = document.createElement('ul');
            mainDiv.appendChild(ul);

                for (let i = 0; i <= users.length - 1; i++) {
                    const li = document.createElement('li');
                    li.innerHTML = users[i].name;
                    ul.appendChild(li);
            }
            

            console.log(mainDiv);
            });
} 

fetchUserData();