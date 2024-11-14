const containerProductos = document.querySelector('#containerProductos');

console.log(productos)
const mostrarProductos = (data) => {
    data.forEach(producto => {
        const cardProductos = document.createElement('article');
        cardProductos.setAttribute('id','card-producto');
        cardProductos.classList = 'col';
        cardProductos.innerHTML = `
                                    <img class="img-Prod" src="${producto.img}" alt="${producto.nombre}">
                                        <div class="descripcion">
                                            <h5 class="nombreProducto">${producto.nombre}</h5>
                                            <span class="precio">${producto.precio}</span>
                                            <button id='${producto.id}' class="btn-comprar">COMPRAR</button>
                                        </div>
                                        `;
            containerProductos.appendChild(cardProductos);
    })
    const btnComprar = document.querySelectorAll('.btn-comprar');
    btnComprar.forEach(el => {
        el.addEventListener('click', (e) => {
            agregarAlCarrito(e.target.id)
        });
    })
}
mostrarProductos(productos);

const carrito = [];

function agregarAlCarrito(id) {
    let prodEncontrado = productos.find (prod => prod.id === parseInt(id));
    carrito.push(prodEncontrado)
    console.log(carrito)
}