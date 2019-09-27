function addTournament(formDataObj){
    var xhr = new XMLHttpRequest();
    var url = "http://34.89.36.254:9000/tournaments";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {

        location.href="../TablePage.html";
        }else{
            alert("Please enter correct data")
        }
    };
    xhr.send(JSON.stringify(formDataObj));
}

function handleFormTournament(form){
    const formDataObj={};
    
    
    for(let element of form.elements){
        if(element.id){
        formDataObj[element.id]=element.value; 
        }
    }
    
    addTournament(formDataObj);
    return false;
}