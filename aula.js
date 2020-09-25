let clientes = [];

let horaRetiradajs= document.getElementById("horaRetirada");
let saboresJs = document.getElementsByName('lbsabores');

let tmplLinha = document.getElementById("tmplLinha");
let tbody = document.getElementsByTagName("tbody")[0];
let CriarCliente = document.getElementById("btCriarCliente");

CriarCliente.onclick = function () {
    
    let sabores = "";
    let novaLinha = document.createElement('tr');    
    for (let i = 0; i < saboresJs.length; i++) {
        if (saboresJs[i].checked) {
            sabores = saboresJs[i].value;
        }
    }

     let cliente = {
        Hora:parseInt(horaRetiradajs.value),
        Sabores: sabores,
    }

    if ( isNaN(cliente.Hora) || isNullOrWhiteSpace(cliente.Sabores)) {
        return;
    }
    for (let indice in clientes) {
        if (clientes[indice].Hora == cliente.Hora) {
            return;
        }
    }

    clientes.push(cliente);

    novaLinha.innerHTML = tmplLinha.innerHTML;
    for (let indice in novaLinha.childNodes) {
        let celula = novaLinha.childNodes[indice];
        if (celula.nodeType == 1) {            
            switch(celula.dataset.column) {
                case "Hora de retirada": celula.innerHTML = cliente.Hora; break;
                case "Sabores": celula.innerHTML = cliente.Sabores; break;              
            }
        }
    }

    tbody.appendChild(novaLinha);
    return;
};