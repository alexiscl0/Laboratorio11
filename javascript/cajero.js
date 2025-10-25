let monto=parseInt(prompt("Ingrese monto a retirar"))
console.log("Monto a retirar ingresado: "+monto)
let operac,contador
while(true){
    if(monto>=100){
        contador=Math.floor(monto/100);
        monto=monto%100;
        console.log("Hay "+contador+" billetes de 100");
    }
    else if(monto>=50){
        contador=Math.floor(monto/50);
        monto=monto%50
        console.log("Hay "+contador+" billetes de 50")
    }
    else if(monto>=20){
        contador=Math.floor(monto/20);
        monto=monto%20
        console.log("Hay "+contador+" billetes de 20")
    }
    else if(monto>=10){
        contador=Math.floor(monto/10);
        monto=monto%
        console.log("Hay "+contador+" billetes de 10")
    }
    else{
        console.log("queda "+ monto)
        break;
    }
}