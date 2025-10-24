while(true){
    let num=parseInt(prompt("Ingrese numero a multiplicar"))
    console.log("Tabla de multiplicar del "+num)
    for(let i=1; i<13; i++){
        let multiplicacion=num*i;
        console.log(num+" x "+i+" = "+multiplicacion)
    }
    let confirmacion=prompt("Deseo ingresa otro numero?")
    if(confirmacion=="no"){
        console.log("Usted no quiere ingresar más numeros")
        break;
    }
}