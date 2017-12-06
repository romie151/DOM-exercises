document.addEventListener('DOMContentLoaeded', function (event) {
    var text = document.getElementById('text')

    window.localStorage.setItem('Input', text.value)
})