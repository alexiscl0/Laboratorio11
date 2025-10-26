let productos = [];
let seguir = "s";
let c=0
while (seguir == "s") {
  let precio = parseFloat(prompt("Precio del producto:"));
  c++;
  console.log("Precio del producto #"+c+": "+precio)
  productos.push(precio);
  seguir = prompt("¿Agregar otro producto? (s/n)")
}

let total = 0;
for (let i = 0; i < productos.length; i++) {
  total += productos[i];
}

let mensaje = "No aplica descuento";
let descuento = 0;

if (total > 100) {
  mensaje = "Tiene un descuento del 10%";
  descuento = total * 0.10;
} else if (total >= 50 && total <= 100) {
  mensaje = "Gana un cupón de 5%";
  descuento = total * 0.05;
}

let totalFinal = total - descuento;

console.log("====== RESUMEN DE COMPRA ======");
console.log("Total parcial:"+ total);
console.log(mensaje);
console.log("Descuento aplicado:"+ descuento);
console.log("Total final a pagar:"+  totalFinal);
