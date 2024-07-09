const API_KEY  = 'QaiarjvvZTcfBKFna7Ry3B8SVut9eUmj'

const newGifBtn = document.getElementById('new-gif-btn')
const img = document.getElementById('gif-img')
const search = document.getElementById('search')

function getImage(){
    let url
    if(search.value === ''){
        url = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=empty`
    }else {
        url = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${search.value}`
    }
    fetch(url)
    .then(res => res.json())
    .then(data => img.src = (data.data.images.original.url))
}

newGifBtn.addEventListener('click', () =>{
    getImage()
})

window.addEventListener('load', () =>{
    getImage()
})