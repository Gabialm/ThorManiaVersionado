let pets = [
    {
        id: 1,
        name: 'Rex',
        age: 3,
        raça: 'Labrador',
        description: 'Um cachorro amigável e brincalhão.',
        image: 'https://example.com/rex.jpg'
    },
    {
        id: 2,
        name: 'Mia',
        age: 2,
        raça: 'Poodle',
        description: 'Uma cachorra inteligente e carinhosa.',
        image: 'https://example.com/mia.jpg'
    },
];

function displayPets() {
    const petList = document.getElementById('pet-list');
    petList.innerHTML = '';
    pets.forEach(pet => {
        const petCard = `
            <div class="col-12 col-md-6">
                <div class="card h-100">
                    <img src="${pet.image}" class="card-img-top" alt="${pet.name}">
                    <div class="card-body">
                        <h5 class="card-title">${pet.name}</h5>
                        <p class="card-text">${pet.raça}, ${pet.age} anos.</p>
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