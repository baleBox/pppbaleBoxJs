let form = document.forms["create"];
createNewUser()

function createNewUser() {
    form.addEventListener("submit", event => {
        event.preventDefault();
        let roles = [];
        for (let i = 0; i < form.roles.options.length; i++) {
            if (form.roles.options[i].selected) roles.push({
                id: form.roles.options[i].value,
                role: "ROLE_" + form.roles.options[i].text
            });
        }
        fetch(`http://localhost:8080/api/admin/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: form.firstName.value,
                lastName: form.lastName.value,
                age: form.age.value,
                username: form.username.value,
                password: form.password.value,
                roles: roles
            })
        }).then(() => {
            form.reset();
            $('#home-tab').click();
            getTableUser();
        });
    });
}