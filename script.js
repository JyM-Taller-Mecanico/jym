let services = document.querySelector('.programas');
let cards = [
    {
        title: 'Scanner',
        img: './img/scanner.jpeg'
    },
    {
        title: 'Cambio de aceite',
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
