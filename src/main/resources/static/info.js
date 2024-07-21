function getCurrentUser() {
    fetch(`http://localhost:8080/api/user/info`)
        .then(res => res.json())
        .then(user => {
            const roles = user.roles.map(role => role.role).join(',')
            $('#emailInfo').append(`<span>${user.username}</span>`)
            $('#roleInfo').append(`<span>${roles.replace('ROLE_', '') + ' '}</span>`)
            const u = `$(
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.firstName}</td>
                        <td>${user.lastName}</td>
                        <td>${user.age}</td>
                        <td>${user.username}</td>
                        <td>${roles.replace('ROLE_', '') + ' '}</td>
                    </tr>)`;
            $('#oneUser').append(u)
        })
}

getCurrentUser();

async function getOneUser(id) {
    let url = "http://localhost:8080/api/admin/users/" + id;
    let response = await fetch(url);
    return await response.json();
}

async function openAndFillInTheModal(form, modal, id) {
    modal.show();
    let user = await getOneUser(id);
    form.id.value = user.id;
    form.firstName.value = user.firstName;
    form.lastName.value = user.lastName;
    form.age.value = user.age;
    form.username.value = user.username;
    form.roles.value = user.roles.join(',');
}