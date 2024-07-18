const userNAME = document.getElementById("header-username");
const userROLE = document.getElementById("header-roles");
const url = "/api/user/info";

fetch(url)
    .then((res) => res.json())
    .then((user) => {

        userNAME.innerHTML = `${user.username}`;

        console.log(user);

        let roles = ""
        user.roles.forEach((role) => {
            roles = roles + role.name.substring(5)
        });
        userROLE.innerHTML = `${roles}`;

        let tbody = document.getElementById('table-user');
        let tr = document.createElement('tr');
        tr.innerHTML = '<td>' + user.id + '</td>' +
            '<td>' + user.firstName + '</td>' +
            '<td>' + user.lastName + '</td>' +
            '<td>' + user.age + '</td>' +
            '<td>' + user.username + '</td>';
        tbody.appendChild(tr);

    })