function fetchUserData() {


    fetch('./data/singers.json')
        .then(response => response.json())
            .then(data => {
                console.log(data);
                const mainDiv = document.getElementById("main");
                console.log(mainDiv);

                const ul = document.createElement('ul');
                mainDiv.appendChild(ul);

                for (let index=0; index<= singers.length -1; index++) {
                    const li = document.createElement('li');
                    li.setAttribute('class', 'user-row');
                    li.innerHTML = `<span>${singers[index].name}</span> <span><b>${singers[index].language}</b></span>`;
                    ul.appendChild(li);
                }

	
        // const bengaliSingers = data.singers.filter(singer => {
        //     return singer.language.includes("Bengali")
        // })
        console.log(mainDiv);
        
    });    
}

fetchUserData();
