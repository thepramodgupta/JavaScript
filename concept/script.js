var database = [
    {
        username: "Pramod",
        password: ""
    },
    {
        username: "Tom",
        password: "123"
    },
    {
        username: "Rachel",
        password: "supersecret"
    }
];

var newsfeed = [
    {
        username: "Rachel",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Tom",
        timeline: "It's been amazing learning so far"
    },
    {
        username: "pramod",
        timeline: "I love javascript"
    }
];

function isValidUser(user, pass) {
    for(var i=0; i<database.length; i++) {
        if(user === database[i].username 
            && pass === database[i].password) {
            return true;
        } 
    }
    return false;
}

function SignIn() {
    var promptUsername = prompt("Please enter your first name");
    var promptPassword = prompt("Please enter password");

    if(isValidUser(promptUsername, promptPassword)){
        document.getElementById("newsFeed").innerHTML = "" //removing loading text
        newsfeed.forEach(DisplayTimeLine);
        console.log(newsfeed);
    } else {
        console.log("User is not registered!");
    }
}

function DisplayTimeLine(feed) {
    console.log(feed);
    document.getElementById("newsFeed").innerHTML =  document.getElementById("newsFeed").innerHTML +
    "<br>"
    +feed.username 
    +"<br>"
    +feed.timeline
    +"<br>"; 
}


SignIn();

// Dom Selectors
var tagName = document.getElementsByTagName("h1");
console.log("by tagName: "+tagName);
var idName = document.getElementById("heading");
console.log("by idName: "+idName);
var className = document.getElementsByClassName("loremP");
console.log("by className: "+className);
var querySelector = document.querySelector("li");
console.log("by querySelector: "+querySelector);
var querySelectorAll = document.querySelectorAll("li");
console.log("by querySelectorAll: "+querySelectorAll);
var getAttribute = document.querySelector("li").getAttribute("name");
console.log("getAttribute: "+getAttribute);
//changing attribute 
//The HTML name attribute supports button, textarea, select, form, frame, iframe, img, a, input, object, map, param and meta elements.
document.querySelector("li").setAttribute("name","healthy Apple");
var afterSetAttribute = document.querySelector("li").getAttribute("name");
console.log("afterSetAttribute "+afterSetAttribute);
//style 
var styleProp = document.querySelector("h1").style;
console.log("styleProp "+ styleProp);
//chaning backgorund color
var styleProp = document.querySelector("h1").style.backgroundColor = "yellow";
//settting className
var h1 = document.querySelector("h1");
h1.className = "coolTitle";
//class list
var classList = document.querySelector("p").classList;
classList.remove("para");
classList.add("text");
classList.toggle("text"); // will add if it's not there and remove its there// toggle. 







