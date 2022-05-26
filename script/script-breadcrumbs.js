const linkCurrent = document.querySelector('.breadcrumbs__link_current');

// linkCurrent.textContent = 'Видео' //нужно будет прописать в зависимости от того, какая страница открыта
const updateBreadCrumps = () => {
    const block = document.querySelector(".content:not(.hidden)")
    const text = block.querySelector(".content__title").textContent
    linkCurrent.textContent = text
    if (text === "Курс завершен") {
        // hide text
        document.querySelector("body > div > main > section > ul > li:nth-child(3) > a").hidden = 1
        // hide arrow
        document.querySelector("body > div > main > section > ul > li:nth-child(3) > img").hidden = 1
    }
}
updateBreadCrumps()

const frowardButton = document.querySelector("#button_forward")

