let button = document.querySelector('a')
let audio = document.querySelector('audio')
let isPlaying = false
let hearts = document.children[0].lastElementChild.firstElementChild.childNodes
let arr = [
    hearts[1],
    hearts[3],
    hearts[5]
]
let intervalId

function ani() {
    clearInterval(intervalId)
    intervalId = setInterval(() => {
        setTimeout(() => {
            hearts[1].classList.add('heartAnimate')
        }, 300)
        setTimeout(() => {
            hearts[1].classList.remove('heartAnimate')
        }, 1000)
        setTimeout(() => {
            hearts[3].classList.add('heartAnimate')
        }, 150)
        setTimeout(() => {
            hearts[3].classList.remove('heartAnimate')
        }, 1000)
        hearts[5].classList.add('heartAnimate')
        setTimeout(() => {
            hearts[5].classList.remove('heartAnimate')
        }, 1000)
    }, 2000)
}

button.onclick = () => {
    if (isPlaying) {
        isPlaying = false
        audio.pause()
        clearInterval(intervalId)
    } else {
        isPlaying = true
        audio.play()
        ani()
    }
}