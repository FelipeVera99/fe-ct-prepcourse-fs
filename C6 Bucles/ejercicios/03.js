function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if (Number.isInteger(x) && Number.isInteger(y) && x>y){
    return x;
  }
  else if (Number.isInteger(x) && Number.isInteger(y) && x<y){
    return y;
  }
  else {
    return x || y;
  }
}

module.exports = obtenerMayor;
