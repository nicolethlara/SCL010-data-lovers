/* Manejo del DOM */

//hacer que el boton show ejecute la accion de mostrar solo los nombres/


document.getElementById("test-button").addEventListener("click", ()=>{
    document.getElementById("empty-container").innerHTML = createTable(datos);
  })
  document.getElementById("primera-evolución").addEventListener("click", ()=>{
    const result = datos.filter(pokemon => pokemon.next_evolution && !pokemon.prev_evolution);
    document.getElementById("empty-container").innerHTML = createTable(result);
  });
  document.getElementById("segunda-evolución").addEventListener("click", ()=>{
    const result = datos.filter(pokemon => pokemon.prev_evolution && pokemon.prev_evolution.length == 1);
    document.getElementById("empty-container").innerHTML = createTable(result);
  });
  document.getElementById("tercera-evolución").addEventListener("click", ()=>{
    const result = datos.filter(pokemon => pokemon.prev_evolution && pokemon.prev_evolution.length == 2);
    document.getElementById("empty-container").innerHTML = createTable(result);
  });
  
  document.getElementById("candies").addEventListener("change", ()=>{
    const value = document.getElementById("candies").value
    let result = datos.filter(pokemon => pokemon.egg == value);
    document.getElementById("empty-container").innerHTML = createTable(result);
  
  })
  //crea la tabla con todos los pokemons cuando se inicia la pagina
  document.getElementById("empty-container").innerHTML = createTable(datos);

