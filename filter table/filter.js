function searchFun() {
    let filter = document.getElementById('myInput').value.toUpperCase();

    let myTable = document.getElementById('myTable');

    let tr = myTable.getElementsByTagName('tr');

    for(let i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[0];
    }
}