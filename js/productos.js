
let pageMac = document.getElementById('pageMac');
let pageIpad = document.getElementById('pageIpad');
let pageIphone = document.getElementById('pageIphone');
let pageWatch = document.getElementById('pageWatch');
let pageMusic = document.getElementById('pageMusic');
let loading = document.getElementById('loading');
let footer = document.querySelector('footer');
let pageIndex = document.getElementById('pageIndex');
let iconosGrandes = document.getElementById('iconosGrandes');
let pageDatos = document.getElementById('pageDatos')

// Mostrar Macbooks
function mostrarMac() {
    loading.style.display = 'flex';
    pageMac.style.display = 'none';
    pageIpad.style.display = 'none';
    pageIphone.style.display = 'none';
    pageWatch.style.display = 'none';
    pageMusic.style.display = 'none';
    footer.style.display = 'none';
    pageIndex.style.display = 'none';
    pageDatos.style.display = 'none';
    setTimeout(() => {
        pageMac.style.display = 'block';
        pageIpad.style.display = 'none';
        pageIphone.style.display = 'none';
        pageWatch.style.display = 'none';
        pageMusic.style.display = 'none';
        loading.style.display = 'none';
        footer.style.display = 'block';
    }, 1200);
}
// Crear card de Macbooks
fetch('baseDeDatos.json')
.then(res =>res.json())
.then(res =>{
    let auxMac = ``;
    for (let i = 0; i < (res.macbooks).length; i++) {
        auxMac += `
            <div class="" style="width: 23rem;">
            <img src="${(res.macbooks[i]).imagen}" class="card-img-top card-img-top-products" alt="...">
            <div class="card-body">
            <h4 class="card-title">${(res.macbooks[i]).nombre}</h4>
            </br>
            <h5 class="card-text">$${(res.macbooks[i]).precio}</h5>
            <p>Cantidad en stock: ${(res.macbooks[i]).stock}</p>
            <a  class="btn btn-primary" onclick='agregarAlCarrito(${JSON.stringify(res.macbooks[i])})'><i class="fas fa-shopping-bag"></i> Agregar al carrito <i class="fas fa-angle-right"></i></a>
            <fieldset class="fieldsetWatch">
            <h1>${(res.macbooks[i]).pulgadas}”</h1>
            <h3>${(res.macbooks[i]).procesador}
            <p>Procesador</p></h3>
            <h3>${(res.macbooks[i]).ram}
            <p>RAM</p>
            </h3>
            <h3>${(res.macbooks[i]).memory}
            <p>Almacenamiento</p>
            </h3>
            <h3>${(res.macbooks[i]).batteryLife}
            <p>Duración de la batería</p>
            </h3>
            <div class="infoTouchId"></div>
            <p>Touch ID</p>
            <div class="infoTouchBar"></div>
            <p>Touch Bar</p>
            </fieldset>
            </div>
            </div>
            `;
        }
        document.getElementById('productos-mac').innerHTML = auxMac;
});



// Mostrar iPads
function mostrarIpad() {
    loading.style.display = 'flex'
    pageMac.style.display = 'none';
    pageIpad.style.display = 'none';
    pageIphone.style.display = 'none';
    pageWatch.style.display = 'none';
    pageMusic.style.display = 'none';
    footer.style.display = 'none';
    pageIndex.style.display = 'none';
    pageDatos.style.display = 'none';
    setTimeout(() => {
        pageMac.style.display = 'none';
        pageIpad.style.display = 'block';
        pageIphone.style.display = 'none';
        pageWatch.style.display = 'none';
        pageMusic.style.display = 'none';
        loading.style.display = 'none';
        footer.style.display = 'block';
    }, 1200);
}
// Crear cards de iPads
fetch('baseDeDatos.json')
.then(res =>res.json())
.then(res =>{
    let auxIpad = ``
    for (let i = 0; i < (res.ipad).length; i++) {
            auxIpad += `
            <div class="" style="width: 18rem;">
            <img src="${(res.ipad[i]).imagen}" class="card-img-top card-img-top-products" alt="...">
            <div class="card-body">
            <h4 class="card-title">${(res.ipad[i]).nombre}</h4>
            </br>
            <h5 class="card-text">$${(res.ipad[i]).precio}</h5>
            <p>Cantidad en stock: ${(res.ipad[i]).stock}</p>
            <a  class="btn btn-primary" onclick='agregarAlCarrito(${JSON.stringify((res.ipad[i]))})'><i class="fas fa-shopping-bag"></i> Agregar al carrito <i class="fas fa-angle-right"></i></a>
            <fieldset class="fieldsetWatch">
            <h1>${(res.ipad[i]).pulgadas}”</h1>
            <h3>${(res.ipad[i]).memory}<p>Memoria</p></h3>
            <h3><img src="${(res.ipad[i]).camara}"><p>Camara</p></h3>
            <div class="infoKey"></div>
            <p>Compatible con Magic Keyboard, Smart Keyboard Folio</p>
            <div class="infoPencil"></div>
            <p>Compatible con Apple Pencil (segunda generación)</p>
            </fieldset>
            </div>
            </div>
            `;
    }
    document.getElementById('productos-ipad').innerHTML = auxIpad;
});





