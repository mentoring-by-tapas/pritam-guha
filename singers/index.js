function fetchUserData() {


    fetch('./data/singers.json')
        .then(response => response.json())
            .then(data => {
                console.log(data);
                const mainDiv = document.getElementById("main");
                console.log(mainDiv);

                const ul = document.createElement('ul');
                ul.setAttribute('class', 'singers-list');

	
        // const bengaliSingers = data.singers.filter(singer => {
        //     return singer.language.includes("Bengali")
        // })

        
    });    
}

fetchUserData();
