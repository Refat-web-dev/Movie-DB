import { movies } from "./db.js"

let title = document.querySelector(".promo__title")
let descr = document.querySelector(".promo__descr")
let rateIMDB = document.querySelector(".promo__ratings").firstElementChild
let language = document.querySelector(".promo__ratings").lastElementChild

// 1

let adv = document.querySelector('.promo__adv')
let imgs = adv.querySelectorAll('#virus')
let text = adv.querySelector('div')
imgs.forEach(img => {
    img.remove()
    if (adv.childElementCount < 2) {
        text.remove()
    }
})
console.log(imgs);

// tabs

const btns = document.querySelectorAll('.promo__menu-item')
btns.forEach(btn => {
    btn.onclick = () => {
        btns.forEach(btn => btn.classList.remove('promo__menu-item_active'))
        btn.classList.add('promo__menu-item_active')
    }
})

// 2

let drama = document.querySelector('.promo__genre')
drama.innerText = 'Драмма'

// 3

let bg = document.querySelector('.promo__bg')


let promo__interactive_list = document.querySelector(".promo__interactive-list")


reload(movies, promo__interactive_list)

function reload(arr, place) {

    for (let item of arr) {
        let promo__interactive_item = document.createElement("li")
        let delet = document.createElement("div")

        promo__interactive_item.classList.add("promo__interactive-item")
        delet.classList.add("delete")

        promo__interactive_item.innerHTML = (arr.indexOf(item) + 1) + '. ' + item.Title
        promo__interactive_item.style.cursor = 'pointer'

        promo__interactive_item.append(delet)
        place.append(promo__interactive_item)

        drama.innerText = 'name'
        bg.style.background = `url("../img/mars.webp")`
        bg.style.backgroundRepeat = `no-repeat`
        bg.style.backgroundSize = `1000% 1000%`
        title.innerHTML = "title"
        descr.innerHTML = 'description'
        rateIMDB.innerHTML = "IMDb: 0"
        language.innerHTML = "Language: "

        promo__interactive_item.onclick = () => {
            if (arr.includes(item)) {
                drama.innerText = item.Genre
                bg.style.background = `url(${item.Poster})`
                bg.style.backgroundRepeat = `no-repeat`
                bg.style.backgroundSize = `cover`
                title.innerHTML = item.Title
                descr.innerHTML = item.Plot
                rateIMDB.innerHTML = "IMDb: " + item.imdbRating
                language.innerHTML = "Language: " + item.Language
            }
            else {
                drama.innerText = 'name'
                bg.style.background = `url("../img/mars.webp")`
                title.innerHTML = "title"
                descr.innerHTML = 'description'
                rateIMDB.innerHTML = "IMDb: 0"
                language.innerHTML = "Language: "
            }
        }

        delet.onclick = () => {
            arr = arr.filter(el => el.ID !== item.ID)
            delet.parentElement.remove()
            console.log(arr);
        }
    }
}