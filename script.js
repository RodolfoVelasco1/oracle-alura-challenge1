var texto = document.querySelector(".texto");
var resultado = document.querySelector(".resultado");

function encriptar(stringEncriptado){
    document.getElementById("noEncontrado").style.display = "none";
    document.getElementById("divRespuesta").style.display = "block";
    document.getElementById("resultado").style.display = "block";
    document.getElementById("copiar").style.display = "block";
    let listaCodigos = [["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"], ["a", "ai"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    
    for(let i = 0; i < listaCodigos.length; i++){
        if(stringEncriptado.includes(listaCodigos[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(listaCodigos[i][0], listaCodigos[i][1]);
        }
    }
    return stringEncriptado
}

function botonEncriptar(){
    var textoEncriptado = encriptar(texto.value);
    resultado.value = textoEncriptado
}

function desencriptar(stringDesencriptado){
    let listaCodigos = [["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"], ["a", "ai"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    
    for(let i = 0; i < listaCodigos.length; i++){
        if(stringDesencriptado.includes(listaCodigos[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(listaCodigos[i][1], listaCodigos[i][0]);
        }
    }
    return stringDesencriptado
}

function botonDesencriptar(){
    var textoDesencriptado = desencriptar(resultado.value);
    resultado.value = textoDesencriptado
}

function botonCopiar(){
    let copiado = document.getElementById("resultado");
    copiado.select();
    copiado.setSelectionRange(0, 99999);
    document.execCommand('copy');
}
