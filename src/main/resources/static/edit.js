const userEdit = document.getElementById("form-user-edit")

async function editModal(id) {
    fetch('http://localhost:8080/api/admin/users/' + id)
        .then(res => {
            res.json()
                .then(async user => {
                    console.log(user);
                    userEdit.id.value = user.id;
                    userEdit.firstName.value = user.firstName;
                    userEdit.lastName.value = user.lastName;
                    userEdit.age.value = user.age;
                    userEdit.username.value = user.username;
                    userEdit.password.value = user.password;
                    userEdit.roles.option[1].setAttribute('selected', 'true');
                    if (user.roles.length === 2) {
                        userEdit.roles.option[2].setAttribute('selected', 'true');
                    }
                })
        })

userEdit.id.value = undefined;
userEdit.addEventListener('submit', async (e) => {
    e.preventDefault();

    let roleList = getEditRoles(Array.from(userEdit.roles.selectedOptions).map(role => role.value));

    fetch('http://localhost:8080/api/admin/users', {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: userEdit.id.value,
            firstName: userEdit.firstName.value,
            lastName: userEdit.lastName.value,
            age: userEdit.age.value,
            username: userEdit.username.value,
            password: userEdit.password.value,
            roles: roleList,
        })
    })
        .then(() => {
            adminTab.click();
            userList();
            userEdit.close.click();
        })
})

function getEditRoles(role) {
    let roles = [];
    if (role.indexOf("ADMIN") >= 0) {
        roles.push({"id": 2, "name": 'ROLE_ADMIN'});
    }
    return roles;
}}