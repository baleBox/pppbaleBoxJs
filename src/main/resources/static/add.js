const userADD = document.getElementById("form-user-add");
const adminTab = document.getElementById("nav-admin-tab");
userADD.addEventListener('submit', async (e) => {
    e.preventDefault();

    let roleList = getRoles(Array.from(userADD.roles).map(role => role.value));

    fetch('http://localhost:8080/api/admin/users', {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
            firstName: userADD.firstName,
            lastName: userADD.lastName,
            age: userADD.age.value,
            username: userADD.username,
            password: userADD.password,
            roles: roleList,
        })
    })
        .then(data => {
            const USER = [];
            USER.push(data);
            userList(USER);
        })
        .then(() => {
            adminTab.click();
        })
})

function getRoles(role) {
    let roles = [];
    if (role.indexOf("ADMIN") >= 0) {
        roles.push({"id": 2});
    }
    return roles;
}