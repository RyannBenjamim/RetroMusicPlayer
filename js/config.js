const btnClickOn = document.querySelector('.config-btn-clickon')
const btnClickOff = document.querySelector('.config-btn-clickoff')

const btnHoverOn = document.querySelector('.config-btn-hoveron')
const btnHoverOff = document.querySelector('.config-btn-hoveroff')

const clickDefault = localStorage.getItem('click') ?? 1
const hoverDefault = localStorage.getItem('hover') ?? 1

if (clickDefault === "1" || clickDefault === 1) {
    document.querySelector('#click').muted = false
    btnClickOff.classList.remove('Off')
    btnClickOn.classList.add('On')
} else {
    document.querySelector('#click').muted = true
    btnClickOn.classList.remove('On')
    btnClickOff.classList.add('Off')
}

if (hoverDefault === "1" || hoverDefault === 1) {
    document.querySelector('#hover').muted = false
    btnHoverOff.classList.remove('Off')
    btnHoverOn.classList.add('On')
} else {
    document.querySelector('#hover').muted = true
    btnHoverOn.classList.remove('On')
    btnHoverOff.classList.add('Off')
}

// EVENTOS

btnClickOn.addEventListener('click', () => {
    document.querySelector('#click').muted = false
    localStorage.setItem('click', '1')

    btnClickOff.classList.remove('Off')
    btnClickOn.classList.add('On')
    document.querySelector('#click').play()
})

btnClickOff.addEventListener('click', () => {
    document.querySelector('#click').muted = true
    localStorage.setItem('click', '0')

    btnClickOn.classList.remove('On')
    btnClickOff.classList.add('Off')
    document.querySelector('#click').play()
})

btnHoverOn.addEventListener('click', () => {
    document.querySelector('#hover').muted = false
    localStorage.setItem('hover', '1')

    btnHoverOff.classList.remove('Off')
    btnHoverOn.classList.add('On')
    document.querySelector('#click').play()
})

btnHoverOff.addEventListener('click', () => {
    document.querySelector('#hover').muted = true
    localStorage.setItem('hover', '0')

    btnHoverOn.classList.remove('On')
    btnHoverOff.classList.add('Off')
    document.querySelector('#click').play()
})