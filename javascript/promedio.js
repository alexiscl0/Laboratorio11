let nota=0, promedio=0, suma=0;
for(let i=0; i<5; i++){
    do{
        nota=parseInt(prompt("Ingrese nota "+(i+1)+": "));
        if(nota>=0 && nota<=20){
            console.log("Nota "+(i+1)+": "+nota)
            break;
        }
        else
            console.log("Nota Invalida: "+ nota)
    }while(true)
    suma+=nota;
} 
promedio=(suma/5);
console.log("Tu promedio es: "+promedio);