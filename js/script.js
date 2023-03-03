const btnVoltar = document.querySelector('#btn-voltar')
const btnPlay = document.querySelector('#btn-play')
const btnPause = document.querySelector('#btn-pause')
const btnPassar = document.querySelector('#btn-passar')
const btnAumentarVol = document.querySelector('#btn-volume-up')
const btnDiminuirVol = document.querySelector('#btn-volume-down')

const img = document.querySelector('.content img')
const title = document.querySelector('.content .title')
const artist = document.querySelector('.content .artist')
const progress = document.querySelector("progress")
const tempoDecorrido = document.querySelector(".seconds")
const musicDuration = document.querySelector('.music-duration')
const clickAudio = document.querySelector('#click')
const audio = document.querySelector('#song')
let indexMusica = 0


const songs = [
    {
        name: 'Ela mora no meu peito',
        autor: 'Jorge Ben / Remix by GabrielMzero',
        img: 'videos/giphy08.gif',
        musica: 'musics/musica01.mpeg'
    },
    {
        name: 'Wave',
        autor: 'Tom Jobim / Remix by GabrielMzero',
        img: 'videos/giphy09.gif',
        musica: 'musics/musica02.mp3'
    },
    {
        name: 'Primavera',
        autor: 'Tim Maia / Remix by OFF',
        img: 'videos/giphy18.gif',
        musica: 'musics/musica03.mp3'
    },
    {
        name: 'Shootout',
        autor: 'Izzamuzzic',
        img: 'videos/giphy14.gif',
        musica: 'musics/musica04.mp3'
    },
    {
        name: 'Black out Days',
        autor: 'toastool',
        img: 'videos/giphy10.gif',
        musica: 'musics/musica05.mpeg'
    },
    {
        name: 'Chove chuva',
        autor: 'Jorge Ben Jor / Remix by Sun',
        img: 'videos/giphy13.gif',
        musica: 'musics/musica06.mp3'
    },
    {
        name: 'Ela partiu',
        autor: 'Tim Maia / Remix by GabrielMzero',
        img: 'videos/giphy20.gif',
        musica: 'musics/musica07.mp3'
    },
    {
        name: 'METAMORPHOSIS',
        autor: 'Interworld',
        img: 'videos/giphy22.gif',
        musica: 'musics/musica08.mp3'
    },
]

function renderizarMusica() {
    img.src = songs[indexMusica].img
    title.textContent = songs[indexMusica].name
    artist.textContent = songs[indexMusica].autor
    audio.src = songs[indexMusica].musica
    audio.addEventListener("loadeddata", () => {
        musicDuration.textContent = segundosParaMinutos(Math.floor(audio.duration))
    })
}

function play() {
    audio.play()
    clickAudio.play()
}

function pause() {
    audio.pause()
    clickAudio.play()
}

function btnPlayShow() {
    btnPause.style.display = 'none'
    btnPlay.style.display = 'flex'
}

function btnPauseShow() {
    btnPlay.style.display = 'none'
    btnPause.style.display = 'flex'
}

function passar() {
    if (indexMusica === songs.length - 1) indexMusica = 0
    else indexMusica++

    renderizarMusica()
    play()
    btnPauseShow()
}

function voltar() {
    if (indexMusica === 0) indexMusica = songs.length - 1
    else indexMusica--

    renderizarMusica()
    play()
    btnPauseShow()
}

function aumentarVolume(){
    if( audio.volume < 1)  audio.volume += 0.1;
    clickAudio.play()
}

function diminuirVolume(){
    if( audio.volume > 0)  audio.volume -= 0.1;
    clickAudio.play()
}

function atualizarBarra() {
    progress.style.width = Math.floor((audio.currentTime / audio.duration) * 100) + "%";
}

function atualizarTempoDecorrido() {
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(audio.currentTime));
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60)
    let campoSegundos = segundos % 60
    if (campoSegundos < 10) campoSegundos = `0${campoSegundos}`

    return `${campoMinutos}:${campoSegundos}`
}

btnPlay.addEventListener('click', () => {
    play()
    btnPauseShow()
})

btnPause.addEventListener('click', () => {
    pause()
    btnPlayShow()
})

btnPassar.addEventListener('click', () => {
    passar()
    clickAudio.play()
})

btnVoltar.addEventListener('click', () => {
    voltar()
    clickAudio.play()
})

btnAumentarVol.addEventListener('click', aumentarVolume)
btnDiminuirVol.addEventListener('click', diminuirVolume)

audio.addEventListener("timeupdate", () => {
    atualizarBarra()
    atualizarTempoDecorrido()
    if (audio.currentTime === audio.duration) passar()
})

renderizarMusica()