// Mostrar iPhones
function mostrarIphone() {
    loading.style.display = 'flex'
    pageMac.style.display = 'none';
    pageIpad.style.display = 'none';
    pageIphone.style.display = 'none';
    pageWatch.style.display = 'none';
    pageMusic.style.display = 'none';
    footer.style.display = 'none';
    pageIndex.style.display = 'none';
    pageDatos.style.display = 'none';
    setTimeout(() => {
        pageMac.style.display = 'none';
        pageIpad.style.display = 'none';
        pageIphone.style.display = 'block';
        pageWatch.style.display = 'none';
        pageMusic.style.display = 'none';
        loading.style.display = 'none';
        footer.style.display = 'block';
    }, 1200);
}
// Crear cards de iPhones
fetch('baseDeDatos.json')
.then(res =>res.json())
.then(res =>{
    let auxIphone = ``
    for (let i = 0; i < (res.iphone).length; i++) {
            auxIphone += `
            <div class="" style="width: 20rem;">
            <img src="${(res.iphone[i]).imagen}" class="card-img-top card-img-top-products" alt="...">
            <div class="card-body">
            <h4 class="card-title">${(res.iphone[i]).nombre}</h4>
            </br>
            <h5 class="card-text">$${(res.iphone[i]).precio}</h5>
            <p>Cantidad en stock: ${(res.iphone[i]).stock}</p>
            <a  class="btn btn-primary" onclick='agregarAlCarrito(${JSON.stringify((res.iphone[i]))})'><i class="fas fa-shopping-bag"></i> Agregar al carrito <i class="fas fa-angle-right"></i></a>
            <fieldset class="fieldsetWatch">
            <h1>${(res.iphone[i]).pulgadas}”</h1>
            <h4>${(res.iphone[i]).memory}<p>Memoria</p></h4>
            <h3><img src="${(res.iphone[i]).camara}"><p>Camara</p></h3>
            <div class="info5G"></div>
            <p>Descargas ultrarrápidas, transmisión de alta calidad</p>
            <div class="infoA14"></div>
            <p>Chip biónico A14</p>
            <div class="infoBateria"></div>
            <p>Hasta 17 horas de reproducción de video</p>
            <div class="infoID"></div>
            <p>ID de rostro</p>
            <div class="infoWater"></div>
            <p>Resistente al agua hasta una profundidad de 6 metros por hasta 30 minutos</p>
            <div class="infoAcc"></div>
            <p>Compatible con accesorios MagSafe y cargadores inalámbricos</p>
            </fieldset>
            </div>
            </div>
            `;
    }
    document.getElementById('productos-iphone').innerHTML = auxIphone;
})




