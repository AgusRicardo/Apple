
let carrito = [];
if (localStorage.getItem('carrito') != null) {
    carrito = JSON.parse(localStorage.getItem('carrito'));
    document.getElementById('contador').innerHTML = `${carrito.length}`;
}


function agregarAlCarrito (producto) {
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito))
        for (let i = 0; i < carrito.length -1; i++) {
            if (producto.nombre == carrito[i].nombre) {
                console.log('Se repitió un producto');
                carrito[i].cantidad ++;
                carrito[i].precio = carrito[i].precio * 2;
                carrito.pop()
                precioTotal()
                return;
            }
        }
    const seAgregó = '<span class="modalSeAgregó">Se agregó un producto al carrito! <i class="fas fa-shopping-bag"></i></span>';
    M.toast({html: seAgregó});
    document.getElementById('contador').innerHTML = `${carrito.length}`;
}


// Para que se abra el carrito
$(document).ready(function(){
    $('.sidenav').sidenav({
        edge: 'right'
    });
});

// Para que el boton flotante recorra el index
function goToId() {
    const element = document.getElementById('body');
    element.scrollIntoView({behavior: "smooth"});
}


// Para que se muestren los productos en el carrito
function mostrarCarrito() {
    document.getElementById('navFix').style.position= 'unset';
    let barraProgressCarrito = document.getElementById('barraProgressCarrito');
    let btnCarrito = document.getElementById('buttonsCarrito');
    let auxCarrito = ``
    let tfoot = document.querySelector('tfoot');
        if (carrito.length !== 0) {
            for (let i = 0; i < carrito.length; i++) {
                btnCarrito.style.display = 'block';
                barraProgressCarrito.style.display = 'block'
                tfoot.style.display = 'table-footer-group'
                auxCarrito += `
                <tr class="productoCarrito">
                <td class="td-img"><img src="${carrito[i].imagen}" class="img-carrito"></td>
                <td>${carrito[i].nombre}</td>
                <td>${carrito[i].cantidad}</td>
                <td id="precio">$${carrito[i].precio}</td>
                <td></td>
                </tr>
                `
                precioTotal()
            }
        }else {
            btnCarrito.style.display = 'none';
            barraProgressCarrito.style.display = 'none';
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

function precioTotal() {
    let sumaPrecioTotal = document.getElementById('precioTotal');
    let suma = 0;
    for (let i = 0; i < carrito.length; i++) {
        precio = carrito[i].precio
        suma = Number(suma) + Number(precio)
    }
    sumaPrecioTotal.innerHTML = `$${suma}`;
    document.getElementById('pageDatosTotal').innerHTML = `$${suma}`;
}





let btnPagar = document.getElementById('btn-pagar').addEventListener('click', () => {
    let error =  document.querySelector('.error')
    let inputname = document.getElementById('inputName').value;
    let inputApellido = document.getElementById('inputApellido').value;
    let inputEmail = document.getElementById('inputEmail').value;
    let inputTel = document.getElementById('icon_telephone').value;
    let inputCheck = document.getElementById('inputCheck');
    if (((inputname && inputApellido && inputEmail && inputTel) != '') && inputCheck.checked) {
        alert('Gracias por su compra!!. La api de MercadoPago me dió muchos problemas :(');
        pageDatos.style.display = 'none';
        loading.style.display = 'flex';
        vaciarElCarrito()
        setTimeout(() =>{
            loading.style.display = 'none';
            pageIndex.style.display = 'block';
            subMenu.style.display = 'flex';
            document.getElementById('navFix').style.position= 'fixed';
        }, 1200)
    }else {
        error.style.display = 'block'
    }
    // e.preventDefault()
    // $.ajax({
    //     url: 'https://api.mercadopago.com/checkout/preferences?access_token=TEST-399222293246790-030521-1554b3c6084b495851ae0a772bb56f07-147769170',
    //     type: 'POST',
    //     data: JSON.stringify({
    //         "items": [
    //             {
    //                 "title": "Producto",
    //                 "description": "Líquido 60ml",
    //                 "quantity": 1,
    //                 "currency_id": "ARS",
    //                 "unit_price": 10.0
    //             }
    //         ]
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     success : function(data){
    //         console.info(data);
    //     }
    // });
})


