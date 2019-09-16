

function getAllPlayers() {
    var json;
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:9000/players";
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            json = JSON.parse(xhr.responseText);
            console.log(xhr.responseText)
            console.log(json);
            
    
        for(let i=0;i<json.length;i++){
            let temp = json[i];
            newTableEntries(teamTable,temp["ranking"], temp["lastName"],temp["firstName"], temp["age"], "£"+temp["earnings"]);
        }
    }
    }

    xhr.send();
    return false;
}

const teamTable = document.getElementById("playertable");



async function newTableEntries(table){
   row = document.createElement("tr");
   for( let i =1; i <arguments.length;i++){
       box = document.createElement("td");
       box.innerHTML = arguments[i];
       row.appendChild(box);
   }
   table.appendChild(row);
}

function deletePlayer(){

        var id = document.getElementById("playerid").value
        var xhr = new XMLHttpRequest();
        var url = "http://localhost:9000/players/";
        xhr.open("DELETE", url+id, true);
        //xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => {

            location.href="../TablePage/TablePage.html";
        }
        xhr.send(null);
        return false;
}
