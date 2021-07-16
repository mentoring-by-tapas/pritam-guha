

function employee() {
    const employeeList = document.getElementById('employee-id');

    fetch('./data/employee.json')
        .then(response => response.json())
        .then(data => {
            const employees = data.employees;
            console.log(employees);

            const ul = document.createElement('ul');
            ul.setAttribute('class', 'employee-list');

            for (let employee of employees) {
                const li = document.createElement('li');
                const departmentId = employee['dept_id'];
                console.log(departmentId);
                li.setAttribute('class', 'employee-li');
                li.innerHTML = `
                        <a onclick="fetchDepartment('${departmentId}', '${employee.id}')" class="employee-name">${employee.name}</a><br>
                        <span class="employee-salary">${employee.salary}</span><br>
                        <span class="employee-dob">${employee['date_of_birth']}</span>
                        <div id="${employee.id}"></div>
                        `;
                ul.appendChild(li);
            }
            employeeList.appendChild(ul);
        });
}

function fetchDepartment(departmentId, eid) {
    console.log(eid)
    console.log(`fetch department data ${departmentId}`);

    fetch('./data/department.json')
        .then(response => response.json())
        .then(data => {
            const departments = data.department;


            const department = departments.find(department => {
                if (department['dept-id'] === departmentId) {
                    return true
                }
            });
            console.log(department);

            document.getElementById(eid).innerHTML = department['dept-name'];
        });
}

employee();

