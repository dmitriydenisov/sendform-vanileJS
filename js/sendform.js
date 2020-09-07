let formRes = document.getElementById('main-form');
let emailInput = document.getElementById('email');
let nameInput = document.getElementById('name');
let phoneInput = document.getElementById('phone');
let message = document.getElementById('message');
let url = '../php/mail.php';

function submitHandler(e) {
    e.preventDefault();

    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let address = emailInput.value;

    if (reg.test(address) == false) {
        return false;
    } else {
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
            }
        }

        request.open('POST', url);

        let data = new FormData(formRes);
        request.send(data);
        modalClose()
        this.reset();
        return true;
    }
}

formRes.addEventListener('submit', submitHandler)
