

function getAllPlayers() {
    var json;
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:9000/players";
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            json = JSON.parse(xhr.responseText);
            for (let i = 0; i < json.length; i++) {
                // let temp = json[i];
                newTableEntries(playerTable, json[i].id, json[i].ranking, json[i].lastName, json[i].firstName, json[i].age, "£" + json[i].earnings)
                // newTableEntries(playerTable, temp["id"], temp["ranking"], temp["lastName"], temp["firstName"], temp["age"], "£" + temp["earnings"]);
            }
        }
    }

    xhr.send();
    return false;
}

const playerTable = document.getElementById("playertable");



function newTableEntries(table) {
    row = document.createElement("tr");
    for (let i = 1; i < arguments.length; i++) {
        box = document.createElement("td");
        box.innerHTML = arguments[i];
        row.appendChild(box);
    }
    table.appendChild(row);
}

function deletePlayer() {

    var id = document.getElementById("playerid").value
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:9000/players/";
    xhr.open("DELETE", url + id, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {

        
        getAllPlayers();
        location.href = "../TablePage/TablePage.html";
    }
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

function updatePlayer(formDataObj) {
    var id = document.getElementById("id").value
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:9000/players/";
    xhr.open("PUT", url + id, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            location.href = "../TablePage/TablePage.html";
            getAllPlayers();
        }else{
            console.log(xhr.responseText)
        }
    }

    xhr.send(JSON.stringify(formDataObj));
    return false;
}


