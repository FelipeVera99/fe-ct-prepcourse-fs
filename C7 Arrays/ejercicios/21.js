function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let buenos=["Enero","Marzo","Noviembre"];
  let meses = buenos.every(mes => array.includes(mes));
  if (meses){
    return array.filter(mes=>buenos.includes(mes));
  }
  else{
    return "No se encontraron los meses pedidos";
  }
}

module.exports = mesesDelAño;
