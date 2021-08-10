// Select standard one table
const results = document.getElementById('results');

// Fetch data from json
fetch('./data/result.json')
	// Parse data as js
	.then((response) => response.json())
	.then((data) => {
		// renderOnScreen(data);
	});

function renderOnScreen(data) {
	const standards = Object.keys(data);

	standards.forEach((standard) => {
		const newDiv = document.createElement('div');

		newDiv.setAttribute('class', standard);

		newDiv.innerHTML = `<h1 class="standard-one">${standard}</h1>
		<table id="${standard}-table">
			<tr>
				<th>NAME</th>
				<th>GRADE</th>
				<span
					><img
						class="name"
						src="https://res.cloudinary.com/dig3gb1rw/image/upload/v1627020055/Untitled_design_drgyv6.jpg"
						alt=""
				/></span>
				<th>PERCENTAGE</th>
				<span
					><img
						class="grade"
						src="https://res.cloudinary.com/dig3gb1rw/image/upload/v1627020055/Untitled_design_drgyv6.jpg"
						alt=""
				/></span>
			</tr>
		</table>`;

		results.appendChild(newDiv);

		const selectedStandard = document.getElementById(`${standard}-table`);

		reuse(data[standard], selectedStandard);
	});
}

function reuse(data, standard) {
	for (let student of data) {
		const tableRow = document.createElement('tr');
		tableRow.innerHTML = `
                <td>${student.name}</td>
                <td>${student.grade}</td>
                <td>${student.percentage}</td>
            `;
		standard.appendChild(tableRow);
	}
}


function submitHandler(event) {
	event.preventDefault();
	const searchName = document.getElementById('button').value;

	fetch('./data/result.json')
		// Parse data as js
		.then((response) => response.json())
		.then((data) => {
			const newData = { ...data };

			const standards = Object.keys(data);

			standards.forEach((item) => {
				newData[item] = data[item].filter((item) => item.name === searchName);
			});

			console.log(newData);

			renderOnScreen(newData);
		});
}
