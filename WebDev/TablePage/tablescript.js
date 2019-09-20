function newTableEntries(table) {
    var row = document.createElement("tr");
    for (let i = 1; i < arguments.length; i++) {
        var box = document.createElement("td");
        box.innerHTML = arguments[i];
        row.appendChild(box);
    }
    table.appendChild(row);
    }

function getAllPlayers() {
    var json;
    const playerTable = document.getElementById("playertable");
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:9000/players";
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            json = JSON.parse(xhr.responseText);
            for (let i = 0; i < json.length; i++) {
                newTableEntries(playerTable, json[i].id, json[i].ranking, json[i].lastName, json[i].firstName, json[i].age, "£" + json[i].earnings);
            }
        }
    }

    xhr.send();
    return false;
}

function updatePlayer(formDataObj) {
    var id = document.getElementById("id").value;
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:9000/players/";
    xhr.open("PUT", url + id, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            location.href = "../TablePage/TablePage.html";
            getAllPlayers();
        }
    }

    xhr.send(JSON.stringify(formDataObj));
    return false;
}

function deletePlayer() {

    var id = document.getElementById("playerid").value;
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:9000/players/";
    xhr.open("DELETE", url + id, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {

        if (xhr.readyState === 4 && xhr.status === 200) {
            getAllPlayers();
            location.href = "../TablePage/TablePage.html";
        } else {
            alert("Please enter a correct id"); //learn correct error code for this to be more accurate
        }
    };

    xhr.send(null);
    return false;

}

function handleFormSubmit(form) {
    const formDataObj = {};
    for (let element of form.elements) {
        if (element.id) {
            formDataObj[element.id] = element.value;

        }
    }
    updatePlayer(formDataObj);
    return false;
}


