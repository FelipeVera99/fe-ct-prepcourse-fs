function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let nuevoArreglo = [];
   for (let i=0; i<arrayOfStrings.length; i++) {
      if (arrayOfStrings[i].startsWith("a")) {
         nuevoArreglo.push(arrayOfStrings[i]); 
      }
   }
   return nuevoArreglo;
}

module.exports = filter;
