let userData = [];

function fetchData() {
	fetch('./data/users.json')
		.then((response) => response.json())
		.then((data) => {
			const users = data.users;
			userData = users;
			createUI(users[0]);
		});
}
fetchData();

function createUI(users) {
	const mainDiv = document.getElementById('tableDiv');

	const ul = document.createElement('ul');
	mainDiv.appendChild(ul);

    let keys = userData.keys('userData');

    for(let j = 0; j <= keys; j++) {
        for (let i = j; i <= users.length - 1; i++) {
            const li = document.createElement('li');
            li.setAttribute('class','userLi');
            li.innerHTML = `<span>${users[i].name}</span><span>${users[i].grade}</span>`;
            ul.appendChild(li);
        }
    }
}

function searchFun(event) {
	const term = event.target.value;

	const filteredUsers = userData[0]['standard_1'].filter((user) => {
		return user.name.toLowerCase().includes(term.toLowerCase());
	});
	const mainDiv = document.getElementById('tableDiv');
	mainDiv.innerHTML = '';
	createUI(filteredUsers);
}


