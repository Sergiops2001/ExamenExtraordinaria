//Array
const hoteles = [
  {
    imagen: 'img/cuenca.jpg',
    nombre: 'Hotel Cuenca',
    descripcion: 'Un hotel cómodo y moderno cerca de la catedral.',
    ubicacion: 'Cuenca',
    precio: '80€/noche',
    piscina: false
  },
  {
    imagen: 'img/menorca.jpg',
    nombre: 'Hotel Menorquina',
    descripcion: 'Ideal para escapadas románticas con vistas al mar.',
    ubicacion: 'Menorca',
    precio: '120€/noche',
    piscina: true
  },
  {
    imagen: 'img/asturias.jpg',
    nombre: 'Hotel Cabarcenos',
    descripcion: 'Perfecto para familias, cerca de atracciones como cabarceno.',
    ubicacion: 'Asturias',
    precio: '110€/noche',
    piscina: true
  },
  {
    imagen: 'img/bilbao.jpg',
    nombre: 'Hotel Bilbao',
    descripcion: 'Perfecto para futboleros cerca de San Mamés.',
    ubicacion: 'Bilbao',
    precio: '90€/noche',
    piscina: false
  },
  {
    imagen: 'img/malaga.jpg',
    nombre: 'Hotel Malagueta',
    descripcion: 'Perfecto para familias, cerca del mar.',
    ubicacion: 'Malaga',
    precio: '110€/noche',
    piscina: true
  },
  {
    imagen: 'img/cadiz.jpg',
    nombre: 'Hotel Gaditano',
    descripcion: 'Perfecto para disfrutar de las vistas y de la piscina.',
    ubicacion: 'Cadiz',
    precio: '130€/noche',
    piscina: true
  },
  {
    imagen: 'img/valladolid.jpg',
    nombre: 'Hotel Universitario',
    descripcion: 'Perfecto para jóvenes fiesteros.',
    ubicacion: 'Valladolid',
    precio: '70€/noche',
    piscina: false
  },
];

//Elementos
const contenedor = document.getElementById('contenedor-hoteles');
const inputBusqueda = document.getElementById('searchInput');
const filtroPiscina = document.getElementById('filtroPiscina');

//render
function mostrarHoteles(lista) {
  contenedor.innerHTML = ''; // Limpiar antes
  lista.forEach(hotel => {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add(
      'border', 'p-4', 'rounded', 'shadow', 'w-64','bg-gray-200'
    ); 
    tarjeta.innerHTML = `
      <img src="${hotel.imagen}" alt="${hotel.nombre}" class="w-full h-40 object-cover rounded mb-2">
      <h3 class="text-lg font-bold mb-1">${hotel.nombre}</h3>
      <p class="text-sm mb-1">${hotel.descripcion}</p>
      <p class="text-sm mb-1"><strong>Ubicación:</strong> ${hotel.ubicacion}</p>
      <p class="text-sm mb-1"><strong>Precio:</strong> ${hotel.precio}</p>
      ${hotel.piscina ? '<p class="align-center">Tiene Piscina</p>' : ''}
      <button class="mt-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Agregar a Favoritos</button>
    `;


    const boton = tarjeta.querySelector('button');
    boton.addEventListener('click', () => agregarAFavoritos(hotel));

    contenedor.appendChild(tarjeta);
  });
}


function filtrarHoteles() {
  const texto = inputBusqueda.value.toLowerCase();
  const piscinaActiva = filtroPiscina.checked;

  const filtrados = hoteles.filter(hotel => {
    const coincideTexto =
      hotel.nombre.toLowerCase().includes(texto) ||
      hotel.descripcion.toLowerCase().includes(texto) ||
      hotel.ubicacion.toLowerCase().includes(texto);

    const coincidePiscina = piscinaActiva ? hotel.piscina : true;

    return coincideTexto && coincidePiscina;
  });

  mostrarHoteles(filtrados);
}


function agregarAFavoritos(hotel) {

  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];


  const yaExiste = favoritos.some(fav => fav.nombre === hotel.nombre);
  if (!yaExiste) {
    favoritos.push(hotel);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    alert(`¡${hotel.nombre} añadido a favoritos!`);
  } else {
    alert(`¡${hotel.nombre} ya está en favoritos!`);
  }
}


mostrarHoteles(hoteles);


inputBusqueda.addEventListener('input', filtrarHoteles);
filtroPiscina.addEventListener('change', filtrarHoteles);
