const instrumentButtons = document.querySelectorAll(".instrument")
console.log(instrumentButtons)
function openInstrumnet(name) {
    window.location.href = `${name}.html` || "marimba.html"
}
instrumentButtons.forEach(i => {
    i.addEventListener("click", () => openInstrumnet(i.id))
})

