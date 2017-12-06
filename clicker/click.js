var body =- document.querySelector('body') 
document.addEventListener("click", function (event) {
    var isLeftSide = event.clientX < window.innerWidth / 2;
    body.style.backgroundColor = isLeftSide ? "mediumaquamarine" : "peachpuff";
});

