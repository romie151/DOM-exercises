var allLi = document.querySelector("li")
document.addEventListener("click", function (event) {
    if (event.target.nodeName.toUpperCase() === "LI") {
        console.log(event.target)
    }
})