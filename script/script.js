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
  // if (testButton.classList.contains('content__button_active')) {
  //     if (((x&&y)||(x&&z)||(y&&z)||(z&&y&&z))&&document.forms["testSecond"].elements[1].checked) {
  //     testButton.addEventListener('click', () => {
  //       testButton.classList.add('button__hidden');
  //       testRetake.classList.remove('button__hidden');
        // radioLabelSecond.classList.add('radio__label_success-answer');
        // radioLabelSecond.classList.remove('radio__label');
  //       radioLabelFirst.classList.add('radio__label_answer-cross');
  //       radioLabelFirst.classList.remove('radio__label');
        // radioLabelThird.classList.add('radio__label_answer-cross');
        // radioLabelThird.classList.remove('radio__label');
  //       results.classList.add('results__green');
  //       if(x&&y&&z) {
  //         checkboxLabelFirst.classList.add('checkbox__label-success')
  //         checkboxLabelFirst.classList.remove('checkbox__label')
          // checkboxLabelSecond.classList.add('checkbox__label-success')
          // checkboxLabelSecond.classList.remove('checkbox__label')
          // checkboxLabelThird.classList.add('checkbox__label-success')
          // checkboxLabelThird.classList.remove('checkbox__label')
  //       } else if (x&&z) {
  //         checkboxLabelFirst.classList.add('checkbox__label-success')
  //         checkboxLabelFirst.classList.remove('checkbox__label')
  //         checkboxLabelThird.classList.add('checkbox__label-success')
  //         checkboxLabelThird.classList.remove('checkbox__label')
  //       } else if (y&&z) {
  //         checkboxLabelSecond.classList.add('checkbox__label-success')
  //         checkboxLabelSecond.classList.remove('checkbox__label')
  //         checkboxLabelThird.classList.add('checkbox__label-success')
  //         checkboxLabelThird.classList.remove('checkbox__label')
  //       } else if (x&&y) {
  //         checkboxLabelFirst.classList.add('checkbox__label-success')
  //         checkboxLabelFirst.classList.remove('checkbox__label')
  //         checkboxLabelSecond.classList.add('checkbox__label-success')
  //         checkboxLabelSecond.classList.remove('checkbox__label')
  //       }
  //       if (!x) {
  //         checkboxLabelFirst.classList.add('checkbox__label-correct')
  //         checkboxLabelFirst.classList.remove('checkbox__label')
  //       } else if (!y) {
  //         checkboxLabelSecond.classList.add('checkbox__label-correct')
  //         checkboxLabelSecond.classList.remove('checkbox__label')
  //       } else if (!z) {
  //         checkboxLabelThird.classList.add('checkbox__label-correct')
  //         checkboxLabelThird.classList.remove('checkbox__label')
  //       }
  //     })
  //   }
  // }
}
  //конец логики верного ответа


// let form = document.forms.testFirst;
// let check1 = form.elements.checkbox1;

//переменная с текстом % результата
let resultsTitle = document.querySelector('.results__title');
//переменная с первой строкой текста "Отличный результат!" в блоке с результатами
let resultTextOne = document.querySelector('#results_text_one');
//переменная со второй строкой текста в блоке с результатами
let resultTextTwo = document.querySelector('#results_text_two');
//переменная с третьей строкой текста в блоке с результатами
let resultTextThree = document.querySelector('#results_text_three');


//ниже идут функции, которые возвращают иконки для разного состояния чекбоксов

//функция, которая меняет состояние чекбоксов при нажатии только на первый чекбокс
const setAnswerFirstBox = function () {
  checkboxLabelFirst.classList.add('checkbox__label-success')
  checkboxLabelFirst.classList.remove('checkbox__label')
  //тут нужен класс, который поставит второму и третьему чекбоксу иконку галочки

}

//функция, которая меняет состояние чекбоксов при нажатии только на второй чекбокс
const setAnswerSecondBox = function () {
  checkboxLabelSecond.classList.add('checkbox__label-success')
  checkboxLabelSecond.classList.remove('checkbox__label')

  //тут нужен класс, который поставит первому и третьему чекбоксу иконку галочки

}

//функция, которая меняет состояние чекбоксов при нажатии только на третий чекбокс
const setAnswerThirdBox = function () {
  checkboxLabelThird.classList.add('checkbox__label-success')
  checkboxLabelThird.classList.remove('checkbox__label')

  //тут нужен класс, который поставит первому и второму чекбоксу иконку галочки

}

//функция, которая меняет состояние чекбоксов при нажатии на первый и на второй чекбокс
const setAnswerFirstSecondBox = function () {
  checkboxLabelFirst.classList.add('checkbox__label-success')
  checkboxLabelFirst.classList.remove('checkbox__label')
  checkboxLabelSecond.classList.add('checkbox__label-success')
  checkboxLabelSecond.classList.remove('checkbox__label')

  //тут нужен класс, который поставит третьему чекбоксу иконку галочки

}

