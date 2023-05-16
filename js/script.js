import { movies } from "./db.js"


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

// ...

let movie_about = document.querySelector(".movie_about")
let movie_bg = document.querySelector(".movie_bg")

let bg = document.querySelector('.promo__bg')

let title = document.querySelector(".promo__title")
let descr = document.querySelector(".promo__descr")
let rateIMDB = document.querySelector(".promo__ratings").firstElementChild
let language = document.querySelector(".promo__ratings").lastElementChild

let search = document.querySelector("#search")
let search_btn = document.querySelector(".after")

let promo__interactive_list = document.querySelector(".promo__interactive-list")
let promo__menu_list = document.querySelector(".promo__menu-list ul")
let cont = document.querySelector(".container")
let genres = []







search_btn.onclick = () => {
    let val = search.value.toLowerCase().trim()
    let filtered = movies.filter(movie => {
        let title = movie.Title.toLowerCase().trim()
        if (title.includes(val)) {
            return movie
        }
    })
    reload(filtered.sort((a, b) => a.Title > b.Title ? 1 : 0), promo__interactive_list)
}
function reload(arr, place) {
    place.innerHTML = ""

    setMovie(arr[0])

    for (let item of arr) {
        let promo__interactive_item = document.createElement("li")
        let delet = document.createElement("div")

        promo__interactive_item.classList.add("promo__interactive-item")
        promo__interactive_item.classList.add("passive")
        delet.classList.add("delete")

        promo__interactive_item.innerHTML = (arr.indexOf(item) + 1) + '. ' + item.Title
        promo__interactive_item.style.cursor = 'pointer'

        promo__interactive_item.append(delet)
        place.append(promo__interactive_item)

        promo__interactive_item.onclick = () => {
            cont.innerHTML = ""
            setTimeout(() => {
                if (arr.includes(item)) {
                    setMovie(item)
                    movie_about.style.display = "block"
                    setTimeout(() => {
                        movie_about.style.scale = "1"
                        movie_about.style.opacity = "1"
                    }, 300);

                    movie_bg.style.display = "block"
                    setTimeout(() => {
                        movie_bg.style.opacity = "1"
                    }, 300);

                    let wrapper = document.createElement("div")
                    let left_item = document.createElement("div")
                    let left_item_img = document.createElement("img")
                    let right_item = document.createElement("div")
                    let Title_text = document.createElement("p")
                    let Year_text = document.createElement("p")
                    let Rated_text = document.createElement("p")
                    let Released_text = document.createElement("p")
                    let Runtime_text = document.createElement("p")
                    let Genre_text = document.createElement("p")
                    let Director_text = document.createElement("p")
                    let Writer_text = document.createElement("p")
                    let Actors_text = document.createElement("p")
                    let BoxOffice_text = document.createElement("p")
                    let Production_text = document.createElement("p")
                    let Country_text = document.createElement("p")
                    let Title = document.createElement("span")
                    let Year = document.createElement("span")
                    let Rated = document.createElement("span")
                    let Released = document.createElement("span")
                    let Runtime = document.createElement("span")
                    let Genre = document.createElement("span")
                    let Director = document.createElement("span")
                    let Writer = document.createElement("span")
                    let Actors = document.createElement("span")
                    let BoxOffice = document.createElement("span")
                    let Production = document.createElement("span")
                    let Country = document.createElement("span")

                    let movie_rates = document.createElement("div")
                    let tomatos = document.createElement("div")
                    let tomatos_title = document.createElement("p")
                    let tomatos_percent = document.createElement("span")

                    let range = document.createElement("div")
                    let range_fill = document.createElement("div")

                    let star_rating = document.createElement("div")
                    let star_rating_h2 = document.createElement("h2")
                    let star_rating_span = document.createElement("span")
                    let starRatingContainer = document.createElement("div")
                    for (let index = 0; index < 10; index++) {
                        let stars = document.createElement("div")
                        stars.classList.add("stars")
                        starRatingContainer.append(stars)


                    }
                    let fill_stars = +Math.round(item.imdbRating)

                    for (let index = 0; index < fill_stars; index++) {
                        starRatingContainer.children[index].style.backgroundImage = "url(https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-64.png)"
                    }

                    let close_btn = document.createElement("div")

                    wrapper.classList.add("wrapper")
                    left_item.classList.add("left_item")
                    right_item.classList.add("right_item")
                    movie_rates.classList.add("movie_rates")
                    tomatos.classList.add("tomatos")
                    range.classList.add("range")
                    range_fill.classList.add("range_fill")
                    star_rating.classList.add("star_rating")
                    close_btn.classList.add("close_btn")
                    close_btn.classList.add("close")
                    starRatingContainer.classList.add("starRatingContainer")

                    left_item_img.src = item.Poster

                    Title.innerHTML = item.Title
                    Year.innerHTML = item.Year
                    Rated.innerHTML = item.Rated
                    Released.innerHTML = item.Released
                    Runtime.innerHTML = item.Runtime
                    Genre.innerHTML = item.Genre
                    Director.innerHTML = item.Director
                    Writer.innerHTML = item.Writer
                    Actors.innerHTML = item.Actors
                    BoxOffice.innerHTML = item.BoxOffice
                    Production.innerHTML = item.Production
                    Country.innerHTML = item.Country

                    Title_text.innerHTML = "Title: "
                    Year_text.innerHTML = "Year: "
                    Rated_text.innerHTML = "Rated: "
                    Released_text.innerHTML = "Released: "
                    Runtime_text.innerHTML = "Runtime: "
                    Genre_text.innerHTML = "Genre: "
                    Director_text.innerHTML = "Director: "
                    Writer_text.innerHTML = "Writer: "
                    Actors_text.innerHTML = "Actors: "
                    BoxOffice_text.innerHTML = "BoxOffice: "
                    Production_text.innerHTML = "Production: "
                    Country_text.innerHTML = "Country: "

                    tomatos_title.innerHTML = "Rotten Tomatoes: "
                    tomatos_percent.id = "percent"
                    tomatos_percent.innerHTML = item.Ratings[1].Value
                    star_rating_h2.innerHTML = "IMDB: "
                    star_rating_span.id = "idb_value"
                    range_fill.style.width = item.Ratings[1].Value
                    star_rating_span.innerHTML = item.imdbRating
                    close_btn.innerHTML = 'x'

                    cont.append(wrapper, movie_rates, close_btn)
                    wrapper.append(left_item, right_item)
                    left_item.append(left_item_img)
                    right_item.append(Title_text,
                        Year_text,
                        Rated_text,
                        Released_text,
                        Runtime_text,
                        Genre_text,
                        Director_text,
                        Writer_text,
                        Actors_text,
                        BoxOffice_text,
                        Production_text,
                        Country_text
                    )

                    Title_text.append(Title)
                    Year_text.append(Year)
                    Rated_text.append(Rated)
                    Released_text.append(Released)
                    Runtime_text.append(Runtime)
                    Genre_text.append(Genre)
                    Director_text.append(Director)
                    Writer_text.append(Writer)
                    Actors_text.append(Actors)
                    BoxOffice_text.append(BoxOffice)
                    Production_text.append(Production)
                    Country_text.append(Country)

                    movie_rates.append(tomatos, star_rating)
                    tomatos.append(tomatos_title, range)
                    tomatos_title.append(tomatos_percent)
                    range.append(range_fill)
                    star_rating.append(star_rating_h2, starRatingContainer)
                    star_rating_h2.append(star_rating_span);
                    console.log(starRatingContainer);


                    let rotten = +item.Ratings[1].Value.split("%").join("")
                    if (rotten >= 60) {
                        tomatos.style.backgroundImage = "url(https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-fresh.149b5e8adc3.svg)"
                        range.style.background = "gray"
                        range_fill.style.background = "orange"
                    }
                    let close_btns = document.querySelectorAll(".close")


                    close_btns.forEach(close => {
                        close.onclick = () => {
                            movie_about.style.scale = "0"
                            movie_about.style.opacity = "0"
                            setTimeout(() => {
                                movie_about.style.display = "none"
                            }, 300);

                            movie_bg.style.opacity = "0"
                            setTimeout(() => {
                                movie_bg.style.display = "none"
                            }, 300);
                        }
                    })

                } else {
                    setMovie(arr[0])
                    movie_about.style.display = "none"
                    setTimeout(() => {
                        movie_about.style.scale = "0"
                        movie_about.style.opacity = "0"
                    }, 300);

                    movie_bg.style.display = "none"
                    setTimeout(() => {
                        movie_bg.style.opacity = "0"
                    }, 300);
                }
                let promo__interactive_items = promo__interactive_list.querySelectorAll("li")
                promo__interactive_items.forEach(el => el.classList.add("passive"))
                promo__interactive_item.classList.remove("passive")
            }, 300);
        }
        delet.onclick = () => {
            arr = arr.filter(el => el.ID !== item.ID)
            delet.parentElement.remove()
            console.log(arr);
        }

        genres.push(item.Genre)
    }
    genres = [...new Set(genres)]


}


