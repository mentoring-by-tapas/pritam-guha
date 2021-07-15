
function fetchUserData() {


    fetch('./data/movies.json')
        .then(response => response.json())
            .then(data => {
                // All users
                const movies = data.movies;
                console.log(movies);

                // main div
                const mainDiv = document.getElementById('movies-id');
                
                // ul
                const ul = document.createElement('ul');
                mainDiv.appendChild(ul);

                for (let index=0; index<= movies.length -1; index++) {
                    const li = document.createElement('li');
                    li.setAttribute('class', 'user-row');
                    li.innerHTML = `
                        <img width="100" height="100" src="${movies[index].img}" alt="${movies[index].name}">
                           
                        </img>
                        <span>
                           <b>${movies[index].name}</b>
                        </span> rating is 
                        <span>
                            <b>${movies[index].rating}</b>
                        </span> director is 
                        <span>
                        <b>${movies[index].director}</b>
                        </span>`;
                    ul.appendChild(li);
                }
                

                console.log(mainDiv);
            });
    // After Fetching the user data, push it to the HTML file
}

fetchUserData();