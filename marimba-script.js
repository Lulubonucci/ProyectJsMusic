const teclas = document.querySelectorAll(".teclas");
// console.log(teclas)
function reproducirSonido(tecla) {
  let audio = new Audio();
  audio.src =
    `sonidos-marimba/${tecla.toUpperCase()}.wav` ||
    `sonidos-marimba/${tecla.toUpperCase()}-2.wav`;
  audio.play();
  const clickedKey = document.getElementById(tecla);
  console.log(clickedKey);
}

teclas.forEach((tecla) => {
  tecla.addEventListener("click", () => reproducirSonido(tecla.id));
  console.log("tecla " + tecla.id);
});

// let teclaC = document.getElementById("c")
// function reproducirTeclaC() {
//     let audio = new Audio
//     audio.src = "sonidos-marimba/c.wav"
//     audio.play()
// }
// teclaC.addEventListener("click", () => reproducirTeclaC())
// document.addEventListener("keydown", (event) => {
//     if (event.key === "a") {
//         reproducirTeclaC()
//     }
// })

// let teclaD = document.getElementById("d")
// function reproducirTeclaD() {
//     let audio = new Audio
//     audio.src = "sonidos-marimba/b.wav"
//     audio.play()
// }
// teclaD.addEventListener("click", () => reproducirTeclaD())
// document.addEventListener("keydown", (event) => {
//     if (event.key === "s") {
//         reproducirTeclaD()
//     }
// })
// let teclaE = document.getElementById("e")
// function reproducirTeclaE() {
//     let audio = new Audio
//     audio.src = "sonidos-marimba/c.wav"
//     audio.play()
// }
// teclaE.addEventListener("click", () => reproducirTeclaE())
// document.addEventListener("keydown", (event) => {
//     if (event.key === "d") {
//         reproducirTeclaE()
//     }
// })
// let teclaF = document.getElementById("f")
// function reproducirTeclaF() {
//     let audio = new Audio
//     audio.src = "sonidos-marimba/d.wav"
//     audio.play()
// }
// teclaF.addEventListener("click", () => reproducirTeclaF())
// document.addEventListener("keydown", (event) => {
//     if (event.key === "f") {
//         reproducirTeclaF()
//     }
// })
// let teclaG = document.getElementById("g")
// function reproducirTeclaG() {
//     let audio = new Audio
//     audio.src = "sonidos-marimba/e.wav"
//     audio.play()
// }
// teclaG.addEventListener("click", () => reproducirTeclaG())
// document.addEventListener("keydown", (event) => {
//     if (event.key === "g") {
//         reproducirTeclaG()
//     }
// })
