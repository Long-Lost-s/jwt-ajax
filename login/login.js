function login() {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let user = {
        "username" : username,
        "password" : password
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        type: "POST",
        url: "http://localhost:8080/api/login",
        data: JSON.stringify(user),
        success: function (data) {
            console.log(data);
        }
    })
}
