

const allData = POKEMON.pokemon;
let datos = POKEMON.pokemon;
 


  for (let i = 0; i< datos.length; i++){

  let pokemonInfo = document.createElement("div");
  pokemonInfo.id = "pokeInfo";
  pokemonInfo.className = "pokeInfo";

  let pokemonName = document.createElement("p");
  pokemonName.textContent = datos[i].name;

  let pokemonImagen = document.createElement("img");
  pokemonImagen.src = datos[i].img;
  pokemonImagen.className = "pokeImagen";

  let pokemonId = document.createElement("p");
  pokemonId.textContent = datos[i].id;

  pokemonInfo.appendChild(pokemonName);
  pokemonInfo.appendChild(pokemonImagen);
  pokemonInfo.appendChild(pokemonId);

  document.getElementById("pokemon-container").appendChild(pokemonInfo).innerHTML;

  
}

function cardInfo(datos){
  document.getElementById("pokemon-container").innerHTML = "";
  for (let i = 0; i< datos.length; i++){

    let pokemonInfo = document.createElement("div");
    pokemonInfo.id = "pokeInfo";
    pokemonInfo.className = "pokeInfo";
  
    let pokemonName = document.createElement("p");
    pokemonName.textContent = datos[i].name;
  
    let pokemonImagen = document.createElement("img");
    pokemonImagen.src = datos[i].img;
    pokemonImagen.className = "pokeImagen";
  
    let pokemonId = document.createElement("p");
    pokemonId.textContent = datos[i].id;
  
    pokemonInfo.appendChild(pokemonName);
    pokemonInfo.appendChild(pokemonImagen);
    pokemonInfo.appendChild(pokemonId);
  
    document.getElementById("pokemon-container").appendChild(pokemonInfo).innerHTML;
    
  }
  stats = computeStats(datos)
  ans =  "Promedio de altura: "+stats["prom"]+"<br>";
  ans += "Pokemon mas alto: "+stats["maxHeight"].name+" con "+stats["maxHeight"].height+"<br>"
  ans += "Pokemon mas bajo: "+stats["minHeight"].name+" con "+stats["minHeight"].height
  document.getElementById("stats").innerHTML = ans;
}



//DOM FUNCIÓN FILTRAR



document.getElementById("candies").addEventListener("change",() => {
 let tipoFilter = document.getElementById("candies").value;
 const condition = (pokemon => pokemon.egg == tipoFilter);
 datos = filterData(allData, condition);
 cardInfo(datos);
})

document.getElementById("primera-evolución").addEventListener("click", ()=>{
  const condition = (pokemon => pokemon.next_evolution && !pokemon.prev_evolution);
  datos = filterData(allData, condition);
 
  cardInfo(datos)
});

document.getElementById("segunda-evolución").addEventListener("click", ()=>{
  const condition = (pokemon => pokemon.prev_evolution && pokemon.prev_evolution.length == 1);
  datos = filterData(allData, condition);
 cardInfo(datos);
});

document.getElementById("tercera-evolución").addEventListener("click", ()=>{
  const condition = (pokemon => pokemon.prev_evolution && pokemon.prev_evolution.length == 2);
  datos = filterData(allData, condition);
 cardInfo(datos);
});

document.getElementById("alfabeto").addEventListener("change",() => {
  let order = document.getElementById("alfabeto").value;
  let lastResult = sortData(datos, "name", order);
  cardInfo(lastResult)
 });



