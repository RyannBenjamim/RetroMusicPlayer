const modalPlayer = document.querySelector('.modal')
const playerBtn = document.querySelector('#player-icon')
const closePlayer = document.querySelector('#player-close')

const modalWpp = document.querySelector('.modal-wallpapers')
const wppBtn = document.querySelector('#wpp-icon')
const closeWpp = document.querySelector('#wallpaper-close')

const modalConfig = document.querySelector('.modal-config')
const configBtn = document.querySelector('#config-icon')
const closeConfig = document.querySelector('#config-close')

const modalSobre = document.querySelector('.modal-sobre')
const sobreBtn = document.querySelector('#sobre-icon')
const closeSobre = document.querySelector('#sobre-close')

const audioTag = document.querySelector('audio')
const progressTag = document.querySelector("progress")
const tempo = document.querySelector(".seconds")

playerBtn.addEventListener('click', () => {
    modalPlayer.style.display = 'flex'
    document.querySelector('#btn-pause').style.display = 'none'
    document.querySelector('#btn-play').style.display = 'flex'
    document.querySelector('#click').play()
})

closePlayer.addEventListener('click', () => {
    modalPlayer.style.display = 'none'
    audioTag.pause()
    audioTag.currentTime = 0
    document.querySelector("progress").style.width = 0
    document.querySelector(".seconds").textContent = '0:00'
    document.querySelector('#click').play()
})

wppBtn.addEventListener('click', () => {
    modalWpp.style.display = 'flex'
    document.querySelector('#click').play()
})

closeWpp.addEventListener('click', () => {
    modalWpp.style.display = 'none'
    document.querySelector('#click').play()
})

configBtn.addEventListener('click', () => {
    modalConfig.style.display = 'flex'
    document.querySelector('#click').play()
})

closeConfig.addEventListener('click', () => {
    modalConfig.style.display = 'none'
    document.querySelector('#click').play()
})

sobreBtn.addEventListener('click', () => {
    modalSobre.style.display = 'flex'
    document.querySelector('#click').play()
})

closeSobre.addEventListener('click', () => {
    modalSobre.style.display = 'none'
    document.querySelector('#click').play()
})