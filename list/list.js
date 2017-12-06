var highlightArr = document.querySelectorAll("li")

// highlightArr.style.backgroundColor = 'purple'


for (var i = 1; i < highlightArr.length; i += 2) {
    highlightArr[i].style.backgroundColor = "purple"
}