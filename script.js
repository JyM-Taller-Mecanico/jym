let services = document.querySelector('.programas');

/*
 * En caso de se quisiera agregar mas servicios en el futuro
 * Agregue un nuevo Objeto JS con el nombre del servicio en la etiqueta title
 * y la ruta de la imagen en la etiqueta img
 * Ejemplo:
 * {
 *     title: 'Nuevo servicio',
 *     img: 'Ruta de la imagen'
 * }
 * Si
*/

let cards = [
    {
        title: 'Diagnostico Con Scanner',
        img: './img/scanner.jpeg'
    },
    {
        title: 'Cambios de aceite',
        img: './img/Cambio_aceite.jpeg'
    },
    {
        title: 'Aceites',
        img: './img/aceites.jpeg'
    }
];

services.innerHTML = cards.map(card => {
    return `
        <div class="card">
            <label class="card-title">
                <h3>${card.title}</h3>
            </label>
            <img src="${card.img}" width="200" alt="${card.title}">
        </div>
    `;
}).join('');
