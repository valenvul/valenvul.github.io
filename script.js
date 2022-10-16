function calcular(){
    cantidad = document.getElementById("cantidad").value;
    
    var select = document.getElementById("categoria");
    var valorSel = select.options[select.selectedIndex].value;

    res = 200 * cantidad;

    switch(valorSel = parseInt(valorSel)){
        case 1:
            res = res * 0.2;
            break;
        case 2:
            res = res * 0.5;
            break;
        case 3:
            res = res * 0.85;
            break;
    }

    document.getElementById("result").innerHTML = "Total a Pagar: $"+res;
}

function resetear(){
    document.getElementById("result").innerHTML = "Total a Pagar: $";
}