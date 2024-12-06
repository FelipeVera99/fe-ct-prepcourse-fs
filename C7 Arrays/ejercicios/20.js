function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let primero=array[0];
  return array.every(a=> a===primero);
}

module.exports = todosIguales;
