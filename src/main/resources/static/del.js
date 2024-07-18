const userDel = document.getElementById("form-user-delete")

function deleteModal(id) {
    fetch('http://localhost:8080/api/admin/users' + id, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    }).then(res => {
        res.json()
            .then(user => {
                userDel.id.value = user.id;
                userDel.firstName.value = user.firstName;
                userDel.lastName.value = user.lastName;
                userDel.age.value = user.age;
                userDel.username.value = user.username;
            })
    })
}

function deleteUser() {

    fetch('http://localhost:8080/api/admin/users' + userDel.id,{
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(userDel.value)
    })
        .then(() => {
            adminTab.click();
            userList();
            userDel.close.click();
        })
}