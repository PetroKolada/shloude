const list = document.querySelector("#list")
const nameInput = document.querySelector("#inputText")
const buttonInput = document.querySelector("#inputButton")

buttonInput.addEventListener("click", function () {
    let shloude = document.createElement("li")
    shloude.textContent = nameInput.value
    document.querySelector("#list").appendChild(shloude)
})