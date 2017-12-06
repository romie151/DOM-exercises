var choice = window.prompt("Chose any ID: one, two, three, four");
var choice2 = window.prompt("Chose any ID again: one, two, three, four");


function list(){
    
    if (choice) {
        document.getElementById(choice).innerText = document.getElementById(choice2).innerText
    }

    if (choice2) {
        document.getElementById(choice2).innerText = document.getElementById(choice).innerText
    }
}

list(choice, choice2)