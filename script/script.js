const testBut = document.querySelector('#test-button').content;
let cont = document.querySelector('#testButContain');
const userElement = testBut.cloneNode(true);
// userElement.querySelector('.content__button').textContent = 'Показать результат';
cont.append(userElement);
const testCheck1 = document.querySelector('#checkbox_1');
const testCheck2 = document.querySelector('#checkbox_2');
const testCheck3 = document.querySelector('#checkbox_3');
const testRadio1 = document.querySelector('#radio_1');
const testRadio2 = document.querySelector('#radio_2');
const testRadio3 = document.querySelector('#radio_3');
const testButton = document.querySelector('.content__button');
const showResult = () => testButton.classList.toggle('content__button_active');
function ifCurrect() {
  let x = document.forms["testFirst"]["checkbox1"].checked;
  let y = document.forms["testFirst"]["checkbox2"].checked;
  let z = document.forms["testFirst"]["checkbox3"].checked;
  for (let i = 0; i < document.forms["testSecond"].elements.length; i++) {
    if ((x||y||z)&&document.forms["testSecond"].elements[i].checked) showResult()
  }
  if (testButton.classList.contains('content__button_active')) {
    testButton.addEventListener('click', () => {
    testButton.classList.toggle('content__button_active')
  })
  }
}

let form = document.forms.testFirst;
let check1 = form.elements.checkbox1;

































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



