

let pageMac = document.getElementById('pageMac');
let pageIpad = document.getElementById('pageIpad');
let pageIphone = document.getElementById('pageIphone');
let pageWatch = document.getElementById('pageWatch');
let pageMusic = document.getElementById('pageMusic');
let loading = document.getElementById('loading');
let footer = document.querySelector('footer');
let pageIndex = document.getElementById('pageIndex')

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
            <div class="card" style="width: 18rem;">
            <img src="${(res.macbooks[i]).imagen}" class="card-img-top" alt="...">
            <div class="card-body">
            <h4 class="card-title">${(res.macbooks[i]).nombre}</h4>
            <h5 class="card-text">${(res.macbooks[i]).precio}</h5>
            <p>Cantidad en stock: ${(res.macbooks[i]).stock}</p>
            <a  class="btn btn-primary" onclick='agregarAlCarrito(${JSON.stringify(res.macbooks[i])})'>Agregar al carrito</a>
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
            <div class="card" style="width: 18rem;">
            <img src="${(res.ipad[i]).imagen}" class="card-img-top" alt="...">
            <div class="card-body">
            <h4 class="card-title">${(res.ipad[i]).nombre}</h4>
            <h5 class="card-text">${(res.ipad[i]).precio}</h5>
            <p>Cantidad en stock: ${(res.ipad[i]).stock}</p>
            <a  class="btn btn-primary" onclick='agregarAlCarrito(${JSON.stringify((res.ipad[i]))})'>Agregar al carrito</a>
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
            <div class="card" style="width: 18rem;">
            <img src="${(res.iphone[i]).imagen}" class="card-img-top" alt="...">
            <div class="card-body">
            <h4 class="card-title">${(res.iphone[i]).nombre}</h4>
            <h5 class="card-text">${(res.iphone[i]).precio}</h5>
            <p>Cantidad en stock: ${(res.iphone[i]).stock}</p>
            <a  class="btn btn-primary" onclick='agregarAlCarrito(${JSON.stringify((res.iphone[i]))})'>Agregar al carrito</a>
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
            <div class="card" style="width: 18rem;">
            <img src="${(res.watch[i]).imagen}" class="card-img-top" alt="...">
            <div class="card-body">
            <h4 class="card-title">${(res.watch[i]).nombre}</h4>
            <h5 class="card-text">${(res.watch[i]).precio}</h5>
            <p>Cantidad en stock: ${(res.watch[i]).stock}</p>
            <a  class="btn btn-primary" onclick='agregarAlCarrito(${JSON.stringify((res.watch[i]))})'>Agregar al carrito</a>
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
            <div class="card" style="width: 18rem;">
            <img src="${(res.music[i]).imagen}" class="card-img-top" alt="...">
            <div class="card-body">
            <h4 class="card-title">${(res.music[i]).nombre}</h4>
            <h5 class="card-text">${(res.music[i]).precio}</h5>
            <p>Cantidad en stock: ${(res.music[i]).stock}</p>
            <a  class="btn btn-primary" onclick='agregarAlCarrito(${JSON.stringify((res.music[i]))})'>Agregar al carrito</a>
            </div>
            </div>
            `;
    }
    document.getElementById('productos-music').innerHTML = auxMusic;
});