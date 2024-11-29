const btnCart = document.querySelector('container-cart')

// btnCart.addEventListener('click',()=> {
//     containerCartProducts.classList.toggle('hidden-cart')
// })

const containerProductos = document.querySelector('#containerProductos');

const cartProducts = document.querySelector('#carritoProductos');

// codigo para generar el front

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
}

let allProducts = [];

const valortotal = document.querySelector('.totalPagar')
const countProducts = document.querySelector('#contador-productos')

containerProductos.addEventListener('click', e => {
    if (e.target.classList.contains('btn-comprar')){
        const product = e.target.parentElement;

        const infoProduct = {
            cantidad:1,
            nombre: product.querySelector('h5').textContent,
            precio: product.querySelector('span').textContent,
        }

        const exist = allProducts.some(product => product.nombre === infoProduct.nombre)

        // ver si existe el producto y actualizar la cantidad

        if (exist) {
            const products = allProducts.map(product => {
                if(product.nombre === infoProduct.nombre){
                    product.cantidad++;
                    return product
                } else {
                    return product
                }
            })

            allProducts = [...products]

        } else {
            
            allProducts = [...allProducts,infoProduct]
        }


        mostrarCarrito()
    }
})


const mostrarCarrito = () => {
    
    // limpiar la lista del html

    cartProducts.innerHTML = ""
    let total = 0;
    let totalProducts = 0;


    allProducts.forEach(producto => {
        const cartProductos = document.createElement('div');
        cartProductos.setAttribute('id','cart-producto');
        cartProductos.innerHTML = `
                                    <div class="info-cart-product">
                                        <span class="cantidad-producto-carrito">${producto.cantidad}</span>
                                        <p class="titulo-producto-carrito">${producto.nombre}</p>
                                        <span class="precio-producto-carrito">${producto.precio}</span>
                                        precio final
                                    </div>
                                        `;
        cartProducts.append(cartProductos);

        total = total + parseInt(producto.cantidad * producto.precio);
        totalProducts = totalProducts + producto.cantidad;

    })

    // calcular el total y el numero de productos

    valortotal.innerText = `${total}`;
    countProducts.innerText = `${totalProducts}`;
    
}


// funcion para mostrar los productos

mostrarProductos(productos);




