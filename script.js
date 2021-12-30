const baseURL = 'https://pokeapi.co/api';

let button = document.getElementById('user');
let abilityList = document.getElementById('list');

function fetchPokemon(results) {
    fetch(`${ baseURL }/v2/ability`)
    .then(response => response.json())
    .then(jsonData => {
        console.log(jsonData);
        for(let pokeAbility of jsonData.results) {
            displayPokemon(pokeAbility);
        }
    })
}

function displayPokemon(pokeAbility) {
    let pokeList = document.createElement('li');
    let pokeWord = document.createElement('p');

    pokeWord.innerText = pokeAbility.name;

    pokeList.classList.add('poke-list');
    pokeWord.classList.add('poke-word');

    pokeList.appendChild(pokeWord);
    abilityList.appendChild(pokeList);
}

button.addEventListener('click', () => {
    console.log('hello');
    fetchPokemon();
});
