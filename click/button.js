function myFunction(){

    fetch('./data/button.json')
        .then(response => response.json())
            .then(data => {
                // All users
                const button = data.button;
                console.log(button);

                 // main button
                 let button =  document.getElementById('button');
            }
             )

}
myFunction();
