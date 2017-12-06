var choice = window.prompt("Chose any ID: one, two, three, four");
console.log(choice)
var string = window.prompt("Enter a string")

function list(){
    
    if (choice === "one") {
        document.getElementById("one").innerText = string
    } else if (choice === "two") {
        document.getElementById("two").innerText = string
    } else if (choice === "three") {
        document.getElementById("three").innerText = string
    } else if (choice === "four") {
        document.getElementById("four").innerTextL = string
    } else if (choice === null) {
        document.getElementById("one").innerText = string
    }
}

list(choice, string)


// let id = window.prompt("Please type a list ID");
// let string = window.prompt("Type a string for that ID")

// function updateListItem(id, string) {
//     if (document.getElementById(id) === null ) {
//         document.getElementById("one").innerText = string;
//     } else {
//         document.getElementById(id).innerText = string;
//     }
// }

// updateListItem(id, string)