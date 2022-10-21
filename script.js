const valorTicket = 200;

function calcular(){
    cantidad = document.getElementById("cantidad").value;
    
    var select = document.getElementById("categoria");
    var valorSel = select.options[select.selectedIndex].value;

    valorTotal = valorTicket * cantidad;

    switch(valorSel = parseInt(valorSel)){
        case 0:
            res = valorTotal;
            break;
        case 1:
            res = valorTotal * 0.2;
            break;
        case 2:
            res = valorTotal * 0.5;
            break;
        case 3:
            res = valorTotal * 0.85;
            break;
    }

    document.getElementById("result").innerHTML = "Total a Pagar: $"+res;
}

function resetear(){
    document.getElementById("result").innerHTML = "Total a Pagar: $";
}