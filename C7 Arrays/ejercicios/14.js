function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let mayores = array.filter(element=> element>10);
  return mayores.length;
}

module.exports = contarElementosMayoresA10;
