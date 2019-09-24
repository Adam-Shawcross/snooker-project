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
                let index = json[i];
                newTableEntries(playerTable, index.id, index.ranking, index.lastName, index.firstName, index.age, index.earnings);
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
    };

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
            alert("Please enter an ID"); //no error code avalible to code for potentialll , maybe ready state? would have to code around the cross matching of id's
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

function sortTable(n, tableName) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById(tableName + "table");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;

            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            if (dir === "asc") {//need to add if statemtn one for player one for ttournament
                if (n == 2 | n == 3) {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                } else {
                    if (Number(x.innerHTML) > Number(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                }
            } else if (dir === "desc") {
                if (n == 2 | n == 3) {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                } else {
                    if (Number(x.innerHTML) < Number(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

function sortTablePlayer(n) {
    let tableName = "player";
    sortTable(n, tableName);
}

function sortTableTournament(n) {
    let tableName = "tournament";
    sortTable(n, tableName);
}






