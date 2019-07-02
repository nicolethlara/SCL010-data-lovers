/* Manejo del DOM */
/*llamando toda la data de pokemon*/
const datos = POKEMON.pokemon;
/*creando una variable vacia donde se guardaran solo los nombres desde la data pokemon*/
let names = "";
/*hacer que el boton show ejecute la accion de mostrar solo los nombres*/
document.getElementById("test-button").addEventListener("click", ()=>{

function show() {
/*recorrer los elementos de uno en uno */
  for (let i = 0; i< datos.length; i++) {
     
/*estamos diciendole a la función que solo tome los nombres desde datos*/
    names += datos[i].name;
   
    document.getElementById("empty-container").innerHTML = names;

  }
  return names;
}
show(datos);
})
