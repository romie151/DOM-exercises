document.addEventListener('DOMContentLoaded', function(event) {

    document.addEventListener("click", function (event) {
        var div = event.target
        var quadrant = event.clientX < window.innerWidth / 2;
        if (div.style.backgroundColor === "white") {
            div.style.backgroundColor = "black"
        } else if (div){
        div.style.backgroundColor = "white"
        } 
    
    });
})

