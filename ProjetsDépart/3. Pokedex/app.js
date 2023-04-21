const searchInput = document.querySelector(".recherche-poke input");
const listePoke = document.querySelector('.liste-poke');
const chargement = document.querySelector('.loader');

let allPokemon = [];
let tableauFin = [];




const types = {
    grass: '#78c850',
	ground: '#E2BF65',
	dragon: '#6F35FC',
	fire: '#F58271',
	electric: '#F7D02C',
	fairy: '#D685AD',
	poison: '#966DA3',
	bug: '#B3F594',
	water: '#6390F0',
	normal: '#D9D5D8',
	psychic: '#F95587',
	flying: '#A98FF3',
	fighting: '#C25956',
    rock: '#B6A136',
    ghost: '#735797',
    ice: '#96D9D6'
};





const fetchPokemonBase = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then((allPoke) => {
      console.log(allPoke);
      allPoke.results.forEach((pokemon) => {
        fetchPokemonComplet(pokemon);
      });
    });
};

fetchPokemonBase();

//using async await

// const fetchPokemonBase = async () => {
//     try {
//       const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
//       const allPoke = await response.json();
//       console.log(allPoke);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   fetchPokemonBase();

//fetch all caracteristic of each Pokemon
const fetchPokemonComplet = (pokemon) => {
  let objPokemonFull = {};

  const url = pokemon.url;
  const name = pokemon.name;

  fetch(url)
    .then((response) => response.json())
    .then((pokemonData) => {
      console.log(pokemonData);

      objPokemonFull.id = pokemonData.id;
      objPokemonFull.pic = pokemonData.sprites.front_default;
      objPokemonFull.type = pokemonData.types[0].type.name;

      fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
        .then((response) => response.json())
        .then((pokeData) => {
          console.log(pokeData);

          objPokemonFull.name = pokeData.names[4].name;
          allPokemon.push(objPokemonFull);

          if (allPokemon.length === 151) {
            console.log(allPokemon);

            tableauFin = allPokemon.sort((a, b) => {
                return a.id - b.id
            }).slice(0,21)

            console.log(tableauFin)

            createdCard(tableauFin)
            chargement.style.display ="none"

          }
        });
    });
};


//create carte Pokemon
const createdCard = (arr) => {
    for(let i = 0; i < arr.length ; i++) {

        const carte = document.createElement('li');
        let couleur = types[arr[i].type];
        carte.style.background = couleur
        const textCarte = document.createElement('h5');
        textCarte.innerText = arr[i].name;
        const idCarte = document.createElement("p");
        idCarte.innerText = `ID ${arr[i].id}`;
        const imgCarte = document.createElement('img');
        imgCarte.src = arr[i].pic;

        carte.appendChild(imgCarte);
        carte.appendChild(textCarte);
        carte.appendChild(idCarte);

        listePoke.appendChild(carte);





    }
}


//scroll

window.addEventListener('scroll', () => {
  const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

  if(clientHeight + scrollTop >= scrollHeight - 20) {
    addPoke(4);
}


})

 let index = 21;
const addPoke = (nbr) => {
 

  if(index > 151) {
    return
  } else {
    const blocToAdd = allPokemon.slice(index, index + nbr);
    console.log(index, index + nbr);
    createdCard(blocToAdd)
    index += nbr
  }



}


//recherche


const recherche = () => {


//   if(index < 151) {
//     addPoke(130);
// }

let titleValue,inputValue,allCards, allTitles

 inputValue = searchInput.value.toUpperCase();
 allCards = document.querySelectorAll("li");
 allTitles = document.querySelectorAll("h5");

for (i=0; i< allCards.length; i++) {
   titleValue = allTitles[i].innerText

   if(titleValue.toUpperCase().includes(inputValue) ) {
    allCards[i].style.display ="flex"
   } else {
    allCards[i].style.display ="none"
   }



}



}

searchInput.addEventListener('keyup', recherche);




// Animation Input

searchInput.addEventListener('input', function(e) {

  if(e.target.value !== "") {
      e.target.parentNode.classList.add('active-input');
  } else if (e.target.value === "") {
      e.target.parentNode.classList.remove('active-input');
  }

})
