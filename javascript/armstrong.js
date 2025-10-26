let num = parseInt(prompt("Ingresa un número:"))
let original = num, suma = 0
let digitos = num.toString().length
console.log("El numero ingresado es: "+num)
console.log("El numero de digitos es: "+digitos)
while (num > 0) {
    let digito = num % 10
    suma += Math.pow(digito, digitos)
    num = Math.floor(num / 10)
}
console.log("La suma de los digitos elevados al numero de digitos es: "+suma)
if (suma === original)
    console.log(original + " si es un número de Armstrong")
else
    console.log(original + " no es un número de Armstrong")
