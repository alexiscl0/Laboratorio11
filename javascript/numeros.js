let num,par=0,impar=0
console.log("Ingrese 10 numeros")
for(let i=0; i<10; i++){
    num=parseInt(prompt("Ingrese numero "+(i+1)+": "))
    console.log("Numero "+(i+1)+" ingresado: "+num)
    if(num%2==0)
        par++;
    else
        impar++;
}
console.log("Hay "+par+" numeros pares")
console.log("Hay "+impar+" numeros impares")