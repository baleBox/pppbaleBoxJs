let formEdit = document.forms["formEdit"];
let data;
editUser();

async function editModal(id) {
    const modal = new bootstrap.Modal(document.querySelector('#edit'));
    await openAndFillInTheModal(formEdit, modal, id);
}

function editUser() {
    formEdit.addEventListener("submit", async event => {
        event.preventDefault();
        let roles = [];
        for (let i = 0; i < formEdit.roles.options.length; i++) {
            if (formEdit.roles.options[i].selected) {
                roles.push(formEdit.roles.options[i].text.replace('ROLE_', ''));
            }
        }
        await fetch(`http://localhost:8080/api/admin/users`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ID: formEdit.id.value,
                firstName: formEdit.firstName.value,
                lastName: formEdit.lastName.value,
                age: formEdit.age.value,
                username: formEdit.username.value,
                password: formEdit.password.value,
                roles: roles
            })
        }).then(() => {
            $('#closeEdit').click();
            getTableUser()
        });
    });
}