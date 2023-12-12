let platillos = document.querySelectorAll(".platillos")
console.log(platillos)

function reproducirSonido(platillo){
    let audio=new Audio
    audio.src=`sonidos-bateria/${platillo}.mp3`
    console.log(platillo)
    audio.play()
    const clickedKey = document.getElementById(platillo)
    console.log(clickedKey)
}

platillos.forEach(platillo=>{
platillo.addEventListener("click", ()=>reproducirSonido(platillo.id))
console.log("platillo " + platillo.id)
})