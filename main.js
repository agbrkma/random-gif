const API_KEY  = 'QaiarjvvZTcfBKFna7Ry3B8SVut9eUmj'

const newGifBtn = document.getElementById('new-gif-btn')
const img = document.getElementById('gif-img')

function getImage(){
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=skateboarding`)
    .then(res => res.json())
    .then(data => img.src = (data.data.images.original.url))
}

newGifBtn.addEventListener('click', () =>{
    getImage()
})

window.addEventListener('load', () =>{
    getImage()
})