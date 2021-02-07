
let carrito = [];
if (localStorage.getItem('carrito') != null) {
    carrito = JSON.parse(localStorage.getItem('carrito'));
    document.getElementById('contador').innerHTML = `Falso carrito: ${carrito.length} productos`;
}

class Producto {
    constructor(nombreMarca, precioProducto, stockProducto, imagenProducto){
        this.nombre = nombreMarca;
        this.precio = precioProducto;
        this.stock = stockProducto;
        this.imagen = imagenProducto;
    }
}



let producto1 = new Producto('Macbook Air', '$1200 USD', '3', 'https://media.revistagq.com/photos/5fbcda6e8856b0b406dd77b2/16:9/w_1920,c_limit/Apple_new-macbookair-wallpaper-screen_11102020.jpg')
let producto2 = new Producto('Iphone 12 ', '$999 USD', '9', 'https://www.muycomputer.com/wp-content/uploads/2020/08/iPhone-12-econ%C3%B3mico-1000x600.jpg')
let producto3 = new Producto('Apple Watch', '$350 USD', '5', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTP72_VW_34FR+watch-40-alum-gold-nc-se_VW_34FR_WF_CO_GEO_ES?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=80&op_usm=0.5,0.5&.v=1566449884261,1604709163000')
let producto4 = new Producto('iPad', '$400 USD', '2', 'https://benotac.es/wp-content/uploads/2020/09/ipad-2020-wifi-Gris-Espacial.jpg')
let producto5 = new Producto('AirPods', '$150', '4', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1591634795000');

let baseDeDatos = [];
baseDeDatos.push(producto1);
baseDeDatos.push(producto2);
baseDeDatos.push(producto3);
baseDeDatos.push(producto4);
baseDeDatos.push(producto5);

let aux = ``
for (let i = 0; i < baseDeDatos.length; i++) {
    if (baseDeDatos[i].stock > 0) {
        aux += `
        <div class="card" style="width: 18rem;">
        <img src="${baseDeDatos[i].imagen}" class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class="card-title">${baseDeDatos[i].nombre}</h4>
        <h5 class="card-text">${baseDeDatos[i].precio}</h5>
        <p>Cantidad en stock: ${baseDeDatos[i].stock}</p>
        <a href="#" class="btn btn-primary" onclick='agregarAlCarrito(${JSON.stringify(baseDeDatos[i])})'>Agregar al carrito</a>
        </div>
        </div>
        `;
    }
}
document.getElementById('productos').innerHTML = aux;


function agregarAlCarrito (producto) {
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito))
    let aux = 0
    for (let i = 0; i < carrito.length; i++) {
        aux += carrito[i].precio
    }
    document.getElementById('contador').innerHTML = `Falso carrito: ${carrito.length} productos`;
}