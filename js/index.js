
let carrito = [];
if (localStorage.getItem('carrito') != null) {
    carrito = JSON.parse(localStorage.getItem('carrito'));
    document.getElementById('contador').innerHTML = `${carrito.length}`;
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

let pageMac = document.getElementById('pageMac');
let pageIpad = document.getElementById('pageIpad');
let pageIphone = document.getElementById('pageIphone');
let pageWatch = document.getElementById('pageWatch');
let pageMusic = document.getElementById('pageMusic');
let loading = document.getElementById('loading');

// Productos Mac
let btnMac = document.getElementById('btn-mac').addEventListener('click', function (e) {
    e.preventDefault()
    loading.style.display = 'flex';
    pageMac.style.display = 'none';
    pageIpad.style.display = 'none';
    pageIphone.style.display = 'none';
    pageWatch.style.display = 'none';
    pageMusic.style.display = 'none';
    setTimeout(() => {
        pageMac.style.display = 'block';
        pageIpad.style.display = 'none';
        pageIphone.style.display = 'none';
        pageWatch.style.display = 'none';
        pageMusic.style.display = 'none';
        loading.style.display = 'none'
    }, 1200);
})
let auxMac = ``
for (let i = 0; i < baseDeDatos.length; i++) {
    if (baseDeDatos[i].stock > 0) {
        auxMac += `
        <div class="card" style="width: 18rem;">
        <img src="${baseDeDatos[0].imagen}" class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class="card-title">${baseDeDatos[0].nombre}</h4>
        <h5 class="card-text">${baseDeDatos[0].precio}</h5>
        <p>Cantidad en stock: ${baseDeDatos[0].stock}</p>
        <a  class="btn btn-primary" onclick='agregarAlCarrito(${JSON.stringify(baseDeDatos[0])})'>Agregar al carrito</a>
        </div>
        </div>
        `;
    }
}
document.getElementById('productos-mac').innerHTML = auxMac;

// Productos iPad
let btnIpad = document.getElementById('btn-ipad').addEventListener('click', function (e) {
    e.preventDefault()
    loading.style.display = 'flex'
    pageMac.style.display = 'none';
    pageIpad.style.display = 'none';
    pageIphone.style.display = 'none';
    pageWatch.style.display = 'none';
    pageMusic.style.display = 'none';
    setTimeout(() => {
        pageMac.style.display = 'none';
        pageIpad.style.display = 'block';
        pageIphone.style.display = 'none';
        pageWatch.style.display = 'none';
        pageMusic.style.display = 'none';
        loading.style.display = 'none'
    }, 1200);
})
let auxIpad = ``
for (let i = 0; i < baseDeDatos.length; i++) {
    if (baseDeDatos[i].stock > 0) {
        auxIpad += `
        <div class="card" style="width: 18rem;">
        <img src="${baseDeDatos[3].imagen}" class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class="card-title">${baseDeDatos[3].nombre}</h4>
        <h5 class="card-text">${baseDeDatos[3].precio}</h5>
        <p>Cantidad en stock: ${baseDeDatos[3].stock}</p>
        <a  class="btn btn-primary" onclick='agregarAlCarrito(${JSON.stringify(baseDeDatos[3])})'>Agregar al carrito</a>
        </div>
        </div>
        `;
    }
}
document.getElementById('productos-ipad').innerHTML = auxIpad;

// Productos iPhone
let btnIphone = document.getElementById('btn-iphone').addEventListener('click', function (e) {
    e.preventDefault()
    loading.style.display = 'flex'
    pageMac.style.display = 'none';
    pageIpad.style.display = 'none';
    pageIphone.style.display = 'none';
    pageWatch.style.display = 'none';
    pageMusic.style.display = 'none';
    setTimeout(() => {
        pageMac.style.display = 'none';
        pageIpad.style.display = 'none';
        pageIphone.style.display = 'block';
        pageWatch.style.display = 'none';
        pageMusic.style.display = 'none';
        loading.style.display = 'none'
    }, 1200);
})
let auxIphone = ``
for (let i = 0; i < baseDeDatos.length; i++) {
    if (baseDeDatos[i].stock > 0) {
        auxIphone += `
        <div class="card" style="width: 18rem;">
        <img src="${baseDeDatos[1].imagen}" class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class="card-title">${baseDeDatos[1].nombre}</h4>
        <h5 class="card-text">${baseDeDatos[1].precio}</h5>
        <p>Cantidad en stock: ${baseDeDatos[1].stock}</p>
        <a  class="btn btn-primary" onclick='agregarAlCarrito(${JSON.stringify(baseDeDatos[1])})'>Agregar al carrito</a>
        </div>
        </div>
        `;
    }
}
document.getElementById('productos-iphone').innerHTML = auxIphone;

// Productos Watch
let btnWatch = document.getElementById('btn-watch').addEventListener('click', function (e) {
    e.preventDefault()
    loading.style.display = 'flex'
    pageMac.style.display = 'none';
    pageIpad.style.display = 'none';
    pageIphone.style.display = 'none';
    pageWatch.style.display = 'none';
    pageMusic.style.display = 'none';
    setTimeout(() => {
        pageMac.style.display = 'none';
        pageIpad.style.display = 'none';
        pageIphone.style.display = 'none';
        pageWatch.style.display = 'block';
        pageMusic.style.display = 'none';
        loading.style.display = 'none'
    }, 1200);
})
let auxWatch = ``
for (let i = 0; i < baseDeDatos.length; i++) {
    if (baseDeDatos[i].stock > 0) {
        auxWatch += `
        <div class="card" style="width: 18rem;">
        <img src="${baseDeDatos[2].imagen}" class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class="card-title">${baseDeDatos[2].nombre}</h4>
        <h5 class="card-text">${baseDeDatos[2].precio}</h5>
        <p>Cantidad en stock: ${baseDeDatos[2].stock}</p>
        <a  class="btn btn-primary" onclick='agregarAlCarrito(${JSON.stringify(baseDeDatos[2])})'>Agregar al carrito</a>
        </div>
        </div>
        `;
    }
}
document.getElementById('productos-watch').innerHTML = auxWatch;

// Productos Music
let btnMusic = document.getElementById('btn-music').addEventListener('click', function (e) {
    e.preventDefault()
    loading.style.display = 'flex'
    pageMac.style.display = 'none';
    pageIpad.style.display = 'none';
    pageIphone.style.display = 'none';
    pageWatch.style.display = 'none';
    pageMusic.style.display = 'none';
    setTimeout(() => {
        pageMac.style.display = 'none';
        pageIpad.style.display = 'none';
        pageIphone.style.display = 'none';
        pageWatch.style.display = 'none';
        pageMusic.style.display = 'block';
        loading.style.display = 'none'
    }, 1200);
})
let auxMusic = ``
for (let i = 0; i < baseDeDatos.length; i++) {
    if (baseDeDatos[i].stock > 0) {
        auxMusic += `
        <div class="card" style="width: 18rem;">
        <img src="${baseDeDatos[4].imagen}" class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class="card-title">${baseDeDatos[4].nombre}</h4>
        <h5 class="card-text">${baseDeDatos[4].precio}</h5>
        <p>Cantidad en stock: ${baseDeDatos[4].stock}</p>
        <a  class="btn btn-primary" onclick='agregarAlCarrito(${JSON.stringify(baseDeDatos[4])})'>Agregar al carrito</a>
        </div>
        </div>
        `;
    }
}
document.getElementById('productos-music').innerHTML = auxMusic;




function agregarAlCarrito (producto) {
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito))
    let aux = 0
    for (let i = 0; i < carrito.length; i++) {
        aux += carrito[i].precio
    }
    document.getElementById('contador').innerHTML = `${carrito.length}`;
}