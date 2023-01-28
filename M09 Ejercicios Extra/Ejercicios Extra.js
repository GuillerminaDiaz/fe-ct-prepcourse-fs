/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arreglo= [];
   for(var clave in objeto){
      arreglo.push([clave, objeto[clave]]);
   }
   return arreglo;
   
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var stringSeparado= string.split('');
    var ordenadas= stringSeparado.sort();
    var objeto={};
    
    for(var letra of stringSeparado ){ 
       if(!objeto[letra]){
           objeto[letra]= 1;
        }else { 
            objeto[letra] += 1;
        }
      
    }
    return objeto;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arrayOrden=[];
      var otroArray=[];
      var mayusculas= '';
      var minusculas= '';
      var separar= string.split('');
      var EsMayuscula= function(letra)
         {
             return letra === letra.toUpperCase();
         }
      function esMinuscula(letra)
         {
             return letra === letra.toLowerCase();
         }   
      for(var i= 0; i< separar.length; i++){
         var letraActual= separar[i];
         if(EsMayuscula(letraActual)){
            arrayOrden.push(letraActual);
         
            mayusculas=arrayOrden.join('');
            
            
         }
         if(esMinuscula(letraActual)){
            otroArray.push(letraActual);
            minusculas= otroArray.join('');
         }
         string= mayusculas + minusculas;
      }
      
   return string;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arr= frase.split(' ');
   var array= [];

   for(var i =0; i<arr.length; i++ ){
    var palabra= arr[i].split('');
    palabra.reverse();
    var pal= palabra.join('');
    array.push(pal);
   
    
   }
   var unido= array.join(' ');
   return unido;
} 

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numero= numero.toString();
   if(numero.split('').reverse().join('')=== numero){
       return 'Es capicua';
   }else{
       return 'No es capicua';
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var palabraSeparada= string.split('');
   for(var i =0; i<palabraSeparada.length; i++ ){
      if(palabraSeparada[i]==='a'|| palabraSeparada[i]==='b'|| palabraSeparada[i]==='c'){
       delete(palabraSeparada[i]);
       string= palabraSeparada.join('');
      }
   }
   return string;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort(function (a,b){
      return a.length -b.length;
   });

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var lista=[];
   for(var i =0; i < array1.length; i++ ){
      
      
      array2.forEach(element => { 
         if(element===array1[i]){
           lista.push(element);
         }
      });
   }
   return lista;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
