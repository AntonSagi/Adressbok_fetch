window.onload = getInfo();



function getInfo() {
    fetch("adressbok-1.json") //Hämta info från JSON-fil och gör om till läsbar info för programmet
    .then(function (response) {
        return response.json();
    })
    .then(function (data) { //Funktion för att skicka ut info till webbläsare
        appendData(data);
        
    })
    .catch(function (err) { //Säkerhet ifall det blir något error
        console.log(err);
    })
}

function appendData(data) { //Funktion för att skriva ut all data 
    var mainInfo = document.getElementById("myInfo");

    data.sort(function(a, b){ //Sortera array efter ålder, yngst först
        return a.age-b.age
    })

    for (var i = 0; i < data.length; i++) { //Skriv ut alla personer som finns i JSON-filen
        var div = document.createElement("ul");
        div.innerHTML = "Namn: " + data[i].lastname + " " + data[i].firstname + "<br> Email: " + data[i].email;
        mainInfo.appendChild(div);
    }
    
}

