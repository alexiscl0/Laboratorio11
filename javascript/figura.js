let bucle=true,resultado,radio,ancho,largo
console.log("Bienvenido")
while(bucle){
    console.log(
        "Seleccione una opcion"+"\n"
        +"  1) Calcular Area del circulo"+"\n"
        +"  2) Calcular Area del rectangulo"+"\n"
        +"  3) Salir"
    )
    let opcion=parseInt(prompt("Ingrese una opcion"))
    console.log("Opcion elegida: "+opcion)
    switch (opcion) {
        case 1:
            radio=parseFloat(prompt("Ingrese el radio del circulo"))
            console.log("El radio es: "+radio)
            resultado=Math.PI*radio*radio
            console.log("El area del circulo es "+resultado)
            break;
        case 2:
            ancho=parseFloat(prompt("Ingrese el ancho del rectangulo"))
            largo=parseFloat(prompt("Ingrese el largo del rectangulo"))
            console.log("El ancho es: "+ancho)
            console.log("El largo es: "+largo)
            resultado=ancho*largo
            console.log("El area del rectangulo es "+resultado)
            break;
        case 3:
            bucle=false;
            break;
        default:
            System.out.println("No es un opcion válida");
            break;
    }
}
