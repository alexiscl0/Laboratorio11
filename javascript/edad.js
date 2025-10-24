let edad=parseInt(prompt("Ingrese su edad: "))
console.log("Edad Ingresada: "+ edad)
if (edad>0 && edad < 12) {
    console.log("Niño");
} 
else if (edad <= 17) {
    console.log("Adolescente");
} 
else if (edad <= 59) {
    console.log("Adulto");
} 
else if(edad>60 && edad<100){
    console.log("Adulto mayor");
}
else
    console.log("Ingrese una edad valida")