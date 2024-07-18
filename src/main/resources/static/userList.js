const usersTable = document.getElementById("table-users");

let temp = ''

function userList() {
    fetch('http://localhost:8080/api/admin/users')
        .then((res) => res.json())
        .then(
            (users) => {
                if (users.length > 0) {
                    users.forEach((user) => {
                        let roles = user.roles.map(role => " " + role.name.substring(5))
                        temp += `
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.firstName}</td>
                            <td>${user.lastName}</td>
                            <td>${user.age}</td>
                            <td>${user.username}</td>
                            <td>${roles}</td> 
                            <td>
                                <a type="button" class="btn btn-sm btn-info text-light"
                                data-bs-toggle="modal" data-bs-target="#modalEdit"
                                onclick="editModal(${user.id})">Edit</a>
                            </td>
                            <td>
                                <a type="button" class="btn btn-sm btn-danger"
                                data-bs-toggle="modal" data-bs-target="#modalDelete"
                                onclick="deleteModal(${user.id})">Delete</a>
                            </td>
                        </tr>`;
                    })
                    usersTable.innerHTML = temp;
                }
            }
        )
}

userList();