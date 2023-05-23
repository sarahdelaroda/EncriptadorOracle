function encriptar (){
    var texto = document.querySelector("#ingresar-area").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".resul-textarea").value = textoCifrado;
    document.querySelector("#ingresar-area").value;
    }

    var boton1 = document.querySelector("#btn-encriptar"); 
    boton1.onclick = encriptar;

    function desencriptar (){
         var texto = document.querySelector("#ingresar-area").value;
        var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        document.querySelector(".resul-textarea").value = textoCifrado; 
        document.querySelector("#ingresar-area").value;
    
    }
    
    var boton2 = document.querySelector("#btn-desencriptar");
    boton2.onclick = desencriptar;
    