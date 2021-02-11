var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}

function addAfterClick(){
    if(input.value.length >0) {
        createListElement();
     }
}

function addAfterKeypress(event) {
    if(input.value.length >0 && event.code ==="Enter") {
        createListElement();
    }
}

button.addEventListener("click", addAfterClick);

input.addEventListener("keypress", addAfterKeypress);





