let num = parseInt(prompt("Ingrese el límite de rango"));
let contador = 0;
console.log("El rango es desde 1 hasta " + num);
for (let i = 2; i <= num; i++) {
    let esPrimo = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        contador++;
        console.log("#" + contador + " Primo: " + i);
    }
}
