console.log("main.js");


function fetchUserData() {
    
    fetch('./use-data/user-data-work1')
         .then(response => response.json())
            .then(data => {

            const data = user-data.data; 
            console.log(data);
            const mainDiv = document.getElementById('creater-id');
            
            const ul = document.createElement('ul');
            mainDiv.appendChild(ul);

            const li = document.createElement('li');
            li.innerHTML = data[0].name;
            ul.appendChild(li);

            console.log(mainDiv);
            });
} 

fetchUserData();