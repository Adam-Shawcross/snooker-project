function handleFormSubmit(form){
    
    const formDataObj={};
    
    for(let element of form.elements){
        formDataObj[element.id]=element.value;
        
        console.log(element.value);
        
    }
    addPlayer(formDataObj);
    return false;
}

function addPlayer(formDataObj){
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:9000/players";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    req.onload = () => {
        const data = JSON.stringify(formDataObj);
        console.log(data);
        location.href="../TablePage/TablePage.html"
}
xhr.send(data);
}