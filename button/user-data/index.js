
function fetchUserData () {


    fetch('./user-data/index.json')
    .then(response => response.json())
        .then(data => {
            console.log(data); 

          const mainDiv = document.getElementById('click-me');
          console.log(mainDiv);
        });

}
fetchUserData();