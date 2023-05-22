let button = document.getElementById('contador')
let cant = button.getAttribute('data-initial')
button.textContent = cant

button.addEventListener('click', function () {
    if (cant < button.getAttribute('data-finaly')) {
        cant++;
        button.textContent = cant
    }
})


let button2 = document.getElementById('contador2')
let cant2 = button2.getAttribute('data-initial')
button2.textContent = cant2

button2.addEventListener('click', function () {
    if (cant2 < button2.getAttribute('data-finaly')) {
        cant2++;
        button2.textContent = cant2
    }
})