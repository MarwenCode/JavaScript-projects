const searchInput = document.querySelector('.recherche-poke input');


const fetchPokemonBase = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then((allPoke) => {
        console.log(allPoke)
        allPoke.results.forEach((pokemon) => {
            fetchPokemonComplet(pokemon)
        })
    })
}

fetchPokemonBase()


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

    const url = pokemon.url;
    const name = pokemon.name

    fetch(url)
    .then((response) => response.json())
    .then((pokemonData) => console.log(pokemonData))

}


  