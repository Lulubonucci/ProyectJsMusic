const teclas=document.querySelectorAll(".teclas")
// console.log(teclas)
function reproducirSonido(tecla){
    let audio=new Audio
    audio.src=`sonidos-marimba/${tecla}.wav`
    audio.play()
    const clickedKey = document.getElementById(tecla)
    console.log(clickedKey)
}

teclas.forEach(tecla=>{
tecla.addEventListener("click", ()=>reproducirSonido(tecla.id))
console.log("tecla " + tecla.id)
})
// document.addEventListener("keydown")