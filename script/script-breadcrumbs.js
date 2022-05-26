const linkCurrent = document.querySelector('.breadcrumbs__link_current');

// linkCurrent.textContent = 'Видео' //нужно будет прописать в зависимости от того, какая страница открыта
const block = document.querySelector(".content:not(.hidden)")
linkCurrent.textContent = block.querySelector(".content__title").textContent
