let token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTczODgxMjg1OSwiZXhwIjoxNzM4ODk5MjU5fQ.n2HAKMwkDjkjSsjGO_WvYrImbJ2iHvGGyvnIymy--RM"

function showAllProduct() {
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token,
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
showAllProduct();
