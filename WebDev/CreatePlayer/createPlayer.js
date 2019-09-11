const formDataObj={};

function handleFormSubmit(form){
    
    
    
    for(let element of form.elements){
        if(element.id){
        formDataObj[element.id]=element.value;
        
        console.log(element.value);
        }
    }
    
    addPlayer(formDataObj);
    return false;
}
    
function addPlayer(formDataObj){
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:9000/players";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
        console.log(formDataObj);
        
        location.href="../TablePage/TablePage.html"
}
xhr.send(JSON.stringify(formDataObj));
}