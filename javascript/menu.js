let salir = false;

while (!salir) {
  console.log("Bienvenido");
  console.log("1) Estadisticas de N notas ");
  console.log("2) Contar pares e impares en un rango");
  console.log("3) Tabla de multiplicar");
  console.log("4) Salir");

  let opcion = parseInt(prompt("Elige una opcion (1-4):"));
  console.log("Opcion elegida: "+opcion)
  switch (opcion) {
    case 1: {
      let n = parseInt(prompt("Cuantas notas vas a ingresar?"));
      let notas = [];
      for (let i = 0; i < n; i++) {
          let nota = parseInt(prompt("Nota #" + (i + 1) + ":"));
          console.log("Nota #"+(i+1)+": "+nota)
          notas.push(nota);
      }
  
      let suma = 0;
      let maximo = -Infinity;
      let minimo = Infinity;
      let pares = 0;
      let impares = 0;

      for (let i = 0; i < n; i++) {
          let x = notas[i];
          suma += x;
          if (x > maximo) 
            maximo = x;
          if (x < minimo) 
            minimo = x;
          if (x % 2 === 0) 
            pares++;
          else 
            impares++;
      }
  
      let promedio = suma / notas.length;
      let encimaPromedio = 0;

      for (let i = 0; i < notas.length; i++) {
          if (notas[i] > promedio) encimaPromedio++;
      }

      console.log("Cantidad de notas: " + n);
      console.log("Suma: " + suma);
      console.log("Promedio: " + promedio);
      console.log("Maximo: " + maximo);
      console.log("Minimo: " + minimo);
      console.log("Enteras pares: " + pares);
      console.log("Enteras impares: " + impares);
      console.log("Por encima del promedio: " + encimaPromedio);
      break;
    }


    case 2: {
      let inicio = parseInt(prompt("Inicio del rango"))
      let fin = parseInt(prompt("Fin del rango"))

      let pares = 0;
      let impares = 0;

      for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) 
            pares = pares + 1;
        else 
            impares = impares + 1;
      }

      console.log("Rango: [" + inicio + ", " + fin + "]");
      console.log("Pares: " + pares);
      console.log("Impares: " + impares);
      break;
    }

    case 3: {
      let numero = parseInt(prompt("Numero base de la tabla:"));
      let limite = parseInt(prompt("Hasta que numero multiplicar?"));

      console.log("Tabla del " + numero + " hasta " + limite);
      for (let i = 1; i <= limite; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
      }
      break;
    }

    case 4:
      salir = true;
      console.log("Saliendo...");
      break;

    default:
      console.log("Opcion incorrecta.");
  }
}
