function fetchUserData() {


    fetch('./data/singers.json')
        .then(response => response.json())
            .then(data => {
                const singers = data.singers;
                console.log(singers);
               	
        function bengaliSingers() {
            const bengaliSingers = data.singers.filter(singers => {
                return singers.language.includes("Bengali")
            })
            console.log(bengaliSingers);
        }
        bengaliSingers();

        function multipleLanguage() {
            const multipleLanguage = data.singers.filter(singers => {
                return singers.language.includes("Bengali")&&
                 singers.language.includes("Hindi")&&
                 singers.language.includes("english")&&
                 singers.language.includes("Urdhu")&&
                 singers.language.includes("Nepali")
            })
            console.log(multipleLanguage);
        }
        multipleLanguage();
        
    });    
}

fetchUserData();