function setMovie(item) {
    drama.innerText = item.Genre
    bg.style.background = `url(${item.Poster})`
    bg.style.backgroundRepeat = `no-repeat`
    bg.style.backgroundSize = `cover`
    title.innerHTML = item.Title
    descr.innerHTML = item.Plot
    rateIMDB.innerHTML = "IMDb: " + item.imdbRating
    language.innerHTML = "Language: " + item.Language
}

reload(movies.sort((a, b) => a.Title > b.Title ? 1 : -1), promo__interactive_list)

for (let tab of genres) {
    let menu_tab = document.createElement('li');
    let tab_link = document.createElement('a');

    tab_link.classList.add('promo__menu-item');


    tab_link.innerHTML = tab;
    tab_link.style.cursor = "pointer";

    menu_tab.append(tab_link);
    promo__menu_list.append(menu_tab);

    tab_link.onclick = () => {

        let tab_links = document.querySelectorAll('.promo__menu-item')
        tab_links.forEach(tab => tab.classList.remove('promo__menu-item_active'))
        tab_link.classList.add('promo__menu-item_active')
        let includGenres = movies.filter(el => {
            if (tab_link.innerHTML === el.Genre) {
                return el
            }
        })

        reload(includGenres, promo__interactive_list)
    }
};

let show_all = document.createElement('h1')

show_all.innerHTML = 'show all'
show_all.classList.add("show_all")

promo__menu_list.after(show_all)

show_all.onclick = () => {
    reload(movies, promo__interactive_list)
}


