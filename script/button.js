const actionPanel = document.querySelector('.action-panel');
const btnReturned = actionPanel.querySelector('.button_returned');
const btnMoved = actionPanel.querySelector('.button_moved');
const btnArrowRight = btnMoved.querySelector('#button__arrow_right');
const cmplCourse = document.querySelector('.completed-course');

// Функция для активной кнопки, при ДОСТАТОЧНОМ количестве балов
function btnMvdActive() {
  btnMoved.removeAttribute('disabled');
  btnMoved.classList.remove('button_moved_disabled');
}

// Функция для не активной кнопки, при НЕ ДОСТАТОЧНОМ количестве балов
function btnMvdDisabled() {
  btnArrowRight.src = "./images/arrow-right-disabled.svg";
  btnMoved.setAttribute('disabled', true);
  btnMoved.classList.add('button_moved_disabled');
}

// Функция для замены Далее/Завершить
function btnLableChange() {
  btnMoved.textContent = 'Завершить';
}

// Функция, которая будет менять класс карточки, чтобы она стала НЕ ВИДИМОЙ
function visibleCard(card) {
  card.classList.add('visible')
  card.classList.remove('hidden')
}

// Функция, которая будет менять класс карточкии, чтобы она стала ВИДИМОЙ
function hiddenCard(card) {
  card.classList.add('hidden')
  card.classList.remove('visible')
}



