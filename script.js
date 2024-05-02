const boton = document.getElementById("copy-email");


boton.addEventListener('click', () => {
    const mail= "ivansierra259@gmail.com";
    const tempText = document.createElement('textarea');
    tempText.textContent = mail;
    document.body.appendChild(tempText);
    tempText.select();
    document.execCommand('copy');
    document.body.removeChild(tempText);
    boton.innerText = "Copiado!";
});