const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

//new audio creates a HTML element
let allKeys = [];
let audio = new Audio("t")
const playTune = (key) => {
    audio.src = `tunes-piano/${key}.wav`
    audio.play()

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    //effect on active key 
    clickedKey.classList.add("active")
    //remove it after 150ms
    setTimeout(() => {
        clickedKey.classList.remove("active")
    }, 150)
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key)
    //calling playTune func with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key));
})

const handleVolume = (e) => {
    //passing the range slider value as an audio volume
    audio.volume = e.target.value;
    console.log(e.target.value)

}

//keyboard sounds
const pressedKey = (e) => {
    if (allKeys.includes(e.key)) {
        playTune(e.key)
    } else {
        console.log("Wrong key!")
    }
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);