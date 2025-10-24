let monto=parseInt(prompt("Ingrese monto a retirar"))
console.log("Monto a retirar ingresado: "+monto)
let operac,contador
while(true){
    if(monto>=100){
        contador=Math.round(monto/100);
        operac=monto%100;
        console.log("Hay "+contador+" billetes de 100");
    }
    else if(monto>=50){
        contador=monto%50;
        operac=monto%50
        console.log("Hay "+contador+" billetes de 50")
    }
    else if(monto>=20){
        contador=mont/20
        operac=monto%20
        console.log("Hay "+contador+" billetes de 20")
    }
    else if(monto>=10){
        contador=monto%10
        operac=monto%
        console.log("Hay "+contador+" billetes de 10")
    }
    else{
        console.log("queda "+ monto)
        break;
    }
}