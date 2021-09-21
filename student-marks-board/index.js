function searchFun() {
    let filter = document.getElementById('myInput').value.toLowerCase();

    let myTable = document.getElementById('myTable');

    let tr = myTable.getElementsByTagName('tr');

    for(let i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[0];

        if(td) {
            let textValue = td.textContent || td.innerHTML;

            if(textValue.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
} 
searchFun();
