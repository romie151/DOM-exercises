document.addEventListener('DOMContentLoaded', function(event) {
    var input = document.getElementById('text');
    document.addEventListener('submit', function(event) {
        event.preventDefault();
        var input = document.getElementById('text');
        var ol = document.getElementById('ol');
        var li = document.createElement('li');
        li.innerText += input.innerText
        ol.appendChild(li);
    })
})