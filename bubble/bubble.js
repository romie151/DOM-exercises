document.addEventListener('DOMContentLoaded', function (event) {
    var bubble = document.getElementById('bubble')
    bubble.addEventListener('click', function (event) {
        var img = document.createElement('img')
        console.log(img)
        var bob = document.createAttribute('src')
        bob.value = "bubble.png"
        img.setAttributeNode(bob)

    })
})