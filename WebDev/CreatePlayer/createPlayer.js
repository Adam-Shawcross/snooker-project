function addPlayer(formDataObj){
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:9000/players";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {

        location.href="../TablePage/TablePage.html";
    };
    xhr.send(JSON.stringify(formDataObj));
}

function handleFormSubmit(form){
    const formDataObj={};
    
    
    for(let element of form.elements){
        if(element.id){
        formDataObj[element.id]=element.value; 
        }
    }
    
    addPlayer(formDataObj);
    return false;
}
    
