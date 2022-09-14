const zerar = document.getElementById("zerar")
const somar = document.getElementById("sum")
const texto = document.getElementById("texto")

somar.addEventListener("click", () => {
    const text = texto.innerText

    texto.innerText = text == "Série zerada" || text == "Começar Série" ? texto.innerText = '' :  texto.innerText
    texto.innerText = text == '' || texto > 0 ? texto.innerText = 1 + +texto.innerText : texto.innerText = 1 + +texto.innerText
    texto.innerText = text >= 5 ? texto.innerText = 0 :  texto.innerText

})
zerar.addEventListener("click", () => {
    texto.innerText = "Série zerada"
    setTimeout(() => {texto.innerText = "Começar Série"}, 700)
})
