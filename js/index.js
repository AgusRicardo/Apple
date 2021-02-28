
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

function goToId() {
    const element = document.getElementById('body');
    element.scrollIntoView({behavior: "smooth"});
}


// Para que se muestren los productos en el carrito

function mostrarCarrito() {
    document.getElementById('navFix').style.position= 'unset';
    let auxCarrito = ``
    let tfoot = document.querySelector('tfoot');
        if (carrito.length !== 0) {
            for (let i = 0; i < carrito.length; i++) {
                    tfoot.style.display = 'table-footer-group'
                    auxCarrito += `
                    <tr>
                    <td class="td-img"><img src="${carrito[i].imagen}" class="img-carrito"></td>
                    <td>${carrito[i].nombre}</td>
                    <td>1</td>
                    <td>$${carrito[i].precio}</td>
                    <td><button class="eliminarProducto" onclick="eliminarProducto()"><i class="fas fa-times"></i></button></td>
                    </tr>
                    `
                    precioTotal()
            }
        }else {
            tfoot.style.display = 'none'
            auxCarrito += `
            <div class="carritoVacio">
            <h5>No hay productos en el carrito</h5>
            </div>
            `
        }
    document.getElementById('productoEnCarrito').innerHTML = auxCarrito ;
}



function vaciarElCarrito() {
    let contador = document.getElementById('contador')
        carrito = [];
        localStorage.clear()
        mostrarCarrito()
        contador.innerHTML ='0'
}

function eliminarProducto() {
    for (let i = 0; i < carrito.length; i++) {
        console.log('llega hasta aca');
        localStorage.removeItem(i)
    }
}

function precioTotal() {
    let sumaPrecioTotal = document.getElementById('precioTotal');
    let suma = 0;
    for (let i = 0; i < carrito.length; i++) {
        precio = carrito[i].precio
        suma = Number(suma) + Number(precio)
    }
    sumaPrecioTotal.innerHTML = `$${suma}`;
}


