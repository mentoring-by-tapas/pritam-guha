async function fetchEmployeeData(){


    let secondDiv = document.getElementById('department-id'); 
    let mainDiv = document.getElementById('employee-id');

        fetch('./data/employee.json')
         .then(response => response.json())
            .then(data => {
                // All users
             let employee = data.employee;
             console.log(employee);

             let ul = document.createElement('ul');
             mainDiv.appendChild(ul);
             console.log(mainDiv);

             for (let index=0; index<= employee.length -1; index++) {
                let li = document.createElement('li');
                ul.appendChild(li);
                li.setAttribute('class', 'first-row');
                li.innerHTML = `
                    
                   <a href="">${employee[index].name}</a>
                                      
                    <p>
                        <b>${employee[index].salary}</b>
                    </p> 
                    <p>
                    <b>${employee[index].id}</b>
                    </p>`;
            }        
                   
            })
  
         fetch('./data/department.json')
             .then(response => response.json())
        .then(data => {
             // All users
             let department = data.depertment;
             console.log(department);

             let search = department.find(function(item){
                return item.id = "D-001";
            })
                  
         });    

         
}
fetchEmployeeData();