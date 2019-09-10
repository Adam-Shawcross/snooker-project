var json;

function getAllPlayers() {
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:9000/players";
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            json = JSON.parse(xhr.responseText);
            //display();
            console.log(xhr.responseText)
            console.log(json);
            
    
        for(let i=0;i<json.length;i++){
            let temp = json[i];
            newTableEntries(teamTable,temp["ranking"],temp["firstName"], temp["lastName"], temp["dateBirth"], temp["earnings"]);
        }
    }
    }

    xhr.send();
}

const teamTable = document.getElementById("playertable");



function newTableEntries(table){
   row = document.createElement("tr");
   for( let i =1; i <arguments.length;i++){
       box = document.createElement("td");
       box.innerHTML = arguments[i];
       row.append(box);
   }
   table.append(row);
}

// function display() {
//     const containerEl = document.getElementById("playertable");
    

//     for (let info of json) {
//             const newRow = document.createElement("tr");
//             const newEntry = document.createElement("td");
//             const temp = json[i];
//             console.log(temp);
//             newEntry.innerHTML = temp["firstName"];
            
//            newRow.append(newEntry);
//            containerEl.append(newRow);
        
//     }
// }