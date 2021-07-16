// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = [];
  for (propiedad in objeto){
    array.push([propiedad , objeto[propiedad]]);


  } return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {};
  for (let i = 0 ; i < string.length; i++){
    var cantVeces= 0;
    if(!objeto[string[i]]){
      for (let j = 0 ; j < string.length ; j++){
        if(string[i] === string[j]){
          cantVeces ++;
        }

      }
      objeto[string[i]]= cantVeces;
    } 
    

  }
  return objeto;

}
//otra opcion
/*let object = {}
  for(str in string){
    object[string[str]] = (object[string[str]]||0)+1
  }
  return object;
*/ 



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var newTextMay = '';
  var newTextMin = '';
  for ( let i = 0; i < s.length; i++){
    if (s[i] === s[i].toUpperCase()){
      newTextMay += s[i];
    }else{
      newTextMin += s[i];
    }
    
  } 
  return newTextMay + newTextMin;

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  /*var palabra = '';
  var fraseEspejo= '';
  for (let i = 0; i < str.length; i++){
    if(str[i] !== ' '){
      palabra += str[i]; 
    } else{
      var palabraEspejo= '';
      for(let j = palabra.length - 1; j >= 0; j--){
        palabraEspejo += palabra[j];
      }
      palabra = '';
      if(i === str.length-1){
        fraseEspejo += palabraEspejo;
      } else{
        fraseEspejo += palabraEspejo + ' ';
      }
    }
    
  }
  return fraseEspejo;
  
} */
var pg='';
  var previa='';

  function invertir (string) {
    var invertida='';
    var j=string.length;
    while (j>=0) {
        invertida=invertida+string.charAt(j) ;
        j--;
    }
    return invertida;
  }

    for (var i=0;i<=str.length;i++) {

      if (i>str.length-1) {
        previa=previa +invertir(pg);
        return previa;
      }
      if (str.charAt(i)===' '||i>str.length-1) {
        previa=previa +invertir(pg) + ' ';
        pg='';
        continue;
      }
      else {
        pg=pg+str.charAt(i)
      }
    }
  return previa;
}



function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroString = numero.toString();
  var numeroCapicua= '';
  for (let i = numeroString.length-1 ;  i>=0 ; i--){
    numeroCapicua += numeroString[i];

  }
  if( numeroString === numeroCapicua){
    return 'Es capicua';
  } else {
     return "No es capicua";

  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de no contener dichas letras.
  //Escribe tu código aquí
  var nuevaPalabra = '';
  for ( let i=0; i < cadena.length; i++){
    if(!(cadena[i]=== 'a' || cadena[i]=== 'b' || cadena[i]=== 'c')){
      nuevaPalabra += cadena[i];
    }
  } return nuevaPalabra;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  for (let i = 0; i< arr.length; i++){
    for (let j = i+1; i< arr.length; j++){
      if (arr.length[i] > arr.length[j]){
        var auxMay = arr[i];
        arr[i] = arr[j];
        arr[j] = auxMay;

      }
    }
  }
  return arr;

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  arreglo1.forEach(function(numero1){
    arreglo2.forEach(function(numero2){
      if (numero1 === numero2){
        nuevoArreglo.push(numero1)
        }
      }) 
  })
  return nuevoArreglo;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

