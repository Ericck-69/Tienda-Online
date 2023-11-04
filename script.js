// Funcionalidad del carrito de compras
let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;

    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        listaCarrito.appendChild(li);
    });

    const totalElement = document.getElementById('total');
    totalElement.textContent = `$${total.toFixed(2)}`;
}

function realizarCompra() {
    if (carrito.length > 0) {
        // Aquí podrías agregar la lógica para realizar la compra, como enviar la información a un servidor, etc.
        alert('Compra realizada. Gracias por tu compra!');
        carrito = [];
        total = 0;
        actualizarCarrito();
    } else {
        alert('El carrito está vacío. Agrega juegos antes de comprar.');
    }
}



