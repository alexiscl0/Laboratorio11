while(true){
    let n=parseInt(prompt("Ingrese limite de rango"))
    console.log("El rango a sumar es desde el 1 hasta "+n)
    let suma=0
    for(let i=1; i<=n; i++){
        if(i%5!=0){
            suma+=i
        }
    }
    console.log("La suma (omitiendo los multiplos de 5) es "+suma)
    let confirmacion=prompt("Deseo ingresa otro rango?")
    if(confirmacion=="no"){
        console.log("Usted no quiere ingresar más rangos")
        break;
    }
}
