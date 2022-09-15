const zerar = document.getElementById("zerar")
const somar = document.getElementById("sum")
const texto = document.getElementById("texto")
const checkbox = document.querySelector("#dark-mode")
const html = document.querySelector("html")
const content = document.querySelector(".content")

checkbox.addEventListener("change", () => {
    html.classList.toggle("dark_mode")
})

somar.addEventListener("click", () => {
    const text = texto.innerText

    texto.innerText = text == "Série zerada" || text == "Começar Série" ? texto.innerText = '' :  texto.innerText
    texto.innerText = text == '' || texto > 0 ? texto.innerText = 1 + +texto.innerText : texto.innerText = 1 + +texto.innerText
    texto.innerText = text >= 5 ? texto.innerText = 0 :  texto.innerText

})
zerar.addEventListener("click", () => {
    texto.innerText = "Série zerada"
    content.classList.remove("up-content")
    content.classList.add("down-content")
        setTimeout(() => {
        texto.innerText = "Começar Série";
        content.classList.remove("down-content")
        content.classList.add("up-content")}
        , 700)
    
})
