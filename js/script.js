//-------------- Seleccion de elementos ----------//

"use strict";

const ingresoTexto = document.getElementById ("ingresoTexto");
const botonEncriptar = document.getElementById ("botonEncriptar");
const botonDesencriptar = document.getElementById ("botonDesencriptar");
const botonCopiar = document.getElementById ("botonCopiar");
const mensajeFinal = document.getElementById ("mensajeFinal");
const Muñeco = document.getElementById ("Muñeco");
const rightInfo = document.getElementById ("rightInfo");
const right = document.getElementById ("right");

//------------- Arreglos -------------//

//e - enter
//o - over
//i - imes
//a - ai
//u - ufat

let reemplazar = [
    ["e", "enter"],
    ["o", "over"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat",]
]

const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    Muñeco.classList.add(oculto);
    ingresoTexto.value = "";
    rightInfo.style.display = "none";
    botonCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}

const reset = () => {
    mensajeFinal.innerHTML = "";
    Muñeco.classList.remove("oculto");
    rightInfo.style.display = "block";
    botonCopiar.style.display = "none";
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();    
}

//--------- Botón de Encriptar -----------//


botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if (texto != ""){
        function encriptar(newText) {
            for (let i = 0; i < reemplazar.length; i++){
                if (newText.includes(reemplazar[i][0])) {
                    newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
                };
            };
            return newText;
        };
    } else {
        alert("Ingrese texto a encriptar")
        reset();
    }
    //const textoEncriptado = encriptar(texto);
    remplace(encriptar(texto));
});

//-----------Botón de Desencriptar -----------// 

botonDesencriptar.addEventListener("click", () =>{
    const texto = ingresoTexto.value.toLowerCase();
    if (texto!= ""){
        function desencriptar(newText) {
            for (let i = 0; i < reemplazar.length; i++){
                if (newText.includes(reemplazar[i][1])){
                    newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0])
                 };
             };
            return newText;
        };
    } else{
        alert("Ingrese texto a desencriptar")
        reset();
    }
    remplace(desencriptar(texto))
});

//------------- Botón Copiar --------------//

botonCopiar.addEventListener("click", () =>{
    let texto = mensajeFinal;
    texto.select();
    document.execCommand('copy')
    alert("Texto copiado");
    reset();
});    