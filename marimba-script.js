const teclas=document.querySelectorAll(".teclas")
console.log(teclas)
function reproducirSonido(a){
    let audio=new Audio
    audio.src=`sonidos-marimba/${a}.wav`
    audio.play()

}

teclas.forEach(tecla=>{
console.log(tecla)
reproducirSonido(tecla)
})