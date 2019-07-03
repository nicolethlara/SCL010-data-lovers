/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window




/*
const example = () => {
  return 'example';
};

window.example = example;
*/
/* Manejo del DOM */
//llamando toda la data de pokemon


/*
function showInfo(i){
  if(document.getElementById("poke-"+i).innerHTML== ""){
    let result= datos[i].name;
    result += "<br>"
    result += "Debilidad: "+datos[i].weaknesses;
    document.getElementById("poke-"+i).innerHTML = result;
  }else{
    document.getElementById("poke-"+i).innerHTML = "";
  }  
  return showInfo();
}

//hacer que el boton show ejecute la accion de mostrar solo los nombres/

document.getElementById("empty-container").innerHTML = createTable(datos);

//filtros para evoluciones de los Pokemones
const resultFirstEvolution = datos.filter(pokemon => pokemon.next_evolution && !pokemon.prev_evolution);

const resultSecondEvolution = datos.filter(pokemon => pokemon.prev_evolution && pokemon.prev_evolution.length == 1);

const resultThirdEvolution = datos.filter(pokemon => pokemon.prev_evolution && pokemon.prev_evolution.length == 2);

*/