
let carrito = [];
if (localStorage.getItem('carrito') != null) {
    carrito = JSON.parse(localStorage.getItem('carrito'));
    document.getElementById('contador').innerHTML = `${carrito.length}`;
}

function agregarAlCarrito (producto) {
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito))
    let aux = 0
    for (let i = 0; i < carrito.length; i++) {
        aux += carrito[i].precio
    }
    document.getElementById('contador').innerHTML = `${carrito.length}`;
}

// Para que se abra el carrito
$(document).ready(function(){
    $('.sidenav').sidenav({
        edge: 'right'
    });
});


// Para que se muestren los productos en el carrito
function mostrarCarrito() {
    document.getElementById('navFix').style.position= 'unset';
    let auxCarrito = ``
        for (let i = 0; i < carrito.length; i++) {
            auxCarrito += `
            <table class="table">
            <tbody>
            <tr>
            <td class="td-img"><img src="${carrito[i].imagen}" class="img-carrito"></td>
            <td>${carrito[i].nombre}</td>
            <td>${carrito[i].precio}</td>
            </tr>
            </tbody>
            `
    }
    document.getElementById('productoEnCarrito').innerHTML = auxCarrito ;
}

function vaciarElCarrito() {
    let contador = document.getElementById('contador')
        carrito= [];
        localStorage.clear()
        mostrarCarrito()
}