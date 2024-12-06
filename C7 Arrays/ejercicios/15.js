function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if(array.length>0){
    let mayor = array.reduce((a,b)=>Math.max(a,b));
    let indice = array.indexOf(mayor);
    return indice;
  }
  else{
    return 0;
  }
  
}

module.exports = encontrarIndiceMayor;
