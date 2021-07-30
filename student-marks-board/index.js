// Select standard one table
const standardOne = document.getElementById('standard-1-table');
const standardTwo = document.getElementById('standard-2-table');
const standardThree = document.getElementById('standard-3-table');
const standardFour = document.getElementById('standard-4-table');
const standardFive = document.getElementById('standard-5-table');

// Fetch data from json
fetch('./data/result.json')
	// Parse data as js
	.then((response) => response.json())
	.then((data) => {
		const standardOneData = data['standard-1'];
		const standardTwoData = data['standard-2'];
		const standardThreeData = data['standard-3'];
		const standardFourData = data['standard-4'];
		const standardFiveData = data['standard-5'];

		reuse(standardOneData, standardOne);
		reuse(standardTwoData, standardTwo);
		reuse(standardThreeData, standardThree);
		reuse(standardFourData, standardFour);
		reuse(standardFiveData, standardFive);
	});

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
