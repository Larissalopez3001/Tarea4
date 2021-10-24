//Larissa López Basurto
// EJERCICIO 1
function convertir(){ //Convertir de octal a decimal 
    var num = document.getElementById('nume').value;
    var numdecimal = parseInt(num,8);
    alert("El numero octal ingresado es:\n " +num+ "\n El numero convertido a decimal es:\n" + numdecimal); //Salida del resultado
}
//EJERCICIO 2
function num(){ //Ingreso de dos números
    var num1 = parseInt(document.getElementById('nume1').value);
    var num2 = parseInt(document.getElementById('nume2').value);
    for(i=1; i<=5; i++) {
    if (i==1) { //Suma
        suma= num1+ num2;
        alert("El resultado de la suma es:\n"+suma); //Salida de la suma
    } 
    else if (i==2){ //Resta
        resta = num1-num2;
        alert("El resultado de la resta es:\n"+resta); //Salida de la resta
    }
    else if (i==3){ //Multiplicación 
        multiplicacion = num1*num2;
        alert("El resultado de la multiplicación es:\n"+multiplicacion); //Salida de la multiplicación
    }
    else if (i==4){ //División
        division = num1/num2;
        num2 != 0 ?
        division = num1/num2:
        alert("No es posible la división por 0");
        alert("El resultado de la división es:\n"+division); //Salida de la división
}
}
}