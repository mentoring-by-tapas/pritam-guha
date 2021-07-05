function fetchUserData(){

    fetch('./data/employee.json')
        .then(response => response.json())
            .then(data => {
                // All users
                const employee = data.employee;
                console.log(employee);
            })

            const mainDiv = document.getElementById('employee-id');
}