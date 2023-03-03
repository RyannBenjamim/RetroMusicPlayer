const hoursBox = document.querySelector('.hours')

const getTime = () => {
    const data = new Date()
    if (data.getMinutes() < 10) {
        hoursBox.textContent = `${data.getHours()}:0${data.getMinutes()}`
    } else {
        hoursBox.textContent = `${data.getHours()}:${data.getMinutes()}`
    }
}

setInterval(() => {
    getTime()
}, 1000)

const fade = () => {
    document.querySelector('.wrapper').classList.add('fade')
}

window.addEventListener('load', fade)

document.querySelector('.content img').addEventListener('load', () => {
    document.querySelector('.content .load').style.display = 'none'
})
