function encriptar() 
{
    let texto = document.getElementById("texto").value;
    let texto2 = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let textareaRes = document.getElementById("textareaRes");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("textareaRes").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      document.getElementById("texto").value = "Ingresa el texto aquí";
      muñeco.style.display = 'none';
    } else {
      muñeco.src = "./img/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}
  
function desencriptar() 
{
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = "Ingresa el texto aquí";        
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        document.getElementById("textareaRes").value = textoCifrado;
      } else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Uuupsss!", "Debes ingresar un texto", "warning");
      }
}
  
function copiar()
{
    let textoACopiar = document.getElementById("textareaRes").value;

    if (textoACopiar.length != 0){
        
        navigator.clipboard.writeText(textoACopiar);
        console.log(textoACopiar);
        swal("Texto Copiado: ",textoACopiar);
    } else {
        swal("Uuupsss!","Ningun Texto para copiar!!! Usa la app ","warning");
    }
   
}