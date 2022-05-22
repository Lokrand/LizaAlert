// Нужна логика для неверного ответа с красным окном + чтоб кнопка пересдать отправляла в начало теста (сбрасывала форму)
const testCheck1 = document.querySelector('#checkbox_1');
const testCheck2 = document.querySelector('#checkbox_2');
const testCheck3 = document.querySelector('#checkbox_3');
const testRadio1 = document.querySelector('#radio_1');
const testRadio2 = document.querySelector('#radio_2');
const testRadio3 = document.querySelector('#radio_3');
const testButton = document.querySelector('.content__button');
const testRetake = document.querySelector('#retakeTestButton');
const checkboxLabelFirst = document.querySelector('#checkboxLabelFirst');
const checkboxLabelSecond = document.querySelector('#checkboxLabelSecond');
const checkboxLabelThird = document.querySelector('#checkboxLabelThird');
const radioLabelFirst = document.querySelector('#radioLabelFirst');
const radioLabelSecond = document.querySelector('#radioLabelSecond');
const radioLabelThird = document.querySelector('#radioLabelThird');
const results = document.querySelector('#results');
// Здесь я проверяю, если в 1-м и 2-м тесте выбран ответ, то загорается кнопка результата
const showResult = () => testButton.classList.toggle('content__button_active');
function ifCurrect() {
  let x = document.forms["testFirst"]["checkbox1"].checked;
  let y = document.forms["testFirst"]["checkbox2"].checked;
  let z = document.forms["testFirst"]["checkbox3"].checked;
  for (let i = 0; i < document.forms["testSecond"].elements.length; i++) {
    if ((x||y||z)&&document.forms["testSecond"].elements[i].checked) {
      showResult()
    }
  }
// Логика для верного ответа,т.е. если в первом тесте выбрано 2 любых или 3 варианта, а во 2-м тесте 2-й вариант, то как в макете стили.
  if (testButton.classList.contains('content__button_active')) {
      if (((x&&y)||(x&&z)||(y&&z)||(z&&y&&z))&&document.forms["testSecond"].elements[1].checked) {
      testButton.addEventListener('click', () => {
        testButton.classList.add('button__hidden');
        testRetake.classList.remove('button__hidden');
        radioLabelSecond.classList.add('radio__label_success-answer');
        radioLabelSecond.classList.remove('radio__label');
        radioLabelFirst.classList.add('radio__label_answer-cross');
        radioLabelFirst.classList.remove('radio__label');
        radioLabelThird.classList.add('radio__label_answer-cross');
        radioLabelThird.classList.remove('radio__label');
        results.classList.add('results__green');
        if(x&&y&&z) {
          checkboxLabelFirst.classList.add('checkbox__label-success')
          checkboxLabelFirst.classList.remove('checkbox__label')
          checkboxLabelSecond.classList.add('checkbox__label-success')
          checkboxLabelSecond.classList.remove('checkbox__label')
          checkboxLabelThird.classList.add('checkbox__label-success')
          checkboxLabelThird.classList.remove('checkbox__label')
        } else if (x&&z) {
          checkboxLabelFirst.classList.add('checkbox__label-success')
          checkboxLabelFirst.classList.remove('checkbox__label')
          checkboxLabelThird.classList.add('checkbox__label-success')
          checkboxLabelThird.classList.remove('checkbox__label')
        } else if (y&&z) {
          checkboxLabelSecond.classList.add('checkbox__label-success')
          checkboxLabelSecond.classList.remove('checkbox__label')
          checkboxLabelThird.classList.add('checkbox__label-success')
          checkboxLabelThird.classList.remove('checkbox__label')
        } else if (x&&y) {
          checkboxLabelFirst.classList.add('checkbox__label-success')
          checkboxLabelFirst.classList.remove('checkbox__label')
          checkboxLabelSecond.classList.add('checkbox__label-success')
          checkboxLabelSecond.classList.remove('checkbox__label')
        }
        if (!x) {
          checkboxLabelFirst.classList.add('checkbox__label-correct')
          checkboxLabelFirst.classList.remove('checkbox__label')
        } else if (!y) {
          checkboxLabelSecond.classList.add('checkbox__label-correct')
          checkboxLabelSecond.classList.remove('checkbox__label')
        } else if (!z) {
          checkboxLabelThird.classList.add('checkbox__label-correct')
          checkboxLabelThird.classList.remove('checkbox__label')
        }
      })
    }
  }
  //конец логики верного ответа
}


// let form = document.forms.testFirst;
// let check1 = form.elements.checkbox1;

































// SideBar //
const iconDropDown = document.querySelectorAll(".sidebar-content__item-icon");
const optionsDropDown = document.querySelectorAll(".sidebar-content__options");
const optionsBox = document.querySelectorAll(".sidebar-content__options");
const dropDownTriggerIcon = document.querySelectorAll(".sidebar-content__item-icon");
const dropDownTriggerText = document.querySelectorAll('.sidebar-content__item');
const optionsItem = document.querySelectorAll('.sidebar-content__link');

//Открытие содержания при клике на иконку
function openOptionsTriggerIcon(el) {
  const options = el.currentTarget.dataset.path;
  optionsBox.forEach(function () {
    const dropDown = document.querySelector(`[data-target=${options}]`);
    dropDown.classList.toggle('sidebar-content__options_active');
    el.target.classList.toggle('sidebar-content__item-icon_active');
  })
}

dropDownTriggerIcon.forEach(function (item) {
  item.addEventListener('click', openOptionsTriggerIcon)
})

//Открытие содежания при клике на название темы
function openOptionsTriggerText(el) {
  const icon = el.target.nextElementSibling;
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


arrCoursesAll.forEach(function (item) {
  const optionItemCurrent = item.closest('ul').dataset.target;
  let activeItem;
  if (item.lastElementChild.textContent === title.textContent && optionItemCurrent === course.dataset.path) {
    changeOptionColor(item);
    activeItem = arrCoursesAll.indexOf(item);
    arrCoursesCompleted = arrCoursesAll.slice(0, activeItem);
  }

  return arrCoursesCompleted;

})



//Функция изменения цвета у текущей темы
function changeOptionColor(el) {
  const icon = el.firstElementChild.childNodes[1];
  const optionText = el.childNodes[3]
  optionText.classList.add('sidebar-content__option_active');
  icon.style.fill = '#F06000';
}

arrCoursesCompleted.forEach(function (item) {
  changeOptionColor(item)
})

//Функция смены иконки пройденной темы
function changeIcon(el) {
  const icon = el.childNodes[1];
  const optionText = el.childNodes[3]
  const iconNew = document.createElement('img')
  iconNew.src = "./images/icon-green.svg"
  iconNew.alt = "Иконка"
  icon.replaceWith(iconNew);
  optionText.classList.remove('sidebar-content__option_active');
}

//Смена иконок от начала содержания до текущего элемента
arrCoursesCompleted.forEach(function (item) {
  changeIcon(item);
})

