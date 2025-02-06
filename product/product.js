function showAllProduct() {
    let token = getToken();
    if (token==null) {
        window.location.href = "../login/login.html";
    } else {
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + getToken(),
            },
            type: "GET",
            url: "http://localhost:8080/product",
            success: function (data) {
                let content = "";
                for (i = 0; i < data.length; i++) {
                    content += `<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].description}</td>
                    <td>${data[i].price}</td>
                </tr>`
                }
                document.getElementById("products").innerHTML = content;
                console.log(data);
            }
        })
    }
}
showAllProduct();

function getToken() {
    let token = localStorage.getItem('token');
    return token;
}

localStorage.setItem('token', token);
