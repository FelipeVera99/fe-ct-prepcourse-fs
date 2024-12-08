function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   let str1Ordenado = str1.toLowerCase().split('').sort().join('');
   let str2Ordenado = str2.toLowerCase().split('').sort().join('');
   return str1Ordenado===str2Ordenado;
}

module.exports = esAnagrama;