//функция, которая меняет состояние чекбоксов при нажатии на первый и на третий чекбокс
const setAnswerFirstThirdBox = function () {
  checkboxLabelFirst.classList.add('checkbox__label-success')
  checkboxLabelFirst.classList.remove('checkbox__label')
  checkboxLabelThird.classList.add('checkbox__label-success')
  checkboxLabelThird.classList.remove('checkbox__label')

  //тут нужен класс, который поставит второму чекбоксу иконку галочки

}


//функция, которая меняет состояние чекбоксов при нажатии на второй и на третий чекбокс
const setAnswerSecondThirdBox = function () {
  checkboxLabelSecond.classList.add('checkbox__label-success')
  checkboxLabelSecond.classList.remove('checkbox__label')
  checkboxLabelThird.classList.add('checkbox__label-success')
  checkboxLabelThird.classList.remove('checkbox__label')

  //тут нужен класс, который поставит первому чекбоксу иконку галочки

}

//ниже идут функции, которые возвращают иконки для разного состояния радиокнопок

//функция, которая меняет состояние радиокнопок при нажатии на первую
const setAnswerFirstRadio = function () {
  //тут нужен класс, который добавить красный крестик первой радиокнопке
  // radioLabelFirst.classList.add('radio__label_answer-cross');
  // radioLabelFirst.classList.remove('radio__label');

  //тут нужен класс, который добавит галочку второй радиокнопке
  // radioLabelSecond.classList.add('radio__label_success-answer');
  // radioLabelSecond.classList.remove('radio__label');

  //тут нужен класс, который добавить обычный крестик третьей радиокнопке
  // radioLabelThird.classList.add('radio__label_answer-cross');
  // radioLabelThird.classList.remove('radio__label');
}

//функция, которая меняет состояние радиокнопок при нажатии на вторую
const setAnswerSecondRadio = function () {
  //тут нужен класс, который добавить красный крестик первой радиокнопке
  // radioLabelFirst.classList.add('radio__label_answer-cross');
  // radioLabelFirst.classList.remove('radio__label');

  radioLabelSecond.classList.add('radio__label_success-answer');
  radioLabelSecond.classList.remove('radio__label');

  //тут нужен класс, который добавить крестки третьей радиокнопке
  // radioLabelThird.classList.add('radio__label_answer-cross');
  // radioLabelThird.classList.remove('radio__label');
}


const setAnswerThirdRadio = function () {
  //тут нужен класс, который добавить обычный крестик первой радиокнопке
  // radioLabelFirst.classList.add('radio__label_answer-cross');
  // radioLabelFirst.classList.remove('radio__label');

  //тут нужен класс, который добавит галочку второй радиокнопке
  // radioLabelSecond.classList.add('radio__label_success-answer');
  // radioLabelSecond.classList.remove('radio__label');

  //тут нужен класс, который добавить красный крестик третьей радиокнопке
  // radioLabelThird.classList.add('radio__label_answer-cross');
  // radioLabelThird.classList.remove('radio__label');
}



//функция, которая скрывает кнопку Проверить и открывает кнопку Пересдать
const hideButton = function () {
  testButton.classList.add('button__hidden');
  testRetake.classList.remove('button__hidden');
}

const showButton = function () {
  testButton.classList.remove('button__hidden');
  testRetake.classList.add('button__hidden');
}

const disableAnswer = function () {
  testCheck1.setAttribute("disabled", "disabled");
  testCheck2.setAttribute("disabled", "disabled");
  testCheck3.setAttribute("disabled", "disabled");
  testRadio1.setAttribute("disabled", "disabled");
  testRadio2.setAttribute("disabled", "disabled");
  testRadio3.setAttribute("disabled", "disabled");
}

