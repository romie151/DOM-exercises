var input = window.prompt("write​ ​an​ ​entire​ ​HTML element​ ​(opening​ ​tag,​ ​text,​ ​and​ ​closing​ ​tag)")

function element (input) {
    var text = document.getElementById("html")
    text.innerHTML = input
}

element(input)