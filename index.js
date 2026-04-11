let pets = [
    {
        id: 1,
        nome: 'Rex',
        idade: 3,
        raca: 'Labrador',
        descricao: 'Um cachorro amigável e brincalhão.',
        imagem: 'https://example.com/rex.jpg'
    },
    {
        id: 2,
        nome: 'Mia',
        idade: 2,
        raca: 'Poodle',
        descricao: 'Uma cachorra inteligente e carinhosa.',
        imagem: 'https://example.com/mia.jpg'
    },
];

function displayPets() {
    const petList = document.getElementById('pet-list');
    petList.innerHTML = '';
    pets.forEach(pet => {
        const petCard = `
            <div class="col-12 col-md-6">
                <div class="card h-100">
                    <img src="${pet.imagem}" class="card-img-top" alt="${pet.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${pet.nome}</h5>
                        <p class="card-text">${pet.raca}, ${pet.idade} anos.</p>
                        <p class="card-text">${pet.descricao}</p>
                        <a href="#" class="btn btn-primary">Adotar</a>
                    </div>
                </div>
            </div>
        `;
        petList.innerHTML += petCard;
    });
}

const adotar = document.getElementById('adotar').addEventListener('click', function() {
    document.getElementById('adotar').style.display = 'none';
    document.getElementById('doar').style.display = 'none';
    document.getElementById('feiras').style.display = 'none';
    document.getElementById('perdi').style.display = 'none';
    document.getElementById('encontrei').style.display = 'none';
    document.getElementById('blog').style.display = 'none';
    document.getElementById('ongs').style.display = 'none';
    document.getElementById('eventos').style.display = 'none';

    document.getElementById('adotar-page').style.display = '';
    displayPets();
});