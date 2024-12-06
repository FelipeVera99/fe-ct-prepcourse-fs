function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let abrir = texto.split("");
  let invertir = abrir.reverse();
  let unir = invertir.join("");
  return unir;
}

module.exports = invertirTexto;
