//маска для вводе телефона
$("#phone").mask("+7(999)999-99-99");

//управление модальными окнами
function modalOpen() {
    document.querySelector('.modal').classList.add('modal--active')
}

function modalClose() {
    document.querySelector('.modal').classList.remove('modal--active')
}

document.querySelector('[data-modal]').addEventListener('click', () => {
    modalOpen()
})

document.querySelector(".modal").addEventListener("click", function (event) {
    if (event.target === this) {
        modalClose();
    }
});