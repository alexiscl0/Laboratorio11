let presupuesto = parseFloat(prompt("Ingrese su presupuesto máximo:"));
let productos = [];
let total = 0;
let seguir = "s";
let c=0;
while (seguir === "s") {
  let precio = parseFloat(prompt("Precio del producto:"));

  if (total + precio > presupuesto) {
    console.log("No se puede agregar. Se excedería el presupuesto.");
    break;
  } 
  else{
    c++;
    console.log("Precio del producto #"+c+": "+precio)
    productos.push(precio);
    total += precio;
    console.log("Producto agregado\nTotal actual: " + total);
  }

  seguir = prompt("¿Agregar otro producto? (s/n)")
}

console.log("\n====== COMPRA FINAL ======");
console.log("Presupuesto máximo:"+ presupuesto);
console.log("Total gastado:"+ total);
console.log("Presupuesto restante:"+( presupuesto - total));
