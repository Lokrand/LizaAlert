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
    if ((x||y||z)&&document.forms["testSecond"].elements[i].checked) showResult()
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

let intervalId

function openContentOptions (e) {

  const options = e.currentTarget.dataset.path;

  optionsDropDown.forEach(function () {
    const dropDown = document.querySelector(`[data-target=${options}]`);
    if (!dropDown.classList.contains('open')) {
      dropDown.classList.add('sidebar-content__options_active')
      e.target.classList.add('sidebar-content__item-icon_active')
      intervalId = setTimeout(() => {
        dropDown.classList.add('open')
      }, 0)

    }

    if (dropDown.classList.contains('open')) {
      clearInterval(intervalId)
      dropDown.classList.remove('sidebar-content__options_active')
      e.target.classList.remove('sidebar-content__item-icon_active')
      intervalId = setTimeout(() => {
        dropDown.classList.remove('open')
      }, 0)
    }

  });

}

iconDropDown.forEach(function (item) {
item.addEventListener('click', openContentOptions)
})



