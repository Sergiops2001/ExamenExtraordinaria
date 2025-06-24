const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
const container = document.getElementById("favoritos-container");
favoritos.forEach(hoteles => {
      const tarjeta = document.createElement("div");
  tarjeta.className = "flex items-center gap-4 bg-white shadow p-4 rounded mb-4";
   tarjeta.innerHTML =`<img src="${hoteles.imagen}" alt="${hoteles.nombre}" class="mb-4 rounded-lg shadow-lg w-48 h-48 object-cover">
    <h3 class="text-lg font-bold mb-1">${hoteles.nombre}</h3>
    <p class="text-sm mb-1">${hoteles.descripcion}</p>
    <p class="text-sm mb-1"><strong>Ubicación:</strong> ${hoteles.ubicacion}</p>
    <p class="text-sm mb-1"><strong>Precio:</strong> ${hoteles.precio}</p>
    ${hoteles.piscina ? '<p class="text-blue-500">Piscina</p>' : ''}
    <button class="bg-red-500 text-white px-3 py-1 rounded mt-2 hover:bg-red-600 w-full sm:w-auto">
  Eliminar
</button>

  `;
    container.appendChild(tarjeta);
    const boton = tarjeta.querySelector("button");
    boton.addEventListener("click", () => {
    const nombre = boton.dataset.nombre;
    const nuevoFavoritos = favoritos.filter(p => p.nombre !== nombre);
        localStorage.setItem("favoritos", JSON.stringify(nuevoFavoritos));
                tarjeta.remove();
            });
        });
        




