let pokemonList = [
  {
    name: 'bulbasaur',
    height: .7,
    type: ['grass', 'poison'],
    evolutions: 2
  },
    {
      name: 'blastoise',
      height: 1.6,
      type: ['water'],
      evolutions: 2
    },
      {
        name: 'charmander',
        height: .6,
        type: ['fire'],
        evolutions: 2
      },
        {
          name: 'pikachu',
          height: .4,
          type: ['electric'],
          evolutions: 1
        }
];

// printing pokemonList[i]’s other details
// for (let i = 0; i < pokemonList.length; i++){
//   document.write("<p>" + pokemonList[i].name + " height:" + pokemonList[i].height +"</p>");
// }

pokemonList.forEach(function(pokemon) {
  document.write("<p>" + pokemon.name + " :" + pokemon.height + " units tall" + "</br>" + "</p>");
});


//alerts that a pokemon is taller than 1m
    for (let i=0; i < pokemonList.length; i++){
      if (pokemonList[i].height >1){
        document.write("<p>" + pokemonList[i].name + " wow, thats big!" + "</p>");
      }
    }
