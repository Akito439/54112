
let edad= parseInt(prompt("Su edad es"));
let resultado;

while (!Number.isInteger (edad)) {
     alert("El valor no es una edad!");
     edad= parseInt(prompt("ingrese su edad"));
     if (Number.isInteger (edad)){

     

     break;
}
}

function edades (edad){
    
    if (edad <=5){

          resultado = "Recién nacido"
          return alert(resultado); }

    else if (edad >= 5 && edad <=10 ){
         resultado = "ya es un niño"
         return alert(resultado);
    }

    else if (edad >=10 && edad <=18){
         resultado ="ya es adolescente"
         return alert(resultado);
    }

    else if (edad >=19 && edad <=65){
         resultado = "Ya es un adulto"
         return alert(resultado);
    }

    else {

         resultado = "Ya es un adulto mayor"
         return alert(resultado);
    }

    
}

resultado = edades(edad);
