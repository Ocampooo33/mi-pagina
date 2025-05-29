const libros = [];
const carrito = [];

function agregarLibro() {
    const titulo = document.getElementById("titulo").value.trim();
    const precio = parseFloat(document.getElementById("precio").value);

    if (titulo === "" || isNaN(precio) || precio <= 0) {
        alert("Ingrese un título y un precio válido.");
        return;
    }

    const libro = { titulo, precio };
    libros.push(libro);
    mostrarLibros();

    // Limpiar inputs
    document.getElementById("titulo").value = "";
    document.getElementById("precio").value = "";
}

function mostrarLibros() {
    const contenedor = document.getElementById("librosDisponibles");
    contenedor.innerHTML = "";

    libros.forEach((libro, index) => {
        const div = document.createElement("div");
        div.className = "libro";
        div.innerHTML = `
            <strong>${libro.titulo}</strong><br>
            Precio: $${libro.precio.toFixed(2)}<br>
            <button onclick="agregarAlCarrito(${index})">Agregar al carrito</button>
        `;
        contenedor.appendChild(div);
    });
}

function agregarAlCarrito(index) {
    const libro = libros[index];
    carrito.push(libro);
    mostrarCarrito();
}

function mostrarCarrito() {
    const contenedor = document.getElementById("carrito");
    contenedor.innerHTML = "";

    carrito.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "carrito";
        div.innerHTML = `
            • ${item.titulo} - $${item.precio.toFixed(2)}
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        contenedor.appendChild(div);
    });

    calcularTotal();
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    mostrarCarrito();
}

function calcularTotal() {
    const total = carrito.reduce((sum, item) => sum + item.precio, 0);
    document.getElementById("total").textContent = `Total: $${total.toFixed(2)}`;
}
