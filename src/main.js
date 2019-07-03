/* Manejo del DOM */
//hacer que el boton show ejecute la accion de mostrar solo los nombres/


const datos = POKEMON.pokemon;


for (let i = 0; i< datos.length; i++){

  let pokemonInfo = document.createElement("div");
  pokemonInfo.id = datos[i].name;
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



















//creando una variable vacia donde se guardaran solo los nombres desde la data pokemon/
/*
function createTable(datos){
  let result = "<table>";
  let cantPokemons = 0;

  for (let i = 0; i< datos.length; i++) {
      if(cantPokemons == 0){
        result += "<tr>"
      }
      result += "<td>"
      result += '<img id ="imagenes" src="'+datos[i].img+'"  width="110px" onclick="showInfo('+i+')"></img>';
      result += "<br>"
      result += "#"+datos[i].id;
      result += "<div id='poke-"+i+"'></div>"
      result += "</td>"  
      cantPokemons++;
      if(cantPokemons == 9){
        result += "</tr>"
        cantPokemons = 0;
      }
    }
  result +="</table>";
  return result;
};

document.getElementById("test-button").addEventListener("click", ()=>{
    document.getElementById("empty-container").innerHTML = createTable(datos);
  })
  document.getElementById("primera-evolución").addEventListener("click", ()=>{
    document.getElementById("empty-container").innerHTML = createTable(resultFirstEvolution);
  });
  document.getElementById("segunda-evolución").addEventListener("click", ()=>{
  document.getElementById("empty-container").innerHTML = createTable(resultSecondEvolution);
  });
  document.getElementById("tercera-evolución").addEventListener("click", ()=>{
  document.getElementById("empty-container").innerHTML = createTable(resultThirdEvolution);
  });
  
  document.getElementById("candies").addEventListener("change", ()=>{
    const value = document.getElementById("candies").value
    let result = datos.filter(pokemon => pokemon.egg == value);
    document.getElementById("empty-container").innerHTML = createTable(result);
  
  })
  //crea la tabla con todos los pokemons cuando se inicia la pagina
  

  document.getElementById("llamandoImagenes").addEventListener("click", ()=>{
    document.getElementById("poke-").innerHTML =showInfo(i);
  })
*/