// Mostrar Apple Watchs
function mostrarWatch() {
    loading.style.display = 'flex'
    pageMac.style.display = 'none';
    pageIpad.style.display = 'none';
    pageIphone.style.display = 'none';
    pageWatch.style.display = 'none';
    pageMusic.style.display = 'none';
    footer.style.display = 'none';
    pageIndex.style.display = 'none';
    pageDatos.style.display = 'none';
    setTimeout(() => {
        pageMac.style.display = 'none';
        pageIpad.style.display = 'none';
        pageIphone.style.display = 'none';
        pageWatch.style.display = 'block';
        pageMusic.style.display = 'none';
        loading.style.display = 'none';
        footer.style.display = 'block';
    }, 1200);
};
// Crear cards de Watchs
fetch('baseDeDatos.json')
.then(res =>res.json())
.then(res =>{
    let auxWatch = ``
    for (let i = 0; i < (res.watch).length; i++) {
            auxWatch += `
            <div class="" style="width: 20rem;">
            <img src="${(res.watch[i]).imagen}" class="card-img-top card-img-top-products" alt="...">
            <div class="card-body">
            <h4 class="card-title">${(res.watch[i]).nombre}</h4>
            </br>
            <h5 class="card-text">$${(res.watch[i]).precio}</h5>
            <p>Cantidad en stock: ${(res.watch[i]).stock}</p>
            <a  class="btn btn-primary" onclick='agregarAlCarrito(${JSON.stringify((res.watch[i]))})'><i class="fas fa-shopping-bag"></i> Agregar al carrito <i class="fas fa-angle-right"></i></a>
            <fieldset class="fieldsetWatch">
            <div class="infoCaseSize"></div>
            <p>${(res.watch[i]).medidas}</p>
            <div class="infoWatchWater"></div>
            <p>Resistencia al agua</p>
            <div class="infoWatchHeart"></div>
            <p>Freciencias cardíacas</p>
            <div class="infoWatchCall"></div>
            <p>Llamadas de emergencia</p>
            <div class="infoWatchSOS"></div>
            <p>Emergencia SOS</p>
            <div class="infoWatchAltimetro"></div>
            <p>Altímetro</p>
            <h4>${(res.watch[i]).materiales}<p>Materiales</p></h4>
            </fieldset>
            <div class="card-text"></div>
            </div>
            </div>
            `;
    }
    document.getElementById('productos-watch').innerHTML = auxWatch;
})




// Mostrar Music
function mostrarMusic() {
    loading.style.display = 'flex'
    pageMac.style.display = 'none';
    pageIpad.style.display = 'none';
    pageIphone.style.display = 'none';
    pageWatch.style.display = 'none';
    pageMusic.style.display = 'none';
    footer.style.display = 'none';
    pageIndex.style.display = 'none';
    pageDatos.style.display = 'none';
    setTimeout(() => {
        pageMac.style.display = 'none';
        pageIpad.style.display = 'none';
        pageIphone.style.display = 'none';
        pageWatch.style.display = 'none';
        pageMusic.style.display = 'block';
        loading.style.display = 'none';
        footer.style.display = 'block';
    }, 1200);
}
// Crear cards de Music
fetch('baseDeDatos.json')
.then(res =>res.json())
.then(res =>{
    let auxMusic = ``
    for (let i = 0; i < (res.music).length; i++) {
            auxMusic += `
            <div class="" style="width: 18rem;">
            <img src="${(res.music[i]).imagen}" class="card-img-top card-img-top-products" alt="...">
            <div class="card-body">
            <h4 class="card-title">${(res.music[i]).nombre}</h4>
            </br>
            <h5 class="card-text">$${(res.music[i]).precio}</h5>
            <p>Cantidad en stock: ${(res.music[i]).stock}</p>
            <a  class="btn btn-primary" onclick='agregarAlCarrito(${JSON.stringify((res.music[i]))})'><i class="fas fa-shopping-bag"></i> Agregar al carrito <i class="fas fa-angle-right"></i></a>
            <fieldset class="fieldsetWatch">
            <h3>${(res.music[i]).battery}<p>Tiempo de escucha con una carga</p></h3>
            </fieldset>
            </div>
            </div>
            `;
    }
    document.getElementById('productos-music').innerHTML = auxMusic;
});

// Page Datos
function datos() {
    loading.style.display = 'flex'
    pageMac.style.display = 'none';
    pageIpad.style.display = 'none';
    pageIphone.style.display = 'none';
    pageWatch.style.display = 'none';
    pageMusic.style.display = 'none';
    footer.style.display = 'none';
    pageIndex.style.display = 'none';
    $('.sidenav').sidenav('close');
    setTimeout(() =>{
        loading.style.display = 'none'
        pageDatos.style.display = 'block';
        document.getElementById('barraProgressCarrito').display = 'block'
    },1500)
}