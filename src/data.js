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

const datos = POKEMON.pokemon;
//creando una variable vacia donde se guardaran solo los nombres desde la data pokemon/

function createTable(datos){
  let result = "<table>";
  let cantPokemons = 0;

  for (let i = 0; i< datos.length; i++) {
      if(cantPokemons == 0){
        result += "<tr>"
      }
      result += "<td>"
      result += '<img id ="imagenes" src="'+datos[i].img+'" alt="'+datos[i].name+'" width="110px" onclick="showInfo('+i+')"></img>';
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
}

function showInfo(i){
  if(document.getElementById("poke-"+i).innerHTML==""){
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

