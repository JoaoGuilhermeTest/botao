const zerar = document.getElementById("zerar")
const somar = document.getElementById("sum")
const texto = document.getElementById("texto")

somar.addEventListener("click", () => {
    if (texto.innerText == "Série zerada" || texto.innerText == "Começar Série") {
        texto.innerText = ''
        texto.innerText = 1 + +texto.innerText
    } else {
        texto.innerText = 1 + +texto.innerText
    }
})
zerar.addEventListener("click", () => {
    texto.innerText = "Série zerada"
})
