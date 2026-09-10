//Array de obejetos que contenga las obras de arte, el nombre y el año de la misma
let galeria = [
    {
        nombre: 'Pulse Room',
        anio: 2006,
        obra: 'imagenes/pulse-room.jpg'
    },
    {
        nombre: 'Questions per Minute',
        anio: 2000,
        obra: 'imagenes/questions-per-minute.jpg'
    },
    {
        nombre: 'Homographies',
        anio: 2006,
        obra: 'imagenes/homographies.jpg'
    },
    {
        nombre: 'Surface Tension',
        anio: 1992,
        obra: 'imagenes/surface-tension.jpg'
    },
    {
        nombre: 'Pulse Topology',
        anio: 2021,
        obra: 'imagenes/pulse-topology.jpg'
    }
];
//variables
let mostrar = document.querySelector('#galeriaArte');
//Mostrar 
for (let i = 0; i < galeria.length; i++){
    let info = '<div><p><strong>' + galeria[i].nombre + '</strong><br>' + galeria[i].anio + '<br>';
    info += '<img src="' + galeria[i].obra + '" alt="' + galeria[i].nombre + '">';
    info += '</p></div>';

    mostrar.innerHTML += info;
}

let boton = document.querySelector('#botonGaleria');
if (boton) {

    boton.addEventListener('click', function () {

        mostrar.style.backgroundColor = 'red';
        
    });
        boton.addEventListener('dblclick', function () {

        let colorOriginal = 'rgb(138, 177, 228)';
        mostrar.style.backgroundColor = colorOriginal;
        
    });

}
