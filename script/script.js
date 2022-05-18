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
