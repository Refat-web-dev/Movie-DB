/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

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
bg.style.background = 'url("./img/bg.jpg")'

bg.style.height = '360px'
bg.style.backgroundPosition = 'top'
bg.style.padding = '107px 0 0 61px'

// deleteEL

let dlt = document.querySelectorAll('.delete')
dlt.forEach(el => {
    el.onclick = () => {
        el.parentElement.remove()
    }
})