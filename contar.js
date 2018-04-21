// Escribe una función contar que reciba un argumento llamado str y
// retorna el número de veces que aparece el caracter "a" en str:
//
// contar("Hola Make it Real"); // 3
// contar(""); // 0

function contar(str) {
  var caracter = str ;
  var count = (caracter.match(/a/g) || []).length;
  console.log(count);
}

contar("Hola Make it Real");
contar("");
contar("Hola Make it Real es una camp");
