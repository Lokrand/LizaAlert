const optionsBox = document.querySelectorAll(".sidebar-content__options");
const dropDownTriggerIcon = document.querySelectorAll(".sidebar-content__item-icon");
const dropDownTriggerText = document.querySelectorAll('.sidebar-content__item');
const optionsItem = document.querySelectorAll('.sidebar-content__option-wrapper')

//Открытие содержания при клике на иконку
function openOptionsTriggerIcon(el) {
  const options = el.currentTarget.dataset.path;
  optionsBox.forEach(function () {
    const dropDown = document.querySelector(`[data-target=${options}]`);
    dropDown.classList.toggle('sidebar-content__options_active')
    el.target.classList.toggle('sidebar-content__item-icon_active')
  })
}

dropDownTriggerIcon.forEach(function (item) {
  item.addEventListener('click', openOptionsTriggerIcon)
})

//Открытие содежания при клике на название темы
function openOptionsTriggerText(el) {
  const icon = el.target.nextElementSibling
  const options = el.currentTarget.dataset.path;
  optionsBox.forEach(function () {
    const dropDown = document.querySelector(`[data-target=${options}]`);
    icon.classList.toggle('sidebar-content__item-icon_active');
    dropDown.classList.toggle('sidebar-content__options_active');
  })
}

dropDownTriggerText.forEach(function (item) {
  item.addEventListener('click', openOptionsTriggerText)
})


//Изменение иконок и цвета пунков меню
const title = document.querySelector('.test'); //Здесь будет другой querySelector, в зависимости от вашей верстки
const course = document.querySelector('.course'); //Здесь будет другой querySelector, в зависимости от вашей верстки


// Преобразую NodeList в массив, ищу элемент, чей текст совпадает с текстом в основном блоке,
//меняю его цвет и создаю новый массив от начала до этого элемента
//Немного иная логика будет для блоков "Курс завершён», т.к там название блока не совпадает с пунком содержания,
// но я не стала ее описывать, пока нет конечной верстки

const arrCoursesAll = [...optionsItem];
let arrCoursesCompleted;


arrCoursesAll.forEach(function(item) {

  const optionItemCurrent = item.closest('ul').dataset.target;
  let activeItem;

  if (item.lastElementChild.textContent === title.textContent && optionItemCurrent === course.dataset.path) {
    changeOptionColor(item);
    activeItem = arrCoursesAll.indexOf(item);
    arrCoursesCompleted = arrCoursesAll.slice(0, activeItem);
   }

return arrCoursesCompleted;

})

//Смена иконок от начала содержания до текущего элемента
arrCoursesCompleted.forEach(function(item){
  changeIcon(item);
})


//Функция изменения цвета у текущей темы
function changeOptionColor(el) {
  const icon = el.childNodes[1].lastElementChild;
  const optionText = el.childNodes[3]
  optionText.classList.add('sidebar-content__option_active');
  icon.style.fill = '#F06000';
}


//Функция смены иконки пройденной темы
function changeIcon(el) {
  const icon = el.childNodes[1];
  const iconNew = document.createElement('img')
  iconNew.src = "./images/icon-green.svg"
  iconNew.alt = "Иконка"
  icon.replaceWith(iconNew);
}




