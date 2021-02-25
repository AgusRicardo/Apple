
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
    let auxCarrito = ``
    for (let i = 0; i < carrito.length; i++) {
        auxCarrito += `
        <table class="table">
        <tbody>
        <tr>
            <th scope="row">${carrito[i].imagen}</th>
            <td>${carrito[i].nombre}</td>
            <td>${carrito[i].precio}</td>
        </tr>
        </tbody>
        </table>
        `
    }
    document.getElementById('slide-out').innerHTML = auxCarrito ;
}