testButton.addEventListener('click', function () {
  //объявляем переменные для нажатых чекбоксов
  //чтобы использовать в цикле с проверкой нажаты они или нет
  let firstBoxAnswer = testCheck1.checked;
  let secondBoxAnswer = testCheck2.checked;
  let thirdBoxAnswer = testCheck3.checked;

  //объявляем переменные для нажатых радиокнопок
  //чтобы использовать в цикле с проверкой нажаты они или нет
  let firstRadioAnswer = testRadio1.checked
  let secondRadioAnswer = testRadio2.checked
  let thirdRadioAnswer = testRadio3.checked

  //запускаем цикл, который откроет результирующее окошко Сдал\Не сдал
  //цикл такой: (если не нажат второй чекбок или третий и вторая радиокнопка) или (нажаты второй и третий чекбоксы и не нажата вторая радиокнопка), то
  if ((!secondBoxAnswer||!thirdBoxAnswer&&!secondRadioAnswer)||((secondBoxAnswer&&thirdBoxAnswer)&&!secondRadioAnswer)) {
    //отрицательный результат
    results.classList.add('results__red');
    //пишем в поле с текстом % = 33%
    resultsTitle.textContent = '33%';
    //удаляем строку с текстом "Отличный результат!"
    resultTextOne.remove();
    //пишем в первом текстовом поле
    resultTextTwo.textContent = 'К сожалению, вы не набрали проходной балл';
    //пишем во втором текстовом поле
    resultTextThree.textContent = 'Нажмите "Пересдать", чтобы попробовать снова';
    //скрываем кнопку "Проверить" и открываем кнопку "Пересдать"
    hideButton();
    //отключаем возможность нажимать чекбоксы и радиокнопки
    // disableAnswer();

    // тут цикл идёт по нажатым чекбоксам и радиокнопкам, и меняет их состояние
    // состояние берёт из функций выше
      if (firstBoxAnswer&&firstRadioAnswer) {
        setAnswerFirstBox();
        setAnswerFirstRadio();
      } else if (firstBoxAnswer&&secondRadioAnswer) {
        setAnswerFirstBox();
        setAnswerSecondRadio();
      } else if (firstBoxAnswer&&thirdRadioAnswer) {
        setAnswerFirstBox();
        setAnswerThirdRadio();
      } else if (secondBoxAnswer&&firstRadioAnswer) {
        setAnswerSecondBox();
        setAnswerFirstRadio();
      } else if (secondBoxAnswer&&secondRadioAnswer) {
        setAnswerSecondBox();
        setAnswerSecondRadio();
      } else if (secondBoxAnswer&&thirdRadioAnswer) {
        setAnswerSecondBox();
        setAnswerThirdRadio();
      } else if (thirdBoxAnswer&&firstRadioAnswer) {
        setAnswerThirdBox();
        setAnswerFirstRadio();
      } else if (thirdBoxAnswer&&secondRadioAnswer) {
        setAnswerThirdBox();
        setAnswerSecondRadio();
      } else if (thirdBoxAnswer&&thirdRadioAnswer) {
        setAnswerThirdBox();
        setAnswerThirdRadio();
      } else if (firstBoxAnswer&&secondBoxAnswer&&firstRadioAnswer) {
        setAnswerFirstSecondBox();
        setAnswerFirstRadio();
      } else if (firstBoxAnswer&&secondBoxAnswer&&thirdRadioAnswer) {
        setAnswerFirstSecondBox();
        setAnswerThirdRadio();
      } else if (firstBoxAnswer&&thirdBoxAnswer&&firstRadioAnswer) {
        setAnswerFirstThirdBox();
        setAnswerFirstRadio();
      } else if (firstBoxAnswer&&thirdBoxAnswer&&secondRadioAnswer) {
        setAnswerFirstThirdBox();
        setAnswerSecondRadio();
      } else if (firstBoxAnswer&&thirdBoxAnswer&&thirdRadioAnswer) {
        setAnswerFirstThirdBox();
        setAnswerThirdRadio();
      } else if (secondBoxAnswer&&thirdBoxAnswer&&firstRadioAnswer) {
        setAnswerSecondThirdBox();
        setAnswerFirstRadio();
      } else if (secondBoxAnswer&&thirdBoxAnswer&&thirdRadioAnswer) {
        setAnswerSecondThirdBox();
        setAnswerThirdRadio();
      }
  } else {
    //положительный результат
    results.classList.add('results__green');
    //скрываем кнопку "Проверить" и открываем кнопку "Пересдать"
    hideButton();
    //отключаем возможность нажимать чекбоксы и радиокнопки
    // disableAnswer();
  }
  if (secondBoxAnswer&&thirdBoxAnswer&&secondRadioAnswer) {
    setAnswerSecondThirdBox();
    setAnswerSecondRadio();
  }
})


testRetake.addEventListener('click', function () {
  results.classList.remove('results__green');
  results.classList.remove('results__red');
  checkboxLabelFirst.classList.remove('checkbox__label-success');
  checkboxLabelFirst.classList.add('checkbox__label');
  checkboxLabelSecond.classList.remove('checkbox__label-success');
  checkboxLabelSecond.classList.add('checkbox__label');
  checkboxLabelThird.classList.remove('checkbox__label-success');
  checkboxLabelThird.classList.add('checkbox__label');
  radioLabelFirst.classList.remove('radio__label_success-answer');
  radioLabelFirst.classList.add('radio__label');
  radioLabelSecond.classList.remove('radio__label_success-answer');
  radioLabelSecond.classList.add('radio__label');
  radioLabelThird.classList.remove('radio__label_success-answer');
  radioLabelThird.classList.add('radio__label');
  document.forms["testFirst"].reset();
  document.forms["testSecond"].reset();
  showButton();
})





























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

