const content = document.querySelector('.wallpapers-box .content')

const wallpapers = [
    {image: 'videos/giphy13.gif'},
    {image: 'videos/giphy12.gif'},
    {image: 'videos/giphy03.gif'},
    {image: 'videos/giphy04.gif'},
    {image: 'videos/giphy05.gif'},
    {image: 'videos/giphy06.gif'},
    {image: 'videos/giphy07.gif'},
    {image: 'videos/giphy08.gif'},
    {image: 'videos/giphy14.gif'},
    {image: 'videos/giphy19.gif'},
    {image: 'videos/giphy10.gif'},
    {image: 'videos/giphy24.gif'},
]

const initialBg = localStorage.getItem("bgGif") ?? wallpapers[0].image
document.querySelector('body').style.backgroundImage = `url(${initialBg})`

wallpapers.forEach((item) => {
    const img = document.createElement('img')
    img.src = item.image
    img.classList.add('wallpaper-img')

    img.addEventListener('click', () => {
        document.querySelector('body').style.backgroundImage = `url(${item.image})`
        localStorage.setItem("bgGif", item.image)
        document.querySelector('#click').play()
    })

    img.addEventListener('mouseenter', () => {
        document.querySelector('#hover').play()
    })

    content.appendChild(img)
})

